// SkillVerse AI Future Learning Ecosystem - Profile and Settings Controller

const BADGES_DATABASE = [
  { id: "core_dev", title: "SkillVerse Recruit", desc: "Select your first career domain path.", icon: "fa-solid fa-graduation-cap" },
  { id: "code_warrior", title: "Code Warrior", desc: "Complete 1 practice coding challenge.", icon: "fa-solid fa-code" },
  { id: "code_champion", title: "Sandbox Champion", desc: "Solve 2 coding challenges in playground.", icon: "fa-solid fa-trophy" },
  { id: "interview_novice", title: "First Screening", desc: "Complete a mock interview simulation.", icon: "fa-solid fa-user-tie" },
  { id: "interview_ace", title: "Interview Ace", desc: "Achieve an average score of 8.0+ in interviews.", icon: "fa-solid fa-medal" },
  { id: "resume_verified", title: "ATS Ready", desc: "Verify profile match rate of 80% or higher.", icon: "fa-solid fa-file-circle-check" }
];

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeDomainKey(key) {
  if (!key) return "software_engineer";
  const normalized = key.toLowerCase().trim();
  const validKeys = [
    "software_engineer", "data_scientist", "ai_ml", "cybersecurity", "cloud",
    "ui_ux", "business_analyst", "product_manager", "mechanical_design",
    "civil_services", "psu", "entrepreneur", "data_analyst"
  ];
  if (validKeys.includes(normalized)) return normalized;
  const mapping = {
    "frontend_developer": "software_engineer",
    "backend_developer": "software_engineer",
    "fullstack": "software_engineer",
    "full_stack": "software_engineer",
    "full_stack_developer": "software_engineer",
    "ai_engineer": "ai_ml",
    "ai/ml_engineer": "ai_ml",
    "cyber_security": "cybersecurity",
    "cloud_computing": "cloud",
    "devops": "cloud",
    "devops_engineer": "cloud",
    "ui/ux_designer": "ui_ux"
  };
  return mapping?.[normalized] || "software_engineer";
}

document.addEventListener("DOMContentLoaded", function() {
  const user = Auth.getCurrentUser();
  if (!user) return; // Guard redirect handled by auth.js

  if (user.currentDomain) {
    const normalized = normalizeDomainKey(user.currentDomain);
    if (normalized !== user.currentDomain) {
      user.currentDomain = normalized;
      Auth.updateCurrentUser({ currentDomain: normalized });
    }
  }

  // Initialize Theme
  initTheme();

  // Populate UI
  populateUI(user);

  // Render SVG Analytics Chart
  renderAnalyticsChart(user);

  // Render Badges
  renderBadges(user);

  // Form Submit Handler
  const editForm = document.getElementById("profile-edit-form");
  const editAlert = document.getElementById("profile-edit-alert");
  const editAlertText = document.getElementById("profile-edit-alert-text");

  editForm.addEventListener("submit", function(e) {
    e.preventDefault();
    editAlert.classList.add("hidden");

    const name = document.getElementById("edit-name").value.trim();
    const college = document.getElementById("edit-college").value.trim();
    const branch = document.getElementById("edit-branch").value;
    const year = document.getElementById("edit-year").value;
    const cgpa = parseFloat(document.getElementById("edit-cgpa").value);
    const domain = document.getElementById("edit-domain").value;
    const level = document.getElementById("edit-level").value;
    const goal = document.getElementById("edit-goal").value;

    if (!name || !college) {
      editAlertText.textContent = "Please fill in all required credentials.";
      editAlert.classList.remove("hidden");
      return;
    }

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 100) {
      editAlertText.textContent = "Please enter a valid CGPA or Percentage rating (0 to 100).";
      editAlert.classList.remove("hidden");
      return;
    }

    // Prepare updates
    const updates = {
      name,
      college,
      branch,
      year,
      cgpa,
      currentDomain: domain,
      knowledgeLevel: level,
      careerGoal: goal
    };

    // If domain has changed, we should trigger the SkillVerse Recruit badge!
    const badges = user.unlockedBadges || [];
    if (!badges.includes("core_dev")) {
      badges.push("core_dev");
      updates.unlockedBadges = badges;
      showToast("Achievement Unlocked: SkillVerse Recruit!", "success");
    }

    // Save Updates
    const success = Auth.updateCurrentUser(updates);
    if (success) {
      showToast("Neural link updated. Profile settings synced.", "success");
      // Re-populate and re-render
      const updatedUser = Auth.getCurrentUser();
      populateUI(updatedUser);
      renderAnalyticsChart(updatedUser);
      renderBadges(updatedUser);
    } else {
      editAlertText.textContent = "Failed to synchronize profile. Session lost.";
      editAlert.classList.remove("hidden");
    }
  });

  // Logout Button
  document.getElementById("btn-logout").addEventListener("click", function() {
    Auth.logOut();
  });

  // Hard Reset Button
  document.getElementById("btn-hard-reset").addEventListener("click", function() {
    if (confirm("WARNING: Are you absolutely sure you want to hard reset your SkillVerse Terminal progress? This deletes all milestones, XP, and badges, and resets onboarding configs.")) {
      Auth.updateCurrentUser({
        xp: 0,
        streak: 1,
        completedMilestones: [],
        challengesSolved: [],
        unlockedBadges: [],
        onboardingCompleted: false
      });
      showToast("Progress logs wiped. Redirecting to onboarding...", "warning");
      setTimeout(() => {
        window.location.href = "onboarding.html";
      }, 1500);
    }
  });
});

// Helper to format domain name
function formatDomainName(domain) {
  if (!domain) return "Unassigned Track";
  const mapping = {
    software_engineer: "Software Developer / Software Engineer",
    data_scientist: "Data Scientist",
    ai_ml: "AI / ML Engineer",
    cybersecurity: "Cybersecurity Analyst",
    cloud: "Cloud Engineer",
    ui_ux: "UI/UX Designer",
    business_analyst: "Business Analyst",
    product_manager: "Product Manager",
    mechanical_design: "Mechanical Design Engineer",
    civil_services: "Civil Services (IAS/IPS/IFS)",
    psu: "Public Sector Undertakings (PSUs)",
    entrepreneur: "Entrepreneur / Startup Founder"
  };
  return mapping?.[domain] || domain;
}

// Populate UI values
function populateUI(user) {
  // Static labels
  document.getElementById("side-student-name").textContent = user.name || "Student Name";
  document.getElementById("side-target-role").textContent = formatDomainName(user.currentDomain);
  document.getElementById("stat-streak").textContent = user.streak || 1;
  document.getElementById("stat-xp").textContent = user.xp || 0;
  document.getElementById("stat-milestones").textContent = (user.completedMilestones || []).length;

  document.getElementById("detail-college").textContent = user.college || "Unspecified Institution";
  document.getElementById("detail-college").title = user.college || "";
  document.getElementById("detail-branch").textContent = user.branch || "Unspecified Department";
  document.getElementById("detail-year").textContent = user.year || "Unspecified Year";
  document.getElementById("detail-cgpa").textContent = user.cgpa ? user.cgpa.toFixed(2) : "8.00";
  document.getElementById("detail-level").textContent = user.knowledgeLevel || "Beginner";

  // Header badges
  document.getElementById("global-streak-count").textContent = user.streak || 1;
  document.getElementById("global-xp-text").textContent = (user.xp || 0) + " XP";

  // Form Inputs
  document.getElementById("edit-name").value = user.name || "";
  document.getElementById("edit-college").value = user.college || "";
  document.getElementById("edit-branch").value = user.branch || "Computer Science";
  document.getElementById("edit-year").value = user.year || "3rd Year";
  document.getElementById("edit-cgpa").value = user.cgpa || 8.0;
  document.getElementById("edit-domain").value = user.currentDomain || "data_analyst";
  document.getElementById("edit-level").value = user.knowledgeLevel || "beginner";
  document.getElementById("edit-goal").value = user.careerGoal || "placement";
}

// Draw the SVG Activity consistency graph
function renderAnalyticsChart(user) {
  const container = document.getElementById("profile-analytics-chart");
  if (!container) return;
  container.textContent = "";

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Calculate relative dummy consistency values based on XP and milestones
  const solvedCount = (user.challengesSolved || []).length;
  const milestonesCount = (user.completedMilestones || []).length;
  
  const baseValue = 15 + (milestonesCount * 6) + (solvedCount * 14);
  const activityData = [
    Math.min(100, Math.max(15, baseValue - 20)), // Mon
    Math.min(100, Math.max(10, baseValue - 10)), // Tue
    Math.min(100, Math.max(5, baseValue - 5)),   // Wed
    Math.min(100, Math.max(30, baseValue + 15)), // Thu
    Math.min(100, Math.max(20, baseValue)),      // Fri
    Math.min(100, Math.max(40, baseValue + 30)), // Sat
    Math.min(100, Math.max(10, baseValue - 25))  // Sun
  ];

  // SVG dimensions
  const width = 500;
  const height = 150;
  const padding = 20;

  // Create SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.overflow = "visible";

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const barWidth = 35;
  const gap = (chartWidth - barWidth * days.length) / (days.length - 1);

  // Render Grid lines
  for (let i = 0; i <= 4; i++) {
    const yVal = padding + (chartHeight / 4) * i;
    const gridLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    gridLine.setAttribute("x1", String(padding));
    gridLine.setAttribute("y1", String(yVal));
    gridLine.setAttribute("x2", String(width - padding));
    gridLine.setAttribute("y2", String(yVal));
    gridLine.setAttribute("stroke", "var(--border-panel)");
    gridLine.setAttribute("stroke-width", "1");
    gridLine.setAttribute("stroke-dasharray", "4");
    svg.appendChild(gridLine);
  }

  // Render Bars
  activityData.forEach((percent, idx) => {
    const x = padding + idx * (barWidth + gap);
    const barHeight = (percent / 100) * chartHeight;
    const y = height - padding - barHeight;

    // Create container group for hover interaction
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.style.cursor = "pointer";

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(barWidth));
    rect.setAttribute("height", String(barHeight));
    rect.setAttribute("rx", "6");
    rect.setAttribute("fill", "url(#barGradient)");
    rect.setAttribute("filter", "drop-shadow(0 0 4px var(--secondary-glow))");
    
    // Smooth initial transition animation
    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animate.setAttribute("attributeName", "height");
    animate.setAttribute("from", "0");
    animate.setAttribute("to", String(barHeight));
    animate.setAttribute("dur", "0.8s");
    animate.setAttribute("fill", "freeze");
    rect.appendChild(animate);

    const animateY = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateY.setAttribute("attributeName", "y");
    animateY.setAttribute("from", String(height - padding));
    animateY.setAttribute("to", String(y));
    animateY.setAttribute("dur", "0.8s");
    animateY.setAttribute("fill", "freeze");
    rect.appendChild(animateY);

    // Label Text for value
    const valText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    valText.setAttribute("x", String(x + barWidth / 2));
    valText.setAttribute("y", String(y - 6));
    valText.setAttribute("text-anchor", "middle");
    valText.setAttribute("fill", "var(--text-main)");
    valText.setAttribute("font-size", "9");
    valText.setAttribute("font-weight", "700");
    valText.textContent = `${percent}%`;

    // Day Text
    const dayText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    dayText.setAttribute("x", String(x + barWidth / 2));
    dayText.setAttribute("y", String(height - 4));
    dayText.setAttribute("text-anchor", "middle");
    dayText.setAttribute("fill", "var(--text-sub)");
    dayText.setAttribute("font-size", "10");
    dayText.setAttribute("font-weight", "600");
    dayText.textContent = days?.[idx];

    group.appendChild(rect);
    group.appendChild(valText);
    group.appendChild(dayText);

    // Hover effect
    group.addEventListener("mouseenter", () => {
      rect.setAttribute("fill", "var(--secondary)");
    });
    group.addEventListener("mouseleave", () => {
      rect.setAttribute("fill", "url(#barGradient)");
    });

    svg.appendChild(group);
  });

  // Define Linear Gradient
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const linearGrad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  linearGrad.setAttribute("id", "barGradient");
  linearGrad.setAttribute("x1", "0%");
  linearGrad.setAttribute("y1", "0%");
  linearGrad.setAttribute("x2", "0%");
  linearGrad.setAttribute("y2", "100%");

  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("stop-color", "var(--secondary)");

  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "100%");
  stop2.setAttribute("stop-color", "var(--primary)");

  linearGrad.appendChild(stop1);
  linearGrad.appendChild(stop2);
  defs.appendChild(linearGrad);
  svg.appendChild(defs);

  container.appendChild(svg);
}

// Render badges showroom
function renderBadges(user) {
  const showroom = document.getElementById("profile-badges-showroom");
  if (!showroom) return;
  showroom.textContent = "";

  const unlocked = user.unlockedBadges || [];

  BADGES_DATABASE.forEach(badge => {
    const isUnlocked = unlocked.includes(badge.id);
    
    const card = document.createElement("div");
    card.className = `achievement-badge-card ${isUnlocked ? 'unlocked' : ''}`;
    card.setAttribute("title", isUnlocked ? "Achievement Logged" : "Credentials Locked");

    card.innerHTML = `
      <div class="badge-icon-wrap">
        <i class="${badge.icon}"></i>
      </div>
      <h5>${escapeHTML(badge.title)}</h5>
      <p>${escapeHTML(badge.desc)}</p>
    `;

    showroom.appendChild(card);
  });
}

// Initialize theme toggle and loading
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  
  toggle.addEventListener("click", function() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("skillverse_theme", nextTheme);
    
    // Update theme toggle icon
    const icon = toggle.querySelector("i");
    if (nextTheme === "dark") {
      icon.className = "fa-solid fa-moon";
    } else {
      icon.className = "fa-solid fa-sun";
    }
    
    showToast(`Visual spectrum set to ${nextTheme} mode.`, "info");
  });

  // Set toggle icon initially
  const activeTheme = document.documentElement.getAttribute("data-theme");
  const icon = toggle.querySelector("i");
  if (activeTheme === "dark") {
    icon.className = "fa-solid fa-moon";
  } else {
    icon.className = "fa-solid fa-sun";
  }
}

// Show custom toast notification
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconClass = "fa-solid fa-circle-info";
  if (type === "success") iconClass = "fa-solid fa-circle-check";
  if (type === "warning") iconClass = "fa-solid fa-circle-exclamation";
  
  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${escapeHTML(message)}</span>
  `;

  // Click to close
  toast.addEventListener("click", () => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => toast.remove(), 300);
  });

  // Auto close
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.add("toast-fadeout");
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);

  container.appendChild(toast);
}

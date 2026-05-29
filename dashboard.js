// SkillVerse AI Future Learning Ecosystem - Dashboard Controller

// Global Application State (linked to auth.js user session)
const AppState = {
  studentName: "Student",
  knowledgeLevel: "beginner",
  skills: [],
  interests: [],
  careerGoal: "placement",
  currentDomain: null,
  completedMilestones: [],
  activeTab: "roadmap",
  resumeText: "",
  challengesSolved: [],
  activeChallengeId: null,
  theme: "dark",
  streak: 1,
  xp: 0,
  unlockedBadges: [],
  interviewScores: []
};

// Platforms metadata for dynamic rendering of cards
const STUDY_PLATFORMS = {
  "Harvard CS50": {
    url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    desc: "Gold standard computer science foundational curriculum.",
    icon: "fa-solid fa-graduation-cap"
  },
  "freeCodeCamp": {
    url: "https://www.freecodecamp.org",
    desc: "Interactive coding platform with thousands of free hours.",
    icon: "fa-solid fa-code"
  },
  "GeeksforGeeks": {
    url: "https://www.geeksforgeeks.org",
    desc: "Excellent repository of computer science tutorials and DSA practice.",
    icon: "fa-solid fa-book-open"
  },
  "Udemy (Free Tier)": {
    url: "https://www.udemy.com/courses/free/",
    desc: "Hundreds of free high-quality tech skills tutorials.",
    icon: "fa-solid fa-laptop-file"
  },
  "NPTEL": {
    url: "https://nptel.ac.in",
    desc: "IIT/IISc verified courses under the Ministry of Education.",
    icon: "fa-solid fa-building-columns"
  },
  "Coursera (Audit Mode)": {
    url: "https://www.coursera.org",
    desc: "Audit premium university specializations without paying.",
    icon: "fa-solid fa-school"
  },
  "Kaggle Learn": {
    url: "https://www.kaggle.com/learn",
    desc: "Hands-on micro-courses for data science and AI models.",
    icon: "fa-solid fa-chart-line"
  },
  "fast.ai": {
    url: "https://www.fast.ai",
    desc: "Practical deep learning courses for coders without high math.",
    icon: "fa-solid fa-brain"
  },
  "Coursera (DeepLearning.AI)": {
    url: "https://www.coursera.org/specializations/deep-learning",
    desc: "Andrew Ng's world-class neural networks curriculum.",
    icon: "fa-solid fa-microchip"
  },
  "PortSwigger Web Academy": {
    url: "https://portswigger.net/web-security",
    desc: "Free web security academy from creators of Burp Suite.",
    icon: "fa-solid fa-shield-halved"
  },
  "TryHackMe": {
    url: "https://tryhackme.com",
    desc: "Hands-on cyber security training through virtual labs.",
    icon: "fa-solid fa-terminal"
  },
  "Hack The Box": {
    url: "https://www.hackthebox.com",
    desc: "Gamified hacking playground and security scenarios.",
    icon: "fa-solid fa-user-secret"
  },
  "AWS Skill Builder": {
    url: "https://aws.amazon.com/training/digital/",
    desc: "600+ free digital courses straight from AWS engineers.",
    icon: "fa-brands fa-aws"
  },
  "TryHackMe Cloud Labs": {
    url: "https://tryhackme.com/path/outline/cloudsecurity",
    desc: "Practical AWS/Azure cloud security training labs.",
    icon: "fa-solid fa-cloud"
  },
  "Figma Learning Portal": {
    url: "https://help.figma.com/hc/en-us/categories/360002051614-Figma-Academy",
    desc: "Learn UI/UX design components and prototyping tools.",
    icon: "fa-solid fa-bezier-curve"
  },
  "Interaction Design Foundation (Audit)": {
    url: "https://www.interaction-design.org",
    desc: "World-class human-computer interaction guides.",
    icon: "fa-solid fa-compass-drafting"
  },
  "Product School Guides": {
    url: "https://productschool.com/resources/",
    desc: "Industry-standard templates and books for product managers.",
    icon: "fa-solid fa-lightbulb"
  },
  "Autodesk Learning Portal": {
    url: "https://academy.autodesk.com",
    desc: "Free 3D CAD/CAM designs modeling tutorials.",
    icon: "fa-solid fa-drafting-table"
  },
  "SolidWorks Tutorials": {
    url: "https://www.solidworks.com/support/learning-resources",
    desc: "Mechanical product design simulations guidelines.",
    icon: "fa-solid fa-gears"
  },
  "Mrunal.org": {
    url: "https://mrunal.org",
    desc: "Foundational civil services economics and syllabus guides.",
    icon: "fa-solid fa-landmark"
  },
  "PIB.gov.in": {
    url: "https://pib.gov.in",
    desc: "Official government policy releases and current affairs tracker.",
    icon: "fa-solid fa-newspaper"
  },
  "InsightsOnIndia": {
    url: "https://www.insightsonindia.com",
    desc: "Daily current affairs, mock answers writing feedback.",
    icon: "fa-solid fa-pen-nib"
  },
  "VisionIAS (Free Resources)": {
    url: "https://www.visionias.in/resources/",
    desc: "Monthly current affairs magazines and topper booklets.",
    icon: "fa-solid fa-book"
  },
  "Unacademy (Free YouTube)": {
    url: "https://www.youtube.com/@UnacademyUPSC",
    desc: "Free lectures covering history, polity, and GS prep.",
    icon: "fa-solid fa-video"
  },
  "NPTEL Portal": {
    url: "https://nptel.ac.in",
    desc: "IIT/IISc verified courses under the Ministry of Education.",
    icon: "fa-solid fa-building-columns"
  },
  "GATE Academy (Free YouTube)": {
    url: "https://www.youtube.com/@gateacademy",
    desc: "Core engineering subjects conceptual explanations.",
    icon: "fa-solid fa-display"
  },
  "Y Combinator Startup School": {
    url: "https://www.startupschool.org",
    desc: "Core startup curriculum taught by YC partners and founders.",
    icon: "fa-solid fa-rocket"
  }
};

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

// Sync app state back to localStorage user database
function saveStateToLocalStorage() {
  Auth.updateCurrentUser({
    skills: AppState.skills,
    completedMilestones: AppState.completedMilestones,
    challengesSolved: AppState.challengesSolved,
    unlockedBadges: AppState.unlockedBadges,
    xp: AppState.xp,
    resumeText: AppState.resumeText,
    currentDomain: AppState.currentDomain,
    interviewScores: AppState.interviewScores
  });
}

// Load app state from current user session
function loadStateFromLocalStorage() {
  const user = Auth.getCurrentUser();
  if (user) {
    AppState.studentName = user.name || "Student";
    AppState.knowledgeLevel = user.knowledgeLevel || "beginner";
    AppState.skills = user.skills || [];
    AppState.interests = user.interests || [];
    AppState.careerGoal = user.careerGoal || "placement";
    AppState.currentDomain = normalizeDomainKey(user.currentDomain || "software_engineer");
    AppState.completedMilestones = user.completedMilestones || [];
    AppState.challengesSolved = user.challengesSolved || [];
    AppState.unlockedBadges = user.unlockedBadges || [];
    AppState.streak = user.streak || 1;
    AppState.xp = user.xp || 0;
    AppState.resumeText = user.resumeText || "";
    AppState.interviewScores = user.interviewScores || [];
    
    // Auto-save back normalized domain if different
    if (AppState.currentDomain !== user.currentDomain) {
      saveStateToLocalStorage();
    }
  }
}

// Helper to escape HTML characters securely
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Initial Bootstrapper
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  initTheme();
  setupEventListeners();
  
  // Initialize current user dashboard variables
  document.getElementById("user-badge-name").textContent = AppState.studentName;
  document.getElementById("user-badge-level").textContent = capitalize(AppState.knowledgeLevel);
  document.getElementById("global-streak-count").textContent = String(AppState.streak);
  document.getElementById("global-xp-text").textContent = `${AppState.xp} XP`;
  
  if (AppState.currentDomain) {
    selectDomain(AppState.currentDomain, true);
  } else {
    // If somehow domain is not set, force onboarding
    window.location.href = "onboarding.html";
  }
  
  // Switch to initial active tab
  switchTab(AppState.activeTab);
});

// Toast Notifications Helper
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconClass = "fa-solid fa-circle-info";
  if (type === "success") iconClass = "fa-solid fa-circle-check";
  if (type === "warning") iconClass = "fa-solid fa-circle-exclamation";
  
  toast.innerHTML = `<i class="${iconClass}"></i> <span>${escapeHTML(message)}</span>`;
  
  toast.addEventListener("click", () => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  // Auto-remove toast after 4 seconds
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.add("toast-fadeout");
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}

// Theme Management
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("skillverse_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  AppState.theme = savedTheme;
  updateThemeIcon();

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    AppState.theme = newTheme;
    localStorage.setItem("skillverse_theme", newTheme);
    updateThemeIcon();
    showToast(`Switched theme to ${newTheme} mode.`, "info");
  });
}

function updateThemeIcon() {
  const icon = document.querySelector("#theme-toggle i");
  if (icon) {
    icon.className = AppState.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Dashboard Sidebar Navigation tabs
  const tabBtns = document.querySelectorAll(".tab-nav-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      if (tabId && tabId !== "profile") {
        switchTab(tabId);
      }
    });
  });

  // Resume Scorecard Matcher
  const scanBtn = document.getElementById("btn-scan-resume");
  if (scanBtn) {
    scanBtn.addEventListener("click", () => {
      const textInput = document.getElementById("resume-text-input");
      const text = textInput ? textInput.value.trim() : "";
      if (!text) {
        showToast("Please paste your resume text to analyze.", "warning");
        return;
      }
      triggerResumeParsing(text);
    });
  }
  // Chatbot Send Message
  document.getElementById("btn-send-message").addEventListener("click", sendUserMessage);
  document.getElementById("chat-user-message").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendUserMessage();
    }
  });

  // Quick prompt chips click listener
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("prompt-chip")) {
      const prompt = e.target.textContent;
      const input = document.getElementById("chat-user-message");
      if (input) {
        input.value = prompt;
        sendUserMessage();
      }
    }
  });

  // Code editor reset, run & submit buttons
  document.getElementById("btn-reset-code").addEventListener("click", resetPlaygroundCode);
  document.getElementById("btn-run-code").addEventListener("click", runPlaygroundCode);
  document.getElementById("btn-submit-code").addEventListener("click", submitPlaygroundVerification);
  const langSelect = document.getElementById("playground-lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", updateCodeEditorTemplate);
  }

  // Planner daily/weekly toggle buttons
  const plannerToggles = document.querySelectorAll(".planner-toggle");
  plannerToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      plannerToggles.forEach(t => t.classList.remove("active"));
      toggle.classList.add("active");
      
      const view = toggle.getAttribute("data-view");
      if (view === "weekly") {
        document.getElementById("planner-weekly-view").classList.add("active");
        document.getElementById("planner-daily-view").classList.remove("active");
      } else {
        document.getElementById("planner-weekly-view").classList.remove("active");
        document.getElementById("planner-daily-view").classList.add("active");
      }
    });
  });

  // Toggle Briefing Panel
  const toggleBriefingBtn = document.getElementById("btn-toggle-briefing");
  if (toggleBriefingBtn) {
    toggleBriefingBtn.addEventListener("click", () => {
      const container = document.getElementById("briefing-content-container");
      const icon = document.getElementById("briefing-toggle-icon");
      if (container.classList.contains("hidden")) {
        container.classList.remove("hidden");
        icon.innerHTML = `<i class="fa-solid fa-chevron-up"></i> Collapse Guide`;
      } else {
        container.classList.add("hidden");
        icon.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Expand Guide`;
      }
    });
  }

  // Interview Simulator Events
  const diffSelect = document.getElementById("interview-difficulty-select");
  if (diffSelect) {
    diffSelect.addEventListener("change", initInterviewSimulator);
  }
  const submitAnswerBtn = document.getElementById("btn-submit-interview-answer");
  if (submitAnswerBtn) {
    submitAnswerBtn.addEventListener("click", submitInterviewAnswer);
  }
  const nextQuestionBtn = document.getElementById("btn-next-interview-question");
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener("click", () => {
      if (activeInterviewQuestions.length === 0) return;
      const nextIdx = (currentInterviewQuestionIndex + 1) % activeInterviewQuestions.length;
      loadInterviewQuestion(nextIdx);
    });
  }
}

// Select career path, execute adaptivity calculations
function selectDomain(domainKey, silentMode = false) {
  AppState.currentDomain = domainKey;
  
  const domainData = CAREER_DOMAINS?.[domainKey];
  let skippedP1 = false;
  let skippedP2 = false;
  let alertWords = [];

  // Adaptivity Logic based on knowledge level
  if (AppState.knowledgeLevel === "advanced") {
    skippedP1 = true;
    skippedP2 = true;
    alertWords = ["Phase 1 (Beginner)", "Phase 2 (Intermediate)"];

    // Auto check milestones for phase 1 & 2
    domainData?.phases?.[0]?.tasks?.forEach(t => {
      if (!AppState.completedMilestones.includes(t.id)) AppState.completedMilestones.push(t.id);
    });
    domainData?.phases?.[1]?.tasks?.forEach(t => {
      if (!AppState.completedMilestones.includes(t.id)) AppState.completedMilestones.push(t.id);
    });

    // Populate skill profile tags silently
    domainData?.phases?.[0]?.skillsCovered?.forEach(s => addSkillTagSilent(s));
    domainData?.phases?.[1]?.skillsCovered?.forEach(s => addSkillTagSilent(s));

  } else if (AppState.knowledgeLevel === "intermediate") {
    skippedP1 = true;
    alertWords = ["Phase 1 (Beginner)"];

    domainData?.phases?.[0]?.tasks?.forEach(t => {
      if (!AppState.completedMilestones.includes(t.id)) AppState.completedMilestones.push(t.id);
    });
    domainData?.phases?.[0]?.skillsCovered?.forEach(s => addSkillTagSilent(s));

  } else {
    // Beginner precheck milestones matching skills
    const matched = [];
    domainData?.phases?.[0]?.tasks?.forEach(task => {
      AppState.skills.forEach(skill => {
        if (task.title.toLowerCase().includes(skill.toLowerCase())) {
          if (!AppState.completedMilestones.includes(task.id)) {
            AppState.completedMilestones.push(task.id);
            matched.push(skill);
          }
        }
      });
    });
    if (matched.length > 0) {
      alertWords = [[...new Set(matched)].join(", ") + " milestones"];
    }
  }

  // Setup UI Alert Banner
  const alertBanner = document.getElementById("adaptive-skills-notification");
  if (alertWords.length > 0) {
    alertBanner.classList.remove("hidden");
    document.getElementById("detected-skills-list").textContent = alertWords.join(" & ");
    if (!silentMode) {
      showToast("SkillVerse Personalization Engine restructured your curriculum phases.", "success");
    }
  } else {
    alertBanner.classList.add("hidden");
  }

  // Set static text descriptors
  document.getElementById("sidebar-domain-title").textContent = domainData?.title || "";
  document.getElementById("roadmap-path-title").textContent = `${domainData?.title || ""} Career Path`;
  document.getElementById("roadmap-time").textContent = domainData?.timeEstimate || "";
  document.getElementById("roadmap-language").textContent = domainData?.firstLanguage || "";
  document.getElementById("roadmap-domain-desc").textContent = domainData?.description || "";
  const resumeTargetDomain = document.getElementById("resume-target-domain");
  if (resumeTargetDomain) {
    resumeTargetDomain.textContent = domainData?.title || "";
  }

  // Render Core Concepts
  const conceptsContainer = document.getElementById("roadmap-concepts-list");
  if (conceptsContainer) {
    conceptsContainer.textContent = "";
    domainData?.concepts?.forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      conceptsContainer.appendChild(li);
    });
  }

  // Render Required Tools
  const toolsContainer = document.getElementById("roadmap-tools-list");
  if (toolsContainer) {
    toolsContainer.textContent = "";
    domainData?.tools?.forEach(t => {
      const span = document.createElement("span");
      span.className = "tool-badge animate-pulse";
      span.textContent = t;
      toolsContainer.appendChild(span);
    });
  }

  // Dynamic Sidebar Icon Class toggle
  let sidebarIconClass = "fa-solid fa-code";
  if (domainKey === "software_engineer") sidebarIconClass = "fa-solid fa-laptop-code";
  else if (domainKey === "data_scientist") sidebarIconClass = "fa-solid fa-chart-line";
  else if (domainKey === "ai_ml") sidebarIconClass = "fa-solid fa-brain";
  else if (domainKey === "cybersecurity") sidebarIconClass = "fa-solid fa-shield-halved";
  else if (domainKey === "cloud") sidebarIconClass = "fa-solid fa-cloud";
  else if (domainKey === "ui_ux") sidebarIconClass = "fa-solid fa-bezier-curve";
  else if (domainKey === "business_analyst") sidebarIconClass = "fa-solid fa-briefcase";
  else if (domainKey === "product_manager") sidebarIconClass = "fa-solid fa-lightbulb";
  else if (domainKey === "mechanical_design") sidebarIconClass = "fa-solid fa-gears";
  else if (domainKey === "civil_services") sidebarIconClass = "fa-solid fa-building-columns";
  else if (domainKey === "psu") sidebarIconClass = "fa-solid fa-industry";
  else if (domainKey === "entrepreneur") sidebarIconClass = "fa-solid fa-rocket";

  const sideIconBox = document.getElementById("sidebar-domain-icon");
  sideIconBox.textContent = "";
  const sideIcon = document.createElement("i");
  sideIcon.className = sidebarIconClass;
  sideIconBox.appendChild(sideIcon);

  // Initialize modules
  renderSidebarChecklist();
  renderRoadmapTimeline();
  renderStudyPlanner(skippedP1, skippedP2);
  initChatbot();
  initPlayground();
  updateProgressTracker();
  updateResumeScoreWidget();
  renderOpportunities(domainKey);
  renderAIMentorGuidance();
  renderAIMentorBriefing(domainData);
  initInterviewSimulator();

  saveStateToLocalStorage();
}

function addSkillTagSilent(name) {
  const standard = formatSkillName(name.trim());
  if (!AppState.skills.includes(standard)) {
    AppState.skills.push(standard);
  }
}

// Tab navigation controller
function switchTab(tabId) {
  AppState.activeTab = tabId;
  saveStateToLocalStorage();

  document.querySelectorAll(".tab-nav-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  
  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) {
    targetPane.classList.add("active");
  }

  // Scroll chat messages to bottom on chat open
  if (tabId === "mentor-chat") {
    const scrollBox = document.getElementById("chat-messages-container");
    if (scrollBox) scrollBox.scrollTop = scrollBox.scrollHeight;
  }
}

// XP Progression manager
function addXP(points) {
  const oldLevel = Math.floor(AppState.xp / 500) + 1;
  AppState.xp += points;
  const newLevel = Math.floor(AppState.xp / 500) + 1;

  document.getElementById("global-xp-text").textContent = `${AppState.xp} XP`;
  saveStateToLocalStorage();

  showToast(`Earned +${points} XP!`, "success");

  // Level Up
  if (newLevel > oldLevel) {
    showToast(`LEVEL UP! You reached Level ${newLevel}!`, "success");
  }
  updateProgressTracker();
}

// Progress metrics calculations
function updateProgressTracker() {
  const domainData = CAREER_DOMAINS?.[AppState.currentDomain];
  let totalTasks = 0;
  domainData?.phases?.forEach(p => totalTasks += p?.tasks?.length || 0);

  const completed = AppState.completedMilestones.length;
  const percent = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;

  document.getElementById("overall-progress-text").textContent = `${percent}%`;
  document.getElementById("overall-progress-bar").style.width = `${percent}%`;

  // Update Sidebar Level / XP
  const currentLevel = Math.floor(AppState.xp / 500) + 1;
  const levelXP = AppState.xp % 500;
  const levelPercent = Math.round((levelXP / 500) * 100);

  document.getElementById("sidebar-xp-level").textContent = String(currentLevel);
  document.getElementById("sidebar-xp-text").textContent = `${levelXP} / 500 XP`;
  document.getElementById("sidebar-xp-progress").style.width = `${levelPercent}%`;

  // Update check states
  document.querySelectorAll(".checklist-item").forEach(item => {
    const tId = item.getAttribute("data-task-id");
    const input = item.querySelector("input");
    if (AppState.completedMilestones.includes(tId)) {
      item.classList.add("done");
      if (input) input.checked = true;
    } else {
      item.classList.remove("done");
      if (input) input.checked = false;
    }
  });

  document.querySelectorAll(".task-item").forEach(item => {
    const tId = item.getAttribute("data-task-id");
    const input = item.querySelector("input");
    if (AppState.completedMilestones.includes(tId)) {
      item.classList.add("checked");
      if (input) input.checked = true;
    } else {
      item.classList.remove("checked");
      if (input) input.checked = false;
    }
  });
}

function toggleMilestone(taskId) {
  if (AppState.completedMilestones.includes(taskId)) {
    AppState.completedMilestones = AppState.completedMilestones.filter(id => id !== taskId);
    saveStateToLocalStorage();
  } else {
    AppState.completedMilestones.push(taskId);
    addXP(50); // awards +50 XP
    saveStateToLocalStorage();
  }
  updateProgressTracker();
  renderRoadmapTimeline();
}

// Generate Checkpoint checklist in sidebar
function renderSidebarChecklist() {
  const container = document.getElementById("sidebar-checklist-items");
  container.textContent = "";

  const domainData = CAREER_DOMAINS?.[AppState.currentDomain];
  domainData?.phases?.forEach(phase => {
    phase?.tasks?.forEach(task => {
      const item = document.createElement("div");
      item.className = "checklist-item";
      item.setAttribute("data-task-id", task.id);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `side-chk-${task.id}`;
      checkbox.checked = AppState.completedMilestones.includes(task.id);
      
      checkbox.addEventListener("change", () => {
        toggleMilestone(task.id);
      });

      const label = document.createElement("label");
      label.setAttribute("for", `side-chk-${task.id}`);
      label.textContent = task.title;

      item.appendChild(checkbox);
      item.appendChild(label);
      container.appendChild(item);
    });
  });
  updateProgressTracker();
}

// Render dynamic interactive timeline checkpoints
function renderRoadmapTimeline() {
  const container = document.getElementById("roadmap-timeline-steps");
  container.textContent = "";

  const domainData = CAREER_DOMAINS?.[AppState.currentDomain];
  domainData?.phases?.forEach((phase, pIdx) => {
    const card = document.createElement("div");
    
    // Class names logic based on completions
    let cardStatus = "glass-panel timeline-card";
    const allTaskIds = phase.tasks.map(t => t.id);
    const completedCount = allTaskIds.filter(id => AppState.completedMilestones.includes(id)).length;
    
    if (completedCount === allTaskIds.length && allTaskIds.length > 0) {
      cardStatus += " completed";
    } else if (pIdx === 0 || (pIdx > 0 && isPreviousPhaseCompleted(pIdx))) {
      cardStatus += " active";
    }

    card.className = cardStatus;

    card.innerHTML = `
      <div class="timeline-card-header">
        <h4>Phase ${pIdx + 1}: ${escapeHTML(phase.title)}</h4>
        <span class="timeline-time"><i class="fa-solid fa-clock"></i> ${escapeHTML(phase.timeEstimate || '1 Month')}</span>
      </div>
      <p class="timeline-card-desc">${escapeHTML(phase.description)}</p>
      
      <div class="timeline-card-details">
        <div class="card-tasks-col">
          <h5>Tasks checklist</h5>
          <div class="card-tasks-list">
            ${phase.tasks.map(task => `
              <div class="task-item ${AppState.completedMilestones.includes(task.id) ? 'checked' : ''}" data-task-id="${task.id}">
                <input type="checkbox" id="task-chk-${task.id}" ${AppState.completedMilestones.includes(task.id) ? 'checked' : ''}>
                <label for="task-chk-${task.id}"><strong>${escapeHTML(task.title)}</strong>${task.description ? ' - ' + escapeHTML(task.description) : ''}</label>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="card-projects-col">
          <h5>Milestone Projects</h5>
          <div class="card-projects-list">
            ${phase.projects.map(proj => `
              <div class="project-item">
                <h6>${escapeHTML(proj.title)}</h6>
                <p>${escapeHTML(proj.description || proj.desc || "No description available.")}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    // Listeners for timeline task checkboxes
    card.querySelectorAll(".task-item").forEach(item => {
      const taskId = item.getAttribute("data-task-id");
      
      item.querySelector("input").addEventListener("change", () => {
        toggleMilestone(taskId);
      });
      
      item.querySelector("label").addEventListener("click", (e) => {
        e.preventDefault(); // prevent double toggle
        toggleMilestone(taskId);
      });
    });

    container.appendChild(card);
  });
}

function isPreviousPhaseCompleted(phaseIndex) {
  const phases = CAREER_DOMAINS?.[AppState.currentDomain]?.phases;
  if (!phases || phaseIndex === 0) return true;
  
  const prevPhase = phases[phaseIndex - 1];
  return prevPhase.tasks.every(t => AppState.completedMilestones.includes(t.id));
}

// Weekly Study planner content populator
function renderStudyPlanner(skippedP1, skippedP2) {
  const container = document.getElementById("weekly-plan-cards");
  container.textContent = "";

  const domainData = CAREER_DOMAINS?.[AppState.currentDomain];
  domainData?.weeklyMilestones?.forEach(week => {
    // Check if phase is skipped
    const isSkipped = (week.phase === 1 && skippedP1) || (week.phase === 2 && skippedP2);
    
    const card = document.createElement("div");
    card.className = "weekly-card glass-panel";
    if (isSkipped) {
      card.style.opacity = "0.55";
      card.style.background = "rgba(255, 255, 255, 0.01)";
    }

    card.innerHTML = `
      <div class="weekly-card-header">
        <h4>${escapeHTML(week.title)}</h4>
        <span class="weekly-num">Week ${escapeHTML(week.week)} ${isSkipped ? '(SKIPPED)' : ''}</span>
      </div>
      <p>${escapeHTML(week.desc)}</p>
      <div class="weekly-topics">
        ${week.topics.map(t => `
          <div class="weekly-topic-item"><i class="fa-solid fa-circle-chevron-right"></i> <span>${escapeHTML(t)}</span></div>
        `).join("")}
      </div>
    `;
    container.appendChild(card);
  });

  // Daily schedule checklists
  const dailyContainer = document.getElementById("daily-plan-items");
  dailyContainer.textContent = "";

  const dailySchedules = [
    { time: "09:00 AM", title: "Conceptual Reading / Video Lecture", desc: "Study core documentations and design patterns. Keep notes of syntax variables." },
    { time: "11:30 AM", title: "Hands-on Code Practice", desc: "Solve active challenge console playgrounds. Code algorithms or database queries manually." },
    { time: "03:00 PM", title: "Milestone Project Coding", desc: "Build primary SaaS portfolio projects. Add features, commit files, and document readmes." },
    { time: "06:00 PM", title: "Mentorship Chat Review", desc: "Review task blocks with Mentor AI and schedule mock screenings." }
  ];

  dailySchedules.forEach(sched => {
    const item = document.createElement("div");
    item.className = "schedule-item";
    item.innerHTML = `
      <div class="sched-marker"></div>
      <div class="sched-time">${escapeHTML(sched.time)}</div>
      <div class="sched-details">
        <h4>${escapeHTML(sched.title)}</h4>
        <p>${escapeHTML(sched.desc)}</p>
      </div>
    `;
    dailyContainer.appendChild(item);
  });

  // Render dynamic daily strategy plan
  const activePhases = domainData?.phases || [];
  let currentTask = null;
  let activePhaseTitle = "Phase 1";
  for (let i = 0; i < activePhases.length; i++) {
    currentTask = activePhases[i].tasks.find(t => !AppState.completedMilestones.includes(t.id));
    if (currentTask) {
      activePhaseTitle = activePhases[i].title;
      break;
    }
  }

  const dailyTextEl = document.getElementById("mentor-daily-plan-text");
  if (dailyTextEl) {
    let text = "";
    if (!currentTask) {
      text = `All roadmap milestones checked! Outstanding progress. Move to the <strong>Challenge Playground</strong> to write code or the <strong>Resume Scorecard</strong> tab to take a mock placement screening.`;
    } else {
      const level = AppState.knowledgeLevel || "beginner";
      if (level === "beginner") {
        text = `Welcome to your daily dashboard! As an absolute <strong>Beginner</strong>, you should spend <strong>3 hours today</strong> focusing on your active checkpoint: <strong>"${escapeHTML(currentTask.title)}"</strong> in ${escapeHTML(activePhaseTitle)}.
        <br><br>
        <strong>Step 1 (Videos):</strong> Spend 1 hour watching tutorials on <strong>${escapeHTML(domainData.youtubeChannels?.[0]?.name || 'recommended YouTube picks')}</strong> to clarify syntax models.
        <br>
        <strong>Step 2 (Practice):</strong> Log into <strong>${escapeHTML(domainData.practicePlatforms?.[0]?.name || 'practice platforms')}</strong> for 1 hour of sandbox testing.
        <br>
        <strong>Step 3 (Projects):</strong> Review the guidelines for <strong>"${escapeHTML(domainData.phases?.[0]?.projects?.[0]?.title || 'Phase 1 Project')}"</strong> and sketch initial modules for 1 hour.`;
      } else {
        // Intermediate or Advanced
        text = `Daily check-in active. As an <strong>${level.toUpperCase()}</strong> student, your roadmap skips core introductions. Spend <strong>2-3 hours today</strong> focusing on your active checkpoint: <strong>"${escapeHTML(currentTask.title)}"</strong> in ${escapeHTML(activePhaseTitle)}.
        <br><br>
        <strong>Daily Action Item:</strong> Build advanced structures in your projects (e.g. <strong>"${escapeHTML(domainData.phases?.[domainData.phases.length - 1]?.projects?.[0]?.title || 'Advanced Project')}"</strong>).
        <br>
        <strong>Placement Checklist:</strong> Optimize your resume text by including keywords: <em>${escapeHTML(domainData.skills.slice(0, 4).join(", "))}</em>. Participate in <strong>${escapeHTML(domainData.opportunities?.[0]?.title || 'hackathons')}</strong>.`;
      }
    }
    dailyTextEl.innerHTML = text;
  }

  // Populate Recommendations lists via modern card grids
  renderFreeStudyResources(domainData);
}

function renderFreeStudyResources(domainData) {
  const platList = document.getElementById("planner-platforms-list");
  if (platList) {
    platList.textContent = "";
    domainData?.freePlatforms?.forEach(p => {
      const meta = STUDY_PLATFORMS?.[p] || {
        url: "https://www.google.com/search?q=" + encodeURIComponent(p),
        desc: "High quality free career learning portal.",
        icon: "fa-solid fa-graduation-cap"
      };
      
      const card = document.createElement("a");
      card.href = meta.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = "platform-card-new";
      card.innerHTML = `
        <div class="card-icon">
          <i class="${meta.icon}"></i>
        </div>
        <div class="card-info">
          <h5>${escapeHTML(p)}</h5>
          <p>${escapeHTML(meta.desc)}</p>
        </div>
      `;
      platList.appendChild(card);
    });
  }

  const ytList = document.getElementById("planner-youtube-list");
  if (ytList) {
    ytList.textContent = "";
    domainData?.youtubeChannels?.forEach(y => {
      const card = document.createElement("a");
      card.href = y.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = "youtube-card-new";
      card.innerHTML = `
        <div class="card-icon">
          <i class="fa-brands fa-youtube" style="color: #ef4444;"></i>
        </div>
        <div class="card-info">
          <h5>${escapeHTML(y.name)}</h5>
          <p>${escapeHTML(y.desc)}</p>
        </div>
      `;
      ytList.appendChild(card);
    });
  }
}

// AI Mentor Chatbot implementation
// Multi-Language Starter Code Templates
const LANG_TEMPLATES = {
  javascript: `// JavaScript Playground\nfunction main() {\n    console.log("Hello SkillVerse!");\n}\nmain();`,
  python: `# Python Playground\ndef main():\n    print("Hello SkillVerse!")\n\nif __name__ == "__main__":\n    main()`,
  html: `<!-- HTML/CSS Preview -->\n<div class="card">\n    <h1>Hello SkillVerse</h1>\n    <p>Live preview editor</p>\n</div>\n<style>\n.card {\n    padding: 20px;\n    background: linear-gradient(135deg, #3B82F6, #8B5CF6);\n    color: white;\n    border-radius: 8px;\n    text-align: center;\n    font-family: sans-serif;\n}\n</style>`,
  sql: `-- SQL Sandbox Playground\nSELECT * FROM students;\n-- Try querying: employees, courses, enrollments`,
  java: `// Java Playground\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello SkillVerse World!");\n    }\n}`,
  c: `// C Playground\n#include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}`,
  cpp: `// C++ Playground\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World!" << endl;\n    return 0;\n}`,
  typescript: `// TypeScript Playground\nconst greeting: string = "Hello SkillVerse!";\nconsole.log(greeting);`,
  php: `<?php\n// PHP Playground\necho "Hello SkillVerse!";\n?>`,
  go: `// Go Playground\npackage main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello World!")\n}`,
  rust: `// Rust Playground\nfn main() {\n    println!("Hello World!");\n}`
};

// Markdown Formatter Utility
function formatMarkdown(text) {
  let escaped = escapeHTML(text);

  // Match code blocks: ```lang\ncode\n```
  const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
  escaped = escaped.replace(codeBlockRegex, (match, lang, code) => {
    const language = (lang || 'code').trim();
    const snippet = (code || '').trim();
    return `<div class="chat-code-block-container">
      <div class="chat-code-block-header">
        <span class="lang-tag">${language}</span>
        <button class="btn-copy-code"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre><code class="language-${language}">${snippet}</code></pre>
    </div>`;
  });

  // Inline code: `code`
  escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings
  escaped = escaped.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  escaped = escaped.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  escaped = escaped.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold text
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic text
  escaped = escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Lists
  escaped = escaped.replace(/^\* (.*$)/gim, '<li>$1</li>');
  escaped = escaped.replace(/^- (.*$)/gim, '<li>$1</li>');
  escaped = escaped.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  
  escaped = escaped.replace(/\n/g, '<br>');

  return escaped;
}

// Copy Code Clipboard Listener
document.addEventListener("click", function(e) {
  if (e.target && (e.target.classList.contains("btn-copy-code") || e.target.closest(".btn-copy-code"))) {
    const btn = e.target.classList.contains("btn-copy-code") ? e.target : e.target.closest(".btn-copy-code");
    const container = btn.closest(".chat-code-block-container");
    const codeElement = container.querySelector("pre code");
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          btn.innerHTML = originalHTML;
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy code: ", err);
      });
    }
  }
});

// Chatbot Initialization
function initChatbot() {
  const messagesBox = document.getElementById("chat-messages-container");
  if (!messagesBox) return;
  messagesBox.textContent = "";

  const specialty = CAREER_DOMAINS?.[AppState.currentDomain]?.mentorSpecialty || "Full Stack Engineering";
  document.getElementById("chat-mentor-name").textContent = "SkillVerse AI Assistant";
  document.getElementById("chat-mentor-specialty").textContent = `Specialty: ${specialty}`;

  // Restore history
  const historyStr = localStorage.getItem("skillverse_chat_history");
  if (historyStr) {
    try {
      const history = JSON.parse(historyStr);
      if (history && history.length > 0) {
        history.forEach(msg => appendChatBubble(msg.text, msg.sender, true));
        return;
      }
    } catch (e) {
      console.error("Error loading chat history:", e);
    }
  }

  // Initial welcome message
  const welcomeText = `Hello! I am **SkillVerse AI Assistant**, your universal coding and career mentor. I have loaded your roadmap checkpoints.
  \nHow can I help you today? You can ask me to debug syntax errors, build sorting algorithms, match ATS keywords, or recommend portfolio project specs!`;

  appendChatBubble(welcomeText, "mentor");
}

function appendChatBubble(text, sender, isHistory = false) {
  const container = document.getElementById("chat-messages-container");
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${sender}`;

  if (sender === "user" || isHistory) {
    bubble.innerHTML = formatMarkdown(text);
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  } else {
    // Word-by-word reveal typing animation
    bubble.textContent = "";
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
    
    const words = text.split(" ");
    let wordIdx = 0;
    const interval = setInterval(() => {
      if (wordIdx < words.length) {
        bubble.innerHTML = formatMarkdown(words.slice(0, wordIdx + 1).join(" "));
        container.scrollTop = container.scrollHeight;
        wordIdx++;
      } else {
        clearInterval(interval);
      }
    }, 25);
  }
}

function sendUserMessage() {
  const input = document.getElementById("chat-user-message");
  const text = input.value.trim();
  if (!text) return;

  appendChatBubble(text, "user");
  input.value = "";

  // Append history
  const historyStr = localStorage.getItem("skillverse_chat_history") || "[]";
  let history = [];
  try { history = JSON.parse(historyStr); } catch(e) {}
  history.push({ text, sender: "user" });
  localStorage.setItem("skillverse_chat_history", JSON.stringify(history));

  // Add typing indicator
  const container = document.getElementById("chat-messages-container");
  const indicator = document.createElement("div");
  indicator.className = "message-bubble mentor typing-indicator-wrapper";
  indicator.id = "chat-typing-indicator";
  indicator.innerHTML = `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  container.appendChild(indicator);
  container.scrollTop = container.scrollHeight;

  // Contact chatbot locally
  setTimeout(() => {
    const ind = document.getElementById("chat-typing-indicator");
    if (ind) ind.remove();

    const reply = getOfflineAIResponse(text);
    appendChatBubble(reply, "mentor");
    
    history.push({ text: reply, sender: "mentor" });
    localStorage.setItem("skillverse_chat_history", JSON.stringify(history));
  }, 800);
}

function getOfflineAIResponse(message) {
  const query = message.toLowerCase().trim();
  const domain = AppState.currentDomain;
  const domainData = CAREER_DOMAINS?.[domain] || {};
  const firstLang = domainData.firstLanguage || 'programming';

  if (query.includes("explain my current step") || query.includes("explain my step") || query.includes("where do i start")) {
    const activePhases = domainData?.phases || [];
    let nextTask = null;
    let activePhaseTitle = "Phase 1";
    for (let i = 0; i < activePhases.length; i++) {
      nextTask = activePhases[i].tasks.find(t => !AppState.completedMilestones.includes(t.id));
      if (nextTask) {
        activePhaseTitle = activePhases[i].title;
        break;
      }
    }
    if (nextTask) {
      return `### Learning Path Advice: Current Milestone
Your active checkpoint is **${nextTask.title}** inside **${activePhaseTitle}**.

**Task Description**:
${nextTask.description || 'Gain core competency in this technical area.'}

**How to complete this**:
1. Study foundational references on recommended platforms.
2. Open the **Challenge Playground** and write standard code solutions.
3. Once completed, check off the task inside the checklist to unlock further learning nodes.`;
    }
    return `You have checked off all standard milestones in the current phase! I suggest completing practice coding challenges or mock interviews to gain additional XP.`;
  }

  if (query.includes("dsa") || query.includes("algorithm") || query.includes("binary search") || query.includes("sorting") || query.includes("linked list")) {
    return `### Mastering Data Structures & Algorithms
Algorithms and data structures are essential for scaling software platforms.

Here is a template to reverse a singly linked list in **JavaScript**:
\`\`\`javascript
function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}
\`\`\`

**Tips for DSA Optimization**:
*   Analyze space/time complexity using Big-O.
*   Draw pointers on paper to visualize node updates.
*   Check boundary conditions (empty lists, single nodes).`;
  }

  if (query.includes("debug") || query.includes("error") || query.includes("exception") || query.includes("traceback")) {
    return `### Debugging Helper
Let's resolve your runtime error! Follow this systematic debugging framework:

1.  **Read the traceback**: Find the first file path referencing your source code and identify the line number.
2.  **Inspect types**: Ensure you aren't invoking properties on \`undefined\` or \`null\` variables.
3.  **Use print logs**: Insert log statement triggers right before the exception line.

\`\`\`javascript
// Example validation check:
if (!user || typeof user.name === "undefined") {
    console.error("Critical: Variable parameters are missing!");
}
\`\`\`

Please paste your exact code block and traceback error details, and I will write a refactored solution!`;
  }

  if (query.includes("project") || query.includes("portfolio") || query.includes("ideas")) {
    return `### Recommended Portfolio Project
Showcase your engineering skills with this **Full Stack Coding Sandbox**:

*   **Architecture**:
    *   *Frontend*: React web console with dynamic code editors.
    *   *Backend*: Express API server spawning sandboxed executor shell processes.
    *   *Database*: SQLite/Postgres saving user analytics.
*   **Key Features**: Multi-language compilation, live error parsing, and automated test-case evaluations.

Ensure your code is documented inside a Github repository with setup files.`;
  }

  if (query.includes("resume") || query.includes("ats") || query.includes("cv") || query.includes("scanner")) {
    return `### ATS Resume Matching Guide
Optimize your resume profile for automated screening filters:

1.  **Format**: Use clean headings, plain bullet points, and single-column styles. Avoid visual bars or tables.
2.  **Keywords**: Match job requirements exactly. If the posting mentions "SQL indexing" or "caching", verify those strings appear.
3.  **Metrics**: Detail accomplishments with numbers (e.g. *"reduced query latencies by 35% using indexing"*).

Would you like to paste your current resume text here so I can run our skills scanner?`;
  }

  if (query.includes("interview") || query.includes("mock") || query.includes("hr") || query.includes("star")) {
    return `### Mock Interview Simulator Prep
Practice conceptual and behavioral interview templates under pressure:

*   **Technical**: Be ready to write time complexities and optimization suggestions.
*   **Behavioral**: Use the **STAR Method** (Situation, Task, Action, Result) to describe project milestones.
    *   *Example*: *"In my last course project (Situation), we had high API delays (Task). I configured Redis cache layers (Action) which decreased latencies by 60% (Result)."*

You can practice simulations directly inside our **Resume & Mock Prep** tab!`;
  }

  if (query.includes("sql") || query.includes("query") || query.includes("database")) {
    return `### Database Query Helper
Here is an optimized query to fetch student rankings based on average course grade, joining the enrollments and courses tables:

\`\`\`sql
SELECT s.name, AVG(e.grade) as avg_grade
FROM students s
JOIN enrollments e ON s.id = e.student_id
GROUP BY s.id
ORDER BY avg_grade DESC;
\`\`\`

You can run SQL statements directly in the **Challenge Playground** by selecting "SQL" from the dropdown. Let me know if you would like me to explain any indexing or join patterns!`;
  }

  return `### SkillVerse Assistant Response
Hello! I am your dynamic assistant, here to help you study, practice coding, and compile programs.

*   **Your Active Domain**: ${domainData.title || 'Tech'}
*   **Target Language**: ${firstLang}
*   **Aptitude Tier**: ${AppState.knowledgeLevel.toUpperCase()}

How would you like to proceed? Ask me a coding question, request templates for sorting algorithms, or paste tracebacks to debug!`;
}

// Challenge Playground Sandbox Compiler Implementation
function initPlayground() {
  const challenges = CAREER_DOMAINS?.[AppState.currentDomain]?.practiceChallenges || [];
  const list = document.getElementById("playground-challenges-list");
  if (!list) return;
  list.textContent = "";

  if (challenges.length === 0) {
    const errorMsg = document.createElement("p");
    errorMsg.style.fontSize = "0.8rem";
    errorMsg.style.color = "var(--text-sub)";
    errorMsg.style.fontStyle = "italic";
    errorMsg.textContent = "No challenges active for this domain.";
    list.appendChild(errorMsg);
    
    document.getElementById("playground-instruction-pane").innerHTML = "<h4>No Challenges Active</h4>";
    return;
  }

  challenges.forEach((chall, idx) => {
    const btn = document.createElement("button");
    const isSolved = AppState.challengesSolved.includes(chall.id);
    
    btn.className = `challenge-btn ${idx === 0 ? 'active' : ''}`;
    btn.setAttribute("data-challenge-id", chall.id);
    
    btn.innerHTML = `
      <span>Challenge ${idx + 1}</span>
      <i class="fa-solid ${isSolved ? 'fa-circle-check success' : 'fa-circle-xmark'} chall-status-icon"></i>
    `;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".challenge-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadChallenge(chall.id);
    });

    list.appendChild(btn);
  });

  loadChallenge(challenges[0].id);
}

function loadChallenge(id) {
  AppState.activeChallengeId = id;
  const challenges = CAREER_DOMAINS?.[AppState.currentDomain]?.practiceChallenges || [];
  const chall = challenges.find(c => c.id === id);
  if (!chall) return;

  const instr = document.getElementById("playground-instruction-pane");
  instr.innerHTML = `
    <h4>${escapeHTML(chall.title)} <span class="badge ${chall.difficulty === 'Easy' ? 'badge-success' : 'badge-warning'}" style="margin-left: 0.5rem; font-size:0.65rem;">${escapeHTML(chall.difficulty)}</span></h4>
    <p class="instruction-desc">${escapeHTML(chall.instruction || chall.description)}</p>
    <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-sub);">
      <strong>Test Rule:</strong> <code>${escapeHTML(chall.testDescription)}</code>
    </div>
  `;

  // Auto-detect playground language selector mapping
  const langSelect = document.getElementById("playground-lang-select");
  if (chall.title.toLowerCase().includes("sql") || (chall.instruction || chall.description).toLowerCase().includes("sql") || chall.id.includes("sql")) {
    langSelect.value = "sql";
  } else if (chall.title.toLowerCase().includes("python") || chall.id.includes("python")) {
    langSelect.value = "python";
  } else {
    langSelect.value = "javascript";
  }

  const codeArea = document.getElementById("playground-code-area");
  codeArea.value = chall.starterCode;

  const term = document.getElementById("playground-terminal-output");
  term.className = "terminal-output";
  term.textContent = `SkillVerse verification engine linked to Challenge: ${chall.title}.\nReady to execute script test...`;

  // Clear visual previews
  document.getElementById("html-preview-box").classList.add("hidden");
  document.getElementById("sql-results-box").classList.add("hidden");
  term.classList.remove("hidden");

  // Reset test validation checklist
  resetTestCasesUI();
}

function resetTestCasesUI() {
  const c1 = document.getElementById("test-case-1");
  const c2 = document.getElementById("test-case-2");
  if (c1 && c2) {
    c1.className = "test-case-item";
    c1.querySelector(".test-case-status-dot").className = "test-case-status-dot failed";
    c1.querySelector(".test-case-status-dot").textContent = "✕";
    c2.className = "test-case-item";
    c2.querySelector(".test-case-status-dot").className = "test-case-status-dot failed";
    c2.querySelector(".test-case-status-dot").textContent = "✕";
  }
}

function updateCodeEditorTemplate() {
  const langSelect = document.getElementById("playground-lang-select");
  const codeArea = document.getElementById("playground-code-area");
  if (langSelect && codeArea) {
    const lang = langSelect.value;
    codeArea.value = LANG_TEMPLATES?.[lang] || "";
    
    const term = document.getElementById("playground-terminal-output");
    term.className = "terminal-output";
    term.textContent = `Editor switched to ${lang.toUpperCase()} environment. Ready to compile...`;
    
    // Toggle view boxes based on environment selection
    if (lang === "html") {
      document.getElementById("html-preview-box").classList.remove("hidden");
      document.getElementById("sql-results-box").classList.add("hidden");
      term.classList.add("hidden");
      
      // Initial preview render
      runPlaygroundCode();
    } else {
      document.getElementById("html-preview-box").classList.add("hidden");
      document.getElementById("sql-results-box").classList.add("hidden");
      term.classList.remove("hidden");
    }
  }
}

function resetPlaygroundCode() {
  const challenges = CAREER_DOMAINS?.[AppState.currentDomain]?.practiceChallenges || [];
  const chall = challenges.find(c => c.id === AppState.activeChallengeId);
  if (chall) {
    document.getElementById("playground-code-area").value = chall.starterCode;
    showToast("Editor reset to default starter code.", "info");
    resetTestCasesUI();
  } else {
    updateCodeEditorTemplate();
  }
}

function runPlaygroundCode() {
  const code = document.getElementById("playground-code-area").value;
  const lang = document.getElementById("playground-lang-select").value;
  const term = document.getElementById("playground-terminal-output");

  term.className = "terminal-output";
  term.textContent = `[COMPILING] Running code execution in ${lang.toUpperCase()} sandbox...\n`;

  // HTML execution preview handler
  if (lang === "html") {
    const iframe = document.getElementById("live-iframe-display");
    const previewContainer = document.getElementById("html-preview-box");
    previewContainer.classList.remove("hidden");
    term.classList.add("hidden");

    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(code);
      doc.close();
    } catch (e) {
      console.error("Iframe preview error: ", e);
    }
    return;
  }

  // Client-side high-fidelity compiler executing console scripts
  if (lang === "javascript" || lang === "typescript") {
    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(" "));
    
    try {
      // Strip TS variables types declarations to execute safely in JS engine
      let executableCode = code;
      if (lang === "typescript") {
        executableCode = code
          .replace(/:\s*string/g, '')
          .replace(/:\s*number/g, '')
          .replace(/:\s*boolean/g, '')
          .replace(/:\s*any/g, '');
      }
      
      new Function(executableCode)();
      term.className = "terminal-output success";
      term.textContent = `[SANDBOX OUTPUT]\n` + (logs.join("\n") || "Script executed successfully. Console output empty.");
    } catch (e) {
      term.className = "terminal-output error";
      term.textContent = `[SANDBOX EXCEPTION] Runtime compilation failure:\n${e.message}`;
    } finally {
      console.log = originalLog;
    }
  } 
  // Client-side SQL query parser simulation
  else if (lang === "sql") {
    runSQLQueryFallback(code);
  }
  // General high-fidelity simulated compilers (Python, Java, C, etc.)
  else {
    let isSuccess = true;
    let output = "";
    let errorText = "";

    if (lang === "python") {
      if (code.includes("def") && !code.includes("return") && !code.includes("print")) {
        isSuccess = false;
        errorText = "IndentationError: expected an indented block statement";
      } else {
        output = `Python 3.10 virtual execution successful.\nStdout: Executed main loops.`;
      }
    } else if (lang === "java") {
      if (!code.includes("public class") || !code.includes("public static void main")) {
        isSuccess = false;
        errorText = "Error: Could not find or load main class Main";
      } else {
        output = `Compiled Main.class successful.\nJVM run: Hello SkillVerse World!`;
      }
    } else if (lang === "c" || lang === "cpp") {
      if (!code.includes("#include") || !code.includes("main")) {
        isSuccess = false;
        errorText = "g++ compiler failure: main function or library directive missing";
      } else {
        output = `GCC build complete. Output console: Hello World!`;
      }
    } else {
      output = `Simulated environment compile success for language: ${lang.toUpperCase()}`;
    }

    setTimeout(() => {
      if (isSuccess) {
        term.className = "terminal-output success";
        term.textContent = output;
      } else {
        term.className = "terminal-output error";
        term.textContent = errorText;
      }
    }, 500);
  }
}

function runSQLQueryFallback(queryText) {
  const term = document.getElementById("playground-terminal-output");
  const sqlBox = document.getElementById("sql-results-box");
  
  const clean = queryText.toLowerCase().trim();
  
  if (clean.includes("drop") || clean.includes("alter") || clean.includes("delete")) {
    term.className = "terminal-output error";
    term.textContent = "Security violation error: modifications DDL queries are forbidden in sandbox mode.";
    sqlBox.classList.add("hidden");
    return;
  }

  // Simulated Database rows matching the backend setup
  let headers = [];
  let rows = [];

  if (clean.includes("from students")) {
    headers = ["id", "name", "cgpa", "major"];
    rows = [
      [1, "Alex Carter", 8.5, "Computer Science"],
      [2, "Sarah Connor", 9.2, "Cybersecurity"],
      [3, "Bruce Wayne", 7.9, "Information Technology"],
      [4, "Tony Stark", 9.8, "Data Science"]
    ];
  } else if (clean.includes("from employees")) {
    headers = ["id", "name", "department", "salary"];
    rows = [
      [1, "Alex Carter", "Engineering", 85000],
      [2, "Jane Smith", "Data Science", 92000],
      [3, "Bob Johnson", "Product Management", 78000],
      [4, "Alice Williams", "Engineering", 95000],
      [5, "Charlie Brown", "Design", 68000]
    ];
  } else if (clean.includes("from courses")) {
    headers = ["id", "title", "credits"];
    rows = [
      ["CS101", "Introduction to Computer Science", 4],
      ["DS201", "Data Structures & Algorithms", 4],
      ["DB301", "Database Management Systems", 3],
      ["AI401", "Artificial Intelligence", 4]
    ];
  } else if (clean.includes("from enrollments")) {
    headers = ["student_id", "course_id", "grade"];
    rows = [
      [1, "CS101", "A"],
      [1, "DS201", "B+"],
      [2, "CS101", "A"],
      [3, "DB301", "B"],
      [4, "AI401", "A+"]
    ];
  } else {
    term.className = "terminal-output error";
    term.textContent = "SQL parsing error: Table not found inside workspace schema. Available tables: students, employees, courses, enrollments";
    sqlBox.classList.add("hidden");
    return;
  }

  // Render visual HTML grid
  sqlBox.classList.remove("hidden");
  term.classList.add("hidden");
  
  let tableHTML = `<table class="sql-results-table"><thead><tr>`;
  headers.forEach(h => tableHTML += `<th>${escapeHTML(h)}</th>`);
  tableHTML += `</tr></thead><tbody>`;
  
  rows.forEach(r => {
    tableHTML += `<tr>`;
    r.forEach(v => tableHTML += `<td>${escapeHTML(v)}</td>`);
    tableHTML += `</tr>`;
  });
  tableHTML += `</tbody></table>`;
  
  sqlBox.innerHTML = tableHTML;
}

function submitPlaygroundVerification(event) {
  const challenges = CAREER_DOMAINS?.[AppState.currentDomain]?.practiceChallenges || [];
  const chall = challenges.find(c => c.id === AppState.activeChallengeId);
  if (!chall) return;

  const code = document.getElementById("playground-code-area").value;
  const term = document.getElementById("playground-terminal-output");
  const c1 = document.getElementById("test-case-1");
  const c2 = document.getElementById("test-case-2");

  term.className = "terminal-output";
  term.textContent = `[COMPILING] Verifying test suite constraints...\n`;

  setTimeout(() => {
    try {
      const res = chall.verify(code);
      const isSuccess = (typeof res === "boolean" && res) || (res && res.success);
      
      if (isSuccess) {
        // Toggle indicators to passed
        if (c1 && c2) {
          c1.className = "test-case-item passed";
          c1.querySelector(".test-case-status-dot").className = "test-case-status-dot passed";
          c1.querySelector(".test-case-status-dot").textContent = "✓ Passed";
          c2.className = "test-case-item passed";
          c2.querySelector(".test-case-status-dot").className = "test-case-status-dot passed";
          c2.querySelector(".test-case-status-dot").textContent = "✓ Passed";
        }

        term.className = "terminal-output success";
        term.textContent += `[SUCCESS] All test cases passed successfully!\n[SUBMITTED] Code checks synchronized: +100 XP awarded.\n\n${res.message || ''}`;

        // Trigger floating reward particle
        triggerXPReward(event);

        if (!AppState.challengesSolved.includes(chall.id)) {
          AppState.challengesSolved.push(chall.id);
          addXP(100);

          const solvedCount = AppState.challengesSolved.length;
          if (solvedCount >= 1) unlockBadge("code_warrior");
          if (solvedCount >= 2) unlockBadge("code_champion");

          // Auto-checkoff roadmap milestone
          if (chall.roadmapTaskId && !AppState.completedMilestones.includes(chall.roadmapTaskId)) {
            toggleMilestone(chall.roadmapTaskId);
          }

          // Update active challenges buttons inside sidebar lists
          const activeBtn = document.querySelector(`.challenge-btn[data-challenge-id="${chall.id}"]`);
          if (activeBtn) {
            const icon = activeBtn.querySelector("i");
            if (icon) icon.className = "fa-solid fa-circle-check success";
          }
        }
      } else {
        // Fail test cases
        if (c1 && c2) {
          c1.className = "test-case-item failed";
          c1.querySelector(".test-case-status-dot").className = "test-case-status-dot failed";
          c1.querySelector(".test-case-status-dot").textContent = "✕ Failed";
          c2.className = "test-case-item failed";
          c2.querySelector(".test-case-status-dot").className = "test-case-status-dot failed";
          c2.querySelector(".test-case-status-dot").textContent = "✕ Failed";
        }

        term.className = "terminal-output error";
        term.textContent += `[FAILED] Solution logic test verification failed.\n[REASON] ${res.message || "Outputs did not match boundary constraints."}`;
      }
    } catch (e) {
      term.className = "terminal-output error";
      term.textContent += `[CRITICAL EXECUTION EXCEPTION] Runtime failure:\n${e.message}`;
    }
  }, 1200);
}

function triggerXPReward(event) {
  // Capture click positions or use center screen coordinates as backup
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  
  if (event && event.clientX && event.clientY) {
    x = event.clientX;
    y = event.clientY;
  }

  const particle = document.createElement("div");
  particle.className = "xp-reward-particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
particle.textContent = "+100 XP";
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1200);
}

// Upgraded Resume Matcher Database & Logic
const ROLE_TARGET_SKILLS = {
  data_analyst: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Statistics", "Pandas", "NumPy", "Data Cleaning", "A/B Testing"],
  data_scientist: ["Python", "R", "Machine Learning", "Statistics", "SQL", "Pandas", "Scikit-Learn", "Deep Learning", "Data Visualization", "Jupyter"],
  cloud_engineer: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Terraform", "CI/CD", "Bash", "Cloud Security", "Networking"],
  frontend_developer: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Git", "Webpack", "Vite", "Responsive Design"],
  backend_developer: ["Node.js", "Express", "Python", "SQL", "MongoDB", "PostgreSQL", "Docker", "Redis", "REST APIs", "System Design"],
  product_manager: ["Product Strategy", "Roadmapping", "RICE Prioritization", "User Research", "Agile/Scrum", "SQL", "AARRR Metrics", "A/B Testing", "Backlog Grooming", "Wireframing"],
  ai_engineer: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "NLP", "Computer Vision", "Transformers", "LLMs", "LangChain", "Vector Databases"]
};

const MISSING_SKILL_COURSES = {
  "Docker": { title: "Docker & Containerization Mastery", link: "https://www.docker.com/play-with-docker/" },
  "Kubernetes": { title: "Kubernetes Certified Administrator (CKA)", link: "https://kubernetes.io/docs/tutorials/" },
  "AWS": { title: "AWS Cloud Practitioner Essentials", link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/" },
  "React": { title: "Modern React with Redux Toolkit", link: "https://react.dev/learn" },
  "TypeScript": { title: "TypeScript Deep Dive Guide", link: "https://www.typescriptlang.org/docs/" },
  "SQL": { title: "Complete SQL Database Bootcamp", link: "https://sqlbolt.com/" },
  "Python": { title: "Python for Data Science & AI", link: "https://docs.python.org/3/tutorial/" },
  "TensorFlow": { title: "Intro to Deep Learning with TensorFlow", link: "https://www.tensorflow.org/tutorials" },
  "PyTorch": { title: "Deep Learning Foundations with PyTorch", link: "https://pytorch.org/tutorials/" },
  "LLMs": { title: "Prompt Engineering & Large Language Models", link: "https://www.deeplearning.ai/short-courses/" },
  "OpenAI API": { title: "Building AI Apps with OpenAI and LangChain", link: "https://platform.openai.com/docs/" },
  "CI/CD": { title: "GitHub Actions & DevOps Pipelines", link: "https://docs.github.com/en/actions" },
  "Terraform": { title: "HashiCorp Terraform Certified Associate", link: "https://developer.hashicorp.com/terraform/tutorials" }
};

const LIVE_OPPORTUNITIES = {
  data_analyst: [
    { type: "internship", title: "Data Analyst Intern - Unstop", desc: "Build SQL queries, optimize Excel reports, and construct Power BI visualization panels.", link: "https://unstop.com/internships", source: "Unstop", deadlineOffset: 6 },
    { type: "hackathon", title: "Kaggle Community Datathon 2026", desc: "Join teams to clean, analyze, and build regression models for global health datasets.", link: "https://devpost.com/hackathons?search=data", source: "Devpost", deadlineOffset: 12 },
    { type: "job", title: "Junior Business Analyst - LinkedIn", desc: "Clean metrics sheets, track AARRR indexes, and compile weekly performance reports.", link: "https://www.linkedin.com/jobs/search/?keywords=data+analyst", source: "LinkedIn", deadlineOffset: 4 },
    { type: "event", title: "AWS Data Lakes Live Masterclass", desc: "Hands-on training session on AWS Athena, Glue, and Redshift scaling designs.", link: "https://aws.amazon.com/events/", source: "AWS Events", deadlineOffset: 9 },
    { type: "certification", title: "Google Data Analytics Professional Certificate", desc: "Prepare for entry-level data analyst roles with guided modules.", link: "https://grow.google/certificates/data-analytics/", source: "Google", deadlineOffset: 30 }
  ],
  data_scientist: [
    { type: "internship", title: "Data Science Intern - Internshala", desc: "Apply statistical modeling, Pandas filtering, and Jupyter notebooks to customer insights.", link: "https://internshala.com/internships/keywords-data-science", source: "Internshala", deadlineOffset: 7 },
    { type: "hackathon", title: "HackerEarth ML Hackfest 2026", desc: "Build predictive models using Scikit-Learn or PyTorch to solve real-world industry tasks.", link: "https://www.hackerearth.com/challenges/", source: "HackerEarth", deadlineOffset: 15 },
    { type: "job", title: "Associate Data Scientist - LinkedIn", desc: "Train supervised/unsupervised algorithms, run statistical testing, and write Pandas cleaning code.", link: "https://www.linkedin.com/jobs/search/?keywords=data+scientist", source: "LinkedIn", deadlineOffset: 5 },
    { type: "certification", title: "IBM Data Science Certification - Coursera", desc: "Build models in Python and publish analytics findings in portfolios.", link: "https://www.coursera.org/professional-certificates/ibm-data-science", source: "Coursera", deadlineOffset: 25 }
  ],
  cloud_engineer: [
    { type: "internship", title: "Cloud Systems Intern - AWS", desc: "Assist infrastructure engineers managing EC2 instances, VPC routing, and S3 policies.", link: "https://unstop.com/internships", source: "Unstop", deadlineOffset: 8 },
    { type: "hackathon", title: "AWS Global Cloud Architecture Sprint", desc: "Construct highly available infrastructure configurations using Terraform scripts.", link: "https://devpost.com/hackathons?search=aws", source: "Devpost", deadlineOffset: 14 },
    { type: "job", title: "DevOps Engineer - LinkedIn", desc: "Maintain Docker clusters, configure Kubernetes pods, and build GitHub Actions CI/CD pipelines.", link: "https://www.linkedin.com/jobs/search/?keywords=devops+engineer", source: "LinkedIn", deadlineOffset: 6 },
    { type: "event", title: "AWS Innovate Online Conference 2026", desc: "Learn key architectural details directly from Amazon cloud architects.", link: "https://aws.amazon.com/events/", source: "AWS Events", deadlineOffset: 10 },
    { type: "certification", title: "AWS Certified Solutions Architect Associate", desc: "Industry-standard cloud validation badge.", link: "https://aws.amazon.com/certification/", source: "AWS Certification", deadlineOffset: 45 }
  ],
  frontend_developer: [
    { type: "internship", title: "Junior Frontend Developer Intern - Vercel", desc: "Write accessible HTML, style layouts with Tailwind CSS, and build React pages.", link: "https://internshala.com/internships/keywords-react", source: "Internshala", deadlineOffset: 5 },
    { type: "hackathon", title: "Next.js 15 UI Design Challenge - Devpost", desc: "Construct a futuristic web interface using Next.js, Framer Motion, and Tailwind CSS.", link: "https://devpost.com/hackathons?search=react", source: "Devpost", deadlineOffset: 11 },
    { type: "job", title: "Frontend Software Engineer - React / TS", desc: "Build responsive, high-performance dashboards with TypeScript and Vite.", link: "https://www.linkedin.com/jobs/search/?keywords=frontend+developer", source: "LinkedIn", deadlineOffset: 3 },
    { type: "certification", title: "Meta Front-End Developer Certificate", desc: "Showcase certified competency in Web fundamentals and React states.", link: "https://www.coursera.org/professional-certificates/meta-front-end-developer", source: "Meta", deadlineOffset: 30 }
  ],
  backend_developer: [
    { type: "internship", title: "Backend Systems Intern - Stripe", desc: "Write Express controllers, connect MongoDB/PostgreSQL schemas, and write SQL queries.", link: "https://internshala.com/internships/keywords-node.js", source: "Internshala", deadlineOffset: 7 },
    { type: "hackathon", title: "HackerEarth Redis API Sprint 2026", desc: "Build high-throughput Node.js microservices integrated with Redis databases.", link: "https://www.hackerearth.com/challenges/", source: "HackerEarth", deadlineOffset: 13 },
    { type: "job", title: "Node.js Software Engineer - LinkedIn", desc: "Develop secure REST APIs, implement JWT authentication, and design database structures.", link: "https://www.linkedin.com/jobs/search/?keywords=backend+developer", source: "LinkedIn", deadlineOffset: 4 },
    { type: "event", title: "Docker Container Scaling Seminar", desc: "Learn container virtualization best practices.", link: "https://aws.amazon.com/events/", source: "AWS Events", deadlineOffset: 10 }
  ],
  product_manager: [
    { type: "internship", title: "Product Management Intern - Flipkart", desc: "Gather user research, analyze customer retention cohorts, and define feature requirements.", link: "https://unstop.com/internships", source: "Unstop", deadlineOffset: 9 },
    { type: "hackathon", title: "Flipkart Product Case Hackathon 2026", desc: "Design a Go-To-Market launch strategy and map user flows for an AI mobile app.", link: "https://unstop.com/", source: "Unstop", deadlineOffset: 18 },
    { type: "job", title: "Associate Product Manager - LinkedIn", desc: "Coordinate engineering backlogs, run Scrum standups, and track AARRR metrics.", link: "https://www.linkedin.com/jobs/search/?keywords=product+manager", source: "LinkedIn", deadlineOffset: 5 }
  ],
  ai_engineer: [
    { type: "internship", title: "AI/ML Developer Intern - Internshala", desc: "Integrate LLM API calls, tune prompt engineering, and write vector search indexes.", link: "https://internshala.com/internships/keywords-machine-learning", source: "Internshala", deadlineOffset: 6 },
    { type: "hackathon", title: "MLH AI Hackathon Series 2026", desc: "Build automated AI agents using LangChain frameworks and OpenAI APIs.", link: "https://mlh.io/seasons/2026/events", source: "MLH", deadlineOffset: 16 },
    { type: "job", title: "AI Application Engineer - LinkedIn", desc: "Fine-tune HuggingFace models, manage vector databases, and scale Python backends.", link: "https://www.linkedin.com/jobs/search/?keywords=ai+engineer", source: "LinkedIn", deadlineOffset: 5 },
    { type: "certification", title: "DeepLearning.ai Generative AI Developer Cert", desc: "Verify skills in prompt tuning, model scaling, and RAG architectures.", link: "https://www.deeplearning.ai/courses/", source: "DeepLearning.ai", deadlineOffset: 20 }
  ]
};

function triggerResumeParsing(text) {
  const loader = document.getElementById("scan-loader");
  const loaderText = document.getElementById("scan-loader-text");
  const progressFill = document.getElementById("scan-progress-fill");
  const scanBtn = document.getElementById("btn-scan-resume");
  const role = document.getElementById("resume-role-select").value;
  
  if (!loader) return;
  
  loader.classList.remove("hidden");
  scanBtn.disabled = true;
  
  const stages = [
    { text: "Analyzing resume text characters...", progress: 25 },
    { text: "Extracting keyword structures...", progress: 55 },
    { text: "Comparing against target role requirements...", progress: 80 },
    { text: "Generating ATS Match score card...", progress: 100 }
  ];
  
  let stageIdx = 0;
  progressFill.style.width = "0%";
  
  const interval = setInterval(() => {
    if (stageIdx < stages.length) {
      loaderText.textContent = stages?.[stageIdx]?.text;
      progressFill.style.width = `${stages?.[stageIdx]?.progress}%`;
      stageIdx++;
    } else {
      clearInterval(interval);
      const fallbackData = computeClientFallbackAnalysis(text, role);
      displayResumeAnalysisReport(fallbackData);
      loader.classList.add("hidden");
      scanBtn.disabled = false;
    }
  }, 400);
}

function computeClientFallbackAnalysis(text, role) {
  let parsedText = text || "";
  if (!parsedText) {
    if (role === 'frontend_developer') {
      parsedText = "Front-end engineering profile. Skills: HTML5, CSS3, JavaScript, React, Git, Responsive Design, CSS frameworks.";
    } else if (role === 'backend_developer') {
      parsedText = "Backend web system engineer. Skills: Node.js, Express, SQL, MongoDB, REST APIs. Projects: concurrent servers.";
    } else {
      parsedText = "Developer profile containing Python, SQL, Excel, Git, JavaScript, Node.js.";
    }
  }
  
  const targetSkills = ROLE_TARGET_SKILLS?.[role] || ROLE_TARGET_SKILLS.data_analyst;
  const cleanText = parsedText.toLowerCase();
  
  const matchedSkills = [];
  targetSkills.forEach(skill => {
    const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, 'i');
    if (regex.test(cleanText)) {
      matchedSkills.push(skill);
    }
  });
  
  const score = targetSkills.length > 0 ? Math.round((matchedSkills.length / targetSkills.length) * 100) : 0;
  const missingSkills = targetSkills.filter(s => !matchedSkills.includes(s));
  const recommendedSkills = missingSkills.slice(0, 4);
  
  const improvements = [];
  if (parsedText.length < 400) {
    improvements.push("Expand your content length. Professional resumes should provide 400+ words detailing projects and scopes.");
  }
  if (!parsedText.match(/\b(improved|increased|decreased|designed|managed|reduced|saved)\b/i)) {
    improvements.push("Incorporate strong action verbs (e.g., 'orchestrated', 'streamlined', 'optimized') in your experience bullets.");
  }
  if (!parsedText.match(/%/i)) {
    improvements.push("Quantify impact! Include statistics, percentages, or money metrics to demonstrate real-world achievements.");
  }
  if (!parsedText.match(/\b(github|linkedin)\b/i)) {
    improvements.push("Add clickable developer web anchors (GitHub project links or professional LinkedIn links).");
  }
  if (missingSkills.length > 2) {
    improvements.push(`Include direct domain skills like ${missingSkills.slice(0, 2).join(', ')} to pass automated keyword screenings.`);
  }
  if (improvements.length === 0) {
    improvements.push("Excellent resume structure. Tailor details slightly for specific job highlights.");
  }
  
  const learningPaths = [];
  missingSkills.slice(0, 3).forEach(skill => {
    const course = MISSING_SKILL_COURSES?.[skill] || {
      title: `${skill} Professional Specialization`,
      link: `https://www.coursera.org/search?query=${encodeURIComponent(skill)}`
    };
    learningPaths.push({
      skill: skill,
      title: course.title,
      link: course.link
    });
  });
  
  return {
    success: true,
    score,
    matchedSkills,
    missingSkills,
    recommendedSkills,
    strength: score >= 80 ? "Excellent" : score >= 50 ? "Fair" : "Poor",
    improvements,
    learningPaths
  };
}

function displayResumeAnalysisReport(data) {
  if (!data || !data.success) return;
  
  data.matchedSkills.forEach(skill => {
    const standardName = formatSkillName(skill);
    if (!AppState.skills.includes(standardName)) {
      AppState.skills.push(standardName);
    }
  });
  saveStateToLocalStorage();
  renderActiveSkills();
  
  const percent = data.score;
  const scoreRing = document.getElementById("resume-score-ring");
  const scoreVal = document.getElementById("resume-score-value");
  const ratingText = document.getElementById("resume-score-rating-text");
  
  if (scoreRing) {
    scoreRing.style.setProperty("--percent", String(percent));
    scoreRing.style.background = `conic-gradient(var(--secondary) calc(${percent} * 1%), var(--code-bg) 0)`;
  }
  if (scoreVal) scoreVal.textContent = `${percent}%`;
  
  const strengthBadge = document.getElementById("resume-strength-badge");
  if (strengthBadge) {
    strengthBadge.textContent = data.strength;
    if (data.strength === "Excellent") {
      strengthBadge.className = "badge badge-success";
      if (ratingText) {
        ratingText.className = "text-success";
        ratingText.textContent = "Excellent Match";
      }
      unlockBadge("resume_verified");
    } else if (data.strength === "Fair") {
      strengthBadge.className = "badge badge-warning";
      if (ratingText) {
        ratingText.className = "text-orange";
        ratingText.textContent = "Fair Match";
      }
    } else {
      strengthBadge.className = "badge badge-danger";
      if (ratingText) {
        ratingText.className = "text-red";
        ratingText.textContent = "Needs Attention";
      }
    }
  }
  
  const missingBox = document.getElementById("resume-missing-skills");
  if (missingBox) {
    missingBox.textContent = "";
    if (data.missingSkills.length === 0) {
      missingBox.innerHTML = `<li style="color: var(--success); font-style: italic;">None! Resume covers all core keywords.</li>`;
    } else {
      data.missingSkills.forEach(s => {
        const li = document.createElement("li");
        li.style.background = "rgba(239, 68, 68, 0.15)";
        li.style.padding = "0.2rem 0.5rem";
        li.style.borderRadius = "4px";
        li.style.color = "var(--danger)";
        li.style.fontWeight = "600";
        li.textContent = s;
        missingBox.appendChild(li);
      });
    }
  }
  
  const recBox = document.getElementById("resume-recommended-skills");
  if (recBox) {
    recBox.textContent = "";
    if (data.recommendedSkills.length === 0) {
      recBox.innerHTML = `<li style="color: var(--success); font-style: italic;">All core skills verified.</li>`;
    } else {
      data.recommendedSkills.forEach(s => {
        const li = document.createElement("li");
        li.style.background = "rgba(34, 211, 238, 0.15)";
        li.style.padding = "0.2rem 0.5rem";
        li.style.borderRadius = "4px";
        li.style.color = "var(--cyan-glow)";
        li.style.fontWeight = "600";
        li.textContent = s;
        recBox.appendChild(li);
      });
    }
  }
  
  const impBox = document.getElementById("resume-improvements");
  if (impBox) {
    impBox.textContent = "";
    data.improvements.forEach(imp => {
      const li = document.createElement("li");
      li.textContent = imp;
      impBox.appendChild(li);
    });
  }
  
  const pathsBox = document.getElementById("resume-learning-paths");
  if (pathsBox) {
    pathsBox.textContent = "";
    if (data.learningPaths.length === 0) {
      pathsBox.innerHTML = `<div style="color: var(--success); font-style: italic;">No learning recommendations needed.</div>`;
    } else {
      data.learningPaths.forEach(path => {
        const card = document.createElement("div");
        card.style.display = "flex";
        card.style.justify = "space-between";
        card.style.alignItems = "center";
        card.style.padding = "0.4rem 0.6rem";
        card.style.background = "rgba(255,255,255,0.03)";
        card.style.borderRadius = "6px";
        card.style.border = "1px solid rgba(255,255,255,0.05)";
        card.style.marginBottom = "0.3rem";
        
        card.innerHTML = `
          <div>
            <div style="font-weight: 600; color: var(--text-main); font-size: 0.75rem;">${escapeHTML(path.skill)} Core Training</div>
            <div style="font-size: 0.65rem; color: var(--text-sub);">${escapeHTML(path.title)}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.open('${escapeHTML(path.link)}', '_blank')" style="padding: 0.25rem 0.5rem; font-size: 0.65rem;">Explore <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.6rem;"></i></button>
        `;
        pathsBox.appendChild(card);
      });
    }
  }
  
  document.getElementById("resume-report-dashboard").classList.remove("hidden");
  showToast("ATS Analysis Complete! Report generated below.", "success");
}

// Opportunities recommendations rendering
function renderOpportunities(domainKey) {
  const container = document.getElementById("activities-cards-container");
  if (!container) return;
  container.textContent = "";

  const role = mapDomainToRole(domainKey);
  const localEvents = LIVE_OPPORTUNITIES?.[role] || LIVE_OPPORTUNITIES.data_analyst;
  const formatted = localEvents.map(evt => {
    const date = new Date();
    date.setDate(date.getDate() + evt.deadlineOffset);
    const deadlineStr = date.toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' });
    return {
      type: evt.type,
      title: evt.title,
      desc: evt.desc,
      link: evt.link,
      source: evt.source,
      meta: `Apply by: ${deadlineStr} • ${evt.source}`
    };
  });
  displayOpportunities(formatted);
}

function mapDomainToRole(domainKey) {
  const map = {
    software_engineer: 'backend_developer',
    data_scientist: 'data_scientist',
    ai_ml: 'ai_engineer',
    cybersecurity: 'cloud_engineer',
    cloud: 'cloud_engineer',
    ui_ux: 'frontend_developer',
    business_analyst: 'data_analyst',
    product_manager: 'product_manager',
    mechanical_design: 'product_manager',
    civil_services: 'data_analyst',
    psu: 'data_analyst',
    entrepreneur: 'product_manager',
    data_analyst: 'data_analyst'
  };
  return map?.[domainKey] || 'data_analyst';
}

function displayOpportunities(opportunities) {
  const container = document.getElementById("activities-cards-container");
  if (!container) return;
  container.textContent = "";

  opportunities.forEach(act => {
    const card = document.createElement("div");
    card.className = "activity-card glass-panel";
    card.style.cursor = "pointer";
    card.style.transition = "all 0.3s ease";
    
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "var(--glow-shadow)";
      card.style.borderColor = "var(--secondary)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
      card.style.borderColor = "var(--border-panel)";
    });
    
    card.addEventListener("click", () => {
      if (act.link) {
        window.open(act.link, "_blank");
      }
    });
    
    card.innerHTML = `
      <div class="activity-header">
        <h4>${escapeHTML(act.title)}</h4>
        <span class="act-type-badge ${act.type === 'hackathon' ? 'badge-hackathon' : act.type === 'internship' ? 'badge-internship' : 'badge-hackathon'}">${escapeHTML(act.type)}</span>
      </div>
      <p>${escapeHTML(act.desc)}</p>
      <div class="activity-meta">
        <i class="fa-solid fa-calendar-days text-secondary"></i> 
        <span>${escapeHTML(act.meta)}</span>
      </div>
    `;

    container.appendChild(card);
  });
}


// Achievement unlocking helper
function unlockBadge(badgeId) {
  const unlocked = AppState.unlockedBadges || [];
  if (!unlocked.includes(badgeId)) {
    unlocked.push(badgeId);
    AppState.unlockedBadges = unlocked;
    saveStateToLocalStorage();
    
    const dbItem = BADGES_DATABASE.find(b => b.id === badgeId);
    if (dbItem) {
      showToast(`Achievement Unlocked: ${dbItem.title}!`, "success");
    }
  }
}

// Utilities
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatSkillName(skill) {
  const map = {
    "python": "Python",
    "sql": "SQL",
    "excel": "Excel",
    "power bi": "Power BI",
    "tableau": "Tableau",
    "statistics": "Statistics",
    "pandas": "Pandas",
    "numpy": "NumPy",
    "html": "HTML5",
    "css": "CSS3",
    "javascript": "JavaScript",
    "react": "React",
    "typescript": "TypeScript",
    "tailwind": "Tailwind CSS",
    "git": "Git",
    "github": "GitHub",
    "docker": "Docker",
    "express": "Express",
    "mongodb": "MongoDB",
    "postgresql": "PostgreSQL",
    "fastapi": "FastAPI",
    "pytorch": "PyTorch",
    "tensorflow": "TensorFlow",
    "scikit-learn": "Scikit-Learn"
  };
  return map?.[skill.toLowerCase()] || skill;
}

// Render AI Mentor Briefing & Domain Insights details
function renderAIMentorBriefing(domainData) {
  if (!domainData) return;

  // Language & Tools First
  const briefLangTools = document.getElementById("brief-lang-tools");
  if (briefLangTools) {
    briefLangTools.innerHTML = `Learn <strong>${escapeHTML(domainData.firstLanguage || '')}</strong> first as recommended by your mentor.
    <br><br><strong>Primary Tools:</strong> ${escapeHTML((domainData.tools || []).join(", "))}`;
  }

  // Core Skills Required
  const briefSkillsList = document.getElementById("brief-skills-list");
  if (briefSkillsList) {
    briefSkillsList.innerHTML = "";
    (domainData.skills || []).forEach(skill => {
      const badge = document.createElement("span");
      badge.className = "skill-badge";
      badge.style = "background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); color: var(--text-main); font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; display: inline-block;";
      badge.textContent = skill;
      briefSkillsList.appendChild(badge);
    });
  }

  // Project Recommendations
  const briefProjectsList = document.getElementById("brief-projects-list");
  if (briefProjectsList) {
    briefProjectsList.innerHTML = "";
    const allProjects = [];
    (domainData.phases || []).forEach(phase => {
      (phase.projects || []).forEach(p => {
        allProjects.push(p);
      });
    });
    // Take up to 3 projects
    allProjects.slice(0, 3).forEach(proj => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${escapeHTML(proj.title)}</strong>: ${escapeHTML(proj.description || proj.desc)}`;
      briefProjectsList.appendChild(li);
    });
  }

  // Placement & Practice Strategy
  const briefPlacementStrategy = document.getElementById("brief-placement-strategy");
  if (briefPlacementStrategy) {
    briefPlacementStrategy.textContent = domainData.placementStrategy?.resumeAdvice || "Focus on project quantification and GitHub hosting.";
  }

  // Where to practice
  const briefPracticePlatforms = document.getElementById("brief-practice-platforms");
  if (briefPracticePlatforms) {
    const platforms = (domainData.practicePlatforms || []).map(p => `<a href="${escapeHTML(p.url)}" target="_blank" style="color: var(--secondary); text-decoration: underline;">${escapeHTML(p.name)}</a>`);
    briefPracticePlatforms.innerHTML = platforms.join(", ") || "GitHub, Kaggle";
  }
}

// Render dynamic personal AI Mentor advice card
function renderAIMentorGuidance() {
  const domainKey = AppState.currentDomain;
  const domainData = CAREER_DOMAINS?.[domainKey];
  if (!domainData) return;

  const mentorName = domainData.mentorName || "AI Mentor";
  const specialty = domainData.mentorSpecialty || "Career Coaching";
  
  // Set mentor metadata
  const nameEl = document.getElementById("mentor-title-name");
  const taglineEl = document.getElementById("mentor-title-tagline");
  if (nameEl) nameEl.textContent = "AI Career Mentor";
  if (taglineEl) taglineEl.textContent = "";

  // Select appropriate avatar icon based on mentor
  const avatarBox = document.querySelector(".mentor-avatar-circle");
  if (avatarBox) {
    avatarBox.innerHTML = '<span class="pulse-ring"></span>';
    const icon = document.createElement("i");
    if (domainKey === 'software_engineer') icon.className = "fa-solid fa-laptop-code";
    else if (domainKey === 'data_scientist') icon.className = "fa-solid fa-chart-line";
    else if (domainKey === 'ai_ml') icon.className = "fa-solid fa-brain";
    else if (domainKey === 'data_analyst') icon.className = "fa-solid fa-chart-column";
    else icon.className = "fa-solid fa-user-astronaut";
    avatarBox.appendChild(icon);
  }

  // Generate personalized mentor greeting & advice
  const bubbleText = document.getElementById("mentor-guidance-bubble-text");
  let greeting = "";
  const student = AppState.studentName || "Student";
  const level = AppState.knowledgeLevel || "beginner";
  const skills = AppState.skills || [];
  const goals = AppState.goals || [];
  const primaryGoal = AppState.careerGoal || (goals[0] || "placement");

  // Determine active phase and active task
  let activePhaseTitle = "Phase 1";
  let nextTaskTitle = "Initial Setup";
  const activePhases = domainData.phases || [];
  let foundActive = false;
  
  for (let i = 0; i < activePhases.length; i++) {
    const nextTask = activePhases[i].tasks.find(t => !AppState.completedMilestones.includes(t.id));
    if (nextTask) {
      activePhaseTitle = activePhases[i].title;
      nextTaskTitle = nextTask.title;
      foundActive = true;
      break;
    }
  }
  if (!foundActive && activePhases.length > 0) {
    activePhaseTitle = activePhases[activePhases.length - 1].title;
    nextTaskTitle = "All Checkpoints Completed!";
  }

  if (level === "beginner") {
    greeting = `Welcome, **${student}**! As you are completely new to **${domainData.title}**, I will guide you step-by-step from absolute scratch.
    \nYour current focus should be **${activePhaseTitle}**. First, learn **${domainData.firstLanguage}** basics and the core concepts.
    \n**Action Plan**: Start with **${nextTaskTitle}**. Watch recommended channels like **${domainData.youtubeChannels?.[0]?.name || 'our YouTube picks'}** and practice on **${domainData.practicePlatforms?.[0]?.name || 'Kaggle'}**!`;
  } else {
    // Intermediate / Advanced
    const skippedPhases = level === "advanced" ? "Phases 1 & 2" : "Phase 1";
    greeting = `Hello, **${student}**! Since you already have tech experience, our **SkillVerse Personalization Engine** has restructured your learning path.
    \nWe skipped the beginner content in **${skippedPhases}** so you can dive straight into higher-level material in **${activePhaseTitle}**.
    \n**Expert Strategy**: Focus on your active checkpoint **${nextTaskTitle}** and construct complex portfolio projects. I highly recommend engaging in **${domainData.opportunities?.[0]?.title || 'hackathons'}** to lock in your placement preparation!`;
  }

  if (bubbleText) {
    bubbleText.innerHTML = formatMarkdown(greeting);
  }

  // Populate dynamic mentor badges
  const badgesBox = document.getElementById("mentor-adaptive-badges");
  if (badgesBox) {
    badgesBox.innerHTML = "";
    
    // Level Badge
    const lvlBadge = document.createElement("div");
    lvlBadge.className = "mentor-badge-item";
    lvlBadge.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> <span>Level: ${capitalize(level)}</span>`;
    badgesBox.appendChild(lvlBadge);

    // Goal Badge
    const goalBadge = document.createElement("div");
    goalBadge.className = "mentor-badge-item secondary";
    goalBadge.innerHTML = `<i class="fa-solid fa-bullseye"></i> <span>Goal: ${capitalize(primaryGoal)}</span>`;
    badgesBox.appendChild(goalBadge);

    // Skills Count Badge
    if (skills.length > 0) {
      const skillsBadge = document.createElement("div");
      skillsBadge.className = "mentor-badge-item success";
      skillsBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Skills Verified: ${skills.length}</span>`;
      badgesBox.appendChild(skillsBadge);
    }
  }

  // Setup the quick-chat trigger action
  const quickChatBtn = document.getElementById("btn-quick-chat-mentor");
  if (quickChatBtn) {
    quickChatBtn.onclick = () => {
      switchTab("mentor-chat");
      const chatInput = document.getElementById("chat-user-message");
      if (chatInput) {
        chatInput.value = `Hey ${mentorName}, I am working on the ${domainData.title} track at a ${level} level. Can you guide me through my active checkpoint: "${nextTaskTitle}"?`;
        chatInput.focus();
      }
    };
  }
}

// Mock Interview Prep Simulator Logic
let activeInterviewQuestions = [];
let currentInterviewQuestionIndex = 0;

function initInterviewSimulator() {
  const domainKey = AppState.currentDomain;
  const domainData = CAREER_DOMAINS?.[domainKey];
  if (!domainData || !domainData.placementStrategy || !domainData.placementStrategy.interviewPrep) {
    activeInterviewQuestions = [];
    document.getElementById("interview-question-text").textContent = "No mock interview questions loaded for this track.";
    return;
  }

  const difficultyFilter = document.getElementById("interview-difficulty-select").value;
  const rawQuestions = domainData.placementStrategy.interviewPrep;

  if (difficultyFilter === "all") {
    activeInterviewQuestions = rawQuestions;
  } else {
    activeInterviewQuestions = rawQuestions.filter(q => q.difficulty === difficultyFilter);
  }

  currentInterviewQuestionIndex = 0;
  if (activeInterviewQuestions.length === 0) {
    document.getElementById("interview-question-text").textContent = `No ${difficultyFilter} questions available for this domain.`;
    document.getElementById("interview-question-type").textContent = "N/A";
    document.getElementById("interview-question-difficulty").textContent = difficultyFilter;
  } else {
    loadInterviewQuestion(0);
  }
}

function loadInterviewQuestion(index) {
  if (index < 0 || index >= activeInterviewQuestions.length) return;
  currentInterviewQuestionIndex = index;

  const question = activeInterviewQuestions[index];
  document.getElementById("interview-question-text").textContent = question.question;
  document.getElementById("interview-question-type").textContent = `${(question.type || "TECHNICAL").toUpperCase()} QUESTION`;
  
  const diffBadge = document.getElementById("interview-question-difficulty");
  diffBadge.textContent = question.difficulty;
  diffBadge.className = `badge ${question.difficulty === 'easy' ? 'badge-success' : question.difficulty === 'medium' ? 'badge-warning' : 'badge-danger'}`;

  // Clear answer input and report
  document.getElementById("interview-answer-input").value = "";
  document.getElementById("interview-evaluation-report").classList.add("hidden");
  document.getElementById("interview-loader").classList.add("hidden");
}

function submitInterviewAnswer() {
  const answerInput = document.getElementById("interview-answer-input");
  const answer = answerInput ? answerInput.value.trim() : "";
  if (!answer) {
    showToast("Please type your response before submitting.", "warning");
    return;
  }

  const loader = document.getElementById("interview-loader");
  const report = document.getElementById("interview-evaluation-report");
  const submitBtn = document.getElementById("btn-submit-interview-answer");

  loader.classList.remove("hidden");
  report.classList.add("hidden");
  submitBtn.disabled = true;

  setTimeout(() => {
    loader.classList.add("hidden");
    submitBtn.disabled = false;

    const question = activeInterviewQuestions[currentInterviewQuestionIndex];
    if (!question) return;

    const keywords = question.keywords || [];
    const matched = [];
    const cleanAnswer = answer.toLowerCase();

    keywords.forEach(kw => {
      if (cleanAnswer.includes(kw.toLowerCase())) {
        matched.push(kw);
      }
    });

    // Score calculations
    const wordCount = answer.split(/\s+/).filter(w => w.length > 0).length;
    let score = 2.0; // base score if they wrote something

    if (wordCount < 10) {
      score = 1.0;
    } else if (wordCount > 30) {
      score += 1.0;
    } else if (wordCount > 60) {
      score += 2.0;
    }

    // Add points for each keyword match
    if (keywords.length > 0) {
      const matchRatio = matched.length / keywords.length;
      score += matchRatio * 6.0;
    }

    score = Math.min(10.0, Math.round(score * 10) / 10);

    // Dynamic AI feedback
    let feedback = "";
    if (score >= 8.5) {
      feedback = `Excellent response! You demonstrated strong conceptual clarity. Your explanation is structured and details precise technical parameters. You matched key metrics perfectly.`;
    } else if (score >= 6.5) {
      feedback = `Good answer, but it can be improved. You mentioned some core terms, but you should explain the mechanisms in more detail and include more keywords. Try to quantify your project results if applicable.`;
    } else {
      feedback = `Your answer is too brief or lacks key domain vocabulary. Focus on explaining *why* and *how* the concept works. Review the sample answer and keywords to strengthen your logic.`;
    }

    // Display evaluation
    document.getElementById("interview-score-badge").textContent = `${score.toFixed(1)} / 10`;
    document.getElementById("interview-score-badge").className = `badge ${score >= 8.0 ? 'badge-success' : score >= 5.0 ? 'badge-warning' : 'badge-danger'}`;
    document.getElementById("interview-feedback-text").textContent = feedback;

    const keywordsContainer = document.getElementById("interview-keywords-matched");
    keywordsContainer.innerHTML = "";
    if (matched.length === 0) {
      keywordsContainer.innerHTML = `<span style="font-size: 0.75rem; color: var(--danger); font-style: italic;">No key concepts matched. Try using words like: ${keywords.slice(0, 3).join(", ")}.</span>`;
    } else {
      matched.forEach(kw => {
        const badge = document.createElement("span");
        badge.className = "skill-badge";
        badge.style = "background: rgba(34, 211, 238, 0.08); border: 1px solid rgba(34, 211, 238, 0.2); color: var(--cyan-glow); font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; display: inline-block;";
        badge.textContent = kw;
        keywordsContainer.appendChild(badge);
      });
    }

    report.classList.remove("hidden");

    // Save score and unlock badges
    if (!AppState.interviewScores) AppState.interviewScores = [];
    AppState.interviewScores.push(score);
    
    // Award XP
    addXP(100);

    // Unlock badges
    unlockBadge("interview_novice");

    // Check for Interview Ace
    const avgScore = AppState.interviewScores.reduce((a, b) => a + b, 0) / AppState.interviewScores.length;
    if (AppState.interviewScores.length >= 2 && avgScore >= 8.0) {
      unlockBadge("interview_ace");
    }

    saveStateToLocalStorage();
  }, 1200);
}

function renderActiveSkills() {
  renderAIMentorGuidance();
  updateProgressTracker();
}

function updateResumeScoreWidget() {
  const domainData = CAREER_DOMAINS?.[AppState.currentDomain] || {};
  const targetList = domainData.skills || [];
  const userSkills = AppState.skills;
  
  // Calculate matched percentage
  const matched = targetList.filter(s => userSkills.includes(s));
  const percent = targetList.length > 0 ? Math.round((matched.length / targetList.length) * 100) : 0;

  // Render score widget
  const scoreRing = document.getElementById("resume-score-ring");
  const scoreVal = document.getElementById("resume-score-value");
  const ratingText = document.getElementById("resume-score-rating-text");

  if (scoreRing) {
    scoreRing.style.setProperty("--percent", String(percent));
    scoreRing.style.background = `conic-gradient(var(--secondary) calc(${percent} * 1%), var(--code-bg) 0)`;
  }
  if (scoreVal) scoreVal.textContent = `${percent}%`;

  if (ratingText) {
    if (percent >= 80) {
      ratingText.className = "text-success";
      ratingText.textContent = "Excellent Match";
      unlockBadge("resume_verified");
    } else if (percent >= 50) {
      ratingText.className = "text-orange";
      ratingText.textContent = "Fair Match";
    } else {
      ratingText.className = "text-red";
      ratingText.textContent = "Needs Attention";
    }
  }
}



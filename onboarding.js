// SkillVerse AI Future Learning Ecosystem - Onboarding controller

document.addEventListener("DOMContentLoaded", function() {
  console.log("[Onboarding] Onboarding console script initialized.");

  // Check auth theme preference
  const savedTheme = localStorage.getItem("skillverse_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // States
  let selectedDomain = "software_engineer";
  let selectedLevel = "beginner";
  
  // Elements
  const alertBox = document.getElementById("validation-alert");
  const alertText = document.getElementById("validation-alert-text");
  const learningStyle = document.getElementById("learning-style");

  // Step Indicators
  const steps = document.querySelectorAll(".step-indicator");
  const panes = document.querySelectorAll(".onboarding-step-pane");

  // Step 1: Domains Select
  const domainCards = document.querySelectorAll(".domain-select-card");
  domainCards.forEach(card => {
    card.addEventListener("click", function() {
      domainCards.forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      selectedDomain = this.getAttribute("data-domain");
      console.log(`[Onboarding] Step 1: Selected career track domain: ${selectedDomain}`);
    });
  });

  // Step 2: Levels Select
  const levelCards = document.querySelectorAll(".level-select-card");
  levelCards.forEach(card => {
    card.addEventListener("click", function() {
      levelCards.forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      selectedLevel = this.getAttribute("data-level");
      console.log(`[Onboarding] Step 2: Selected knowledge tier level: ${selectedLevel}`);
    });
  });

  // Step 3: Sliders Value Updates
  const codingConfidence = document.getElementById("coding-confidence");
  const codingConfVal = document.getElementById("coding-conf-val");
  codingConfidence.addEventListener("input", function() {
    codingConfVal.textContent = this.value + "/10";
  });

  const commConfidence = document.getElementById("comm-confidence");
  const commConfVal = document.getElementById("comm-conf-val");
  commConfidence.addEventListener("input", function() {
    commConfVal.textContent = this.value + "/10";
  });

  // Checkbox goal styling updates & state logging
  const goalCheckboxes = document.querySelectorAll('input[name="onboarding-goals"]');
  goalCheckboxes.forEach(cb => {
    cb.addEventListener("change", function() {
      const cardContent = this.nextElementSibling;
      if (this.checked) {
        cardContent.classList.add("active");
        cardContent.style.borderColor = "var(--primary)";
        cardContent.style.boxShadow = "0 0 12px var(--primary-glow)";
        cardContent.style.background = "linear-gradient(135deg, var(--input-bg), rgba(168, 85, 247, 0.04))";
      } else {
        cardContent.classList.remove("active");
        cardContent.style.borderColor = "var(--border-panel)";
        cardContent.style.boxShadow = "none";
        cardContent.style.background = "var(--input-bg)";
      }
      
      const currentSelected = Array.from(document.querySelectorAll('input[name="onboarding-goals"]:checked')).map(c => c.value);
      console.log("[Onboarding] Step 4: Active selected goals:", currentSelected);
    });

    // Trigger initial state styling
    if (cb.checked) {
      // Force change listener execution
      const cardContent = cb.nextElementSibling;
      cardContent.classList.add("active");
      cardContent.style.borderColor = "var(--primary)";
      cardContent.style.boxShadow = "0 0 12px var(--primary-glow)";
      cardContent.style.background = "linear-gradient(135deg, var(--input-bg), rgba(168, 85, 247, 0.04))";
    }
  });

  // Step navigation buttons
  const nextBtns = document.querySelectorAll(".btn-next");
  nextBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const targetStep = parseInt(this.getAttribute("data-next"));
      console.log(`[Onboarding] Proceed button clicked. Target next step is Step ${targetStep}`);
      
      // Clear alert
      alertBox.classList.add("hidden");

      // Validate Step 3 (CGPA inputs)
      if (targetStep === 4) {
        const cgpaVal = parseFloat(document.getElementById("student-cgpa").value);
        console.log(`[Onboarding] Step 3 Validation: CGPA = ${cgpaVal}`);
        if (isNaN(cgpaVal) || cgpaVal < 0 || cgpaVal > 100) {
          alertText.textContent = "Please enter a valid academic CGPA or Percentage rating (0 to 100).";
          alertBox.classList.remove("hidden");
          console.warn("[Onboarding] Step 3 Validation Failed: Invalid CGPA.");
          return;
        }
      }

      // Validate Step 4 (Goals selected)
      if (targetStep === 5) {
        const checkedGoals = document.querySelectorAll('input[name="onboarding-goals"]:checked');
        console.log(`[Onboarding] Step 4 Validation: checkedGoals count = ${checkedGoals.length}`);
        if (checkedGoals.length === 0) {
          alertText.textContent = "Please select at least one target professional goal.";
          alertBox.classList.remove("hidden");
          console.warn("[Onboarding] Step 4 Validation Failed: No goals selected.");
          return;
        }
        
        // Trigger simulated synthesis logging
        startSynthesis();
      }

      // Proceed to next pane
      switchPane(targetStep);
    });
  });

  const prevBtns = document.querySelectorAll(".btn-prev");
  prevBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const targetStep = parseInt(this.getAttribute("data-prev"));
      console.log(`[Onboarding] Back button clicked. Target prev step is Step ${targetStep}`);
      switchPane(targetStep);
    });
  });

  function switchPane(stepNum) {
    console.log(`[Onboarding] Switch pane called for Step ${stepNum}`);
    
    // Update Indicators
    steps.forEach(ind => {
      const s = parseInt(ind.getAttribute("data-step"));
      if (s === stepNum) {
        ind.className = "step-indicator active";
      } else if (s < stepNum) {
        ind.className = "step-indicator completed";
      } else {
        ind.className = "step-indicator";
      }
    });

    // Toggle Panes
    panes.forEach(pane => {
      pane.classList.remove("active");
      if (pane.id === `onboarding-step-${stepNum}`) {
        pane.classList.add("active");
      }
    });
  }

  // Step 5: Synthesis Simulation Logs
  function startSynthesis() {
    console.log("[Onboarding] startSynthesis function triggered.");
    const user = Auth.getCurrentUser();
    if (!user) {
      console.error("[Onboarding] startSynthesis failed: User session not found.");
      return;
    }

    const term = document.getElementById("onboarding-terminal-logs");
    const loaderText = document.getElementById("onboarding-loader-text");
    const launchBtn = document.getElementById("btn-onboarding-launch");

    term.textContent = "";

    // Define target skills matching role
    const roleTargetSkills = {
      data_analyst: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Statistics", "Pandas", "NumPy", "Data Cleaning", "A/B Testing"],
      data_scientist: ["Python", "R", "Machine Learning", "Statistics", "SQL", "Pandas", "Scikit-Learn", "Deep Learning", "Data Visualization", "Jupyter"],
      cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Terraform", "CI/CD", "Bash", "Cloud Security", "Networking"],
      software_engineer: ["Java", "C++", "Python", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "GitHub", "APIs", "Docker", "System Design", "Data Structures & Algorithms", "HTML5", "CSS3", "TypeScript", "Tailwind CSS"],
      cybersecurity: ["Network penetration", "OWASP", "firewalls", "encryption", "Linux", "Wireshark", "Network Security", "Metasploit", "Bash"],
      ui_ux: ["Figma", "Wireframing", "Prototyping", "User Research", "Typography", "Design Systems", "Figma auto-layouts", "User Flows"],
      business_analyst: ["Excel", "Power BI", "Tableau", "SQL", "Agile", "Scrum", "User Stories", "Requirements Gathering"],
      product_manager: ["Product Strategy", "Roadmapping", "RICE Prioritization", "User Research", "Agile/Scrum", "SQL", "AARRR Metrics", "A/B Testing", "Backlog Grooming", "Wireframing"],
      mechanical_design: ["AutoCAD", "SolidWorks", "3D CAD", "stress analysis", "DFM rules", "prototyping", "FEA"],
      civil_services: ["Polity", "Geography", "History", "Economy", "Current Affairs", "Writing", "Public Policy"],
      psu: ["Mathematics", "GATE Papers", "Subject Core", "Numerical Problems", "Interviews"],
      entrepreneur: ["Lean Canvas", "MVP", "SaaS", "Financial Modeling", "Pitching", "Cap Tables", "Venture Capital"]
    };

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
        "scikit-learn": "Scikit-Learn",
        "aws": "AWS",
        "azure": "Azure",
        "kubernetes": "Kubernetes",
        "linux": "Linux",
        "terraform": "Terraform",
        "ci/cd": "CI/CD",
        "figma": "Figma"
      };
      return map?.[skill.toLowerCase()] || skill;
    }

    const rawSkillsInput = document.getElementById("student-skills").value.trim();
    const rawResumeInput = document.getElementById("student-resume").value.trim();
    
    const skillsSet = new Set();
    const interests = [];
    
    if (rawSkillsInput) {
      rawSkillsInput.split(",").forEach(s => {
        const trimmed = s.trim();
        if (trimmed) {
          skillsSet.add(formatSkillName(trimmed));
          interests.push(trimmed);
        }
      });
    }
    
    let resumeMatchedCount = 0;
    if (rawResumeInput) {
      const cleanResume = rawResumeInput.toLowerCase();
      const domainTargetSkills = roleTargetSkills?.[selectedDomain] || roleTargetSkills.software_engineer;
      domainTargetSkills.forEach(skill => {
        const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, 'i');
        if (regex.test(cleanResume)) {
          skillsSet.add(formatSkillName(skill));
          resumeMatchedCount++;
        }
      });
    }
    
    const userSkills = Array.from(skillsSet);
    
    const logs = [
      `[SYS] Initializing SkillVerse AI Neural Link...`,
      `[AUTH] Authenticating profile: ${user.name} (${user.email})`,
      `[DATABASE] Mapping curriculum node library...`,
      `[ENGINE] Targeted Career Track selected: ${selectedDomain.toUpperCase()}`,
      `[ADAPTIVE] Customizing syllabus milestones for knowledge tier: ${selectedLevel.toUpperCase()}`
    ];

    if (userSkills.length > 0) {
      logs.push(`[SKILLS] Detected and verified ${userSkills.length} starting skills.`);
    }
    if (rawResumeInput) {
      logs.push(`[CV_PARSER] Extracting profile character streams...`);
      logs.push(`[CV_PARSER] Matched ${resumeMatchedCount} keywords for target track.`);
    }

    logs.push(
      `[METRIC] Indexing academic profile. CGPA rating recorded.`,
      `[METRIC] Registering coding confidence: ${codingConfidence.value}/10`,
      `[METRIC] Registering communication score: ${commConfidence.value}/10`,
      `[METRIC] Injecting ${learningStyle.value} learning modules...`,
      `[GOALS] Goal nodes indexed: ${Array.from(document.querySelectorAll('input[name="onboarding-goals"]:checked')).map(c => c.value.toUpperCase()).join(", ")}`,
      `[COMPILING] Assembling weekly curriculum schedules...`,
      `[COMPILING] Building AI Mentor chatbot specialty parameters...`,
      `[COMPILING] Readying coding playground terminals...`,
      `[COMPILING] Connecting resume ATS scanning arrays...`,
      `[SUCCESS] Career Guidance personalization matrix generated.`,
      `[SYS] Ready to boot system dashboard.`
    );

    let logIdx = 0;
    
    function printNextLog() {
      if (logIdx < logs.length) {
        term.textContent += logs[logIdx] + "\n";
        term.scrollTop = term.scrollHeight;
        
        // Update spinner loader message based on log progress
        if (logIdx === 2) loaderText.textContent = "Scanning industry databases...";
        if (logIdx === 6) loaderText.textContent = "Personalizing learning roadmap...";
        if (logIdx === 10) loaderText.textContent = "Connecting chatbot modules...";
        if (logIdx === 13) loaderText.textContent = "Synthesizing simulator keys...";

        logIdx++;
        setTimeout(printNextLog, 300);
      } else {
        // Stop loader and show start button
        console.log("[Onboarding] Simulated synthesis completed successfully.");
        const loader = document.querySelector(".onboarding-step-pane#onboarding-step-5 .scan-loader");
        if (loader) loader.style.display = "none";
        launchBtn.classList.remove("hidden");
      }
    }

    setTimeout(printNextLog, 200);

    // Save changes when compilation finishes
    launchBtn.addEventListener("click", function() {
      console.log("[Onboarding] Launch Core dashboard click detected.");
      
      // Gather goals
      const goals = Array.from(document.querySelectorAll('input[name="onboarding-goals"]:checked')).map(cb => cb.value);
      
      const updates = {
        currentDomain: selectedDomain,
        knowledgeLevel: selectedLevel,
        cgpa: parseFloat(document.getElementById("student-cgpa").value),
        codingConfidence: parseInt(codingConfidence.value),
        commConfidence: parseInt(commConfidence.value),
        learningStyle: learningStyle.value,
        goals: goals,
        careerGoal: goals[0] || "placement",
        skills: userSkills,
        interests: interests,
        resumeText: rawResumeInput,
        onboardingCompleted: true
      };

      console.log("[Onboarding] Saving user customization variables to LocalStorage session:", updates);

      // Save data back to localStorage user session
      Auth.updateCurrentUser(updates);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    });
  }

});

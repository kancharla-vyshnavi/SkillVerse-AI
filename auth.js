// SkillVerse AI Future Learning Ecosystem - Authentication & Routing Manager

const Auth = {
  // Key names in LocalStorage
  KEYS: {
    USERS: "skillverse_users",
    LOGGED_IN: "skillverse_logged_in_user"
  },

  // Get all registered users
  getUsers() {
    try {
      const users = localStorage.getItem(this.KEYS.USERS);
      return users ? JSON.parse(users) : [];
    } catch (e) {
      console.error("Error reading users database:", e);
      return [];
    }
  },

  // Save users array
  saveUsers(users) {
    try {
      localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
    } catch (e) {
      console.error("Error saving users database:", e);
    }
  },

  // Get current logged-in user email
  getLoggedInEmail() {
    return localStorage.getItem(this.KEYS.LOGGED_IN);
  },

  // Get full user object of the current logged-in user
  getCurrentUser() {
    const email = this.getLoggedInEmail();
    if (!email) return null;
    const users = this.getUsers();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  // Update current user's profile and progress state
  updateCurrentUser(updates) {
    const email = this.getLoggedInEmail();
    if (!email) return false;
    
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (userIndex === -1) return false;
    
    // Merge updates
    users[userIndex] = {
      ...users[userIndex],
      ...updates
    };
    
    this.saveUsers(users);
    return true;
  },

  // Check if session exists
  isAuthenticated() {
    return !!this.getLoggedInEmail();
  },

  // Check if onboarding is done
  isOnboarded() {
    const user = this.getCurrentUser();
    return user ? !!user.onboardingCompleted : false;
  },

  // Sign up a new student
  signUp(name, email, password, college, branch, year) {
    const users = this.getUsers();
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check duplication
    if (users.some(u => u.email.toLowerCase() === normalizedEmail)) {
      throw new Error("This email is already registered.");
    }
    
    // Create new user object
    const newUser = {
      name: name.trim(),
      email: normalizedEmail,
      password: password, // In production, this would be hashed. For this frontend-only, simple storage is fine.
      college: college.trim(),
      branch: branch,
      year: year,
      onboardingCompleted: false,
      
      // Default career stats & states (moved into user object for personalization)
      knowledgeLevel: "beginner",
      skills: [],
      interests: [],
      careerGoal: "placement",
      currentDomain: null,
      completedMilestones: [],
      challengesSolved: [],
      unlockedBadges: [],
      streak: 1,
      xp: 0,
      lastActiveDate: new Date().toDateString(),
      
      // Custom roadmap recommendations cached on onboarding
      personalizedRoadmap: null
    };
    
    users.push(newUser);
    this.saveUsers(users);
    
    // Log in automatically after signup
    localStorage.setItem(this.KEYS.LOGGED_IN, normalizedEmail);
    return newUser;
  },

  // Log in an existing student
  logIn(email, password, rememberMe = false) {
    const users = this.getUsers();
    const normalizedEmail = email.trim().toLowerCase();
    
    const user = users.find(u => u.email.toLowerCase() === normalizedEmail && u.password === password);
    if (!user) {
      throw new Error("Invalid email or password.");
    }
    
    localStorage.setItem(this.KEYS.LOGGED_IN, normalizedEmail);
    
    // Update daily streak check on login
    this.updateStreak(user);
    
    return user;
  },

  // Log out
  logOut() {
    localStorage.removeItem(this.KEYS.LOGGED_IN);
    window.location.href = "login.html";
  },

  // Update streak if logged in on a new day
  updateStreak(user) {
    const today = new Date().toDateString();
    const lastActive = user.lastActiveDate;
    
    if (lastActive !== today) {
      let streak = user.streak || 0;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastActive === yesterday.toDateString()) {
        streak += 1;
      } else {
        streak = 1; // reset streak if a day was missed
      }
      
      this.updateCurrentUser({
        streak: streak,
        lastActiveDate: today
      });
    }
  },

  // Initialize demo data if no users exist
  initDemoData() {
    const users = this.getUsers();
    if (users.length === 0) {
      // Add a dummy account for easy evaluation
      this.signUp(
        "Alex Carter",
        "alex@skillverse.ai",
        "password123",
        "SkillVerse Institute of Technology",
        "Computer Science",
        "3rd Year"
      );
      // Reset logged in state so we don't automatically log into demo
      localStorage.removeItem(this.KEYS.LOGGED_IN);
    }
  },

  // Central Page Routing Guard
  guard() {
    this.initDemoData();
    
    const path = window.location.pathname.toLowerCase();
    const pageName = path.substring(path.lastIndexOf('/') + 1);
    
    const isLoginPage = pageName === "login.html";
    const isSignupPage = pageName === "signup.html";
    const isOnboardingPage = pageName === "onboarding.html";
    const isLandingPage = pageName === "index.html" || pageName === "";
    
    const authenticated = this.isAuthenticated();
    const onboarded = this.isOnboarded();
    
    if (!authenticated) {
      // Not logged in: allow landing, login, signup. Block dashboard, onboarding, profile.
      if (!isLoginPage && !isSignupPage && !isLandingPage) {
        window.location.href = "login.html";
      }
    } else {
      // Logged in:
      if (!onboarded) {
        // Logged in but not onboarded: force them to stay in onboarding.
        if (!isOnboardingPage) {
          window.location.href = "onboarding.html";
        }
      } else {
        // Logged in and onboarded: block login, signup, onboarding. Redirect them to dashboard.
        if (isLoginPage || isSignupPage || isOnboardingPage) {
          window.location.href = "dashboard.html";
        }
      }
    }
  }
};

// Execute Guard immediately on script load
Auth.guard();

// Dynamic Neon Floating Background Injector
function injectNeonBackground() {
  if (document.getElementById("neon-bg-container")) return;

  const container = document.createElement("div");
  container.id = "neon-bg-container";
  container.className = "neon-bg-container";
  
  const blob1 = document.createElement("div");
  blob1.className = "neon-blob blob-cyan";
  
  const blob2 = document.createElement("div");
  blob2.className = "neon-blob blob-blue";
  
  const blob3 = document.createElement("div");
  blob3.className = "neon-blob blob-violet";

  const blob4 = document.createElement("div");
  blob4.className = "neon-blob blob-aqua";
  
  container.appendChild(blob1);
  container.appendChild(blob2);
  container.appendChild(blob3);
  container.appendChild(blob4);

  // Subtle animated particles/stars
  const starsContainer = document.createElement("div");
  starsContainer.className = "neon-stars-container";
  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "neon-star";
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 8}s`;
    star.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
    starsContainer.appendChild(star);
  }
  container.appendChild(starsContainer);
  
  document.body.appendChild(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectNeonBackground);
} else {
  injectNeonBackground();
}



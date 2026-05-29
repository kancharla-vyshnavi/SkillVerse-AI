// SkillVerse AI Future Learning Ecosystem Database

// Globally available helper to format domain names
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
    entrepreneur: "Entrepreneur / Startup Founder",
    data_analyst: "Data Analyst"
  };
  return mapping?.[domain] || domain;
}

const CAREER_DOMAINS = {
  software_engineer: {
    title: "Software Developer / Software Engineer",
    subtitle: "Design, build, and maintain robust software systems and applications.",
    description: "Software Engineers apply computer science principles to design, develop, test, and maintain software applications. They work with diverse languages, frameworks, and system architectures to solve complex computational problems.",
    salaryRoadmap: "Entry: ₹4-8 LPA | Mid-Level: ₹10-18 LPA | Senior: ₹20-40 LPA | Lead: ₹45+ LPA",
    demand: "Extremely high globally; massive hiring by product companies, startups, and service MNCs in India (Bengaluru, Pune, Hyderabad, Gurgaon) and abroad.",
    futureScope: "Excellent future scope with cloud-native applications, serverless computing, API-driven architectures, and AI-assisted development paradigms.",
    remoteOpportunities: "High (75%+ of modern software engineering roles support hybrid or full remote work setups).",
    firstLanguage: "Java, C++, Python, or JavaScript",
    timeEstimate: "5 - 8 Months",
    skills: ["Java", "C++", "Python", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "GitHub", "APIs", "Docker", "System Design", "Data Structures & Algorithms"],
    tools: ["VS Code", "Git", "Docker", "Postman", "IntelliJ IDEA", "Terminal", "AWS Console"],
    concepts: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms (DSA)", "RESTful APIs", "System Design (Lld/Hld)", "Microservices", "CI/CD Pipelines"],
    freePlatforms: ["Harvard CS50", "freeCodeCamp", "GeeksforGeeks", "Udemy (Free Tier)", "NPTEL", "Coursera (Audit Mode)"],
    youtubeChannels: [
      { name: "CodeWithHarry", url: "https://www.youtube.com/@CodeWithHarry", desc: "Outstanding tutorials in Hindi covering web development, Python, C++, and Java." },
      { name: "Apna College", url: "https://www.youtube.com/@ApnaCollegeOfficial", desc: "Premium quality placement prep, DSA in Java/C++, and full stack roadmaps." },
      { name: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp", desc: "Massive library of 10+ hour comprehensive tutorials on every programming language." },
      { name: "Hitesh Choudhary", url: "https://www.youtube.com/@HiteshChoudharydotcom", desc: "Great breakdowns of modern dev tools, tech careers, and JavaScript libraries." },
      { name: "Traversy Media", url: "https://www.youtube.com/@TechGuyWeb", desc: "Excellent crash courses on frontend frameworks, HTML/CSS, and backend setups." }
    ],
    practicePlatforms: [
      { name: "LeetCode", url: "https://leetcode.com", desc: "Standard practice playground for coding interviews and DSA." },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org", desc: "Topic-wise study articles and interactive coding exercises." },
      { name: "GitHub", url: "https://github.com", desc: "Host projects, practice Git commits, and collaborate on open source." }
    ],
    mentorName: "Mentor Harry",
    mentorSpecialty: "Full Stack & System Scaling",
    opportunities: [
      { type: "hackathon", title: "Smart India Hackathon (SIH)", desc: "National-level hackathon solving real government department problems with software.", meta: "Annual event • Government of India" },
      { type: "internship", title: "Software Engineer Intern - Google Step", desc: "Excellent internship program targeting 2nd/3rd-year engineering students.", meta: "Summer • Paid • Bengaluru/Hyderabad" },
      { type: "hackathon", title: "Google Summer of Code (GSoC)", desc: "Global program focused on bringing student developers into open source software development.", meta: "Summer • Remote stipend" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Advanced OOP & Basic DSA", desc: "Master C++/Java/Python classes, inheritance, polymorphism, recursion, and initial sorting algorithms.", topics: ["Polymorphism", "Recursion", "Binary Search"], phase: 1 },
      { week: 2, title: "Week 3-4: Linear Data Structures", desc: "Implement and practice operations on Linked Lists, Stacks, Queues, and hashing concepts.", topics: ["Linked Lists", "Stacks & Queues", "Hash Maps"], phase: 1 },
      { week: 3, title: "Week 5-6: Web Core & Backend Basics", desc: "Set up frontend HTML/CSS/JS interfaces and build REST API endpoints with Node/Express.", topics: ["DOM Scripting", "REST Routing", "Express Middleware"], phase: 2 },
      { week: 4, title: "Week 7-8: Databases & React UI Integration", desc: "Model relational SQL databases, connect Node backend, and build dynamic state UI with React.", topics: ["SQL Joins", "React Hooks", "State Management"], phase: 2 },
      { week: 5, title: "Week 9-10: Containers & CI/CD Pipelines", desc: "Create Dockerfiles, containerize your multi-service app, and build GitHub Action pipelines.", topics: ["Docker Compose", "YAML Workflows", "Vercel/Render Hosting"], phase: 3 },
      { week: 6, title: "Week 11-12: System Design & Mock Prep", desc: "Study caching, load balancers, database sharding, and perform mock coding interviews.", topics: ["Caching (Redis)", "Horizontal Scaling", "DSA Mock Drills"], phase: 4 }
    ],
    phases: [
      {
        id: "se_p1",
        title: "Programming Fundamentals & DSA (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Build a strong programming foundation. Master basic language syntax and linear data structures.",
        skillsCovered: ["C++", "Java", "Python", "Git", "Basic DSA"],
        tasks: [
          { id: "se_p1_t1", title: "Learn variables, loops, arrays, and functions in C++/Java", done: false, description: "Solidify syntax base." },
          { id: "se_p1_t2", title: "Master recursion, binary search, and basic sorting algorithms", done: false, description: "Critical analytical thinking." },
          { id: "se_p1_t3", title: "Implement basic Stack and Queue structures from scratch", done: false, description: "Understand linear memory structures." }
        ],
        projects: [
          { title: "Task Manager CLI App", desc: "Create a console-based task manager allowing task CRUD, stored in local text files using file stream libraries." },
          { title: "Recursive Maze Solver", desc: "Build a program that visualizes backtracking algorithms finding paths through 2D grids." }
        ]
      },
      {
        id: "se_p2",
        title: "Web Development & Databases (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Move from scripting to building full-stack web applications. Connect client interfaces to servers and databases.",
        skillsCovered: ["HTML5", "CSS3", "JavaScript", "React", "SQL", "APIs"],
        tasks: [
          { id: "se_p2_t1", title: "Build responsive frontend layouts using CSS Flexbox and grid", done: false, description: "Master user layouts." },
          { id: "se_p2_t2", title: "Write REST API routing logic using Node.js and Express", done: false, description: "Server request handling." },
          { id: "se_p2_t3", title: "Design SQL database schemas with relational primary/foreign keys", done: false, description: "Relational modeling." }
        ],
        projects: [
          { title: "E-Commerce Product Center", desc: "React dashboard displaying items fetched from an Express server linked to a local SQL/MongoDB database." },
          { title: "Interactive Chat Interface", desc: "Single-page dashboard allowing messages log rendering, utilizing mock WebSocket connections." }
        ]
      },
      {
        id: "se_p3",
        title: "Docker, CI/CD, & Backend Scaling (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Integrate deployment tools and container architectures. Build secure application endpoints.",
        skillsCovered: ["Docker", "Node.js", "Express", "MongoDB", "GitHub Actions", "JWT"],
        tasks: [
          { id: "se_p3_t1", title: "Write Dockerfiles and docker-compose configurations", done: false, description: "Containerize multi-service applications." },
          { id: "se_p3_t2", title: "Implement JSON Web Token (JWT) session authorizations", done: false, description: "Secure route authorization." },
          { id: "se_p3_t3", title: "Create custom CI/CD pipelines using GitHub Actions workflows", done: false, description: "Automate code verification." }
        ],
        projects: [
          { title: "Containerized Task Pipeline API", desc: "A secure task-tracking API with auth gateways, fully packaged in Docker images with automatic build pipelines." },
          { title: "Global File Metadata service", desc: "Build an API backend utilizing AWS S3 SDK for file upload storage and metadata logging." }
        ]
      },
      {
        id: "se_p4",
        title: "System Design & Placement Readiness (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Prepare for high-level technical screenings by studying scalable architectures and practicing complex system requirements.",
        skillsCovered: ["System Design", "Microservices", "Caching", "Algorithms", "Mock Screening"],
        tasks: [
          { id: "se_p4_t1", title: "Study LLD / HLD principles (caching, load balancing, sharding)", done: false, description: "Design systems for millions of requests." },
          { id: "se_p4_t2", title: "Solve advanced algorithmic challenges (trees, graphs, DP) on LeetCode", done: false, description: "Ace code challenges." },
          { id: "se_p4_t3", title: "Review mock interviews and optimize resume keyword alignment", done: false, description: "Final placement check." }
        ],
        projects: [
          { title: "High-Throughput URL Shortener", desc: "Create a scalable shortener backend utilizing Redis caching layers and custom redirection database sharding." },
          { title: "Distributed Web Scraper Node", desc: "Implement worker queues to scrape real estate data asynchronously across distributed node architectures." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "Quantify your projects (e.g., 'Containerized fullstack app reducing setup time by 40%'). Put links to deployed live URLs and GitHub code repositories.",
      hackathons: "Engage in global hackathons and build working MVPs. Prioritize fullstack roles to showcase complete architectural understanding.",
      internships: "Apply for roles like 'Software Engineer Intern', 'Backend Intern', or 'QA Engineer Intern' at technology product firms.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between a Process and a Thread.",
          sampleAnswer: "A process is an independent execution unit with its own dedicated memory space, whereas a thread is a subset of a process that shares memory and resources with other threads in the same process.",
          keywords: ["memory", "shares", "independent", "subset", "process", "thread"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is database indexing and how does it improve lookup speed?",
          sampleAnswer: "Database indexing creates a separate data structure (typically a B-Tree) that maps column values to row references. This allows lookups in logarithmic time instead of scanning every row in a sequential scan.",
          keywords: ["structure", "b-tree", "references", "lookup", "logarithmic", "index"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "Explain the CAP theorem and the trade-offs between Availability and Consistency.",
          sampleAnswer: "The CAP theorem states that a distributed system can guarantee at most two out of three: Consistency, Availability, and Partition Tolerance. Under network partitions, we must trade consistency (returning errors to prevent stale data) for availability (serving stale data).",
          keywords: ["distributed", "consistency", "availability", "partition tolerance", "trade-off", "stale"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to work as a Software Engineer?",
          sampleAnswer: "I enjoy using computational logic to solve real-world problems and creating scalable applications. Designing code feels like assembling a complex puzzle that immediately creates value.",
          keywords: ["solve", "logic", "value", "applications", "puzzle", "engineer"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you handle disagreement with a tech lead or senior engineer on system implementation?",
          sampleAnswer: "I present my design with performance benchmark arguments. If they choose another path due to constraints, I align with their decision to maintain project velocity.",
          keywords: ["benchmark", "arguments", "align", "constraints", "decision", "velocity"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a time you had to debug a critical issue in production right before a release.",
          sampleAnswer: "I isolated the error by scanning system logs, reproduced it locally in a sandbox, deployed a hotfix to a staging environment for validation, and rolled it out while communicating updates clearly to stakeholders.",
          keywords: ["logs", "hotfix", "isolated", "staging", "stakeholders", "release"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "se_chall_1",
        title: "Reverse a Linked List",
        instruction: "Write a JavaScript function `reverseList(head)` that takes the head node of a singly linked list and returns the new head of the reversed list.",
        starterCode: "function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  // Implement list reversal loop\n  return prev;\n}",
        testDescription: "Should include a loop updating references: next, current, and previous.",
        roadmapTaskId: "se_p1_t3",
        verify: function(code) {
          if (code.includes("prev") && code.includes("curr") && code.includes("next") && code.includes("=") && (code.includes("while") || code.includes("for"))) {
            return { success: true, message: "Perfect! You successfully implemented the in-place linked list reversal algorithm." };
          }
          return { success: false, message: "Check your logic. You must loop through nodes, tracking current, next, and updating the pointers." };
        }
      },
      {
        id: "se_chall_2",
        title: "REST Status Route",
        instruction: "Write the code for an Express route handler `app.get('/health', ...)` that sends a 200 status code and a JSON response `{ status: 'ok', server: 'online' }`.",
        starterCode: "app.get('/health', (req, res) => {\n  // Send JSON status response\n});",
        testDescription: "Should call res.json() with keys status: 'ok' and server: 'online'.",
        roadmapTaskId: "se_p2_t2",
        verify: function(code) {
          const clean = code.replace(/\s+/g, '');
          if ((clean.includes("res.json") || clean.includes("res.send")) && clean.includes("ok") && clean.includes("online")) {
            return { success: true, message: "Excellent! Standard JSON responses verify server state dynamically." };
          }
          return { success: false, message: "Make sure you call res.json() passing the exact keys: status: 'ok' and server: 'online'." };
        }
      }
    ]
  },

  data_analyst: {
    title: "Data Analyst",
    subtitle: "Turn data into insights to solve real-world business problems.",
    description: "Data Analysts gather, clean, and study data to find patterns and trends that help organizations make smart choices. They write SQL queries, create visualizations in Power BI/Tableau, and model databases.",
    salaryRoadmap: "Entry: ₹4-7 LPA | Mid-Level: ₹8-14 LPA | Senior: ₹16-28 LPA | Lead: ₹32+ LPA",
    demand: "Extremely high globally; startups, financial companies, consulting firms, and giants like Google, Meta, and Amazon hire heavily in India (Bengaluru, Pune, Hyderabad, Gurgaon) and globally.",
    futureScope: "Outstanding growth; transitioning towards generative BI dashboards, automated analytics pipelines, and AI-powered insights reporting.",
    remoteOpportunities: "High (65%+ of data analyst jobs support remote work models).",
    firstLanguage: "Python & SQL",
    timeEstimate: "3 - 5 Months",
    skills: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Statistics", "Pandas", "NumPy", "Data Cleaning", "A/B Testing", "Data Analysis", "Git", "GitHub"],
    tools: ["Microsoft Excel", "Power BI / Tableau", "SQL Server / PostgreSQL / MySQL", "Jupyter Notebooks", "Git", "GitHub"],
    concepts: ["Relational Database Queries", "Exploratory Data Analysis (EDA)", "Key Performance Indicators (KPIs)", "Dashboard Prototyping", "Probability & statistics basics", "A/B Testing"],
    freePlatforms: ["Kaggle Learn", "DataCamp", "Harvard CS50", "freeCodeCamp", "Udemy (Free Tier)", "Coursera (Audit Mode)"],
    youtubeChannels: [
      { name: "Alex The Analyst", url: "https://www.youtube.com/@AlexTheAnalyst", desc: "Outstanding data analysis tutorials, SQL case studies, and dashboard creation guides." },
      { name: "Krish Naik", url: "https://www.youtube.com/@krishnaik06", desc: "Fantastic applied data analytics and machine learning roadmaps." },
      { name: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp", desc: "Comprehensive courses on Python, SQL, and data visualizations." }
    ],
    practicePlatforms: [
      { name: "Kaggle", url: "https://www.kaggle.com", desc: "Practice real datasets and write analytic notebook scripts." },
      { name: "DataCamp", url: "https://www.datacamp.com", desc: "Interactive environments for learning R, Python, and SQL." },
      { name: "SQLZoo", url: "https://sqlzoo.net", desc: "Interactive environment to practice SQL query commands." }
    ],
    mentorName: "Mentor Alex",
    mentorSpecialty: "Data Intelligence & Analytics Dashboards",
    opportunities: [
      { type: "hackathon", title: "Kaggle Community Datathons", desc: "Global analytics hackathons with public datasets and code sprints.", meta: "Monthly • Online" },
      { type: "internship", title: "Data Analyst Intern - Deloitte", desc: "Excellent role focused on gathering requirements, SQL queries, and Power BI dashboards.", meta: "Summer • Paid • Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Advanced Excel Modeling", desc: "Master formulas, lookup methods, pivot tables, and conditional formatting in Excel.", topics: ["Excel VLOOKUP/XLOOKUP", "Pivot Tables", "Data Formatting"], phase: 1 },
      { week: 2, title: "Week 3-4: SQL Queries & Databases", desc: "Learn relational database designs and write complex SQL SELECT queries.", topics: ["SQL SELECT commands", "GROUP BY Aggregations", "Table Joins"], phase: 1 },
      { week: 3, title: "Week 5-6: Python & Pandas Foundations", desc: "Learn Python syntax, lists, dicts, and master Pandas DataFrames for data manipulation.", topics: ["Python Syntax", "Pandas Filtering", "Jupyter Notebooks"], phase: 1 },
      { week: 4, title: "Week 7-8: BI Dashboard Creation", desc: "Import database tables into Power BI or Tableau to build interactive KPI charts.", topics: ["Data Modeling", "KPI Metrics", "Tableau/Power BI Charts"], phase: 2 },
      { week: 5, title: "Week 9-10: Statistics Basics & A/B Testing", desc: "Study probability, mean, median, distributions, and design A/B test conversion sheets.", topics: ["Descriptive Stats", "A/B Testing Basics", "Hypothesis testing"], phase: 2 },
      { week: 6, title: "Week 11-12: Portfolio Building & Placement Prep", desc: "Build dashboard projects, upload portfolio to GitHub, and practice mock analyst interviews.", topics: ["GitHub Commits", "Portfolio Dashboard", "Analyst Mock Reviews"], phase: 3 }
    ],
    phases: [
      {
        id: "da_p1",
        title: "Excel, SQL, & Python Basics (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Build a strong data analyst foundation. Master Excel formulas, relational database SQL queries, and basic Python.",
        skillsCovered: ["Excel", "SQL", "Python", "Data Cleaning"],
        tasks: [
          { id: "da_p1_t1", title: "Learn variables, loops, and lists in Python", done: false, description: "Master core programming." },
          { id: "da_p1_t2", title: "Master SQL queries (SELECT, JOINs, GROUP BY, aggregations)", done: false, description: "Query database tables." },
          { id: "da_p1_t3", title: "Learn Excel Pivot Tables, VLOOKUP/XLOOKUP, and IF formulas", done: false, description: "Solidify basic data manipulation." }
        ],
        projects: [
          { title: "Retail Sales Forecast Sheet", desc: "Analyze raw sales logs in Excel. Create pivot summaries, calculate margins, and chart monthly growth rates." },
          { title: "SQL Store Data Audit", desc: "Write database queries to find top customers and calculate monthly revenue growth rates." }
        ]
      },
      {
        id: "da_p2",
        title: "BI Dashboards & Statistics (Intermediate)",
        estimatedTime: "4-6 weeks",
        description: "Learn Power BI or Tableau, build dashboards, and learn statistics basics.",
        skillsCovered: ["Power BI", "Tableau", "Statistics", "A/B Testing"],
        tasks: [
          { id: "da_p2_t1", title: "Learn Power BI/Tableau dashboard building", done: false, description: "Visualize business KPIs." },
          { id: "da_p2_t2", title: "Build interactive KPI dashboard projects with real datasets", done: false, description: "Design visual insights." },
          { id: "da_p2_t3", title: "Learn statistics basics (Mean, Median, Variance, Distributions)", done: false, description: "Explore data metrics." }
        ],
        projects: [
          { title: "Store KPI Interactive Dashboard", desc: "Build a Power BI or Tableau report displaying transaction volumes, return rates, and customer retention metrics." },
          { title: "A/B Test Analytics Paper", desc: "Analyze a conversion database comparing two site variations, computing statistical significance margins." }
        ]
      },
      {
        id: "da_p3",
        title: "Portfolio Building & Placement Preparation (Expert)",
        estimatedTime: "4-6 weeks",
        description: "Create portfolio projects, publish on GitHub, and prepare for placement interviews.",
        skillsCovered: ["Git", "GitHub", "Mock Screening", "Resume Scorecard"],
        tasks: [
          { id: "da_p3_t1", title: "Build robust data analyst portfolio projects", done: false, description: "Showcase complete capabilities." },
          { id: "da_p3_t2", title: "Upload your code repositories and dashboard screenshots to GitHub", done: false, description: "Share your work." },
          { id: "da_p3_t3", title: "Practice mock interview questions and prepare for placement rounds", done: false, description: "Ready to get hired." }
        ],
        projects: [
          { title: "Comprehensive Portfolio Project", desc: "Host a GitHub repository containing Python cleansing scripts, SQL database queries, and static Power BI dashboard designs." },
          { title: "Mock Interview Simulation Review", desc: "Evaluate your answers to technical SQL/stats questions and optimize your resume keyword matches." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "State the direct impact of your dashboard insights (e.g., 'Designed Power BI dashboard identifying $20K in inventory bottlenecks'). Host all codes on GitHub and links to dashboards.",
      hackathons: "Engage in Kaggle Datathons and business case competitions. Show end-to-end data cleansing ability.",
      internships: "Apply for roles like 'Data Analyst Intern', 'Business Analyst Intern', or 'Reporting Intern' at service and product companies.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "What is a LEFT JOIN in SQL and when would you use it?",
          sampleAnswer: "A LEFT JOIN returns all rows from the left table, and the matched rows from the right table. If there is no match, it returns NULL values. Use it to find orphaned records, like customers without orders.",
          keywords: ["left", "match", "null", "all rows", "orphaned"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "Explain the difference between a Dimension table and a Fact table.",
          sampleAnswer: "A Fact table contains quantitative measurements, metrics, or facts of a business process (e.g., sales revenue, quantities sold). A Dimension table contains descriptive attributes that give context to the facts (e.g., product names, customer details, dates).",
          keywords: ["fact", "dimension", "context", "quantitative", "descriptive"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "What is A/B testing and what is a p-value?",
          sampleAnswer: "A/B testing is a statistical experiment comparing two versions (A and B) of a variable to see which performs better. The p-value is the probability of obtaining results at least as extreme as the observed results, assuming the null hypothesis (no real difference) is true. A p-value below 0.05 typically indicates statistical significance.",
          keywords: ["experiment", "p-value", "significance", "null hypothesis", "probability"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "da_chall_1",
        title: "Mean Calculation function",
        instruction: "Write a JavaScript function `calculateMean(arr)` that computes and returns the average value of an array of numbers. Return 0 if the array is empty.",
        starterCode: "function calculateMean(arr) {\n  if (arr.length === 0) return 0;\n  // Compute sum and return mean\n}",
        testDescription: "Should correctly compute the sum of values and divide by list length.",
        roadmapTaskId: "da_p2_t3",
        verify: function(code) {
          if (code.includes("reduce") && code.includes("length")) {
            return { success: true, message: "Perfect! Utilizing Array.prototype.reduce is the most idiomatic method for sum calculations." };
          }
          if (code.includes("for") && code.includes("length")) {
            return { success: true, message: "Correct! Iterating over elements to sum and dividing works well." };
          }
          return { success: false, message: "Ensure you sum elements of the list and divide by the length, handling empty array inputs." };
        }
      },
      {
        id: "da_chall_2",
        title: "SQL Store Data Audit",
        instruction: "Write the SQL query to select customer names and their sum of orders, grouping by name from `orders` table.",
        starterCode: "-- Write your query here\nSELECT name, SUM(amount) FROM orders\nGROUP BY name;",
        testDescription: "Should group by name and aggregate orders amount sum.",
        roadmapTaskId: "da_p1_t2",
        verify: function(code) {
          const clean = code.toLowerCase().replace(/\s+/g, '');
          if (clean.includes("select") && clean.includes("groupby") && clean.includes("sum")) {
            return { success: true, message: "Excellent SQL grouping query!" };
          }
          return { success: false, message: "Ensure you use SELECT, SUM, and GROUP BY keys." };
        }
      }
    ]
  },

  data_scientist: {
    title: "Data Scientist",
    subtitle: "Extract intelligence and build predictive systems from unstructured data.",
    description: "Data Scientists gather large datasets, engineer features, apply statistical tests, and train machine learning models to solve complex forecasting problems. They combine coding, analytics, and business acumen.",
    salaryRoadmap: "Entry: ₹5-9 LPA | Mid-Level: ₹12-22 LPA | Senior: ₹25-45 LPA | Lead: ₹50+ LPA",
    demand: "High demand across finance, e-commerce, healthcare, and consulting domains globally.",
    futureScope: "Excellent; transitioning heavily into generative AI alignment, predictive business models, and complex analytics pipelines.",
    remoteOpportunities: "Moderate-High (60%+ allow remote work since data resources are cloud-hosted).",
    firstLanguage: "Python or R",
    timeEstimate: "6 - 9 Months",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Statistics", "SQL", "Scikit-Learn", "Machine Learning", "Kaggle", "ETL Pipelines", "Tableau"],
    tools: ["Jupyter Notebooks", "SQL Server / PostgreSQL", "GitHub", "Power BI / Tableau", "Conda / Pip"],
    concepts: ["Probability & Statistics", "Regression / Classification", "Exploratory Data Analysis (EDA)", "Feature Engineering", "A/B Testing", "ETL Systems"],
    freePlatforms: ["Kaggle Learn", "Harvard CS50", "Udemy (Free Tier)", "Coursera (Audit Mode)", "fast.ai"],
    youtubeChannels: [
      { name: "Krish Naik", url: "https://www.youtube.com/@krishnaik06", desc: "In-depth video tutorials covering data science pipelines, math, and coding." },
      { name: "CampusX", url: "https://www.youtube.com/@campusx-official", desc: "Excellent Python, stats, and machine learning roadmaps in Hindi." },
      { name: "Luke Barousse", url: "https://www.youtube.com/@LukeBarousse", desc: "Terrific career, tool comparisons, and portfolio guidance for analysts/scientists." }
    ],
    practicePlatforms: [
      { name: "Kaggle", url: "https://www.kaggle.com", desc: "Participate in real data science challenges and read notebook scripts." },
      { name: "SQLZoo", url: "https://sqlzoo.net", desc: "Master SQL databases and complex querying concepts." }
    ],
    mentorName: "Mentor Krish",
    mentorSpecialty: "Machine Learning & Statistical Pipelines",
    opportunities: [
      { type: "hackathon", title: "Kaggle Datathons", desc: "Global machine learning hackathons with high cash rewards and GPU credits.", meta: "Monthly • Online" },
      { type: "internship", title: "Data Science Intern - Amazon", desc: "Work with retail or AWS engineering teams to optimize customer conversion pipelines.", meta: "Summer • Paid • Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Python & Statistical Fundamentals", desc: "Learn Pandas syntax, data cleansing, descriptive statistics, and probability distributions.", topics: ["Pandas", "Cleansing", "Probability Distributions"], phase: 1 },
      { week: 2, title: "Week 3-4: EDA & Relational SQL", desc: "Perform EDA on complex datasets using Seaborn, and write SQL queries for database operations.", topics: ["EDA", "Seaborn Visuals", "SQL GROUP BY"], phase: 1 },
      { week: 3, title: "Week 5-6: Regression & Classification ML", desc: "Master Scikit-Learn. Train and evaluate linear regression and random forest classification models.", topics: ["Linear Regression", "Random Forest", "Metrics (F1-score)"], phase: 2 },
      { week: 4, title: "Week 7-8: Feature Engineering & Clustering", desc: "Handle missing values, encode variables, apply PCA dimensionality reduction, and implement K-Means clustering.", topics: ["Feature Selection", "PCA", "K-Means"], phase: 2 },
      { week: 5, title: "Week 9-10: Neural Networks & Data Pipelines", desc: "Build neural network models using PyTorch/TensorFlow and set up automated ETL pipelines.", topics: ["PyTorch Basics", "Deep Models", "ETL Scripts"], phase: 3 },
      { week: 6, title: "Week 11-12: MLOps & Production Deployments", desc: "Containerize model pipelines using Docker, track runs with MLflow, and practice case interviews.", topics: ["MLflow Tracking", "Docker Containerization", "A/B Testing Cases"], phase: 4 }
    ],
    phases: [
      {
        id: "ds_p1",
        title: "Data Manipulation & Statistical Foundations (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master basic data handling tools, SQL database queries, and descriptive statistics.",
        skillsCovered: ["Python", "Pandas", "SQL", "Statistics", "EDA"],
        tasks: [
          { id: "ds_p1_t1", title: "Learn Python syntax, lists, dictionaries, and Pandas DataFrames", done: false, description: "Core syntax foundation." },
          { id: "ds_p1_t2", title: "Master SQL queries (SELECT, JOINs, GROUP BY, aggregations)", done: false, description: "Extract data from tables." },
          { id: "ds_p1_t3", title: "Learn descriptive statistics: Mean, Median, Variance, Distributions", done: false, description: "Math essentials." }
        ],
        projects: [
          { title: "Real Estate Market EDA", desc: "Clean and analyze 5000+ real estate records in Jupyter Notebook. Document correlations between price, size, and location." },
          { title: "SQL HR Database Audit", desc: "Write database queries to generate reports on employee retention and average salary scales." }
        ]
      },
      {
        id: "ds_p2",
        title: "Supervised & Unsupervised Machine Learning (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Study core machine learning algorithms and implement model training pipelines.",
        skillsCovered: ["Scikit-Learn", "Machine Learning", "Regression", "Classification", "Clustering"],
        tasks: [
          { id: "ds_p2_t1", title: "Train and evaluate linear/logistic regression and tree classifiers", done: false, description: "Supervised models." },
          { id: "ds_p2_t2", title: "Apply PCA dimensionality reduction and K-Means clustering", done: false, description: "Unsupervised models." },
          { id: "ds_p2_t3", title: "Learn feature scaling, handling null values, and category encoding", done: false, description: "Prepare model inputs." }
        ],
        projects: [
          { title: "Medical Risk Predictor Model", desc: "Train a Random Forest classifier in Scikit-Learn to predict disease risk. Measure accuracy, precision, and AUC-ROC." },
          { title: "Customer Clustering Segmenter", desc: "Apply K-Means clustering to partition e-commerce users based on purchasing behavior." }
        ]
      },
      {
        id: "ds_p3",
        title: "Deep Learning & Production ETL Pipelines (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Design neural network architectures and build automated data pipelines.",
        skillsCovered: ["TensorFlow", "PyTorch", "ETL Pipelines", "Data Engineering", "Jupyter"],
        tasks: [
          { id: "ds_p3_t1", title: "Build multi-layer perceptron neural networks in PyTorch/TensorFlow", done: false, description: "Deep learning fundamentals." },
          { id: "ds_p3_t2", title: "Build automated ETL script tasks to scrape and format data files", done: false, description: "Construct data flows." },
          { id: "ds_p3_t3", title: "Implement SQL database window functions and CTE schemas", done: false, description: "Advanced database structures." }
        ],
        projects: [
          { title: "MNIST Digit Classifier", desc: "Build a convolutional neural network in PyTorch that identifies hand-written digits with 98%+ accuracy." },
          { title: "Automated Data pipeline script", desc: "Write a script that pulls weather metrics daily, clean columns in Pandas, and updates database records." }
        ]
      },
      {
        id: "ds_p4",
        title: "MLOps & System Deployment (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Package models into microservices, deploy API endpoints to cloud hosting, and practice case interview questions.",
        skillsCovered: ["MLOps", "Docker", "Model API serving", "A/B Testing", "Resume Tuning"],
        tasks: [
          { id: "ds_p4_t1", title: "Package machine learning models into APIs using Docker container setups", done: false, description: "Serve models for apps." },
          { id: "ds_p4_t2", title: "Study A/B testing principles, statistical significance, and p-values", done: false, description: "Validate models in production." },
          { id: "ds_p4_t3", title: "Conduct mock placements, case studies, and format resume tags", done: false, description: "Get hired." }
        ],
        projects: [
          { title: "Dockerized Prediction API", desc: "Build an API container running a prediction model, hosting documentation endpoints and load indicators." },
          { title: "A/B Test Conversion Report", desc: "Analyze database metrics comparing conversion of two site variations, compute confidence margins and statistical p-values." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "State the business value of your models (e.g., 'Designed classifier that reduced customer churn by 12%'). Host notebook files on GitHub with clear markdowns.",
      hackathons: "Engage in Kaggle and Devpost analytics competitions. Show features engineering expertise.",
      internships: "Apply for roles like 'Data Science Intern', 'Machine Learning Intern', or 'Quantitative Analyst Intern' at banking or e-commerce companies.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between L1 (Lasso) and L2 (Ridge) regularization.",
          sampleAnswer: "L1 regularization adds the absolute values of coefficients to the loss function, which can force coefficients to exactly zero, resulting in feature selection. L2 adds the squared values of coefficients, preventing them from becoming too large but not reducing them to zero.",
          keywords: ["regularization", "absolute", "squared", "lasso", "ridge", "zero"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is overfitting, and how do you prevent it in tree-based models?",
          sampleAnswer: "Overfitting occurs when a model learns the training data noise rather than the signal, leading to poor generalization. In tree-based models, we prevent it by pruning, setting max_depth, increasing min_samples_split, or using ensemble methods like random forests.",
          keywords: ["noise", "generalization", "max_depth", "pruning", "random forest", "overfit"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "How do you evaluate a model if your classification target is highly imbalanced?",
          sampleAnswer: "Accuracy is misleading in imbalanced datasets. Instead, we use Precision, Recall, F1-Score, and the Area Under the Precision-Recall Curve (PR-AUC). We can also apply resampling techniques like SMOTE or adjust class weights in the loss function.",
          keywords: ["accuracy", "precision", "recall", "f1-score", "smote", "imbalanced"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why does data science appeal to you over standard software engineering?",
          sampleAnswer: "I enjoy exploring data to uncover hidden trends and using statistics to build predictive systems. Data science combines mathematical analysis with software tools, which fits my curiosity.",
          keywords: ["statistics", "math", "trends", "science", "exploration", "predictive"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How would you explain a complex random forest model to a business stakeholder who has no background in math?",
          sampleAnswer: "I would describe it as a committee of decision makers. Each maker looks at different factors to make a vote. The final recommendation is the majority vote of the entire committee.",
          keywords: ["stakeholder", "committee", "vote", "majority", "factors", "math"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Describe a scenario where your machine learning model failed to perform in production despite high validation scores. What went wrong?",
          sampleAnswer: "It was a case of data drift. The production user behavior data shifted due to seasonal marketing campaigns. I set up monitoring to track feature distributions and scheduled automated model retraining runs.",
          keywords: ["drift", "shifted", "monitoring", "retraining", "production", "validation"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "ds_chall_1",
        title: "Mean Calculation function",
        instruction: "Write a JavaScript function `calculateMean(arr)` that computes and returns the average value of an array of numbers. Return 0 if the array is empty.",
        starterCode: "function calculateMean(arr) {\n  if (arr.length === 0) return 0;\n  // Compute sum and return mean\n}",
        testDescription: "Should correctly compute the sum of values and divide by list length.",
        roadmapTaskId: "ds_p1_t3",
        verify: function(code) {
          if (code.includes("reduce") && code.includes("length")) {
            return { success: true, message: "Perfect! Utilizing Array.prototype.reduce is the most idiomatic method for sum calculations." };
          }
          if (code.includes("for") && code.includes("length")) {
            return { success: true, message: "Correct! Iterating over elements to sum and dividing works well." };
          }
          return { success: false, message: "Ensure you sum elements of the list and divide by the length, handling empty array inputs." };
        }
      },
      {
        id: "ds_chall_2",
        title: "Pandas Columns Filter",
        instruction: "Write a short Python Pandas statement `df[df['age'] > 30]` to filter a dataframe `df` where the column 'age' is greater than 30.",
        starterCode: "def filter_data(df):\n    # Return rows where age > 30\n    return df",
        testDescription: "Should include DataFrame bracket access filtering where 'age' > 30.",
        roadmapTaskId: "ds_p1_t1",
        verify: function(code) {
          if (code.includes("['age']") && code.includes(">") && code.includes("30")) {
            return { success: true, message: "Excellent! Boolean indexing is the standard syntax for DataFrame filtering." };
          }
          return { success: false, message: "Make sure you filter the dataframe: df[df['age'] > 30]" };
        }
      }
    ]
  },

  ai_ml: {
    title: "AI / ML Engineer",
    subtitle: "Architect intelligence models, deep neural networks, and agent architectures.",
    description: "AI/ML Engineers design, fine-tune, optimize, and deploy neural networks, transformers, and computer vision models. They sit at the intersection of advanced computer science, engineering pipelines, and deep mathematical optimization.",
    salaryRoadmap: "Entry: ₹6-10 LPA | Mid-Level: ₹14-25 LPA | Senior: ₹28-50 LPA | Lead: ₹60+ LPA",
    demand: "Skyrocketing demand globally with the AI wave; high hiring for generative AI, computer vision, and autonomous agent design.",
    futureScope: "Extremely strong; leading into LLM fine-tuning, RAG frameworks, multimodal systems, and embedded edge-AI inference architectures.",
    remoteOpportunities: "High (70%+ because GPU workloads are orchestrated on cloud cluster terminals).",
    firstLanguage: "Python & PyTorch",
    timeEstimate: "6 - 9 Months",
    skills: ["Python", "NumPy", "Pandas", "Calculus", "Probability", "Scikit-Learn", "Deep Learning", "NLP", "Transformers", "TensorFlow", "PyTorch", "OpenCV", "MLOps", "FastAPI", "Docker", "RAG"],
    tools: ["PyTorch", "Jupyter Notebooks", "HuggingFace", "Triton Server", "MLflow", "Docker", "WSL / Linux"],
    concepts: ["Gradient Descent", "Convolutional Neural Networks (CNNs)", "Transformers & Attention", "Large Language Models", "Vector Databases & RAG", "Model Quantization"],
    freePlatforms: ["fast.ai", "Kaggle Learn", "Harvard CS50", "Coursera (DeepLearning.AI)", "Udemy (Free Tier)"],
    youtubeChannels: [
      { name: "Andrej Karpathy", url: "https://www.youtube.com/@AndrejKarpathy", desc: "The absolute best explanations of building GPT models and neural networks from scratch." },
      { name: "Krish Naik", url: "https://www.youtube.com/@krishnaik06", desc: "Fantastic applied machine learning playlists and system architecture overviews." },
      { name: "DeepLearningAI", url: "https://www.youtube.com/@Deeplearningai", desc: "Andrew Ng's channel providing state-of-the-art tutorials and AI trends panels." }
    ],
    practicePlatforms: [
      { name: "Kaggle", url: "https://www.kaggle.com", desc: "Host of ML competitions and advanced public notebooks." },
      { name: "HuggingFace Space", url: "https://huggingface.co", desc: "Explore open-source models, datasets, and deploy interactive demo apps." }
    ],
    mentorName: "Mentor Karpathy",
    mentorSpecialty: "Transformers & LLM Training",
    opportunities: [
      { type: "hackathon", title: "HuggingFace Community Sprints", desc: "Collaborate on fine-tuning open source language or diffusion models.", meta: "Quarterly • Online" },
      { type: "internship", title: "AI Research Intern - NVIDIA Labs", desc: "Excellent role focused on accelerating model training and CUDA optimizations.", meta: "Summer • Paid • Bengaluru/Remote" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Core Math & Linear Models", desc: "Review vector matrices, gradient descent math, and code linear classifiers using NumPy.", topics: ["Gradient Descent", "NumPy Matrix Math", "Logistic Regression"], phase: 1 },
      { week: 2, title: "Week 3-4: PyTorch Basics & CNNs", desc: "Build neural network layers in PyTorch, implement backpropagation, and code CNN models for vision.", topics: ["PyTorch Tensors", "Backpropagation", "CNNs (OpenCV)"], phase: 1 },
      { week: 3, title: "Week 5-6: NLP & Transformer Attention", desc: "Learn word tokenization, recurrent architectures, and code self-attention layers of transformer models.", topics: ["Tokenizers", "Self-Attention", "BERT/GPT Models"], phase: 2 },
      { week: 4, title: "Week 7-8: Vector DBs & RAG Pipelines", desc: "Implement embeddings, ingest data into Pinecone/Chroma, and build query pipelines with LLM APIs.", topics: ["Embeddings", "Vector Databases", "LangChain/LlamaIndex"], phase: 2 },
      { week: 5, title: "Week 9-10: Quantization & Model Serving", desc: "Apply INT8 quantization and package PyTorch models into FastAPI endpoints inside Docker.", topics: ["Model Compression", "FastAPI Serving", "Docker Packaging"], phase: 3 },
      { week: 6, title: "Week 11-12: MLOps pipelines & Mock Interviews", desc: "Configure MLflow run tracking, build retraining pipelines, and practice deep technical ML cases.", topics: ["MLflow Registry", "Pipeline Automation", "ML System Design"], phase: 4 }
    ],
    phases: [
      {
        id: "ai_p1",
        title: "Calculus, Linear Algebra, & PyTorch Basics (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master the mathematical concepts of optimization and build simple neural networks in PyTorch.",
        skillsCovered: ["Python", "NumPy", "Linear Algebra", "Calculus", "PyTorch"],
        tasks: [
          { id: "ai_p1_t1", title: "Understand matrix multiplication, derivatives, and partial gradients", done: false, description: "Core math foundations." },
          { id: "ai_p1_t2", title: "Implement backpropagation and gradient updates manually in NumPy", done: false, description: "Understand inner mechanics." },
          { id: "ai_p1_t3", title: "Learn PyTorch Tensor operations and build a basic neural network", done: false, description: "Master framework API." }
        ],
        projects: [
          { title: "NumPy Neural Network", desc: "Build a 2-layer classifier using only NumPy. Write matrix math for activation, forward, and backward updates." },
          { title: "MNIST PyTorch Model", desc: "Construct a basic multi-layer feedforward network in PyTorch to classify handwritten digits." }
        ]
      },
      {
        id: "ai_p2",
        title: "Computer Vision & Transformers (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Study Convolutional Neural Networks for vision and the Attention mechanisms driving NLP.",
        skillsCovered: ["PyTorch", "OpenCV", "Transformers", "NLP", "CNN"],
        tasks: [
          { id: "ai_p2_t1", title: "Build and train Convolutional Neural Networks (CNNs) for image detection", done: false, description: "Vision architectures." },
          { id: "ai_p2_t2", title: "Master the self-attention formula and write a single-head attention block", done: false, description: "Core of GPT models." },
          { id: "ai_p2_t3", title: "Fine-tune pretrained transformers from HuggingFace on text classification datasets", done: false, description: "Harness pretrained models." }
        ],
        projects: [
          { title: "Object Classifier with OpenCV", desc: "Train a PyTorch CNN, integrate it with local OpenCV camera script captures to run realtime object classifications." },
          { title: "Review Classifier with BERT", desc: "Fine-tune a BERT classifier model on restaurant reviews to classify sentiments." }
        ]
      },
      {
        id: "ai_p3",
        title: "Vector Databases & LLM Agents (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Build Retrieval-Augmented Generation (RAG) applications using vector stores and language APIs.",
        skillsCovered: ["LangChain", "Vector Databases", "Embeddings", "FastAPI", "RAG"],
        tasks: [
          { id: "ai_p3_t1", title: "Extract document text chunks, generate embeddings, and store in vector DBs", done: false, description: "Configure vector pipelines." },
          { id: "ai_p3_t2", title: "Implement context retrieval logic to feed LLM prompt APIs", done: false, description: "Implement context loops." },
          { id: "ai_p3_t3", title: "Build structured JSON endpoints using FastAPI to serve model outputs", done: false, description: "Deliver model API." }
        ],
        projects: [
          { title: "Local Resume Analyzer System", desc: "Ingest PDF resumes, query vector stores to find matched credentials, and use local LLMs to generate review cards." },
          { title: "Dynamic RAG Document Assistant", desc: "Build a backend API that reads user text documents, indexes paragraphs, and runs conversation chatbots." }
        ]
      },
      {
        id: "ai_p4",
        title: "MLOps Pipelines & Model Deployments (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Optimize inferencing speed, manage deployment runs, and practice ML engineering questions.",
        skillsCovered: ["MLOps", "Docker", "Model Quantization", "MLflow", "Mock Screening"],
        tasks: [
          { id: "ai_p4_t1", title: "Track training parameters and register models using MLflow registries", done: false, description: "ML pipeline management." },
          { id: "ai_p4_t2", title: "Optimize model inference speed (e.g., INT8 quantization or ONNX setups)", done: false, description: "Production optimization." },
          { id: "ai_p4_t3", title: "Practice ML system designs, review math, and format portfolio codes", done: false, description: "Final preparation checks." }
        ],
        projects: [
          { title: "Quantized GPT API Service", desc: "Quantize an open LLM, deploy it within a Docker setup utilizing FastAPI and streaming outputs." },
          { title: "End-to-End MLOps Pipeline", desc: "Build automated pipelines that detect performance drops, pull fresh data, retrain, and reload model checkpoints." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "State modeling performance metrics quantitatively (e.g., 'quantized model size by 4x, speeding up execution time by 30% with minimal loss'). Link to active HuggingFace spaces.",
      hackathons: "Participate in AI s and LLM Hackathons. Prioritize challenges requiring dynamic pipeline integrations.",
      internships: "Apply for roles like 'AI Engineer Intern', 'MLOps Intern', or 'Computer Vision Intern' at tech firms.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the vanishing gradient problem and how to mitigate it.",
          sampleAnswer: "Vanishing gradients occur when backpropagated gradients shrink exponentially in deep networks, preventing weights from updating. We mitigate this using ReLU activations, batch normalization, residual connections, and careful weight initializations.",
          keywords: ["vanishing", "deep networks", "relu", "residual", "normalization", "exponential"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "How does the Self-Attention mechanism work in Transformer models?",
          sampleAnswer: "Self-attention computes dynamic weight profiles for each word in a sequence based on Query, Key, and Value vectors. We take the dot product of Queries and Keys, apply Softmax to get weights, and multiply by Values.",
          keywords: ["queries", "keys", "values", "softmax", "attention", "transformer"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "What is model quantization, and what are the trade-offs between Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT)?",
          sampleAnswer: "Model quantization converts model weights from high-precision formats (FP32) to lower-precision formats (INT8) to reduce storage and latency. PTQ is fast but can cause accuracy loss. QAT simulates precision drops during training, preserving accuracy at the cost of training time.",
          keywords: ["quantization", "int8", "fp32", "accuracy", "ptq", "qat"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "What motivates you to work specifically in AI/ML over regular software roles?",
          sampleAnswer: "AI engineering allows me to work on systems that learn from data to solve unpredictable tasks. It bridges mathematical theory and software execution, making the projects engaging.",
          keywords: ["learn", "bridge", "theory", "software", "engaging", "predict"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you stay up-to-date with rapid developments in AI and machine learning papers?",
          sampleAnswer: "I read summaries on ArXiv, follow research engineers on Twitter/GitHub, and view paper walkthrough video breakdowns from communities like Andrej Karpathy's channel.",
          keywords: ["arxiv", "read", "walkthrough", "twitter", "community", "papers"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "How would you handle ethical concerns regarding model bias or data privacy raised during project design?",
          sampleAnswer: "I would push for bias checking (e.g. evaluating subsets), implement data anonymization/encryption safeguards, and flag compliance concerns to the architecture review board early.",
          keywords: ["bias", "privacy", "anonymization", "ethical", "compliance", "board"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "ai_chall_1",
        title: "Vector Dot Product",
        instruction: "Write a JavaScript function `dotProduct(v1, v2)` that takes two equal-length numeric arrays and returns their mathematical dot product. Return 0 if lengths mismatch.",
        starterCode: "function dotProduct(v1, v2) {\n  if (v1.length !== v2.length) return 0;\n  // Compute dot product\n}",
        testDescription: "Should multiply corresponding index values and sum the results.",
        roadmapTaskId: "ai_p1_t2",
        verify: function(code) {
          if (code.includes("reduce") && (code.includes("accum") || code.includes("curr") || code.includes("sum"))) {
            return { success: true, message: "Perfect! Array reduce computes mathematical dot products efficiently." };
          }
          if (code.includes("for") && code.includes("+=")) {
            return { success: true, message: "Correct! Iterating with index addition works perfectly." };
          }
          return { success: false, message: "Ensure you loop through indexes, multiplying v1[i] by v2[i] and returning the sum." };
        }
      },
      {
        id: "ai_chall_2",
        title: "ReLU Activation Function",
        instruction: "Write a JavaScript function `relu(x)` that implements the Rectified Linear Unit activation: returns `x` if `x > 0`, else returns `0`.",
        starterCode: "function relu(x) {\n  // Implement ReLU\n}",
        testDescription: "Should return x when positive, and 0 when negative.",
        roadmapTaskId: "ai_p1_t3",
        verify: function(code) {
          if (code.includes("Math.max") && code.includes("0")) {
            return { success: true, message: "Excellent! Math.max(0, x) is the cleanest implementation of ReLU." };
          }
          if (code.includes(">") && code.includes("?") && code.includes("0")) {
            return { success: true, message: "Correct! Ternary checks work great for activation gates." };
          }
          if (code.includes("if") && code.includes("0")) {
            return { success: true, message: "Perfect! If statements handle activation checks cleanly." };
          }
          return { success: false, message: "Ensure you return x for positive numbers, and 0 otherwise." };
        }
      }
    ]
  },

  cybersecurity: {
    title: "Cybersecurity Analyst",
    subtitle: "Protect system nodes, secure network assets, and perform security audits.",
    description: "Cybersecurity Analysts monitor network traffic, identify structural vulnerabilities, audit compliance profiles, and construct encryption/defense firewalls. They defend systems against malicious actors.",
    salaryRoadmap: "Entry: ₹4.5-8 LPA | Mid-Level: ₹9-17 LPA | Senior: ₹20-35 LPA | Lead: ₹40+ LPA",
    demand: "Very high; massive corporate investments globally to prevent data breaches, cyber attacks, and maintain regulatory compliance.",
    futureScope: "Extremely strong; leading into cloud security architectures, zero-trust framework enforcement, and AI-driven threat mitigation systems.",
    remoteOpportunities: "Moderate (45%+ since security operations centers (SOC) sometimes require physical or hybrid presence).",
    firstLanguage: "Linux Bash & Python",
    timeEstimate: "5 - 7 Months",
    skills: ["Linux", "Networking", "Wireshark", "Burp Suite", "Ethical Hacking", "OWASP", "Pen Testing", "Nmap", "Firewalls", "Cryptographic Encryption", "IDS/IPS", "Incident Handling"],
    tools: ["Linux Terminal", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Snort", "Splunk"],
    concepts: ["TCP/IP Network Stack", "OWASP Web Vulnerabilities", "Symmetric/Asymmetric Encryption", "Penetration Testing Phases", "Intrusion Detection Profiles", "Access Control lists"],
    freePlatforms: ["PortSwigger Web Academy", "TryHackMe", "Hack The Box", "Harvard CS50", "NPTEL", "Coursera (Audit Mode)"],
    youtubeChannels: [
      { name: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck", desc: "High-energy tutorials covering networks, Linux administration, and security basics." },
      { name: "John Hammond", url: "https://www.youtube.com/@JohnHammond010", desc: "Outstanding security tool walkthroughs, CTF completions, and malware analyses." },
      { name: "LiveOverflow", url: "https://www.youtube.com/@LiveOverflow", desc: "Clear conceptual explanations of binary exploitation, web security, and low-level engineering." }
    ],
    practicePlatforms: [
      { name: "TryHackMe", url: "https://tryhackme.com", desc: "Gamified interactive labs explaining security networks and penetration testing." },
      { name: "Hack The Box", url: "https://www.hackthebox.com", desc: "Advanced labs for testing network exploitation skills." }
    ],
    mentorName: "Mentor Chuck",
    mentorSpecialty: "Ethical Hacking & Network Defense",
    opportunities: [
      { type: "hackathon", title: "DEF CON CTF Sprints", desc: "Pre-eminent global capture-the-flag competitions testing penetration skills.", meta: "Annual • Online & Vegas" },
      { type: "internship", title: "Security Analyst Intern - Cisco", desc: "Work with engineering teams building threat-intelligence firewalls.", meta: "Summer • Paid • Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Linux CLI & Network Traffic", desc: "Master Linux terminal commands, bash scripting, and analyze packet logs in Wireshark.", topics: ["Bash Scripting", "Wireshark Packet Analysis", "TCP/IP Headers"], phase: 1 },
      { week: 2, title: "Week 3-4: Port Scanning & Reconnaissance", desc: "Understand port scanning, host discovery, and write vulnerability scripts using Nmap.", topics: ["Nmap Scan Parameters", "DNS Lookups", "Recon Workflows"], phase: 1 },
      { week: 3, title: "Week 5-6: OWASP Top 10 Web Exploits", desc: "Practice SQL injection and Cross-Site Scripting (XSS) attacks in Burp Suite sandbox labs.", topics: ["SQL Injection", "XSS Verification", "Burp Suite Proxies"], phase: 2 },
      { week: 4, title: "Week 7-8: Incident Auditing & Encryption", desc: "Setup Snort detection rules and implement symmetric/asymmetric encryption scripts in Python.", topics: ["Snort IDS Rules", "AES/RSA Cryptography", "Security Logging"], phase: 2 },
      { week: 5, title: "Week 9-10: Pen Testing & Metasploit", desc: "Practice vulnerability exploitation frameworks and write comprehensive penetration audit logs.", topics: ["Metasploit Shells", "Privilege Escalation", "Audit Report Formats"], phase: 3 },
      { week: 6, title: "Week 11-12: Zero Trust & Mock Interviews", desc: "Study cloud security guidelines, zero-trust authentication designs, and practice mock security checks.", topics: ["Zero Trust Architecture", "IAM Cloud Policies", "Security Cases"], phase: 4 }
    ],
    phases: [
      {
        id: "cy_p1",
        title: "Linux Command Line & Networking Protocols (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master system operations, terminal navigation, and packet capture mechanisms.",
        skillsCovered: ["Linux", "Networking", "Wireshark", "TCP/IP", "Shell scripting"],
        tasks: [
          { id: "cy_p1_t1", title: "Master Linux terminal commands, access controls, and file editing", done: false, description: "Core OS control." },
          { id: "cy_p1_t2", title: "Learn TCP/IP layers, routing, IP subnets, and DNS configurations", done: false, description: "Network essentials." },
          { id: "cy_p1_t3", title: "Capture and analyze network data frames using Wireshark parameters", done: false, description: "Interpret packet streams." }
        ],
        projects: [
          { title: "Local Network Packet Analyzer", desc: "Capture local web traffic using Wireshark. Analyze and extract unencrypted protocols (HTTP/FTP) and write summary logs." },
          { title: "Automated Backup Bash Script", desc: "Write a script that creates encrypted archives of folder directories and logs status markers." }
        ]
      },
      {
        id: "cy_p2",
        title: "Vulnerability Scanning & Web Security (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Identify server vulnerabilities and study OWASP application security risks.",
        skillsCovered: ["Nmap", "Burp Suite", "OWASP Top 10", "Ethical Hacking", "SQL Injection"],
        tasks: [
          { id: "cy_p2_t1", title: "Run port scans and service version discoveries using Nmap parameters", done: false, description: "Reconnaissance procedures." },
          { id: "cy_p2_t2", title: "Intercept and modify HTTP browser requests using Burp Suite proxy", done: false, description: "Analyze web transfers." },
          { id: "cy_p2_t3", title: "Study OWASP Top 10 vulnerabilities (SQLi, XSS, broken authentication)", done: false, description: "Web risks overview." }
        ],
        projects: [
          { title: "Penetration Scan Assessment", desc: "Set up a vulnerable host machine locally. Run Nmap scans to identify open ports, active services, and vulnerability tags." },
          { title: "Web App Vulnerability Report", desc: "Audit a local web page sandbox, exploit basic input verification gaps (XSS), and write recommendations." }
        ]
      },
      {
        id: "cy_p3",
        title: "Intrusion Detection & Cryptography (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Deploy security monitoring tools and write script algorithms to secure sensitive files.",
        skillsCovered: ["Snort IDS", "Cryptography", "Firewalls", "Incident Handling", "Python"],
        tasks: [
          { id: "cy_p3_t1", title: "Write custom Snort IDS alert rules to flag suspicious packet structures", done: false, description: "Setup intrusion flags." },
          { id: "cy_p3_t2", title: "Implement AES symmetric and RSA asymmetric encryption in Python", done: false, description: "Secure storage scripts." },
          { id: "cy_p3_t3", title: "Configure local network firewalls and IP blocking rules", done: false, description: "Configure gate policies." }
        ],
        projects: [
          { title: "Custom Intrusion Detection Console", desc: "Deploy Snort IDS on a local server. Write rules that detect and flag ping floods, printing alarm logs." },
          { title: "Secure Cryptographic Tool", desc: "Write a Python script that encrypts files using AES keys, requiring password authentication keys." }
        ]
      },
      {
        id: "cy_p4",
        title: "Enterprise Architecture & Incident Response (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Formulate zero-trust access designs, audit logs inside SIEM software, and prepare for security placement cases.",
        skillsCovered: ["SIEM Splunk", "Zero Trust", "Security Auditing", "Compliance", "Mock Screening"],
        tasks: [
          { id: "cy_p4_t1", title: "Ingest and analyze security event files inside Splunk SIEM software", done: false, description: "Analyze enterprise logs." },
          { id: "cy_p4_t2", title: "Design identity policies matching zero-trust cloud architectures", done: false, description: "Construct safe network parameters." },
          { id: "cy_p4_t3", title: "Review mock interviews, practice CTF tasks, and format portfolio resumes", done: false, description: "Placement readiness." }
        ],
        projects: [
          { title: "Splunk Event Audit Dashboard", desc: "Ingest authentication logs into Splunk. Design dashboards that display failed login rates and flag brute-force attempts." },
          { title: "Incident Remediation Blueprint", desc: "Write an audit plan outlining how to respond to ransomware attacks on database servers." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "List CTF ranks, TryHackMe achievements, and certifications (e.g. CEH, CompTIA Security+). Detail the vulnerability scopes of your labs.",
      hackathons: "Engage in Capture The Flag (CTF) events. Prioritize tracks requiring quick threat decoding.",
      internships: "Apply for roles like 'Security Intern', 'SOC Analyst Intern', or 'IT Auditor Intern' at enterprise technology corporations.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between Symmetric and Asymmetric cryptography.",
          sampleAnswer: "Symmetric cryptography uses the same secret key to encrypt and decrypt data, making it fast but difficult to distribute securely. Asymmetric cryptography uses a public key to encrypt and a private key to decrypt, resolving key exchange issues but requiring more compute resource.",
          keywords: ["symmetric", "asymmetric", "same key", "public key", "private key", "exchange"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is SQL Injection, and how do you protect database servers against it?",
          sampleAnswer: "SQL Injection occurs when user input is concatenated directly into SQL query strings, allowing attackers to manipulate queries. We protect servers by using parameterized queries (prepared statements), validating inputs, and applying least privilege access settings.",
          keywords: ["injection", "concatenated", "parameterized queries", "prepared statements", "least privilege", "validate"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "What is a Man-in-the-Middle (MitM) attack, and how does HTTPS protect against it?",
          sampleAnswer: "A MitM attack occurs when an attacker intercepts network communication between two parties. HTTPS prevents this by encrypting the packet payload using SSL/TLS, and verifying the host's identity through trusted Certificate Authority certificates.",
          keywords: ["mitm", "intercept", "encrypting", "ssl/tls", "certificate authority", "ca"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to specialize in cybersecurity rather than web development?",
          sampleAnswer: "Cybersecurity is a dynamic field that focuses on system defense. The challenge of identifying vulnerabilities and protecting data assets is more rewarding to me than building user interfaces.",
          keywords: ["defense", "protecting", "vulnerabilities", "dynamic", "challenge", "assets"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How would you handle a situation where you discover a developer has committed active database keys into a public GitHub repository?",
          sampleAnswer: "I would immediately notify the developer, revoke the exposed database key to prevent breach attempts, coordinate the deployment of a replacement key, and review Git workflows to prevent recurrence.",
          keywords: ["revoke", "expose", "key", "notify", "git", "breach"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "If a company executive demands you bypass security settings on their laptop to run an unapproved application, how would you respond?",
          sampleAnswer: "I would politely explain the security policy and potential vulnerabilities of running unapproved software. I would offer to test the application in an isolated sandbox environment or request security board approval first.",
          keywords: ["policy", "sandbox", "vulnerabilities", "bypass", "unapproved", "approval"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "cy_chall_1",
        title: "Basic Port Scanner",
        instruction: "Write a JavaScript function `isPortBlocked(port, blockedList)` that takes a target port number and an array of blocked ports, returning `true` if blocked, and `false` otherwise.",
        starterCode: "function isPortBlocked(port, blockedList) {\n  // Write port verification checks here\n}",
        testDescription: "Should search blockedList array and return true if port matches.",
        roadmapTaskId: "cy_p1_t2",
        verify: function(code) {
          if (code.includes("includes") && code.includes("blockedList")) {
            return { success: true, message: "Perfect! Array includes check is the most direct verification pattern." };
          }
          if (code.includes("indexOf") && code.includes("-1")) {
            return { success: true, message: "Correct! Checked array index boundaries successfully." };
          }
          return { success: false, message: "Ensure you check if 'port' resides inside 'blockedList' array, returning true or false." };
        }
      },
      {
        id: "cy_chall_2",
        title: "SQL Injection filter",
        instruction: "Write a JavaScript function `sanitizeSQL(input)` that returns `true` if the input string contains SQL injection keywords (e.g. `' OR '1'='1` or `UNION SELECT`), else returns `false`.",
        starterCode: "function sanitizeSQL(input) {\n  const lowercase = input.toLowerCase();\n  // Check for common exploit strings\n}",
        testDescription: "Should identify SQL keywords: 'or' or 'union' inside the string.",
        roadmapTaskId: "cy_p2_t3",
        verify: function(code) {
          if (code.includes("or") && code.includes("union") && (code.includes("includes") || code.includes("regex") || code.includes("index"))) {
            return { success: true, message: "Excellent! Flagging SQL injection markers prevents unparameterized database execution." };
          }
          return { success: false, message: "Make sure you check the input string for keywords 'or' and 'union' and return boolean markers." };
        }
      }
    ]
  },

  cloud: {
    title: "Cloud Engineer",
    subtitle: "Orchestrate pipelines, manage cloud storage, and build scalable infrastructure.",
    description: "Cloud Engineers provision virtual servers, design continuous integration pipelines, containerize microservice arrays, and monitor server loading metrics to ensure uptime and resource scaling.",
    salaryRoadmap: "Entry: ₹5-9 LPA | Mid-Level: ₹11-20 LPA | Senior: ₹24-45 LPA | Lead: ₹50+ LPA",
    demand: "Extremely high globally; enterprises are actively scaling operations onto public and hybrid cloud environments.",
    futureScope: "Outstanding; migrating heavily to Infrastructure as Code (IaC) architectures, serverless clusters, and automated GitOps sync structures.",
    remoteOpportunities: "High (70%+ because server workloads are entirely managed via remote terminal dashboards).",
    firstLanguage: "Linux Shell, AWS, & Docker",
    timeEstimate: "5 - 8 Months",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux", "Terraform", "Prometheus", "YAML", "Git", "ArgoCD", "Systems Architecture"],
    tools: ["AWS Console", "Docker CLI", "Kubectl Terminal", "Terraform CLI", "GitHub Actions", "Prometheus / Grafana"],
    concepts: ["Virtual Private Clouds (VPC)", "Containerization vs Virtualization", "Infrastructure as Code (IaC)", "Automated GitOps", "High Availability Configurations", "Load Balancing Platforms"],
    freePlatforms: ["AWS Skill Builder", "freeCodeCamp", "TryHackMe Cloud Labs", "Harvard CS50", "NPTEL", "Coursera (Audit Mode)"],
    youtubeChannels: [
      { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana", desc: "Outstanding tutorials covering Docker, Kubernetes, CI/CD, and DevOps workflows." },
      { name: "Abhishek Veermalla", url: "https://www.youtube.com/@AbhishekVeermalla", desc: "Superb comprehensive DevOps guides, shell scripting, and AWS architectures." }
    ],
    practicePlatforms: [
      { name: "AWS Skill Builder", url: "https://skillbuilder.aws", desc: "Official AWS practice tools and cloud certification guides." },
      { name: "Play with Kubernetes", url: "https://labs.play-with-k8s.com", desc: "Interactive sandbox terminal for practice testing Kubernetes clusters." }
    ],
    mentorName: "Mentor Nana",
    mentorSpecialty: "DevOps & Container Orchestration",
    opportunities: [
      { type: "hackathon", title: "AWS GameDay Sprints", desc: "Interactive team-based learning challenge simulating real architectural scaling incidents.", meta: "Annual events • AWS Sponsored" },
      { type: "internship", title: "Cloud Ops Intern - AWS Services", desc: "Work with engineering support groups maintaining cloud cluster systems.", meta: "Summer • Paid • Hyderabad" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Linux shell & AWS Services", desc: "Master Linux file navigation, networking setup, and provision EC2 and S3 instances in AWS.", topics: ["Shell Commands", "AWS EC2 Setup", "AWS IAM Permissions"], phase: 1 },
      { week: 2, title: "Week 3-4: Docker Container Packaging", desc: "Write Dockerfiles, package backend scripts into images, and manage storage volumes.", topics: ["Dockerfiles", "Docker Compose", "Container Networks"], phase: 2 },
      { week: 3, title: "Week 5-6: Terraform Infrastructure", desc: "Write Terraform files, verify execution scopes, and automate network resource provisioning.", topics: ["Terraform HCL", "State Management", "Terraform Plan"], phase: 3 },
      { week: 4, title: "Week 7-8: Kubernetes Clusters", desc: "Build Pod manifests, design services, configure load balancers, and deploy microservices in Minikube.", topics: ["Pod Manifests", "Kubernetes Services", "Deployment Scaling"], phase: 3 },
      { week: 5, title: "Week 9-10: CI/CD Pipelines & Logging", desc: "Build automatic GitHub Action scripts, compile containers, and track cluster metrics in Prometheus.", topics: ["CI/CD workflows", "Prometheus Monitoring", "Grafana dashboards"], phase: 3 },
      { week: 6, title: "Week 11-12: GitOps Deployments & Mock Prep", desc: "Understand ArgoCD synchronization pipelines, study cloud HA patterns, and practice mock architectural cases.", topics: ["ArgoCD GitOps", "High Availability", "DevOps Mock Exams"], phase: 4 }
    ],
    phases: [
      {
        id: "cl_p1",
        title: "Linux Command Line & Basic AWS Resources (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master server operating systems, basic cloud setups, and secure identity configuration.",
        skillsCovered: ["Linux", "AWS", "IAM Permissions", "Git", "Networking"],
        tasks: [
          { id: "cl_p1_t1", title: "Learn Linux terminal shell scripts, environment paths, and permissions", done: false, description: "Master OS controls." },
          { id: "cl_p1_t2", title: "Provision AWS EC2 compute instances and configure VPC security groups", done: false, description: "Boot cloud servers." },
          { id: "cl_p1_t3", title: "Create AWS IAM users, groups, and configure credentials", done: false, description: "Enforce cloud access policies." }
        ],
        projects: [
          { title: "Static Server Cloud Deploy", desc: "Deploy a static web server within an AWS EC2 instance, configuring VPC rules to allow HTTP port traffic." },
          { title: "Cloud Storage Backup Script", desc: "Write a bash shell script that syncs local documents to an AWS S3 bucket daily using credentials." }
        ]
      },
      {
        id: "cl_p2",
        title: "Docker Containerization & GitHub Actions (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Package application scripts into portable containers and automate code checking pipelines.",
        skillsCovered: ["Docker", "Docker Compose", "CI/CD Pipelines", "YAML", "Git"],
        tasks: [
          { id: "cl_p2_t1", title: "Write custom Dockerfiles to containerize backend APIs and microservices", done: false, description: "Create container designs." },
          { id: "cl_p2_t2", title: "Manage multi-container application stacks using docker-compose commands", done: false, description: "Link database and backend services." },
          { id: "cl_p2_t3", title: "Build automated workflows using GitHub Actions to run tests on code updates", done: false, description: "Configure verification gates." }
        ],
        projects: [
          { title: "Containerized API Stack", desc: "Write docker-compose configurations linking an API service to a SQL database with environment volumes." },
          { title: "Automated Build Pipeline", desc: "Configure a GitHub Action workflow that automatically compiles and pushes Docker images to repositories on code commits." }
        ]
      },
      {
        id: "cl_p3",
        title: "Terraform IaC & Kubernetes Orchestration (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Provision multi-region infrastructure using code and orchestrate containers across servers.",
        skillsCovered: ["Terraform", "Kubernetes", "Prometheus", "Grafana", "YAML"],
        tasks: [
          { id: "cl_p3_t1", title: "Write Terraform scripts to build VPCs, subnets, and database systems", done: false, description: "Code infrastructure models." },
          { id: "cl_p3_t2", title: "Build Kubernetes manifests (Pods, Deployments, Services) to run apps", done: false, description: "Orchestrate scaling pods." },
          { id: "cl_p3_t3", title: "Configure Prometheus and Grafana to track resource loading metrics", done: false, description: "Set up cloud monitoring." }
        ],
        projects: [
          { title: "Terraform Cloud Stack Setup", desc: "Write Terraform files provisioning AWS networking elements and cluster interfaces in a single command run." },
          { title: "Kubernetes Local Cluster", desc: "Deploy a multi-service web app in Minikube, implementing load balancing and automated pod restarts." }
        ]
      },
      {
        id: "cl_p4",
        title: "GitOps Continuous Delivery & Placement Prep (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Implement continuous synchronization pipelines and practice cloud architecture placements.",
        skillsCovered: ["ArgoCD", "GitOps", "Cloud Security", "Cost Control", "Mock Screening"],
        tasks: [
          { id: "cl_p4_t1", title: "Setup ArgoCD to dynamically sync Kubernetes state from git files", done: false, description: "Automate delivery pipelines." },
          { id: "cl_p4_t2", title: "Study cloud high availability configurations and disaster recovery options", done: false, description: "Design fault-tolerant setups." },
          { id: "cl_p4_t3", title: "Perform mock interview screenings and align portfolio CV keywords", done: false, description: "Placement preparation." }
        ],
        projects: [
          { title: "Automated GitOps CD Pipeline", desc: "Connect ArgoCD to a GitHub manifest repo. Update the manifest and verify immediate deployments to local Kubernetes clusters." },
          { title: "Fault-Tolerant High Availability setup", desc: "Design an AWS architecture using load balancers and auto-scaling groups, detailing simulated node recoveries." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "Highlight certifications (AWS Solutions Architect, Certified Kubernetes Administrator). List specific IaC tools and pipeline throughput metrics.",
      hackathons: "Engage in infrastructure engineering challenges and startup builds. Prioritize DevOps configuration tasks.",
      internships: "Apply for roles like 'Cloud Support Intern', 'DevOps Intern', or 'System Engineering Intern' at hosting firms.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between a Virtual Machine (VM) and a Docker Container.",
          sampleAnswer: "A Virtual Machine runs a complete guest operating system on top of a hypervisor, which requires significant overhead. A Docker container shares the host operating system kernel and isolates application processes, making it faster and lightweight.",
          keywords: ["hypervisor", "guest operating system", "kernel", "overhead", "shares", "isolates"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is Infrastructure as Code (IaC), and what is the difference between Terraform and Ansible?",
          sampleAnswer: "IaC manages infrastructure using machine-readable definition files rather than manual settings. Terraform is a declarative provisioning tool that builds resources (like servers, networks), whereas Ansible is a configuration management tool that configures software inside those resources.",
          keywords: ["infrastructure", "files", "declarative", "provisioning", "configuration", "ansible"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "What is a Kubernetes Service, and explain the difference between ClusterIP, NodePort, and LoadBalancer.",
          sampleAnswer: "A Kubernetes Service defines policy rules to expose Pod workloads to network traffic. ClusterIP exposes the service internally within the cluster. NodePort exposes it on a static port on each node's IP. LoadBalancer provisions an external cloud load balancer to route traffic.",
          keywords: ["expose", "traffic", "clusterip", "nodeport", "loadbalancer", "external"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you prefer system operations and cloud design over regular software coding?",
          sampleAnswer: "I enjoy designing scalable environments and orchestrating systems pipelines. Ensuring applications run reliably for millions of users is a satisfying challenge for me.",
          keywords: ["scaling", "uptime", "orchestrating", "environments", "reliably", "operations"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How would you handle a critical database downtime alert that wakes you up at 2 AM?",
          sampleAnswer: "I would check health metrics to isolate the outage, notify stakeholders, spin up replicas if needed, resolve the root cause, verify data integrity, and document a post-mortem report.",
          keywords: ["isolate", "outage", "replicas", "post-mortem", "metrics", "alerts"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "If a developer insists on deploying code that bypasses testing pipelines because of a tight client deadline, how would you respond?",
          sampleAnswer: "I would explain the risk of production failures. I would propose running a fast subset of critical smoke checks, and logging a ticket to deploy the full suite immediately post-release.",
          keywords: ["risk", "production", "smoke checks", "pipeline", "deadline", "releases"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "cl_chall_1",
        title: "Docker Image Name Parser",
        instruction: "Write a JavaScript function `getImageName(imageString)` that parses a Docker image reference (e.g. 'ubuntu:latest' or 'node:16-alpine') and returns just the image name (excluding tag). Return undefined if input is empty.",
        starterCode: "function getImageName(imageString) {\n  if (!imageString) return undefined;\n  // Parse image name before tag delimiter\n}",
        testDescription: "Should split the image string by ':' and return the first element.",
        roadmapTaskId: "cl_p2_t1",
        verify: function(code) {
          if (code.includes("split") && code.includes("':'") && code.includes("[0]")) {
            return { success: true, message: "Perfect! Splitting by tag indicator is the standard reference parsing pattern." };
          }
          return { success: false, message: "Ensure you split the image string by ':' and return the first portion." };
        }
      },
      {
        id: "cl_chall_2",
        title: "YAML Config Validation",
        instruction: "Write a JavaScript function `isValidConfig(yamlKeys)` that returns `true` if the array contains key settings 'apiVersion', 'kind', and 'metadata', else returns `false`.",
        starterCode: "function isValidConfig(yamlKeys) {\n  // Verify key manifest fields\n}",
        testDescription: "Should check if all three strings exist in the array.",
        roadmapTaskId: "cl_p3_t2",
        verify: function(code) {
          if (code.includes("apiVersion") && code.includes("kind") && code.includes("metadata") && code.includes("includes")) {
            return { success: true, message: "Excellent! Standard Kubernetes manifests require these parameters to execute configuration parsing." };
          }
          return { success: false, message: "Make sure you check for existence of 'apiVersion', 'kind', and 'metadata' inside the array." };
        }
      }
    ]
  },

  ui_ux: {
    title: "UI/UX Designer",
    subtitle: "Create intuitive, aesthetically pleasing, and user-centered interfaces.",
    description: "UI/UX Designers conduct user research, build wireframes, design comprehensive component design systems, and construct interactive prototypes to deliver intuitive software experiences.",
    salaryRoadmap: "Entry: ₹4-7 LPA | Mid-Level: ₹8-15 LPA | Senior: ₹18-32 LPA | Lead: ₹35+ LPA",
    demand: "High demand across startup, consumer web, mobile application, and corporate digital design groups.",
    futureScope: "Strong future scope with conversational UIs, spatial design systems (AR/VR), design tokens scaling, and collaborative prototyping platforms.",
    remoteOpportunities: "High (70%+ design processes can be handled via collaborative whiteboard tools).",
    firstLanguage: "Figma & Wireframing",
    timeEstimate: "4 - 7 Months",
    skills: ["Figma", "Adobe XD", "Wireframing", "Design Systems", "Prototyping", "User Research", "Miro", "Interaction Design", "Typography", "Color Theory", "User Personas", "WCAG Accessibility"],
    tools: ["Figma Console", "Adobe Creative Suite", "Maze Testing Tool", "Miro / FigJam", "Zeplin Handoff"],
    concepts: ["Heuristic Evaluations", "Color Contrast Margins", "Grid Layout structures", "Design Token Hierarchies", "Usability Testing Protocols", "Developer Handoff Spec Sheets"],
    freePlatforms: ["Figma Learning Portal", "Interaction Design Foundation (Audit)", "freeCodeCamp", "Udemy (Free Tier)", "Coursera (Audit Mode)"],
    youtubeChannels: [
      { name: "DesignCourse", url: "https://www.youtube.com/@DesignCourse", desc: "Outstanding tutorials covering UI designs, color theories, spacing, and Figma tools." },
      { name: "Flux Academy", url: "https://www.youtube.com/@FluxAcademy", desc: "Superb web design processes, pricing strategies, and portfolio advice." }
    ],
    practicePlatforms: [
      { name: "Figma Communities", url: "https://www.figma.com/community", desc: "Explore open design files, templates, and share dashboard widgets." },
      { name: "Frontend Mentor", url: "https://www.frontendmentor.io", desc: "Compare your layouts against real code integrations." }
    ],
    mentorName: "Mentor Gary",
    mentorSpecialty: "Visual Systems & Accessibility Design",
    opportunities: [
      { type: "hackathon", title: "Global Design Sprints", desc: "Design challenge focused on creating solutions for social and accessibility problems.", meta: "Semi-annual • Online" },
      { type: "internship", title: "UI/UX Intern - Flipkart Design", desc: "Work with product designers creating screens for Indian e-commerce apps.", meta: "Summer • Paid • Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Spacing & Spacing Rules", desc: "Master Figma auto-layout, spacing grids, typography scaling, and create UI buttons.", topics: ["Figma Spacing Rules", "Auto-Layout", "Typography scales"], phase: 1 },
      { week: 2, title: "Week 3-4: Component Variables & Interactive Prototype", desc: "Learn to build reusable component states (hover/disabled) and wire up transitions.", topics: ["Figma Components", "Interactive states", "Mock wireframes"], phase: 2 },
      { week: 3, title: "Week 5-6: User Personas & Wireframing Flows", desc: "Map user discovery boards, design low-fidelity screens, and build user flows.", topics: ["User Personas", "UX Flows", "Low-Fi Wireframing"], phase: 2 },
      { week: 4, title: "Week 7-8: Advanced Design Tokens & Systems", desc: "Configure Figma variables, map color palettes, and create comprehensive design systems.", topics: ["Design Variables", "UI Kits", "Component Libraries"], phase: 3 },
      { week: 5, title: "Week 9-10: Accessibility Audit & Maze testing", desc: "Audit designs against WCAG guidelines and run usability checks in Maze.", topics: ["WCAG Color ratios", "Usability reports", "Maze test analytics"], phase: 3 },
      { week: 6, title: "Week 11-12: Developer Handoff & Portfolio Prep", desc: "Configure Dev Mode structures, label component markers, and format design case studies.", topics: ["Developer Handoff", "Figma Dev Mode", "Portfolio cases"], phase: 4 }
    ],
    phases: [
      {
        id: "ui_p1",
        title: "Figma Spacing, Typography, & Visual Fundamentals (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master typography scales, spacing rules, and auto-layout features in Figma.",
        skillsCovered: ["Figma", "Color Theory", "Typography", "Wireframing", "Layouts"],
        tasks: [
          { id: "ui_p1_t1", title: "Learn typography scaling rules, hierarchy, and font pairing configurations", done: false, description: "Master visual texts." },
          { id: "ui_p1_t2", title: "Master Figma Auto-Layout properties, alignment settings, and grids", done: false, description: "Build responsive frames." },
          { id: "ui_p1_t3", title: "Create low-fidelity paper wireframes and rebuild them inside Figma", done: false, description: "Translate sketches to screens." }
        ],
        projects: [
          { title: "Mobile Login Interface UI", desc: "Design a mobile login screen inside Figma using auto-layout. Apply typography scales and color pairings." },
          { title: "Static Portfolio Landing Wireframe", desc: "Sketch a desktop profile page and build a low-fidelity gray-scale mockup." }
        ]
      },
      {
        id: "ui_p2",
        title: "UI Components, States, & Interactive Prototyping (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Create interactive prototypes and modular component systems.",
        skillsCovered: ["Figma Components", "Prototyping", "Miro", "Interaction Design", "User flows"],
        tasks: [
          { id: "ui_p2_t1", title: "Build modular Figma components with active variant properties", done: false, description: "Create reusable buttons and fields." },
          { id: "ui_p2_t2", title: "Wire up interactive connections with transition curves (Smart Animate)", done: false, description: "Implement screen logic." },
          { id: "ui_p2_t3", title: "Map user flows and design high-fidelity interfaces", done: false, description: "Connect screens to flows." }
        ],
        projects: [
          { title: "SaaS Dashboard UI Prototype", desc: "Design a web platform display with sidebar links, charts, and table lists. Connect popups using interactive transitions." },
          { title: "E-Commerce User Flow Screen", desc: "Build a prototype showcasing catalog browse, shopping cart add, and checkout success flows." }
        ]
      },
      {
        id: "ui_p3",
        title: "Design Systems & Usability Testing Protocols (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Enforce WCAG requirements, build variables, and test design prototypes.",
        skillsCovered: ["Figma Variables", "WCAG Accessibility", "Maze Testing", "Heuristic Evaluation", "Design System"],
        tasks: [
          { id: "ui_p3_t1", title: "Implement Figma variable structures for colors, modes, and gaps", done: false, description: "Setup design tokens." },
          { id: "ui_p3_t2", title: "Verify color contrast levels against WCAG guidelines", done: false, description: "Ensure accessibility." },
          { id: "ui_p3_t3", title: "Configure prototype usability tests in Maze to compile metrics", done: false, description: "Gather user data." }
        ],
        projects: [
          { title: "Mobile App Accessibility Redesign", desc: "Audit a mobile app design against WCAG guidelines, redesigning color schemes and hit targets to improve usability." },
          { title: "Maze Usability Case Study", desc: "Build a prototype, run user testing in Maze, compile success charts, and present recommendations." }
        ]
      },
      {
        id: "ui_p4",
        title: "Developer Handoff & Portfolio Delivery (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Configure developer specs, build documentation, and compile case studies.",
        skillsCovered: ["Figma Dev Mode", "Zeplin", "Handoff specs", "Case Studies", "Mock Screening"],
        tasks: [
          { id: "ui_p4_t1", title: "Label Figma layout spec dimensions, margins, and tokens for handoff", done: false, description: "Prepare developer packages." },
          { id: "ui_p4_t2", title: "Compile design case studies detailing problem and testing logs", done: false, description: "Build your portfolio." },
          { id: "ui_p4_t3", title: "Perform mock interview screenings and optimize portfolio presentation", done: false, description: "Placement checks." }
        ],
        projects: [
          { title: "Enterprise Design System Library", desc: "Build a Figma UI library with typography styles, color palettes, form components, and design handoff docs." },
          { title: "SaaS Product Design Case Study", desc: "Document the research, wireframing, testing, and UI decisions of a SaaS dashboard in a case study." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "Link to your portfolio (Behance, Dribbble, or custom website). Highlight your testing metrics (e.g. 'redesign improved conversion by 15%').",
      hackathons: "Collaborate in software hackathons as the lead UI designer to show real team experience.",
      internships: "Apply for 'UI/UX Design Intern', 'Product Design Intern', or 'Interaction Design Intern' roles.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between UX and UI design.",
          sampleAnswer: "UX (User Experience) focuses on the overall feel, structure, user flows, and usability of a product, while UI (User Interface) focuses on the visual design, typography, color schemes, grids, and aesthetic components of the interface.",
          keywords: ["feel", "structure", "usability", "visual", "typography", "aesthetic"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is a Design System, and why is it useful?",
          sampleAnswer: "A Design System is a collection of reusable components, visual styles, and documentation guidelines that serve as the single source of truth. It ensures visual consistency across products and speeds up design and development cycles.",
          keywords: ["reusable", "truth", "consistency", "speeds up", "components", "guidelines"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "Explain WCAG accessibility guidelines and the difference between AA and AAA ratings.",
          sampleAnswer: "WCAG guidelines make web content accessible to people with disabilities. AA requires a minimum color contrast ratio of 4.5:1 for normal text. AAA is a higher compliance level requiring a 7:1 contrast ratio, plus additional requirements.",
          keywords: ["accessible", "disabilities", "contrast", "4.5:1", "7:1", "compliance"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "How do you handle negative feedback from a client or engineer regarding your UI designs?",
          sampleAnswer: "I avoid personal defensiveness. I ask clarifying questions to understand the underlying concern, check if user data supports their feedback, and collaborate on a revised solution.",
          keywords: ["clarifying", "defensiveness", "collaborate", "revised", "data", "feedback"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you advocate for user needs when a product manager prioritizes a feature that hurts usability?",
          sampleAnswer: "I present usability testing data, session recordings, or heuristic benchmarks to showcase the impact on retention. I suggest alternative designs that satisfy both business goals and user experience.",
          keywords: ["usability", "data", "retention", "alternative", "pm", "advocate"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a design challenge where you had to compromise on your ideal UX due to engineering constraints. How did you handle it?",
          sampleAnswer: "An engineer flagged a complex animation as too expensive to load. I simplified the state transition in Figma using standard CSS targets, which kept performance high while preserving usability.",
          keywords: ["compromise", "constraints", "simplified", "transition", "performance", "ideal"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "ui_chall_1",
        title: "Color Contrast Calculator",
        instruction: "Write a JavaScript function `isAccessibleContrast(ratio)` that returns `true` if the contrast ratio is at least 4.5 (WCAG AA standard), else returns `false`.",
        starterCode: "function isAccessibleContrast(ratio) {\n  // Check ratio compliance\n}",
        testDescription: "Should check if ratio is >= 4.5.",
        roadmapTaskId: "ui_p1_t2",
        verify: function(code) {
          if (code.includes(">=") && code.includes("4.5")) {
            return { success: true, message: "Perfect! WCAG AA standard requires contrast ratios >= 4.5 for standard text elements." };
          }
          return { success: false, message: "Ensure you return true if the ratio is greater than or equal to 4.5." };
        }
      },
      {
        id: "ui_chall_2",
        title: "Grid Spacing Checker",
        instruction: "Write a JavaScript function `isValidGridSpacing(gap)` that returns `true` if the pixel spacing gap is a multiple of 8 (8pt grid standard), else returns `false`.",
        starterCode: "function isValidGridSpacing(gap) {\n  // Verify 8pt grid compliance\n}",
        testDescription: "Should check if gap modulo 8 is equal to 0.",
        roadmapTaskId: "ui_p1_t1",
        verify: function(code) {
          if (code.includes("%") && code.includes("8") && code.includes("===") && code.includes("0")) {
            return { success: true, message: "Excellent! The 8pt spacing grid ensures clean layout scales in digital design." };
          }
          return { success: false, message: "Make sure you check if the gap is divisible by 8 (gap % 8 === 0)." };
        }
      }
    ]
  },

  business_analyst: {
    title: "Business Analyst",
    subtitle: "Bridge technology and business goals using data analytics.",
    description: "Business Analysts evaluate organizational workflows, write detailed product requirements, model SQL databases, and build interactive dashboards to help stakeholders make informed operational decisions.",
    salaryRoadmap: "Entry: ₹4-7 LPA | Mid-Level: ₹8-14 LPA | Senior: ₹16-28 LPA | Lead: ₹32+ LPA",
    demand: "High; crucial role in financial firms, consulting groups, e-commerce networks, and technology corporations.",
    futureScope: "Good; transitioning into AI analytics platforms, structured process modeling, and data-driven product requirements.",
    remoteOpportunities: "Moderate (50%+ allow remote work; requires frequent stakeholder meetings).",
    firstLanguage: "Excel & SQL",
    timeEstimate: "4 - 6 Months",
    skills: ["Excel", "SQL", "Power BI", "Tableau", "Analytics", "Agile", "Jira", "Confluence", "Draw.io", "User Stories", "Gap Analysis", "Requirements Gathering"],
    tools: ["Microsoft Excel", "Power BI / Tableau", "SQL Server / PostgreSQL", "Jira & Confluence", "Draw.io"],
    concepts: ["Business Process Mapping", "Key Performance Indicators (KPIs)", "Agile User Stories", "Requirements Gathering", "Gap Analysis", "Cost-Benefit Analysis"],
    freePlatforms: ["Harvard CS50", "freeCodeCamp", "Coursera (Audit Mode)", "Udemy (Free Tier)", "NPTEL"],
    youtubeChannels: [
      { name: "Alex The Analyst", url: "https://www.youtube.com/@AlexTheAnalyst", desc: "Outstanding data analysis tutorials, SQL case studies, and dashboard creation guides." },
      { name: "Techcanvass", url: "https://www.youtube.com/@Techcanvass", desc: "Superb business analyst tutorials, requirement documents, and Agile process guides." }
    ],
    practicePlatforms: [
      { name: "SQLZoo", url: "https://sqlzoo.net", desc: "Interactive environment to practice SQL query commands." },
      { name: "Kaggle", url: "https://www.kaggle.com", desc: "Find datasets to construct business reports and analysis dashboards." }
    ],
    mentorName: "Mentor Alex",
    mentorSpecialty: "Data Intelligence & Process Mapping",
    opportunities: [
      { type: "hackathon", title: "Business Case Competitions", desc: "National case study challenges to solve corporate strategy bottlenecks.", meta: "Annual events • Deloitte Sponsored" },
      { type: "internship", title: "Business Analyst Intern - Deloitte", desc: "Excellent role focused on gathering requirements and analyzing project metrics.", meta: "Summer • Paid • Mumbai/Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Advanced Excel Modeling", desc: "Master formulas, lookup methods, pivot tables, and conditional formatting in Excel.", topics: ["Excel VLOOKUP", "Pivot Tables", "Data Formats"], phase: 1 },
      { week: 2, title: "Week 3-4: SQL Queries & Databases", desc: "Learn relational database designs and write complex SQL SELECT queries.", topics: ["SQL SELECT commands", "GROUP BY Aggregations", "Table Joins"], phase: 2 },
      { week: 3, title: "Week 5-6: BI Dashboard Creation", desc: "Import database tables into Power BI or Tableau to build interactive KPI charts.", topics: ["Data Modeling", "KPI Metrics", "Tableau Charts"], phase: 2 },
      { week: 4, title: "Week 7-8: Agile Requirements & Jira", desc: "Write user stories, capture requirements, map workflows, and manage tasks in Jira.", topics: ["Jira Boards", "User Stories", "Process Flows (Draw.io)"], phase: 3 },
      { week: 5, title: "Week 9-10: Gap Analysis & Finance Models", desc: "Perform business gap analysis and compile cost-benefit finance sheets.", topics: ["Gap Analysis", "Cost-Benefit calculations", "Business cases"], phase: 3 },
      { week: 6, title: "Week 11-12: Presentation Prep & Mock Interviews", desc: "Document business requirement papers and practice conceptual analyst interviews.", topics: ["PRD Documentation", "Stakeholder Communication", "BA Mock Reviews"], phase: 4 }
    ],
    phases: [
      {
        id: "ba_p1",
        title: "Excel Data Modeling & Process Mapping (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master spreadsheet data formatting, basic SQL, and business process mapping.",
        skillsCovered: ["Excel", "SQL Basics", "Process Mapping", "Draw.io", "Data Analysis"],
        tasks: [
          { id: "ba_p1_t1", title: "Master Excel Pivot Tables, VLOOKUP/XLOOKUP, and IF formulas", done: false, description: "Core data layout manipulation." },
          { id: "ba_p1_t2", title: "Map business processes using standard BPMN shapes in Draw.io", done: false, description: "Document workflows." },
          { id: "ba_p1_t3", title: "Write simple SQL SELECT statements and basic column filters", done: false, description: "Extract database metrics." }
        ],
        projects: [
          { title: "Retail Sales Forecast Sheet", desc: "Analyze raw sales logs in Excel. Create pivot summaries, calculate margins, and chart monthly growth rates." },
          { title: "Customer Return Flow Diagram", desc: "Design a BPMN diagram in Draw.io detailing a customer return path across logistics, warehousing, and banking systems." }
        ]
      },
      {
        id: "ba_p2",
        title: "Database Queries & BI Dashboards (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Write complex SQL queries and construct interactive analytics dashboards.",
        skillsCovered: ["SQL", "Power BI", "Tableau", "Relational Databases", "Data Visualizations"],
        tasks: [
          { id: "ba_p2_t1", title: "Master SQL table joins, grouping aggregations, and subqueries", done: false, description: "Advanced database queries." },
          { id: "ba_p2_t2", title: "Import database schemas into Power BI / Tableau to build relationships", done: false, description: "Model business metrics." },
          { id: "ba_p2_t3", title: "Build interactive filters, cards, and charts in reporting dashboards", done: false, description: "Design visual insights." }
        ],
        projects: [
          { title: "Store KPI Dashboard", desc: "Build a Power BI report displaying transaction volumes, return rates, and customer retention metrics." },
          { title: "SQL Store Data Audit", desc: "Write SQL queries to find top customers and calculate monthly revenue growth rates." }
        ]
      },
      {
        id: "ba_p3",
        title: "Agile Requirements & Gap Analysis (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Write Agile user stories, design requirements, and perform process gap analysis.",
        skillsCovered: ["Agile", "Jira", "User Stories", "PRD Documentation", "Gap Analysis"],
        tasks: [
          { id: "ba_p3_t1", title: "Write Agile user stories with clear acceptance criteria", done: false, description: "Draft developer specifications." },
          { id: "ba_p3_t2", title: "Track project sprints, epics, and tasks inside Jira boards", done: false, description: "Agile task management." },
          { id: "ba_p3_t3", title: "Perform process gap analysis comparing current and target states", done: false, description: "Identify system bottlenecks." }
        ],
        projects: [
          { title: "Software Feature PRD", desc: "Write a Product Requirement Document (PRD) detailing user stories and acceptance criteria for a subscription feature." },
          { title: "Cost-Benefit Gap Analysis", desc: "Analyze a company workflow bottleneck, write a gap report, and present a cost-benefit calculation." }
        ]
      },
      {
        id: "ba_p4",
        title: "Financial Modeling & Stakeholder Presentation (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Build financial models, design stakeholder reports, and prepare for business case interviews.",
        skillsCovered: ["Financial Modeling", "Stakeholder Communication", "Presentation", "Business Cases", "Mock Screening"],
        tasks: [
          { id: "ba_p4_t1", title: "Model cash flows and return on investment (ROI) metrics in Excel", done: false, description: "Verify financial feasibility." },
          { id: "ba_p4_t2", title: "Present technical requirements clearly to non-technical stakeholders", done: false, description: "Bridge business and tech teams." },
          { id: "ba_p4_t3", title: "Review mock interviews, practice case studies, and optimize resumes", done: false, description: "Placement checks." }
        ],
        projects: [
          { title: "3-Year ROI Forecast Model", desc: "Build an Excel model predicting cash flows, setup costs, and returns for an enterprise software migration." },
          { title: "Business Migration Pitch Deck", desc: "Present a business migration case study deck explaining architecture benefits and cost forecasts." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "Highlight business value (e.g. 'Saved $15k yearly by auditing workflows'). List requirement tools (Jira, Draw.io) and SQL capabilities.",
      hackathons: "Engage in business case study sprints. Prioritize requirements mapping and presentation roles.",
      internships: "Apply for roles like 'Business Analyst Intern', 'Consulting Intern', or 'System Analyst Intern'.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the structure of a good User Story.",
          sampleAnswer: "A user story follows the format: 'As a [user role], I want [feature], so that [business value/benefit]'. It must be accompanied by clear, testable acceptance criteria.",
          keywords: ["as a", "i want", "so that", "acceptance criteria", "user role", "value"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is Gap Analysis, and what are the main steps to perform it?",
          sampleAnswer: "Gap Analysis compares the current operational state ('As-Is') with the target future state ('To-Be'). The steps are: identifying the current state, defining the target state, describing the gaps, and formulating an action plan.",
          keywords: ["as-is", "to-be", "gaps", "current state", "target state", "action plan"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "Explain the difference between Functional and Non-Functional requirements.",
          sampleAnswer: "Functional requirements describe what the system must do (e.g., 'User can add items to cart'). Non-functional requirements specify how the system performs under constraints (e.g., 'Page must load in under 2 seconds', 'Database must encrypt sensitive columns').",
          keywords: ["what the system", "how the system", "functional", "non-functional", "constraints", "perform"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to work as a Business Analyst rather than a programmer?",
          sampleAnswer: "I enjoy analyzing data to solve business problems and communicating solutions to teams. Being a Business Analyst allows me to bridge the gap between technology and business strategy.",
          keywords: ["bridge", "strategy", "solve", "communicating", "problems", "analyst"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you handle stakeholders who demand conflicting features during requirements gathering?",
          sampleAnswer: "I arrange an alignment meeting to map out user value, project timelines, and development costs for both requirements. I use data metrics to help stakeholders reach a unified priority decision.",
          keywords: ["alignment", "conflicting", "stakeholders", "timeline", "metrics", "priority"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a time you had to deliver bad news (like a project delay) to an important client or executive.",
          sampleAnswer: "I notified them early, explained the root cause honestly, presented alternative solutions (such as a staged release), and shared an updated timeline to rebuild confidence.",
          keywords: ["early", "honestly", "alternative", "timeline", "root cause", "confidence"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "ba_chall_1",
        title: "ROI Calculator",
        instruction: "Write a JavaScript function `calculateROI(gain, cost)` that returns the ROI percentage: `((gain - cost) / cost) * 100`. Return 0 if cost is 0.",
        starterCode: "function calculateROI(gain, cost) {\n  if (cost === 0) return 0;\n  // Compute ROI %\n}",
        testDescription: "Should compute ((gain - cost)/cost) * 100 correctly.",
        roadmapTaskId: "ba_p4_t1",
        verify: function(code) {
          if (code.includes("-") && code.includes("/") && code.includes("100")) {
            return { success: true, message: "Perfect! Calculating ROI is essential for evaluating business project viability." };
          }
          return { success: false, message: "Ensure you return the correct percentage: ((gain - cost) / cost) * 100." };
        }
      },
      {
        id: "ba_chall_2",
        title: "User Story Checker",
        instruction: "Write a JavaScript function `isValidUserStory(text)` that returns `true` if the input string contains key words 'as a', 'i want', and 'so that', else returns `false`.",
        starterCode: "function isValidUserStory(text) {\n  const lowercase = text.toLowerCase();\n  // Check for story elements\n}",
        testDescription: "Should search string for 'as a', 'i want', and 'so that'.",
        roadmapTaskId: "ba_p3_t1",
        verify: function(code) {
          if (code.includes("as a") && code.includes("i want") && code.includes("so that") && code.includes("includes")) {
            return { success: true, message: "Excellent! Standard Agile user stories must define the role, action, and business value." };
          }
          return { success: false, message: "Make sure you check for the strings 'as a', 'i want', and 'so that' inside the lowercase text." };
        }
      }
    ]
  },

  product_manager: {
    title: "Product Manager",
    subtitle: "Guide product lifecycles from ideation to launch, balancing client needs and tech limits.",
    description: "Product Managers act as the central hub connecting engineering, UX design, marketing, and executives. They validate ideas, draft PRDs, prioritize feature backlogs, define metrics, and direct product rollouts.",
    salaryRoadmap: "Entry: ₹6-10 LPA | Mid-Level: ₹12-22 LPA | Senior: ₹25-45 LPA | Lead: ₹50+ LPA",
    demand: "High globally; crucial role in tech startups, consumer web brands, SaaS providers, and major digital enterprises.",
    futureScope: "Excellent; transitioning to AI-guided product analytics, micro-targeted growth hacks, and collaborative development systems.",
    remoteOpportunities: "Moderate-High (55%+ since sync meetings can be hosted remotely, though hybrid is preferred).",
    firstLanguage: "PRD Writing & Figma",
    timeEstimate: "5 - 7 Months",
    skills: ["Product Strategy", "PRD Documentation", "UX wireframing", "Prioritization", "Agile", "Jira", "Figma", "SQL", "Amplitude", "A/B Testing", "GTM Strategy", "Metrics (AARRR)"],
    tools: ["Google Docs / Notion", "Figma Viewer", "Jira / Asana", "Amplitude / Mixpanel", "Optimizely"],
    concepts: ["Product Requirements Document (PRD)", "Product Funnels (AARRR)", "Prioritization (RICE/Kano)", "Go-To-Market (GTM) Plan", "Usability Prototyping", "A/B Testing Experiments"],
    freePlatforms: ["Product School Guides", "freeCodeCamp", "Coursera (Audit Mode)", "Udemy (Free Tier)", "NPTEL"],
    youtubeChannels: [
      { name: "Product School", url: "https://www.youtube.com/@ProductSchool", desc: "Outstanding product strategy panels, PM career advice, and framework tutorials." },
      { name: "Lenny's Podcast", url: "https://www.youtube.com/@LennysPodcast", desc: "In-depth interviews with world-class product leaders sharing growth tactics." }
    ],
    practicePlatforms: [
      { name: "Figma Community", url: "https://www.figma.com/community", desc: "Review dashboard UI structures and UX mock templates." },
      { name: "Amplitude Academy", url: "https://academy.amplitude.com", desc: "Learn to track user flows and retention analytics." }
    ],
    mentorName: "Mentor Lenny",
    mentorSpecialty: "Product Growth & Feature Prioritization",
    opportunities: [
      { type: "hackathon", title: "Product Ideation Challenges", desc: "Sprint events focused on designing product solutions for complex market problems.", meta: "Quarterly • Online" },
      { type: "internship", title: "Associate Product Manager Intern - Uber", desc: "Work with engineering and design teams to build mobility features.", meta: "Summer • Paid • Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Product Strategy & Documenting", desc: "Master market research, analyze competitors, and draft Product Requirement Documents (PRDs).", topics: ["PRD Structure", "Competitor Matrix", "User Surveys"], phase: 1 },
      { week: 2, title: "Week 3-4: Feature Prioritization & Jira", desc: "Apply RICE and Kano frameworks, manage feature backlogs, and plan sprints in Jira.", topics: ["RICE Scoring", "Sprint Planning", "Jira Backlog"], phase: 2 },
      { week: 3, title: "Week 5-6: UX Wireframes & API Logic", desc: "Sketch screen wireframes in Figma and map backend API endpoints for features.", topics: ["Figma UX Mock", "API specs", "User Flows"], phase: 2 },
      { week: 4, title: "Week 7-8: Retention Metrics & SQL", desc: "Learn user funnels (AARRR), write SQL query scripts, and monitor events in Amplitude.", topics: ["SQL SELECT", "AARRR Funnels", "Cohort Retention"], phase: 3 },
      { week: 5, title: "Week 9-10: GTM Sprints & A/B Experiments", desc: "Design go-to-market strategies, plan marketing launches, and set up A/B test splits.", topics: ["GTM Strategies", "A/B Test Setup", "Statistical Confidence"], phase: 3 },
      { week: 6, title: "Week 11-12: Launch Auditing & Mock Interviews", desc: "Compile product launch dashboards and practice mock product case interviews.", topics: ["Product Case Studies", "Estimation cases", "PM Mock Reviews"], phase: 4 }
    ],
    phases: [
      {
        id: "pm_p1",
        title: "Product Strategy & Competitor Benchmarking (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master competitive analysis, user discovery processes, and PRD writing.",
        skillsCovered: ["Product Strategy", "PRD Documentation", "User Discovery", "Competitor Analysis"],
        tasks: [
          { id: "pm_p1_t1", title: "Draft a feature PRD containing user context, scope, and metrics", done: false, description: "Core product documentation." },
          { id: "pm_p1_t2", title: "Compile a competitor matrix comparing strengths, weaknesses, and pricing", done: false, description: "Map market landscape." },
          { id: "pm_p1_t3", title: "Design user surveys to discover workflow friction points", done: false, description: "Gather customer insights." }
        ],
        projects: [
          { title: "Mini Feature PRD", desc: "Write a PRD detailing requirements, user stories, and success metrics for a premium subscription feature." },
          { title: "Competitor Market Report", desc: "Compile a detailed slide deck comparing three e-commerce websites and identifying market gaps." }
        ]
      },
      {
        id: "pm_p2",
        title: "Feature Prioritization & UX Wireframing (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Apply prioritization frameworks, manage backlogs, and sketch user flows.",
        skillsCovered: ["Prioritization RICE", "Agile Jira", "UX wireframing", "Figma", "User Flows"],
        tasks: [
          { id: "pm_p2_t1", title: "Apply RICE (Reach, Impact, Confidence, Effort) scoring to prioritize features", done: false, description: "Data-driven backlog grooming." },
          { id: "pm_p2_t2", title: "Manage sprints, write task tickets, and define epics in Jira", done: false, description: "Agile product management." },
          { id: "pm_p2_t3", title: "Build low-fidelity wireframe flows in Figma to map user steps", done: false, description: "Visual UX mapping." }
        ],
        projects: [
          { title: "Prioritized Product Backlog", desc: "Create a prioritized backlog spreadsheet using RICE scoring, complete with JIRA tickets for a sprint cycle." },
          { title: "Interactive Checkout Flow UX", desc: "Design a low-fidelity wireframe in Figma mapping the path from product details to payment success." }
        ]
      },
      {
        id: "pm_p3",
        title: "Retention Analytics & SQL Ingestion (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Track user behavior metrics, write SQL queries, and deploy A/B tests.",
        skillsCovered: ["SQL", "Amplitude", "Metrics AARRR", "A/B Testing", "Cohort Retention"],
        tasks: [
          { id: "pm_p3_t1", title: "Write SQL SELECT queries to extract monthly active users (MAU)", done: false, description: "Analyze database logs." },
          { id: "pm_p3_t2", title: "Configure event tracking funnels and cohort retention inside Amplitude", done: false, description: "Set up analytics dashboards." },
          { id: "pm_p3_t3", title: "Design A/B test experiments specifying hypothesis and sample sizes", done: false, description: "Plan validation testing." }
        ],
        projects: [
          { title: "SQL Cohort Retention Query", desc: "Write SQL queries that calculate e-commerce user purchase retention cohorts over 30/60/90 days." },
          { title: "Amplitude Funnel Report", desc: "Build an Amplitude dashboard analyzing drop-off rates on signups, presenting solutions to stakeholder boards." }
        ]
      },
      {
        id: "pm_p4",
        title: "Go-To-Market Plans & Launch Strategy (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Design go-to-market plans, launch features, and practice PM interview questions.",
        skillsCovered: ["GTM Strategy", "Launch Management", "Monetization Models", "Product Cases", "Mock Screening"],
        tasks: [
          { id: "pm_p4_t1", title: "Formulate Go-To-Market (GTM) campaigns outlining channels and metrics", done: false, description: "Plan customer acquisition." },
          { id: "pm_p4_t2", title: "Model SaaS monetization tiers and calculate customer lifetime value (LTV)", done: false, description: "Verify pricing strategy." },
          { id: "pm_p4_t3", title: "Practice product estimation and strategy case interviews", done: false, description: "Prepare for placement checks." }
        ],
        projects: [
          { title: "Product Launch GTM Deck", desc: "Write a GTM plan outlining target segments, marketing campaigns, email loops, and launch metrics." },
          { title: "SaaS Monetization Model", desc: "Build a financial sheet demonstrating subscription levels, pricing strategies, LTV, and CAC metrics." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "State feature outcomes quantitatively (e.g. 'prioritized backlog that reduced churn by 8% and increased signup conversion by 12%'). Highlight PRDs.",
      hackathons: "Collaborate in software hackathons as the lead product manager to show team organization skills.",
      internships: "Apply for 'Associate Product Manager (APM) Intern' or 'Product Analyst Intern' roles.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "What is RICE prioritization, and how does it work?",
          sampleAnswer: "RICE is a prioritization framework where: Score = (Reach * Impact * Confidence) / Effort. Reach is user count, Impact is value, Confidence is rating percentage, and Effort is developer person-months.",
          keywords: ["reach", "impact", "confidence", "effort", "framework", "score"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "Explain the AARRR metrics funnel.",
          sampleAnswer: "AARRR stands for Acquisition (user visits), Activation (first value experience), Retention (returning users), Referral (sharing with others), and Revenue (paid transactions).",
          keywords: ["acquisition", "activation", "retention", "referral", "revenue", "funnel"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "Explain how to set up and evaluate an A/B test for a new landing page design.",
          sampleAnswer: "We split users randomly into control (old page) and variant (new page) groups. We define a success metric (e.g. signup rate) and run the test until we reach statistical significance, checking the p-value against our threshold (normally 0.05).",
          keywords: ["control", "variant", "signup", "statistical significance", "p-value", "split"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to work as a Product Manager rather than an engineer?",
          sampleAnswer: "I enjoy looking at the bigger picture. Bridging engineering, visual design, and business strategy to launch features that solve user problems is highly rewarding to me.",
          keywords: ["picture", "bridging", "strategy", "solve", "problems", "manager"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you tell engineers that a feature they spent weeks coding is being rolled back due to poor user metrics?",
          sampleAnswer: "I present usability testing logs and conversion drop-offs. I thank them for their execution, explain that user data guides rollbacks, and align on a path to address the issues.",
          keywords: ["metrics", "data", "rollbacks", "thank", "explain", "align"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "How would you handle a product launch delay caused by engineering bottlenecks, right before a scheduled press release?",
          sampleAnswer: "I would contact marketing to reschedule the announcement, align with engineering to trim non-critical tasks for a staged launch, notify stakeholders, and update the release timeline.",
          keywords: ["marketing", "delay", "trim", "staged launch", "stakeholders", "timeline"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "pm_chall_1",
        title: "RICE Score Calculator",
        instruction: "Write a JavaScript function `calculateRICE(reach, impact, confidence, effort)` that computes `(reach * impact * confidence) / effort`. Return 0 if effort is 0.",
        starterCode: "function calculateRICE(reach, impact, confidence, effort) {\n  if (effort === 0) return 0;\n  // Compute RICE score\n}",
        testDescription: "Should compute (reach * impact * confidence) / effort correctly.",
        roadmapTaskId: "pm_p2_t1",
        verify: function(code) {
          if (code.includes("*") && code.includes("/") && code.includes("confidence")) {
            return { success: true, message: "Perfect! Calculating RICE scores objectively prioritizes backlog features." };
          }
          return { success: false, message: "Ensure you return the correct score: (reach * impact * confidence) / effort." };
        }
      },
      {
        id: "pm_chall_2",
        title: "Retention Cohort Calculator",
        instruction: "Write a JavaScript function `getRetentionRate(activeUsers, totalUsers)` that returns the retention percentage `(activeUsers / totalUsers) * 100`. Return 0 if totalUsers is 0.",
        starterCode: "function getRetentionRate(activeUsers, totalUsers) {\n  if (totalUsers === 0) return 0;\n  // Compute retention rate\n}",
        testDescription: "Should divide active by total and multiply by 100.",
        roadmapTaskId: "pm_p3_t2",
        verify: function(code) {
          if (code.includes("/") && code.includes("100") && code.includes("activeUsers")) {
            return { success: true, message: "Excellent! Monitoring cohort retention measures product-market fit." };
          }
          return { success: false, message: "Make sure you return: (activeUsers / totalUsers) * 100." };
        }
      }
    ]
  },

  mechanical_design: {
    title: "Mechanical Design Engineer",
    subtitle: "Design 3D models, build mechanical assemblies, and run FEA stress simulations.",
    description: "Mechanical Design Engineers design components, specify materials, apply geometric tolerancing (GD&T), build complex assemblies, and run stress/thermal simulations to verify physical structures.",
    salaryRoadmap: "Entry: ₹3.5-6 LPA | Mid-Level: ₹7-13 LPA | Senior: ₹15-28 LPA | Lead: ₹32+ LPA",
    demand: "Steady demand globally across automotive, aerospace, robotics, manufacturing, and consumer hardware domains.",
    futureScope: "Good; migrating heavily to additive manufacturing (3D printing), automated CAD configurations, and generative design engineering.",
    remoteOpportunities: "Low-Moderate (30%+ since prototyping and assembly validations require workshop or site presence).",
    firstLanguage: "SolidWorks / AutoCAD",
    timeEstimate: "5 - 8 Months",
    skills: ["AutoCAD", "SolidWorks", "GD&T", "Assembly Modeling", "Statics", "FEA Analysis", "ANSYS", "CFD", "DFM", "DFA", "3D Printing", "Materials Selection"],
    tools: ["SolidWorks / Fusion 360", "ANSYS Workbench", "CFD Solvers", "3D Printers", "GD&T Spec Sheets"],
    concepts: ["Orthographic Projections", "Geometric Dimensioning & Tolerancing", "Stress and Strain Calculations", "Finite Element Analysis (FEA)", "Design for Manufacturing (DFM)", "Physical Prototyping"],
    freePlatforms: ["Autodesk Learning Portal", "SolidWorks Tutorials", "freeCodeCamp", "Udemy (Free Tier)", "NPTEL"],
    youtubeChannels: [
      { name: "SolidWorks Tutorial", url: "https://www.youtube.com/@SolidWorksTutorials", desc: "Outstanding step-by-step guides for sketching, 3D modeling, and sheet metal parts." },
      { name: "ANSYS Learning", url: "https://www.youtube.com/@AnsysLearning", desc: "Superb FEA simulation setups, thermal analyses, and boundary condition guides." }
    ],
    practicePlatforms: [
      { name: "GrabCAD", url: "https://grabcad.com", desc: "Explore open CAD files, assemblies, and participate in design challenges." },
      { name: "NPTEL Courses", url: "https://nptel.ac.in", desc: "Excellent video lectures covering strength of materials and manufacturing." }
    ],
    mentorName: "Mentor Solid",
    mentorSpecialty: "CAD Modeling & Structural Simulations",
    opportunities: [
      { type: "hackathon", title: "CAD Design Challenges", desc: "Design sprints focused on creating optimized brackets or robotics components.", meta: "Annual • GrabCAD Sponsored" },
      { type: "internship", title: "Mechanical Design Intern - Tata Motors", desc: "Work with engineering teams developing automotive components.", meta: "Summer • Paid • Pune" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: 2D Drafting & Basic CAD", desc: "Master orthographic sketches, dimensioning, and create basic 3D extrusions in SolidWorks.", topics: ["Orthographic Projection", "GD&T Basics", "3D Extrude"], phase: 1 },
      { week: 2, title: "Week 3-4: Advanced Parts & Drawings", desc: "Learn to build revolving cuts, sweep features, and create detailed drawing sheets.", topics: ["Revolve & Sweep", "Drawing Templates", "Tolerance margins"], phase: 1 },
      { week: 3, title: "Week 5-6: Assemblies & Mate Relations", desc: "Combine parts into assemblies, define mate relationships, and check clearances.", topics: ["Mate Configurations", "Interference detection", "Gear relations"], phase: 2 },
      { week: 4, title: "Week 7-8: Static Stress Simulations", desc: "Setup material properties, apply boundary conditions, and run FEA stress analysis in ANSYS.", topics: ["ANSYS Setup", "Mesh Generation", "Von-Mises Stress"], phase: 3 },
      { week: 5, title: "Week 9-10: Thermal Analysis & CFD", desc: "Build CFD meshes, run heat transfer models, and analyze fluid velocity vectors.", topics: ["CFD Meshes", "Heat Transfer", "Fluent Solvers"], phase: 3 },
      { week: 6, title: "Week 11-12: DFM Optimization & Mock Prep", desc: "Apply DFM/DFA constraints, compile design reports, and practice technical CAD interviews.", topics: ["Injection Molding DFM", "Material Selections", "CAD Mock Reviews"], phase: 4 }
    ],
    phases: [
      {
        id: "me_p1",
        title: "Engineering Sketching & 3D Modeling (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Master 2D drawing projections, GD&T tolerancing, and basic 3D CAD modeling.",
        skillsCovered: ["AutoCAD", "SolidWorks", "GD&T", "Sketching", "Drafting"],
        tasks: [
          { id: "me_p1_t1", title: "Master orthographic and isometric 2D drawing projections in AutoCAD", done: false, description: "Master projection concepts." },
          { id: "me_p1_t2", title: "Understand Geometric Dimensioning & Tolerancing (GD&T) datum symbols", done: false, description: "Enforce manufacturing tolerances." },
          { id: "me_p1_t3", title: "Build 3D models using basic extrude, cut, and fillet features", done: false, description: "Master SolidWorks parts." }
        ],
        projects: [
          { title: "Flanged Coupling 3D Model", desc: "Design a standard flanged coupling assembly in SolidWorks, complete with toleranced bolts and keyways." },
          { title: "Engine Piston Drawing Sheet", desc: "Draft a 2D engineering drawing of an engine piston with GD&T specs and surface finish markers." }
        ]
      },
      {
        id: "me_p2",
        title: "Mechanical Assemblies & Kinematic Relations (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Build multi-component assemblies and model kinematic motion constraints.",
        skillsCovered: ["Assembly Modeling", "Mates", "Fusion 360", "Strength of Materials", "Mechanics"],
        tasks: [
          { id: "me_p2_t1", title: "Combine multiple 3D parts into assemblies using mate relationships", done: false, description: "Build assemblies." },
          { id: "me_p2_t2", title: "Run interference and clearance checks on moving parts", done: false, description: "Check assembly collisions." },
          { id: "me_p2_t3", title: "Compute mechanical stress and shear force limits for beams", done: false, description: "Verify material thresholds." }
        ],
        projects: [
          { title: "Gearbox Mechanical Assembly", desc: "Design a 2-stage spur gearbox. Assemble shafts, gears, and bearings, verifying gear ratio kinematics." },
          { title: "Structural Stress Analysis on a Bracket", desc: "Perform hand calculations for stress limits on a cantilever bracket, verifying safety margins." }
        ]
      },
      {
        id: "me_p3",
        title: "Finite Element Analysis & CFD Simulations (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Configure meshes, assign material constraints, and run FEA stress/CFD flow models.",
        skillsCovered: ["ANSYS", "FEA Analysis", "CFD", "Mesh Generation", "Heat Transfer"],
        tasks: [
          { id: "me_p3_t1", title: "Setup material parameters, mesh density, and run FEA models in ANSYS", done: false, description: "Perform structural simulations." },
          { id: "me_p3_t2", title: "Apply pressure loads and fixed support boundary conditions", done: false, description: "Setup model constraints." },
          { id: "me_p3_t3", title: "Configure heat transfer and CFD fluid flow meshes", done: false, description: "Verify thermal properties." }
        ],
        projects: [
          { title: "Heat Sink Thermal Simulation", desc: "Run a thermal simulation on an aluminum heat sink in ANSYS, mapping temperature contours and heat dissipation rates." },
          { title: "Structural Buckling of a Frame", desc: "Perform FEA buckling analysis on a structural welded frame under payload limits, mapping safety variables." }
        ]
      },
      {
        id: "me_p4",
        title: "DFM / DFA Guidelines & Physical Prototyping (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Optimize parts for injection molding/machining and prepare for technical design placements.",
        skillsCovered: ["DFM", "DFA", "3D Printing", "Materials Selection", "Mock Screening"],
        tasks: [
          { id: "me_p4_t1", title: "Optimize 3D models for injection molding and CNC machining setups", done: false, description: "Design for manufacturing." },
          { id: "me_p4_t2", title: "Select plastic/metal alloys based on strength and cost requirements", done: false, description: "Select engineering materials." },
          { id: "me_p4_t3", title: "Perform mock interview screenings and present CAD portfolio cases", done: false, description: "Placement readiness check." }
        ],
        projects: [
          { title: "Injection Molded Enclosure Design", desc: "Re-engineer an electronic enclosure using DFM rules: draft angles, uniform wall thicknesses, and rib supports." },
          { title: "Robotic Linkage Prototype", desc: "Design a 3D-printable robotic arm linkage, assemble it, and document stress limits and CNC options." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "Host your CAD portfolio on GrabCAD. Highlight your FEA simulation accuracies (e.g. 'FEA matched physical load testing with 95% accuracy').",
      hackathons: "Engage in student vehicle builds (Formula SAE, BAJA) to showcase real hardware experience.",
      internships: "Apply for 'Mechanical Design Intern', 'Product Design Intern', or 'FEA Analyst Intern' roles.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between a Clearance Fit and an Interference Fit.",
          sampleAnswer: "A clearance fit ensures there is always space between mating parts, allowing relative movement. An interference fit has overlapping dimension boundaries, requiring force or thermal expansion to assemble.",
          keywords: ["clearance", "interference", "relative movement", "overlapping", "space", "force"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is GD&T, and explain the significance of Datum features.",
          sampleAnswer: "GD&T specifies dimensional tolerances based on part function. Datums are reference planes, lines, or points from which other dimensions and geometric properties are measured, ensuring consistency during manufacturing.",
          keywords: ["tolerance", "datum", "reference", "measurement", "manufacturing", "geometric"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "Explain the steps of Finite Element Analysis (FEA) and how to verify mesh convergence.",
          sampleAnswer: "FEA steps are: Pre-processing (modeling, meshing, constraints), Solving (solving equations), and Post-processing (analyzing stress). We verify mesh convergence by refining the mesh density and checking if stress results stabilize.",
          keywords: ["pre-processing", "solving", "post-processing", "mesh convergence", "refining", "stabilize"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to work specifically in Mechanical Design over software coding?",
          sampleAnswer: "I enjoy designing physical products. The process of translating a 2D sketch into a physical mechanical component that performs a function is highly rewarding.",
          keywords: ["physical", "sketch", "function", "translating", "component", "design"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you handle feedback from a machinist stating your part is impossible to manufacture as designed?",
          sampleAnswer: "I arrange a meeting with the machinist to identify the design bottleneck. I discuss tolerance margins and tool clearances, and modify the design using DFM rules.",
          keywords: ["machinist", "dfm", "modify", "clearance", "tolerance", "feedback"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a design calculation error you made that was caught during manufacturing or assembly. How did you resolve it?",
          sampleAnswer: "I calculated a shaft keyway clearance incorrectly, causing parts to bind. I worked with the workshop to re-machine the slot, updated the CAD blueprint, and added verification checks.",
          keywords: ["clearance", "re-machine", "blueprint", "keyway", "resolve", "calculation"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "me_chall_1",
        title: "Safety Factor Calculator",
        instruction: "Write a JavaScript function `calculateSafetyFactor(yieldStrength, workingStress)` that computes and returns the safety factor (`yieldStrength / workingStress`). Return 0 if workingStress is 0.",
        starterCode: "function calculateSafetyFactor(yieldStrength, workingStress) {\n  if (workingStress === 0) return 0;\n  // Compute factor\n}",
        testDescription: "Should divide yieldStrength by workingStress.",
        roadmapTaskId: "me_p2_t3",
        verify: function(code) {
          if (code.includes("/") && code.includes("workingStress") && code.includes("yieldStrength")) {
            return { success: true, message: "Perfect! Calculating safety factors prevents mechanical structures from failing under load." };
          }
          return { success: false, message: "Ensure you return the correct safety factor: yieldStrength / workingStress." };
        }
      },
      {
        id: "me_chall_2",
        title: "Hooke's Law Calculator",
        instruction: "Write a JavaScript function `calculateStress(force, area)` that returns the stress `force / area`. Return 0 if area is 0.",
        starterCode: "function calculateStress(force, area) {\n  if (area === 0) return 0;\n  // Compute stress\n}",
        testDescription: "Should divide force by area.",
        roadmapTaskId: "me_p2_t3",
        verify: function(code) {
          if (code.includes("/") && code.includes("force") && code.includes("area")) {
            return { success: true, message: "Excellent! Mechanical stress is force divided by cross-sectional area." };
          }
          return { success: false, message: "Make sure you return: force / area." };
        }
      }
    ]
  },

  civil_services: {
    title: "Civil Services (IAS/IPS/IFS)",
    subtitle: "Public administration, policymaking, and state governance for India (UPSC).",
    description: "Civil Servants manage public administration, enforce policy structures, oversee law enforcement, and coordinate government services. Careers are secured through the competitive UPSC Civil Services Examination.",
    salaryRoadmap: "Entry (SDM): ₹56,100 basic + DA/HRA | Mid (District Magistrate): ₹78,800-1,18,500 | Senior (Secretary): ₹2,25,000+ basic",
    demand: "Highly prestigious and critical leadership positions within the Government of India, directing policy implementation and district administration.",
    futureScope: "Permanent career path; focus is migrating towards digital governance, e-service delivery models, and data-driven public policy implementation.",
    remoteOpportunities: "None (100% on-site administrative presence is required for public interaction and site visits).",
    firstLanguage: "NCERTs & Daily Newspaper",
    timeEstimate: "12 - 18 Months",
    skills: ["Indian Polity", "Modern History", "Geography", "Economics", "Current Affairs", "Mains Answer Writing", "Analytical Reasoning", "Public Policy", "Ethics", "Essay Structuring", "Communication"],
    tools: ["NCERT Books", "The Hindu / Indian Express", "UPSC Syllabus Guide", "Mains Test Papers", "PIB Feed", "Standard References (Laxmikanth)"],
    concepts: ["Constitutional Law Structures", "Public Administration", "Indian Economy Dynamics", "Socio-Economic Development Policies", "Governance & Accountability", "Administrative Ethics"],
    freePlatforms: ["Mrunal.org", "PIB.gov.in", "InsightsOnIndia", "VisionIAS (Free Resources)", "NPTEL", "Unacademy (Free YouTube)"],
    youtubeChannels: [
      { name: "Mrunal Patel", url: "https://www.youtube.com/@MrunalPatel", desc: "Outstanding economy tutorials, current affairs analyses, and strategy sessions." },
      { name: "StudyIQ IAS", url: "https://www.youtube.com/@StudyIQIAS", desc: "Daily current affairs, international relations, and syllabus breakdown videos." }
    ],
    practicePlatforms: [
      { name: "InsightsOnIndia", url: "https://www.insightsonindia.com", desc: "Daily answer writing practice portal and quizzes." },
      { name: "VisionIAS", url: "https://www.visionias.in", desc: "Access mock tests and toppers' answer sheets." }
    ],
    mentorName: "Mentor Laxmikanth",
    mentorSpecialty: "Indian Constitution & Polity",
    opportunities: [
      { type: "hackathon", title: "Mains Test Series", desc: "Simulated exam series to practice writing general studies answers under time constraints.", meta: "Quarterly • Offline centers" },
      { type: "internship", title: "NITI Aayog Internship", desc: "Excellent policy research internship program targeting graduates.", meta: "Summer • Paid • New Delhi" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: NCERT Polity & Geography", desc: "Study basic Class 6-12 NCERT books for Indian Polity and Physical Geography.", topics: ["NCERT Reading", "Constitution basics", "Geography concepts"], phase: 1 },
      { week: 2, title: "Week 3-4: Core Polity & Newspaper", desc: "Read Laxmikanth Polity chapters and start summarizing daily newspaper editorials.", topics: ["Fundamental Rights", "Newspaper analysis", "Polity note-taking"], phase: 1 },
      { week: 3, title: "Week 5-6: CSAT Prep & Modern History", desc: "Practice analytical reasoning past papers and read modern history reference books.", topics: ["CSAT Reasoning", "Modern India history", "CSAT Numericals"], phase: 2 },
      { week: 4, title: "Week 7-8: Mains GS Answer Writing", desc: "Practice structuring 150-250 word answers for General Studies Mains papers.", topics: ["Introduction formats", "Keyword mappings", "GS Paper 1 & 2 answers"], phase: 2 },
      { week: 5, title: "Week 9-10: Optional Subject Core", desc: "Study core conceptual syllabus topics of your optional subject choice.", topics: ["Optional paper 1 topics", "Syllabus mapping", "Optional past papers"], phase: 3 },
      { week: 6, title: "Week 11-12: Full GS Mocks & Personality Prep", desc: "Write 3-hour General Studies mock exams and practice DAF-based interview profiling.", topics: ["Mains GS Mocks", "DAF Profiling", "Mock interview panels"], phase: 4 }
    ],
    phases: [
      {
        id: "cs_p1",
        title: "Basic NCERT Foundation & Newspaper Audits (Beginner)",
        estimatedTime: "8-12 weeks",
        description: "Build a core foundation in Polity, Geography, and History using school textbooks.",
        skillsCovered: ["NCERT Reading", "Polity Basics", "Geography", "Modern History", "Newspaper Analysis"],
        tasks: [
          { id: "cs_p1_t1", title: "Read Class 6-12 NCERT books for Indian Polity, Geography, and History", done: false, description: "Build baseline knowledge." },
          { id: "cs_p1_t2", title: "Read daily newspaper (The Hindu/Indian Express) editorials", done: false, description: "Current affairs tracking." },
          { id: "cs_p1_t3", title: "Study the UPSC syllabus and outline core subjects", done: false, description: "Map study targets." }
        ],
        projects: [
          { title: "Polity Concept Map", desc: "Create a detailed chart mapping the relationships between the Parliament, President, and Judiciary." },
          { title: "Current Affairs Summary File", desc: "Compile a monthly folder tracking main national events, categorizing by GS syllabus tags." }
        ]
      },
      {
        id: "cs_p2",
        title: "Core GS Reference Books & CSAT Aptitude (Intermediate)",
        estimatedTime: "12-16 weeks",
        description: "Study advanced reference materials and practice aptitude test questions.",
        skillsCovered: ["Polity Laxmikanth", "Indian Economy", "CSAT Reasoning", "Mains Answer Writing", "GS Core"],
        tasks: [
          { id: "cs_p2_t1", title: "Read standard polity reference chapters (Laxmikanth) and economy guides", done: false, description: "Advanced subject mastery." },
          { id: "cs_p2_t2", title: "Solve quantitative and logical reasoning questions in CSAT past papers", done: false, description: "Verify CSAT pass marks." },
          { id: "cs_p2_t3", title: "Write weekly general studies answers and compare with toppers' drafts", done: false, description: "Begin answer structuring." }
        ],
        projects: [
          { title: "Fundamental Rights Analysis", desc: "Draft a case-study notebook explaining the judicial limits of freedom of speech in India." },
          { title: "CSAT Mock Problem Bank", desc: "Solve and document answers for 200 logical reasoning questions from past UPSC papers." }
        ]
      },
      {
        id: "cs_p3",
        title: "Optional Subject Core & Essay Writing (Advanced)",
        estimatedTime: "12-16 weeks",
        description: "Deep dive into your optional subject and structure general essay formats.",
        skillsCovered: ["Optional Subject", "Essay Structuring", "Ethics GS4", "Mains drilling", "UPSC GS4"],
        tasks: [
          { id: "cs_p3_t1", title: "Complete the optional subject syllabus and solve past question papers", done: false, description: "Optional subject mastery." },
          { id: "cs_p3_t2", title: "Draft weekly essays focusing on clarity, structure, and quotes", done: false, description: "Master essay formatting." },
          { id: "cs_p3_t3", title: "Study GS Paper 4 (Ethics, Integrity, and Aptitude) case templates", done: false, description: "Ethics case studies." }
        ],
        projects: [
          { title: "Optional Paper 1 Drafts", desc: "Draft comprehensive answers for 20 past questions in your optional subject." },
          { title: "Ethics Case Studies Portfolio", desc: "Analyze and write response drafts for 10 administrative ethics scenarios." }
        ]
      },
      {
        id: "cs_p4",
        title: "Mains Mock Sprints & Personality Interview (Expert)",
        estimatedTime: "8-12 weeks",
        description: "Write full-length GS mock exams and practice mock personality interviews.",
        skillsCovered: ["Mains Test Series", "Detailed Application Form", "Interview Prep", "Personality development", "Mock Panels"],
        tasks: [
          { id: "cs_p4_t1", title: "Write full-length 3-hour mock exams for GS and Optional papers", done: false, description: "Simulate real exam speed." },
          { id: "cs_p4_t2", title: "Analyze and document answers for your Detailed Application Form (DAF)", done: false, description: "Prepare DAF questions." },
          { id: "cs_p4_t3", title: "Perform mock interview panels and review body language logs", done: false, description: "Interview prep checks." }
        ],
        projects: [
          { title: "GS Mains Mock Series Report", desc: "Write GS Mains mock papers, grade them, and analyze speed improvements." },
          { title: "DAF Mock Profiling File", desc: "Compile a 50-page Q&A script based on your home state, hobbies, and branch of study." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "UPSC prep shows analytical capacity and governance understanding. Detail your optional subject and policy research internships.",
      hackathons: "Engage in policy drafting debates and mock UN assemblies to show presentation skills.",
      internships: "Apply for public policy internships at NITI Aayog or state government research wings.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "What is the difference between a Fundamental Right and a Directive Principle of State Policy in the Indian Constitution?",
          sampleAnswer: "Fundamental Rights are legally enforceable (justiciable) in courts, protecting individual liberties. Directive Principles are non-justiciable guidelines for the state to frame policies, aiming for socio-economic welfare.",
          keywords: ["fundamental rights", "directive principles", "justiciable", "enforceable", "socio-economic", "guidelines"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "Explain the concept of Separation of Powers in the Indian context.",
          sampleAnswer: "The Indian Constitution separates powers between the Legislature (law-making), Executive (implementing), and Judiciary (interpreting). While they have distinct domains, they operate under a system of checks and balances.",
          keywords: ["legislature", "executive", "judiciary", "checks and balances", "separation of powers", "constitution"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "What is inflation, and how does the Reserve Bank of India (RBI) use monetary policy tools to control it?",
          sampleAnswer: "Inflation is the rate at which general price levels rise. The RBI uses monetary policy tools (like repo rate, reverse repo rate, and CRR) to regulate liquidity. Raising the repo rate increases borrowing costs, reducing consumer spending and demand to curb inflation.",
          keywords: ["inflation", "rbi", "repo rate", "liquidity", "monetary policy", "interest"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to join the Civil Services instead of pursuing a high-paying corporate tech role?",
          sampleAnswer: "Civil Services offers the opportunity to drive social impact at scale. The administrative challenges of managing public policy are more fulfilling to me than private corporate targets.",
          keywords: ["social impact", "administrative", "fulfilling", "scale", "policy", "corporate"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "If a local politician pressures you to allocate a government contract to their relative, how would you respond?",
          sampleAnswer: "I would explain the rules of tender allocations. I would ensure the process remains transparent, objective, and compliant with government procurement guidelines.",
          keywords: ["tender", "transparent", "compliant", "guidelines", "procurement", "pressure"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a time you faced public protest or community disagreement during a project. How did you handle it?",
          sampleAnswer: "I arranged meetings with community leaders, listened to their concerns, clarified misconceptions, adapted project details to resolve grievances, and kept communication transparent.",
          keywords: ["protest", "leaders", "grievances", "transparent", "compromise", "misconceptions"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "cs_chall_1",
        title: "Constitution Article Lookup",
        instruction: "Write a JavaScript function `getArticleCategory(articleNumber)` that returns 'Fundamental Rights' if the article is between 12 and 35 (inclusive), else returns 'Other'.",
        starterCode: "function getArticleCategory(articleNumber) {\n  // Verify article category\n}",
        testDescription: "Should check if articleNumber resides between 12 and 35.",
        roadmapTaskId: "cs_p1_t1",
        verify: function(code) {
          if (code.includes(">=") && code.includes("<=") && code.includes("12") && code.includes("35")) {
            return { success: true, message: "Perfect! Articles 12-35 of the Indian Constitution define Fundamental Rights." };
          }
          return { success: false, message: "Ensure you check if articleNumber is between 12 and 35 inclusive." };
        }
      },
      {
        id: "cs_chall_2",
        title: "Budget Deficit Calculator",
        instruction: "Write a JavaScript function `calculateDeficit(expenditure, revenue)` that returns the fiscal deficit `expenditure - revenue`. Return 0 if the result is negative.",
        starterCode: "function calculateDeficit(expenditure, revenue) {\n  // Compute fiscal deficit\n}",
        testDescription: "Should return expenditure - revenue, or 0 if negative.",
        roadmapTaskId: "cs_p2_t1",
        verify: function(code) {
          if (code.includes("-") && code.includes("expenditure") && code.includes("revenue")) {
            return { success: true, message: "Excellent! Fiscal deficit measures the gap between government spending and revenues." };
          }
          return { success: false, message: "Make sure you return: expenditure - revenue, returning 0 if the result is negative." };
        }
      }
    ]
  },

  psu: {
    title: "Public Sector Undertakings (PSUs)",
    subtitle: "Core engineering officer roles at government enterprises (GATE).",
    description: "PSU officers direct operations, maintain power/manufacturing assets, and oversee projects at government enterprises (ONGC, IOCL, NTPC, BHEL). Placements are secured through the GATE Exam.",
    salaryRoadmap: "Entry: ₹50,000-80,000 basic + allowances | Mid (Manager): ₹1,20,000-1,80,000 | Senior (GM): ₹2,40,000+",
    demand: "High demand in India; secure, prestigious engineering positions with government welfare and competitive packages.",
    futureScope: "Steady; focus is migrating towards green energy grids, automated factory workflows, and resource management systems.",
    remoteOpportunities: "Low (10%+ since core operations, plant sites, and refinery controls require physical presence).",
    firstLanguage: "Engineering Textbooks & GATE Papers",
    timeEstimate: "10 - 15 Months",
    skills: ["Engineering Math", "Core Technical Subjects", "GATE Numerical Analysis", "General Aptitude", "Speed Problem Solving", "Technical Interview Panel", "Group Discussions"],
    tools: ["Scientific Calculator", "GATE Exam Papers", "GATE Test Series", "Reference Textbooks", "Formula Revision Notebooks"],
    concepts: ["Engineering Mathematics", "Core Engineering Theories", "Numerical Calculation Methods", "General Aptitude Checklists", "Group Discussion Protocols", "Technical Panel Interrogations"],
    freePlatforms: ["NPTEL Portal", "GATE Academy (Free YouTube)", "freeCodeCamp", "Coursera (Audit Mode)", "Udemy (Free Tier)"],
    youtubeChannels: [
      { name: "Unacademy GATE", url: "https://www.youtube.com/@UnacademyGATE", desc: "Outstanding GATE syllabus walkthroughs, numerical drills, and core engineering playlists." },
      { name: "Gate Academy", url: "https://www.youtube.com/@GateAcademy", desc: "Superb formula reviews, strategy sheets, and subject revisions." }
    ],
    practicePlatforms: [
      { name: "NPTEL", url: "https://nptel.ac.in", desc: "Official Indian government video lectures covering core engineering subjects." },
      { name: "GATE Test Series", url: "https://gateoverflow.in", desc: "Interactive community for practicing past GATE exam questions." }
    ],
    mentorName: "Mentor Gate",
    mentorSpecialty: "GATE Exam Syllabus & Numerical Drills",
    opportunities: [
      { type: "hackathon", title: "GATE Online Mock Test", desc: "Simulated GATE mock exam testing numerical and engineering problem-solving speed.", meta: "Quarterly • Online" },
      { type: "internship", title: "PSU Industrial Internship - BHEL", desc: "Work with engineering teams maintaining power generation systems.", meta: "Summer • Unpaid • Haridwar" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Engineering Math & Core Syllabus", desc: "Study linear algebra, calculus, and review core subject fundamentals.", topics: ["Linear Algebra", "Calculus limits", "Core subject basics"], phase: 1 },
      { week: 2, title: "Week 3-4: GATE Subject Revisions", desc: "Practice topic-wise GATE questions and write down key formulas.", topics: ["Numerical methods", "GATE past questions", "Formula sheets"], phase: 1 },
      { week: 3, title: "Week 5-6: Topic Tests & Aptitude", desc: "Take topic-specific tests and practice general aptitude questions.", topics: ["General Aptitude", "GATE mock drills", "Error analysis"], phase: 2 },
      { week: 4, title: "Week 7-8: Full Exam Simulations", desc: "Write full-length 3-hour mock exams to improve speed and accuracy.", topics: ["3-hour exam mocks", "Marking schemas", "Speed numericals"], phase: 3 },
      { week: 5, title: "Week 9-10: Error Mapping & Revisions", desc: "Analyze mock exam errors, revise weak concepts, and review formula sheets.", topics: ["Error analysis logs", "Formula review", "Technical revisions"], phase: 3 },
      { week: 6, title: "Week 11-12: GD & Panel Interview Prep", desc: "Practice technical panels and group discussions on current industrial topics.", topics: ["GD strategies", "Technical mock interviews", "HR questions"], phase: 4 }
    ],
    phases: [
      {
        id: "ps_p1",
        title: "Engineering Mathematics & Core Fundamentals (Beginner)",
        estimatedTime: "8-12 weeks",
        description: "Build a strong foundation in engineering mathematics and core technical subjects.",
        skillsCovered: ["Engineering Math", "Core Engineering Theories", "Calculus", "Linear Algebra"],
        tasks: [
          { id: "ps_p1_t1", title: "Master linear algebra, calculus, and probability concepts", done: false, description: "Core mathematical basics." },
          { id: "ps_p1_t2", title: "Study fundamentals of core engineering subjects from standard textbooks", done: false, description: "Confirm technical theories." },
          { id: "ps_p1_t3", title: "Draft formula notebooks mapping primary variables and equations", done: false, description: "Prepare revision guides." }
        ],
        projects: [
          { title: "Core Subject Formula Sheets", desc: "Compile a comprehensive revision booklet mapping all key equations in your core engineering subjects." },
          { title: "GATE Math Problem Bank", desc: "Solve and document answers for 100 calculus and algebra problems from past GATE exams." }
        ]
      },
      {
        id: "ps_p2",
        title: "GATE Syllabus Practice & General Aptitude (Intermediate)",
        estimatedTime: "12-16 weeks",
        description: "Solve topic-wise GATE numericals and practice general aptitude questions.",
        skillsCovered: ["GATE past questions", "General Aptitude", "Numerical Analysis", "Speed drills"],
        tasks: [
          { id: "ps_p2_t1", title: "Practice past GATE questions for each subject segment", done: false, description: "Apply theories to numericals." },
          { id: "ps_p2_t2", title: "Solve quantitative and verbal aptitude questions", done: false, description: "Confirm general section marks." },
          { id: "ps_p2_t3", title: "Analyze numerical calculation errors to improve accuracy", done: false, description: "Track calculation slip-ups." }
        ],
        projects: [
          { title: "GATE Numerical Problem Bank", desc: "Solve 200 past numerical problems, documenting the formulas used and step-by-step solutions." },
          { title: "General Aptitude Prep Kit", desc: "Solve 100 verbal and quant questions, documenting shortcuts and logic rules." }
        ]
      },
      {
        id: "ps_p3",
        title: "Full-Length Mocks & Revision Blueprints (Advanced)",
        estimatedTime: "8-12 weeks",
        description: "Write full-length simulated GATE exams and revise formulas.",
        skillsCovered: ["Full Mock Exams", "Revision Blueprints", "Error analysis", "Time Management"],
        tasks: [
          { id: "ps_p3_t1", title: "Write full-length 3-hour mock exams under simulated conditions", done: false, description: "Build exam stamina." },
          { id: "ps_p3_t2", title: "Track mock scores, map mistakes, and revise weak topics", done: false, description: "Identify knowledge gaps." },
          { id: "ps_p3_t3", title: "Review formula sheets and short notes daily", done: false, description: "Maintain concept recall." }
        ],
        projects: [
          { title: "Simulated GATE Mock Report", desc: "Write 10 full-length mock exams, compile score trends, and map errors to study targets." },
          { title: "GATE Technical Revision Blueprint", desc: "Create a 50-page summary of key concepts, formulas, and shortcuts for final revisions." }
        ]
      },
      {
        id: "ps_p4",
        title: "PSU Panel Interviews & Group Discussions (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Prepare for technical panel interviews and group discussion screenings.",
        skillsCovered: ["PSU Interviews", "Group Discussions", "HR Questions", "Mock Panels", "Communication"],
        tasks: [
          { id: "ps_p4_t1", title: "Practice answering core engineering questions under interview conditions", done: false, description: "Ace technical panel evaluations." },
          { id: "ps_p4_t2", title: "Study current industrial developments and practice group discussion topics", done: false, description: "Succeed in GD screenings." },
          { id: "ps_p4_t3", title: "Review mock interviews and refine body language and presentation", done: false, description: "Final placement check." }
        ],
        projects: [
          { title: "PSU Technical Panel Mock Review", desc: "Conduct mock technical panels, document questions, and review video recordings to improve answers." },
          { title: "GD Case Study Prep Sheet", desc: "Compile summaries of 10 current industrial and social topics to prepare for GD arguments." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "Highlight your GATE score, rank, and department achievements. Detail your core engineering projects and industrial training experiences.",
      hackathons: "Participate in student engineering design events to demonstrate practical application of technical theories.",
      internships: "Secure industrial training placements at core manufacturing plants or state thermal power stations.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "Explain the difference between a Centrifugal Pump and a Reciprocating Pump.",
          sampleAnswer: "A centrifugal pump uses centrifugal force from a rotating impeller to increase fluid kinetic energy, making it ideal for high flow rates and low viscosity. A reciprocating pump uses a piston to trap and displace fluid, delivering high head pressure at lower flow rates.",
          keywords: ["impeller", "kinetic energy", "viscosity", "displacement", "head pressure", "piston"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "What is the difference between an Alternator and a Generator?",
          sampleAnswer: "An alternator is a specific type of generator that converts mechanical energy into alternating current (AC) using a rotating magnetic field. A generator is a broader term that can produce either AC or direct current (DC) using a rotating armature.",
          keywords: ["alternator", "rotating magnetic field", "ac", "generator", "dc", "armature"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "Explain the Rankine Cycle and how it is used in thermal power plants.",
          sampleAnswer: "The Rankine Cycle is a thermodynamic cycle that models steam turbine power systems. Water is pumped to high pressure (isentropic compression), heated in a boiler (isobaric heat addition), expanded in a turbine to generate work (isentropic expansion), and condensed back to liquid in a condenser (isobaric heat rejection).",
          keywords: ["rankine cycle", "isentropic compression", "isobaric heat addition", "isentropic expansion", "isobaric heat rejection", "turbine"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to work in a PSU rather than a private corporation?",
          sampleAnswer: "PSUs offer secure, stable engineering roles that contribute directly to national infrastructure development. The focus on social and economic impact appeals to me more than private corporate targets.",
          keywords: ["infrastructure", "stable", "security", "impact", "contribution", "national"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you handle disagreement on project priority or resource allocation with an officer from another department?",
          sampleAnswer: "I arrange a meeting to map out project timelines, budget constraints, and operational impacts. I present data to reach an agreement that aligns with overall corporate goals.",
          keywords: ["meeting", "timelines", "constraints", "data", "agreement", "corporate"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a time you had to manage an operational emergency or equipment failure during industrial training. How did you resolve it?",
          sampleAnswer: "I isolated the faulty machinery, notified supervisors, implemented safety protocols, coordinated with maintenance to replace components, verified system checks, and documented an incident report.",
          keywords: ["isolated", "notified", "safety", "components", "checks", "report"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "ps_chall_1",
        title: "Ohm's Law Calculator",
        instruction: "Write a JavaScript function `calculateVoltage(current, resistance)` that computes and returns the voltage (`current * resistance`). Return 0 if either input is negative.",
        starterCode: "function calculateVoltage(current, resistance) {\n  if (current < 0 || resistance < 0) return 0;\n  // Compute voltage\n}",
        testDescription: "Should multiply current by resistance.",
        roadmapTaskId: "ps_p1_t2",
        verify: function(code) {
          if (code.includes("*") && code.includes("current") && code.includes("resistance")) {
            return { success: true, message: "Perfect! Ohm's Law states that Voltage is Current multiplied by Resistance." };
          }
          return { success: false, message: "Ensure you return the correct voltage: current * resistance." };
        }
      },
      {
        id: "ps_chall_2",
        title: "Thermodynamic Efficiency Calculator",
        instruction: "Write a JavaScript function `calculateEfficiency(workInput, heatInput)` that returns the efficiency percentage `(workInput / heatInput) * 100`. Return 0 if heatInput is 0.",
        starterCode: "function calculateEfficiency(workInput, heatInput) {\n  if (heatInput === 0) return 0;\n  // Compute efficiency\n}",
        testDescription: "Should divide work by heat and multiply by 100.",
        roadmapTaskId: "ps_p1_t2",
        verify: function(code) {
          if (code.includes("/") && code.includes("100") && code.includes("workInput")) {
            return { success: true, message: "Excellent! Thermodynamic efficiency is work output divided by heat input." };
          }
          return { success: false, message: "Make sure you return: (workInput / heatInput) * 100." };
        }
      }
    ]
  },

  entrepreneur: {
    title: "Entrepreneur / Startup Founder",
    subtitle: "Validate business ideas, build MVPs, conduct marketing, and secure venture funding.",
    description: "Startup Founders identify market gaps, validate user demand, design and build minimum viable products (MVPs), track growth analytics, raise venture capital, and build scaling team architectures.",
    salaryRoadmap: "Early: Sweat equity / Minimal salary | Post-Seed: ₹6-12 LPA | Series A: ₹18-36 LPA | Scale: High equity valuation + dividends",
    demand: "High startup ecosystem growth in India (Bengaluru, Delhi NCR, Mumbai) and globally; strong incubator and investor network access.",
    futureScope: "High flexibility; founders create their own paths and scale operations to target changing market demands.",
    remoteOpportunities: "High (80%+ business management and development operations can be handled using remote team dashboards).",
    firstLanguage: "Lean Canvas & Webflow",
    timeEstimate: "5 - 8 Months",
    skills: ["Lean Canvas", "User Discovery", "Framer", "Stripe", "Supabase", "React", "SEO", "Growth Marketing", "Amplitude", "Venture Capital", "Financial Modeling", "Presentation"],
    tools: ["Lean Canvas templates", "Framer / Webflow", "Stripe Portal", "Google Analytics", "Amplitude Console", "Pitch Deck templates", "Cap Table sheets"],
    concepts: ["Problem-Solution Validation", "Minimum Viable Product (MVP)", "Search Engine Optimization (SEO)", "Acquisition & Retention metrics", "Venture Capital rounds", "Cap Table calculation"],
    freePlatforms: ["Y Combinator Startup School", "freeCodeCamp", "Coursera (Audit Mode)", "Udemy (Free Tier)", "NPTEL"],
    youtubeChannels: [
      { name: "Y Combinator", url: "https://www.youtube.com/@ycombinator", desc: "Outstanding startup guides, founder interviews, ideation tips, and APM tracks." },
      { name: "Slidebean", url: "https://www.youtube.com/@slidebean", desc: "Superb pitch deck designs, financial modeling guides, and company history case studies." }
    ],
    practicePlatforms: [
      { name: "Y Combinator Startup School", url: "https://www.startupschool.org", desc: "Online curriculum mapping the path from ideation to launching and scaling companies." },
      { name: "Indie Hackers", url: "https://www.indiehackers.com", desc: "Community of developers sharing startup ideas and business metrics." }
    ],
    mentorName: "Mentor Paul",
    mentorSpecialty: "Startup Ideation & VC Pitching",
    opportunities: [
      { type: "hackathon", title: "Startup India Sprints", desc: "Incubator sprint challenge to present SaaS ideas to angel investor panels.", meta: "Quarterly • New Delhi/Online" },
      { type: "internship", title: "Founder's Office Intern - Groww", desc: "Work directly with startup founders on strategic growth and marketing campaigns.", meta: "Summer • Paid • Bengaluru" }
    ],
    weeklyMilestones: [
      { week: 1, title: "Week 1-2: Startup Ideation & Surveys", desc: "Draft a startup Lean Canvas, identify user problems, and run customer discovery surveys.", topics: ["Lean Canvas", "Problem Statement", "Customer Surveys"], phase: 1 },
      { week: 2, title: "Week 3-4: MVP Prototyping & Landing Page", desc: "Build a responsive landing page, set up user registrations, and integrate payment buttons.", topics: ["Webflow Landing Page", "Stripe Integrations", "User Registrations"], phase: 2 },
      { week: 3, title: "Week 5-6: Growth Marketing & Analytics", desc: "Optimize SEO keywords, setup Google Analytics, and track user funnels in Amplitude.", topics: ["SEO configurations", "Google Analytics", "User Funnel tracking"], phase: 2 },
      { week: 4, title: "Week 7-8: Product-Market Fit & SQL", desc: "Write SQL queries to measure user cohorts and analyze cohort retention charts.", topics: ["SQL SELECT commands", "Cohort Retention", "Product-Market Fit metrics"], phase: 3 },
      { week: 5, title: "Week 9-10: Cap Table & Finance Sheets", desc: "Model cash flow spreadsheets and compute equity dilution ratios on cap tables.", topics: ["Cash Flow Forecasts", "Cap Table math", "Equity Dilution"], phase: 3 },
      { week: 6, title: "Week 11-12: VC Pitch Decks & Mock Pitching", desc: "Design venture capital pitch decks, write strategy briefs, and practice mock pitches.", topics: ["Pitch Deck Design", "VC Negotiation", "Mock Pitching panels"], phase: 4 }
    ],
    phases: [
      {
        id: "en_p1",
        title: "Ideation, Lean Canvas, & Customer Discovery (Beginner)",
        estimatedTime: "4-6 weeks",
        description: "Validate startup concepts, define value propositions, and conduct user surveys.",
        skillsCovered: ["Lean Canvas", "User Discovery", "Survey Design", "Competitive Analysis"],
        tasks: [
          { id: "en_p1_t1", title: "Draft a startup Lean Canvas defining problems, solutions, and metrics", done: false, description: "Core startup blueprint." },
          { id: "en_p1_t2", title: "Conduct user discovery interviews to identify workflow friction points", done: false, description: "Validate problem relevance." },
          { id: "en_p1_t3", title: "Analyze competitor strengths, weaknesses, and market pricing", done: false, description: "Map market landscape." }
        ],
        projects: [
          { title: "Startup Lean Canvas Pitch", desc: "Write a Lean Canvas document outlining customer segments, unique value propositions, channels, and metrics." },
          { title: "Customer Discovery Survey Report", desc: "Analyze 50 user survey responses, outlining pain points and scoring problem severity." }
        ]
      },
      {
        id: "en_p2",
        title: "MVP Development & Landing Page Setups (Intermediate)",
        estimatedTime: "6-8 weeks",
        description: "Build a single-feature MVP web page and connect payment checkouts.",
        skillsCovered: ["Framer", "Stripe", "Supabase", "User registration", "Payment Gateway"],
        tasks: [
          { id: "en_p2_t1", title: "Design and deploy a responsive landing page using Framer or Webflow", done: false, description: "Deploy product home pages." },
          { id: "en_p2_t2", title: "Connect database tables (Supabase) to store user registrations", done: false, description: "Set up user records." },
          { id: "en_p2_t3", title: "Integrate Stripe payment buttons to test conversion rates", done: false, description: "Configure checkout logic." }
        ],
        projects: [
          { title: "Single-Feature MVP Landing Page", desc: "Deploy a landing page for your startup concept. Connect signup forms to a database and verify conversions." },
          { title: "Simple SaaS Payment Checkout Demo", desc: "Build a payment checkout page using Stripe SDK, displaying success redirects on completion." }
        ]
      },
      {
        id: "en_p3",
        title: "Growth Marketing, SEO, & Retention Analytics (Advanced)",
        estimatedTime: "6-8 weeks",
        description: "Implement SEO meta tags, track user conversion funnels, and write database queries.",
        skillsCovered: ["SEO", "Google Analytics", "Amplitude", "SQL Queries", "Cohort Retention"],
        tasks: [
          { id: "en_p3_t1", title: "Optimize website metadata, tags, and keywords to improve SEO rankings", done: false, description: "Configure search index optimization." },
          { id: "en_p3_t2", title: "Configure event tracking funnels and monitor drop-offs in Amplitude", done: false, description: "Analyze user behaviors." },
          { id: "en_p3_t3", title: "Write SQL queries to extract user retention metrics and growth rates", done: false, description: "Analyze transaction tables." }
        ],
        projects: [
          { title: "User Growth Acquisition Plan", desc: "Draft an SEO audit and marketing plan detailing acquisition channels, costs (CAC), and metrics." },
          { title: "Retention Funnel Presentation", desc: "Build an Amplitude analytics presentation outlining user drop-offs and recommending fixes." }
        ]
      },
      {
        id: "en_p4",
        title: "Venture Capital, Cap Tables, & VC Pitching (Expert)",
        estimatedTime: "6-8 weeks",
        description: "Model cash flow spreadsheets, build pitch decks, and practice pitches.",
        skillsCovered: ["Venture Capital", "Financial Modeling", "Pitch Deck Design", "Presentation", "Mock Pitching"],
        tasks: [
          { id: "en_p4_t1", title: "Model 3-year cash flow projections and forecast milestones in Excel", done: false, description: "Verify financial models." },
          { id: "en_p4_t2", title: "Build a venture capital pitch deck explaining values and sizes", done: false, description: "Draft pitch documents." },
          { id: "en_p4_t3", title: "Practice pitching to mock investor panels and refine arguments", done: false, description: "Pitch practice check." }
        ],
        projects: [
          { title: "Venture Capital Pitch Deck", desc: "Design a 10-slide pitch deck detailing customer problems, product solutions, market size, business model, and fundraising ask." },
          { title: "3-Year Financial Model Forecast Sheet", desc: "Build an Excel model mapping revenue tiers, operational costs, margins, and customer lifetime value (LTV)." }
        ]
      }
    ],
    placementStrategy: {
      resumeAdvice: "State startup outcomes quantitatively (e.g. 'Launched MVP that acquired 500+ signups with a 15% conversion rate'). Detail your tech stack and fundraising efforts.",
      hackathons: "Engage in startup pitching competitions and incubator sprints. Prioritize strategy roles.",
      internships: "Apply for roles like 'Founder's Office Intern', 'Product Intern', or 'Venture Capital Intern'.",
      interviewPrep: [
        {
          type: "technical",
          difficulty: "easy",
          question: "What is a Minimum Viable Product (MVP), and why is it useful?",
          sampleAnswer: "An MVP is the simplest version of a product that contains enough features to satisfy early customers and collect validated learning. It minimizes development cost and risk by testing assumptions early.",
          keywords: ["simplest version", "validated learning", "risk", "assumptions", "early", "features"]
        },
        {
          type: "technical",
          difficulty: "medium",
          question: "Explain the difference between Customer Acquisition Cost (CAC) and Customer Lifetime Value (LTV).",
          sampleAnswer: "CAC is the total marketing cost spent to acquire a customer. LTV is the total revenue a business expects to earn from a customer. A healthy SaaS startup requires an LTV to CAC ratio of at least 3:1.",
          keywords: ["cac", "ltv", "marketing cost", "total revenue", "3:1", "ratio"]
        },
        {
          type: "technical",
          difficulty: "hard",
          question: "What is a Cap Table, and explain how a Seed funding round affects equity dilution.",
          sampleAnswer: "A Cap Table lists a startup's equity ownership percentages, stock values, and dilution. A seed funding round dilutes existing founders' equity by issuing new shares to investors in exchange for capital, reducing founders' percentage ownership.",
          keywords: ["cap table", "equity", "dilution", "seed funding", "shares", "founders"]
        },
        {
          type: "hr",
          difficulty: "easy",
          question: "Why do you want to start a company instead of securing a stable corporate role?",
          sampleAnswer: "I enjoy solving problems, building products, and managing business development operations. The challenge of starting a company is more fulfilling to me than executing predefined corporate tasks.",
          keywords: ["solve", "building", "challenge", "entrepreneur", "operations", "fulfilling"]
        },
        {
          type: "hr",
          difficulty: "medium",
          question: "How do you handle disagreement or equity disputes with a co-founder during project milestones?",
          sampleAnswer: "I arrange an alignment meeting to map out project goals and contribution schedules. I use co-founder equity vesting agreements to resolve disputes objectively.",
          keywords: ["vesting", "disputes", "co-founder", "alignment", "contribution", "meeting"]
        },
        {
          type: "hr",
          difficulty: "hard",
          question: "Tell me about a startup idea you launched that failed to gain customer traction. What did you learn?",
          sampleAnswer: "I launched a local services app, but user acquisition costs were too high. I realized we didn't validate customer demand first, which taught me the value of user discovery surveys.",
          keywords: ["traction", "failed", "validate", "acquisition", "user discovery", "surveys"]
        }
      ]
    },
    practiceChallenges: [
      {
        id: "en_chall_1",
        title: "LTV to CAC Ratio Calculator",
        instruction: "Write a JavaScript function `calculateLTVtoCAC(ltv, cac)` that computes and returns the ratio (`ltv / cac`). Return 0 if cac is 0.",
        starterCode: "function calculateLTVtoCAC(ltv, cac) {\n  if (cac === 0) return 0;\n  // Compute ratio\n}",
        testDescription: "Should divide ltv by cac.",
        roadmapTaskId: "en_p2_t3",
        verify: function(code) {
          if (code.includes("/") && code.includes("ltv") && code.includes("cac")) {
            return { success: true, message: "Perfect! A healthy startup requires an LTV to CAC ratio of at least 3:1." };
          }
          return { success: false, message: "Ensure you return the correct ratio: ltv / cac." };
        }
      },
      {
        id: "en_chall_2",
        title: "Equity Dilution Calculator",
        instruction: "Write a JavaScript function `calculateDilution(existingEquity, roundDilution)` that returns the new equity after dilution: `existingEquity * (1 - roundDilution)`. Return 0 if dilution is 1.",
        starterCode: "function calculateDilution(existingEquity, roundDilution) {\n  if (roundDilution >= 1) return 0;\n  // Compute diluted equity\n}",
        testDescription: "Should multiply existingEquity by (1 - roundDilution).",
        roadmapTaskId: "en_p4_t1",
        verify: function(code) {
          if (code.includes("*") && code.includes("-") && code.includes("existingEquity") && code.includes("roundDilution")) {
            return { success: true, message: "Excellent! Capital rounds dilute existing shares by issuing new shares to investors." };
          }
          return { success: false, message: "Make sure you return: existingEquity * (1 - roundDilution)." };
        }
      }
    ]
  }
};

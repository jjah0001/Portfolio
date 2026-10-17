/* ==========================================================================
   PORTFOLIO CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit. Every section of the page is built
   from the PORTFOLIO object below — add, remove or reorder entries freely.

   Everything here is placeholder text. Replace it with your own.

   Quick reference
   • Flags ........ 2-letter country code, lower or upper case ("au", "id", "cn")
                    → images come from flagcdn.com
   • Code icons ... Devicon names ("python", "cplusplus", "javascript"...)
                    → browse https://devicon.dev  (leave icon out for a monogram)
   • UI icons ..... github, linkedin, mail, file, map-pin, grad, briefcase,
                    globe, zap, plane, music, camera, book, game, run, cpu,
                    coffee, users, message, target, clock, compass, layers,
                    spark, heart, code, robot, mountain, food, pen
   • Travel codes . ISO 3166-1 country codes ("AU", "HK", "MO", "TW"...);
                    optional regions use ISO 3166-2 ("AU-VIC", "US-CA"...)
   ========================================================================== */

window.PORTFOLIO = {

  /* ---------------------------------------------------------------- META */
  meta: {
    name: "Your Name",
    role: "Engineer & Developer",
    tagline: "One or two sentences that tell a visitor who you are, what you build and what you're looking for next.",
    status: "Open to opportunities",      // pill above your name — "" hides it
    location: "City, Country",
    timezone: "UTC",                      // IANA name e.g. "Australia/Melbourne" — drives the live clock in the hero
    email: "you@example.com",
    resume: "",                           // e.g. "files/resume.pdf" — "" hides the Résumé button
    currency: "AUD",                      // default currency for project costs
    socials: [
      { label: "GitHub",   url: "https://github.com/your-username",        icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile", icon: "linkedin" },
      { label: "Email",    url: "mailto:you@example.com",                  icon: "mail" }
    ]
  },

  /* --------------------------------------------------------------- ABOUT */
  about: {
    // Put your picture in /images and point to it here, e.g. "images/profile.jpg"
    // A portrait (4:5) crop looks best.
    photo: "images/profile-placeholder.svg",

    // Rotating words typed out in the hero
    typed: ["Engineer", "Developer", "Maker", "Problem solver"],

    // Paragraphs may contain simple HTML such as <strong> or <a href="">
    paragraphs: [
      "Hi, I'm <strong>Your Name</strong> — a short, confident opening line about what you do and what drives you.",
      "A second paragraph with a bit more colour: your background, what you studied, the kind of problems you love to work on and the industries you're aiming for.",
      "Optionally, a closing line about what you're doing right now or what you're looking for next."
    ],

    facts: [
      { icon: "map-pin", label: "Based in",  value: "City, Country" },
      { icon: "grad",    label: "Studied",   value: "Degree, University" },
      { icon: "globe",   label: "Speaks",    value: "Your languages" },
      { icon: "zap",     label: "Currently", value: "What you're building" }
    ],

    // value: a number, or use auto: "projects" | "languages" | "countries" | "coding" to count automatically
    stats: [
      { auto: "projects",  label: "Projects built" },
      { value: 3, suffix: "+", label: "Years coding" },
      { auto: "languages", label: "Languages spoken" },
      { auto: "countries", label: "Countries visited" }
    ]
  },

  /* ------------------------------------------- EDUCATION & EXPERIENCE */
  // type: "education" or "work". Newest first reads best.
  timeline: [
    {
      type: "work",
      title: "Job Title",
      org: "Company Name",
      location: "City, Country",
      start: "2024",
      end: "Present",
      summary: "One sentence describing the role and the team you were part of.",
      points: [
        "An achievement, ideally with a number attached (e.g. cut test time by 30%).",
        "A system, product or feature you owned end-to-end.",
        "A tool, process or collaboration you improved."
      ],
      tags: ["Skill", "Tool", "Domain"]
    },
    {
      type: "work",
      title: "Internship / Part-time Role",
      org: "Organisation Name",
      location: "City, Country",
      start: "2022",
      end: "2023",
      summary: "One sentence describing the role.",
      points: [
        "What you were responsible for.",
        "Something you shipped or delivered."
      ],
      tags: ["Skill", "Tool"]
    },
    {
      type: "education",
      title: "Degree Name — Major",
      org: "University Name",
      location: "City, Country",
      start: "2019",
      end: "2023",
      summary: "Honours, thesis topic, GPA/WAM or anything notable.",
      points: [
        "Final-year / capstone project.",
        "Relevant coursework or awards.",
        "Clubs, teams or societies."
      ]
    },
    {
      type: "education",
      title: "High School / Certificate",
      org: "School or Provider",
      location: "City, Country",
      start: "2016",
      end: "2018",
      summary: "Anything worth mentioning.",
      points: []
    }
  ],

  /* ------------------------------------------------------------ PROJECTS */
  // The most important section. Each project becomes a square card; clicking
  // it opens the detail view.
  //   short      → card description (keep it to ~20 words)
  //   skills     → shown on the card (first 3) and in full in the detail view.
  //                Names that match your coding languages / frameworks get icons
  //                and are linked from the Skills section.
  //   details    → paragraphs for the detail view (simple HTML allowed)
  //   highlights → bullet points of what YOU did
  //   cost       → total is optional; if left out it's the sum of the breakdown
  //   image      → optional, e.g. "images/projects/robot.jpg"
  //   featured   → true makes the card double-size on wide screens
  projects: [
    {
      id: "project-01",
      title: "Project Title 01",
      short: "One-line summary of what this project does and why it matters.",
      category: "Robotics",
      year: "2025",
      status: "Completed",              // Completed · In progress · Prototype
      featured: true,
      skills: ["Python", "C++", "ROS 2", "OpenCV", "Raspberry Pi"],
      image: "",
      role: "Solo project",
      duration: "3 months",
      team: "1",
      details: [
        "Write 2–4 short paragraphs. Start with the problem you were solving, who it was for and why it mattered.",
        "Then explain your approach: the architecture, key technical decisions, trade-offs you made and what you'd change next time.",
        "Finish with the outcome — results, metrics, demos, and what you learned."
      ],
      highlights: [
        "Key contribution or feature you built",
        "A measurable result (e.g. reduced latency by 40%)",
        "A tricky problem you solved and how"
      ],
      cost: {
        currency: "AUD",
        breakdown: [
          { item: "Hardware / components", amount: 180 },
          { item: "Sensors",               amount: 65 },
          { item: "3D-printing material",  amount: 25 }
        ],
        note: "Optional note about how the budget was spent."
      },
      links: [
        { label: "GitHub", url: "https://github.com/your-username/project" },
        { label: "Demo video", url: "#" }
      ]
    },
    {
      id: "project-02",
      title: "Project Title 02",
      short: "One-line summary of what this project does and why it matters.",
      category: "Embedded",
      year: "2025",
      status: "In progress",
      skills: ["C", "Arduino", "ESP-IDF", "KiCad"],
      image: "",
      role: "Firmware & PCB design",
      duration: "Ongoing",
      team: "2",
      details: [
        "Describe the problem and the context.",
        "Describe your solution and the interesting engineering inside it."
      ],
      highlights: ["What you built", "What you learned"],
      cost: {
        breakdown: [
          { item: "Microcontroller + parts", amount: 40 },
          { item: "PCB fabrication",         amount: 30 }
        ]
      },
      links: [{ label: "GitHub", url: "https://github.com/your-username/project" }]
    },
    {
      id: "project-03",
      title: "Project Title 03",
      short: "One-line summary of what this project does and why it matters.",
      category: "Web",
      year: "2024",
      status: "Completed",
      skills: ["JavaScript", "HTML", "CSS", "React"],
      image: "",
      role: "Front-end developer",
      duration: "6 weeks",
      team: "1",
      details: [
        "Describe the problem and the context.",
        "Describe your solution and the interesting engineering inside it."
      ],
      highlights: ["What you built", "What you learned"],
      cost: {
        total: 0,
        breakdown: [],
        note: "Built entirely with free and open-source tools."
      },
      links: [
        { label: "Live site", url: "#" },
        { label: "GitHub", url: "https://github.com/your-username/project" }
      ]
    },
    {
      id: "project-04",
      title: "Project Title 04",
      short: "One-line summary of what this project does and why it matters.",
      category: "Machine Learning",
      year: "2024",
      status: "Prototype",
      skills: ["Python", "PyTorch", "NumPy", "Pandas"],
      image: "",
      role: "Researcher",
      duration: "2 months",
      team: "3",
      details: [
        "Describe the problem and the context.",
        "Describe your solution and the interesting engineering inside it."
      ],
      highlights: ["What you built", "What you learned"],
      cost: {
        breakdown: [{ item: "Cloud GPU time", amount: 45 }]
      },
      links: []
    },
    {
      id: "project-05",
      title: "Project Title 05",
      short: "One-line summary of what this project does and why it matters.",
      category: "Software",
      year: "2023",
      status: "Completed",
      skills: ["C++", "SQL", "OOP"],
      image: "",
      role: "Team lead",
      duration: "1 semester",
      team: "4",
      details: [
        "Describe the problem and the context.",
        "Describe your solution and the interesting engineering inside it."
      ],
      highlights: ["What you built", "What you learned"],
      cost: { total: 0, note: "University project — no cost." },
      links: []
    },
    {
      id: "project-06",
      title: "Project Title 06",
      short: "One-line summary of what this project does and why it matters.",
      category: "Automation",
      year: "2023",
      status: "Completed",
      skills: ["Python", "Node.js", "REST APIs"],
      image: "",
      role: "Solo project",
      duration: "2 weeks",
      team: "1",
      details: [
        "Describe the problem and the context.",
        "Describe your solution and the interesting engineering inside it."
      ],
      highlights: ["What you built", "What you learned"],
      cost: {
        breakdown: [
          { item: "API usage",  amount: 12 },
          { item: "Hosting",    amount: 8 }
        ]
      },
      links: [{ label: "GitHub", url: "https://github.com/your-username/project" }]
    }
  ],

  /* -------------------------------------------------------------- SKILLS */
  // Languages: flag = country code of the place the language is mainly spoken.
  // percent drives the main bar; skills{} drives the four small bars (0–100).
  languages: [
    {
      name: "English", native: "English", flag: "gb",
      level: "Native", cefr: "C2", percent: 100,
      skills: { speaking: 100, listening: 100, reading: 100, writing: 100 },
      note: "Optional note — where or how you use it."
    },
    {
      name: "Language Two", native: "Native name", flag: "es",
      level: "Professional", cefr: "C1", percent: 85,
      skills: { speaking: 85, listening: 90, reading: 85, writing: 75 },
      note: "Optional note."
    },
    {
      name: "Language Three", native: "Native name", flag: "fr",
      level: "Conversational", cefr: "B1", percent: 55,
      skills: { speaking: 55, listening: 60, reading: 55, writing: 45 },
      note: "Optional note."
    },
    {
      name: "Language Four", native: "Native name", flag: "jp",
      level: "Beginner", cefr: "A2", percent: 30,
      skills: { speaking: 30, listening: 35, reading: 25, writing: 20 },
      note: "Optional note."
    }
  ],

  // level: 0–100 (shown as a ring + label). invertDark: true for black logos
  // so they stay visible on the dark theme.
  coding: [
    { name: "Python",     icon: "python",     level: 90, years: "5 yrs" },
    { name: "C++",        icon: "cplusplus",  level: 80, years: "4 yrs" },
    { name: "C",          icon: "c",          level: 70, years: "3 yrs" },
    { name: "JavaScript", icon: "javascript", level: 75, years: "3 yrs" },
    { name: "HTML",       icon: "html5",      level: 85, years: "4 yrs" },
    { name: "CSS",        icon: "css3",       level: 80, years: "4 yrs" },
    { name: "SQL",                            level: 60, years: "2 yrs" },
    { name: "MATLAB",     icon: "matlab",     level: 65, years: "3 yrs" },
    { name: "Rust",       icon: "rust",       level: 35, years: "<1 yr", invertDark: true }
  ],

  frameworks: [
    {
      group: "Web",
      items: [
        { name: "React",        icon: "react" },
        { name: "Node.js",      icon: "nodejs" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Express",      icon: "express", invertDark: true }
      ]
    },
    {
      group: "Data & Machine Learning",
      items: [
        { name: "NumPy",      icon: "numpy" },
        { name: "Pandas",     icon: "pandas" },
        { name: "PyTorch",    icon: "pytorch" },
        { name: "OpenCV",     icon: "opencv" },
        { name: "Matplotlib", icon: "matplotlib" }
      ]
    },
    {
      group: "Robotics & Embedded",
      items: [
        { name: "ROS 2",        icon: "ros" },
        { name: "Arduino",      icon: "arduino" },
        { name: "ESP-IDF" },
        { name: "Raspberry Pi", icon: "raspberrypi" },
        { name: "KiCad" }
      ]
    },
    {
      group: "Tools",
      items: [
        { name: "Git",     icon: "git" },
        { name: "Docker",  icon: "docker" },
        { name: "Linux",   icon: "linux" },
        { name: "VS Code", icon: "vscode" },
        { name: "Figma",   icon: "figma" }
      ]
    }
  ],

  softSkills: [
    { name: "Communication",   icon: "message", description: "Replace with one line of evidence — e.g. presented a project to a panel of 50." },
    { name: "Teamwork",        icon: "users",   description: "Replace with one line of evidence — e.g. coordinated a cross-disciplinary team." },
    { name: "Problem solving", icon: "target",  description: "Replace with one line of evidence — e.g. debugged a hardware fault under a deadline." },
    { name: "Leadership",      icon: "compass", description: "Replace with one line of evidence — e.g. led a club or project team." },
    { name: "Adaptability",    icon: "zap",     description: "Replace with one line of evidence — e.g. picked up a new stack in two weeks." },
    { name: "Time management", icon: "clock",   description: "Replace with one line of evidence — e.g. balanced study, work and side projects." }
  ],

  /* ----------------------------------------------------------- INTERESTS */
  interests: [
    { title: "Travel",      icon: "plane",  text: "A sentence about what draws you to this and how you pursue it." },
    { title: "Music",       icon: "music",  text: "A sentence about what draws you to this and how you pursue it." },
    { title: "Photography", icon: "camera", text: "A sentence about what draws you to this and how you pursue it." },
    { title: "Gaming",      icon: "game",   text: "A sentence about what draws you to this and how you pursue it." },
    { title: "Reading",     icon: "book",   text: "A sentence about what draws you to this and how you pursue it." },
    { title: "Running",     icon: "run",    text: "A sentence about what draws you to this and how you pursue it." }
  ],

  // Travel map (Google GeoChart world map + Google Maps embed).
  //   code     → ISO country / territory code (HK, MO, TW work as their own jurisdictions)
  //   regions  → optional list of states/provinces; clicking the country zooms in to them
  //   mapQuery → optional search text for the Google Maps panel (defaults to name)
  travel: {
    darkMap: true,   // tints the Google Maps panel dark when the site is in dark mode
    visited: [
      {
        code: "AU", name: "Australia", note: "Home base — replace with a memory or highlight.",
        regions: [
          { code: "AU-VIC", name: "Victoria" },
          { code: "AU-NSW", name: "New South Wales" },
          { code: "AU-QLD", name: "Queensland" }
        ]
      },
      { code: "NZ", name: "New Zealand",    note: "Replace with a memory or highlight." },
      { code: "SG", name: "Singapore",      note: "Replace with a memory or highlight." },
      { code: "JP", name: "Japan",          note: "Replace with a memory or highlight." },
      {
        code: "US", name: "United States", note: "Replace with a memory or highlight.",
        regions: [
          { code: "US-CA", name: "California" },
          { code: "US-NY", name: "New York" }
        ]
      },
      { code: "GB", name: "United Kingdom", note: "Replace with a memory or highlight." },
      { code: "FR", name: "France",         note: "Replace with a memory or highlight." },
      { code: "IT", name: "Italy",          note: "Replace with a memory or highlight." }
    ]
  }
};

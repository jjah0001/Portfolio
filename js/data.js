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
    name: "Jeffrey Jahja 叶骅庆",
    role: "Engineer & Developer",
    tagline: "I am an engineering graduate from Monash University who can speak four different language and has a great view of the world!",
    status: "Open to opportunities",      // pill above your name — "" hides it
    location: "Melbourne, Australia",
    timezone: "UTC",                      // IANA name e.g. "Australia/Melbourne" — drives the live clock in the hero
    email: "jeffrey.jahja7@gmail.com",
    resume: "",                           // e.g. "files/resume.pdf" — "" hides the Résumé button
    currency: "AUD",                      // default currency for project costs
    socials: [
      { label: "GitHub",   url: "https://github.com/jjah0001",        icon: "github" },
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
  // Keep completed projects in newest-to-oldest order.
  projects: [
    {
      id: "ece4078-penguinpi",
      title: "PenguinPi Fruit Search",
      short: "A PenguinPi robot that detects fruit with deep learning, localises using ArUco markers, and visualises navigation in a custom GUI.",
      category: "Robotics",
      year: "2023",
      status: "Completed",
      featured: true,
      skills: ["Python", "YOLOv8", "EKF SLAM", "OpenCV", "ArUco", "Pygame", "NumPy", "A* Path Planning"],
      image: "",
      role: "Robot software & GUI development · ECE4078 Group 407",
      details: [
        "For <strong>ECE4078 at Monash University</strong>, I programmed a PenguinPi robot to identify fruit using deep learning and estimate its location using ArUco landmarks. The group project brought together computer vision, localisation and navigation in a physical robot.",
        "The perception pipeline uses <strong>YOLOv8</strong> to detect fruit and vegetable targets in camera images. OpenCV detects ArUco markers, while an <strong>Extended Kalman Filter (EKF)</strong> combines wheel odometry with landmark observations to estimate the robot's position and heading and maintain a SLAM map.",
        "I created a <strong>Pygame GUI</strong> to visualise the robot's position, landmarks and planned routes. The code also includes camera and detection views, A* path planning and path smoothing to support navigation towards the requested targets."
      ],
      highlights: [
        "Programmed the PenguinPi to identify fruit using a YOLOv8 deep learning detector.",
        "Used ArUco marker observations and EKF SLAM to estimate the robot's position and heading.",
        "Created a Pygame GUI to visualise robot localisation and planned paths."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/jjah0001/ECE4078_407" }
      ]
    },
    {
      id: "ece4191-parcel-robot",
      title: "Parcel Delivery Robot",
      short: "A parcel-delivery robot with custom SolidWorks mechanical design, QR-code destination scanning and a Raspberry Pi-based ROS 2 control system.",
      category: "Robotics & Mechanical Design",
      year: "2023",
      status: "Completed",
      skills: ["SolidWorks", "Mechanical Design", "CAD", "ROS 2", "Raspberry Pi", "Python"],
      image: "",
      role: "Robot mechanical design · ECE4191 Group 11",
      team: "5",
      cost: {
        currency: "AUD",
        total: 400.10,
        note: "Reported final materials cost: A$400.10. Original budget: A$200; proposal estimate: A$436.05. Source: ECE4191 Group 11 Final Report, section 4.1, Table 8 (pp. 34–35), and Project Proposal, Table 14 (p. 11). The final report's itemised amounts sum to A$402.85, a A$2.75 discrepancy from its stated total."
      },
      details: [
        "For <strong>ECE4191 Engineering Integrated Design at Monash University</strong>, I worked in a five-person team on a robot designed to deliver parcels to designated bins. The robot scans QR codes on the parcels to determine their destination.",
        "My contribution focused on <strong>designing the robot in SolidWorks</strong>. The mechanical design included a custom baseplate, ramp and ramp supports, with a hinged door for releasing parcels. This connected the robot's physical structure with its package-delivery task.",
        "The team's software uses <strong>Python, Raspberry Pi and ROS 2</strong> for robot control and communication with a computer. The repository includes path planning, QR-code scanning, encoder feedback, PID motor control, ultrasonic sensing and servo control for the delivery door."
      ],
      highlights: [
        "Used SolidWorks to design the robot's mechanical structure for a parcel-delivery task.",
        "Worked on a robot design featuring a custom baseplate, ramp, supports and a hinged parcel-release door.",
        "Contributed mechanical design within a five-person team combining hardware, sensing and robot control."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/jjah0001/ECE4191G11" }
      ]
    },
    {
      "id": "fyp-yanshee-rize",
      "title": "End-User Robot Programming",
      "short": "An Open RIZE interface that lets people program a Yanshee humanoid using configurable action blocks instead of writing code.",
      "category": "Robotics & Human–Robot Interaction",
      "year": "2023",
      "status": "Completed",
      "featured": true,
      "skills": [
        "Python",
        "Google Blockly",
        "JSON",
        "JavaScript",
        "Human–Robot Interaction",
        "Robot Control"
      ],
      "role": "Final-year project · ENG4701 / ENG4702",
      "details": [
        "My final-year project, <strong>End-User Robot Programming Interfaces for Robotic Systems Design</strong>, integrated the Yanshee humanoid robot with Open RIZE. Submitted in May 2023, it aimed to make robot programming accessible to people with limited or no coding experience, in preparation for participatory-design research.",
        "I adapted the Python integration code so that visual action blocks call robot functions through <strong>YanAPI</strong>. I defined custom blocks through JSON specifications and integrated their generated JavaScript into RIZE, exposing controls such as speed, direction, joint angle, repetitions, speech text and volume.",
        "The completed integration provided <strong>11 action primitives and 14 predefined stretches</strong>, including walking, speech, arm and leg motions, and guided stretching. I used direct servo control for selected movements and demonstrated compatible actions running in parallel.",
        "I also prepared a primitive cheat sheet and tutorial video to support users. The final report identifies perception blocks, parameter validation and warnings for incompatible parallel actions as future work."
      ],
      "highlights": [
        "Integrated Open RIZE with the Yanshee robot using Python and YanAPI.",
        "Created 11 configurable action primitives and 14 predefined stretch routines.",
        "Defined custom visual blocks with JSON and integrated the generated JavaScript into the interface.",
        "Implemented speech guidance and direct servo control, including compatible parallel motions.",
        "Produced user documentation and a tutorial video for the interface."
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/pcarrenom/FYPSAR"
        }
      ]
    },
    {
      "id": "swivel-monkey",
      "title": "Project Swivel Monkey",
      "short": "Arm and boom design for an electric-wheelchair storage prototype, informed by clinical collaboration and interviews with people with lived experience.",
      "category": "Assistive Technology",
      "year": "2022–2023",
      "status": "Prototype",
      "featured": true,
      "skills": [
        "Mechanical Design",
        "Prototyping",
        "User Research",
        "Clinical Collaboration",
        "Human-Centred Design"
      ],
      "image": "images/projects/swivel-monkey.png",
      "role": "Arm & boom design · Monash Young MedTech Innovators",
      "details": [
        "I worked on <strong>Project Swivel Monkey with Monash Young MedTech Innovators (MYMI) from 2022 to 2023</strong>. The project explores an electric-wheelchair storage solution intended to support greater independence in the community.",
        "I was responsible for <strong>designing and creating the arm and boom</strong>, contributing the mechanical assembly to the team’s prototype. This work connected the physical design of the mechanism with the needs of the people it was intended to support.",
        "Alongside the design work, I <strong>coordinated with a clinical champion and interviewed people with lived experience</strong> to understand their needs and everyday challenges. These conversations provided context for the engineering work and helped keep the design focused on its users."
      ],
      "highlights": [
        "Designed and created the arm and boom for the Swivel Monkey prototype.",
        "Coordinated with a clinical champion to understand the clinical context and user needs.",
        "Interviewed people with lived experience to inform the design process."
      ],
      "links": [
        {
          "label": "MYMI project page",
          "url": "https://www.mymi.org.au/project-swivel"
        }
      ]
    },
    {
      "id": "ece4179-deep-learning",
      "title": "Deep Learning for Image Analysis",
      "short": "Neural networks for image denoising, digit classification and facial landmarks, with experiments exploring model behaviour.",
      "category": "Deep Learning",
      "year": "2022",
      "status": "Completed",
      "skills": [
        "Python",
        "PyTorch",
        "PyTorch Lightning",
        "Computer Vision",
        "NumPy",
        "Matplotlib"
      ],
      "role": "ECE4179 · Assignment 2",
      "details": [
        "For <strong>ECE4179 Neural Networks and Deep Learning</strong>, I implemented and evaluated neural networks across several image-analysis tasks using PyTorch and PyTorch Lightning.",
        "The assignment includes a <strong>denoising autoencoder for MNIST</strong> and MLP/CNN models for classifying street-view digits from SVHN. I compared training and validation behaviour using loss and accuracy plots.",
        "I explored a pretrained <strong>ResNet18</strong> through occlusion sensitivity maps and adapted it for facial-landmark regression by freezing pretrained parameters and adding trainable output layers."
      ],
      "highlights": [
        "Implemented encoder/decoder models to reconstruct noisy handwritten-digit images.",
        "Compared MLP and CNN classifiers on SVHN using training and validation metrics.",
        "Implemented sliding-patch occlusion analysis and adapted ResNet18 for facial-landmark prediction."
      ],
      "links": []
    },
    {
      id: "fit3179-english-language",
      title: "The Power of the English Language",
      short: "An interactive data story exploring English proficiency across countries through geography, business, tourism and language use in Singapore.",
      category: "Data Visualisation",
      year: "2022",
      status: "Completed",
      skills: ["Vega-Lite", "JavaScript", "HTML", "CSS", "Python", "Pandas", "Data Visualisation"],
      image: "",
      role: "Data preparation, visualisation & web development · FIT3179",
      details: [
        "Created for <strong>FIT3179 Data Visualisation at Monash University in 2022</strong>, this interactive website explores English proficiency in the context of geography, business, tourism and language use. It combines explanatory writing with charts to guide readers through the data.",
        "I built the visualisations with <strong>Vega-Lite</strong> and embedded them in an HTML/CSS website using JavaScript. A world symbol map shows proficiency scores and colonial history; bar charts compare countries by business ranking; a scatter plot explores tourism; and a line chart tracks languages spoken at home in Singapore.",
        "The charts include <strong>tooltips, hover highlighting and a slider</strong> that filters countries by tourism's contribution to GDP. Python and Pandas support the data preparation, joining country-level datasets for the visualisations. The finished project is published on GitHub Pages."
      ],
      highlights: [
        "Built a data storytelling website with a world map, bar charts, a scatter plot and a time-series chart.",
        "Added hover interactions, contextual tooltips and a tourism contribution filter to help readers explore the data.",
        "Joined country-level datasets using Python and Pandas, and published the visualisation on GitHub Pages."
      ],
      links: [
        { label: "Live visualisation", url: "https://jjah0001.github.io/fit3179_ass2.github.io/" },
        { label: "GitHub", url: "https://github.com/jjah0001/FIT3179" }
      ]
    },
    {
      "id": "ece4179-weighted-regression",
      "title": "Weighted Regression & Noisy Data",
      "short": "A NumPy implementation of ordinary and weighted least squares, comparing fitted models and prediction error on noisy data.",
      "category": "Machine Learning",
      "year": "2022",
      "status": "Completed",
      "skills": [
        "Python",
        "NumPy",
        "Matplotlib",
        "Linear Regression"
      ],
      "role": "ECE4179 · Assignment 1",
      "details": [
        "For <strong>ECE4179 Assignment 1</strong>, I explored the mathematics and implementation of regression, focusing on how sample weights affect fitting when observations contain noise.",
        "I implemented a reusable <strong>weighted least-squares function in NumPy</strong>, used it for both ordinary and weighted regression, and compared predictions through plots and mean-squared-error calculations. The submission also explores iterative reweighting with polynomial features."
      ],
      "highlights": [
        "Implemented the weighted least-squares matrix solution using NumPy.",
        "Compared ordinary and weighted fits against noisy observations and a reference linear model.",
        "Visualised predictions and calculated squared-error measures to assess model fit."
      ],
      "links": []
    },
    {
      "id": "ece4076-computer-vision",
      "title": "Computer Vision & Image Clustering",
      "short": "Python coursework exploring edge detection, homography coordinates and colour-image clustering through implemented algorithms and visual experiments.",
      "category": "Computer Vision",
      "year": "2022",
      "status": "Coursework",
      "skills": [
        "Python",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "K-means"
      ],
      "role": "ECE4076 · Computer vision coursework",
      "details": [
        "My <strong>ECE4076</strong> coursework explored classical computer-vision techniques through Python notebooks, including edge detection, geometric transformations and image clustering.",
        "For the edge-detection lab, I implemented <strong>2D convolution, Gaussian smoothing, Sobel gradients and edge thinning</strong>, visualising intermediate results to understand how image edges are extracted.",
        "Other notebooks contain homography coordinate transformations and a <strong>K-means colour-clustering implementation</strong> with centroid updates, reconstructed images, RGB-space plots and clustering-loss curves. The linked GitHub repository contains my edge-detection lab."
      ],
      "highlights": [
        "Implemented convolution and Sobel gradient calculations for image-edge analysis.",
        "Applied gradient direction to edge thinning and visualised intermediate processing stages.",
        "Implemented K-means updates and visualised colour clusters, centroids and loss curves."
      ],
      "links": [
        {
          "label": "GitHub · Edge detection lab",
          "url": "https://github.com/jjah0001/ECE4076"
        }
      ]
    }
  ],

  /* -------------------------------------------------------------- SKILLS */
  // Languages: flag = country code of the place the language is mainly spoken.
  // percent drives the main bar; skills{} drives the four small bars (0–100).
  languages: [
    {
      name: "Indonesian", native: "Bahasa Indonesia", flag: "id",
      level: "Native", cefr: "C2", percent: 100,
      skills: { speaking: 100, listening: 100, reading: 100, writing: 100 },
      note: "I grew up in Indonesia and I come from Indonesia originally!"
    },
    {
      name: "English", native: "English", flag: "au",
      level: "Professional", cefr: "C1", percent: 100,
      skills: { speaking: 100, listening: 100, reading: 100, writing: 100 },
      note: "Optional note."
    },
    {
      name: "Chinese", native: "华语", flag: "cn",
      level: "Conversational", cefr: "C1", percent: 55,
      skills: { speaking: 55, listening: 60, reading: 55, writing: 45 },
      note: "Optional note."
    },
    {
      name: "Language Four", native: "Native name", flag: "de",
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
        { name: "Node.js",      icon: "nodejs" },
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
    { title: "Travel",      icon: "plane",  text: "I am a huge fan of the TV show called The Amazing Race since young. I even met the host Phil Keoghan!" },
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
        code: "AU", name: "Australia", note: "I was born in here but I left at a young age.",
        regions: [
          { code: "AU-VIC", name: "Victoria" },
          { code: "AU-NSW", name: "New South Wales" },
          { code: "AU-QLD", name: "Queensland" },
          { code: "AU-TAS", name: "Tasmania" },
          { code: "AU-WA", name: "Western Australia" },
          { code: "AU-ACT", name: "Australian Capital Territory" },
          { code: "AU-NT", name: "Northern Territory" },
          { code: "AU-SA", name: "South Australia" },
        ]
      },
      { code: "ID", name: "Indonesia",    note: "I spent most of my childhood here.",
        regions: [
          { code: "ID-JB", name: "Jawa Barat"},
          { code: "ID-JK", name: "Jakarta"},
          { code: "ID-YO", name: "Yogyakarta"},
          { code: "ID-BT", name: "Banten"},
          { code: "ID-JI", name: "Jawa Timur" },
          { code: "ID-JT", name: "Jawa Tengah" },
          { code: "ID-BA", name: "Bali" },
          { code: "ID-NT", name: "Nusa Tenggara Timur" },
          { code: "ID-SU", name: "Sumatera Utara" },
          { code: "ID-KR", name:"Kepulauan Riau"}
        ]
      },
      { code: "SG", name: "Singapore",      note: "I lived here for three years" },
      { code: "MY", name: "Malaysia",         note: "My grandmother came from here" },
      { code: "TH", name: "Thailand",          note: "Replace with a memory or highlight." },
      { code: "KH", name: "Cambodia",          note: "Replace with a memory or highlight." },
      { code: "CN", name: "China",          note: "Replace with a memory or highlight.",
        regions: [
          { code: "CN-31", name: "Shanghai" },
          { code: "CN-53", name: "Yunnan" },
          { code: "CN-33", name: "Zhejiang" },
          { code: "CN-44", name: "Guangdong" },
          { code: "CN-11", name: "Beijing" },
          { code: "CN-35", name: "Fujian" },
          { code: "CN-32", name: "Jiangsu" },
        ]
      },
      { code: "HK", name: "Hong Kong" },
      { code: "MO", name: "Macau" },
      { code: "TW", name: "Taiwan" },
      { code: "JP", name: "Japan",          note: "Replace with a memory or highlight." },
      {
        code: "US", name: "United States", note: "Replace with a memory or highlight.",
        regions: [
          { code: "US-CA", name: "California" },
          { code: "US-NV", name: "Nevada" },
          { code: "US-NY", name: "New York" }
        ]
      },
      { code: "IN", name: "India" },
      { code: "BT", name: "Bhutan" },
      { code: "AE", name: "United Arab Emirates" },
      { code: "QT", name: "Qatar" },
      { code: "CA", name: "Canada" },
      { code: "GB", name: "United Kingdom", note: "Replace with a memory or highlight." },
      { code: "FR", name: "France",         note: "Replace with a memory or highlight." },
      { code: "DE", name: "Germany",         note: "Replace with a memory or highlight." },
      { code: "CH", name: "Switzerland" },
      { code: "AT", name: "Austria" },
      { code: "NL", name: "Netherlands" },
      { code: "BE", name: "Belgium" },
      { code: "IT", name: "Italy",          note: "Replace with a memory or highlight." },
      { code: "NZ", name: "New Zealand",    note: "Replace with a memory or highlight." },
    ]
  }
};

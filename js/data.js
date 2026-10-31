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
                    spark, heart, code, robot, mountain, food, pen, shuttlecock, tea
   • Travel codes . ISO 3166-1 country codes ("AU", "HK", "MO", "TW"...);
                    optional regions use ISO 3166-2 ("AU-VIC", "US-CA"...)
   • Your photos .. put them in /images (e.g. images/projects, images/interests,
                    images/travel, images/logos) and write the path in quotes.
                    Any list of photos can be plain paths or { src, caption }:
                      gallery: [
                        "images/projects/robot-1.jpg",
                        { src: "images/projects/robot-2.jpg", caption: "First test run" }
                      ]
                    Tip: export photos as .jpg / .webp around 1600px wide (< 500 KB)
                    so the page loads quickly.
   ========================================================================== */

window.PORTFOLIO = {

  /* ---------------------------------------------------------------- META */
  meta: {
    name: "Jeffrey Jahja",
    nameAlt: "叶骅庆",                     // name in another script — shown as large vertical characters in the hero ("" hides it)
    nameAltLabel: "Chinese name",        // small caption next to it
    nameAltFont: "ZCOOL QingKe HuangYou",       // any Google Font, e.g. "Zhi Mang Xing", "Long Cang", "ZCOOL XiaoWei", "Noto Serif SC"
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
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jeffrey-jahja-%E8%91%89%E9%A9%8A%E6%85%B6-8b10a493/?isSelfProfile=true", icon: "linkedin" },
      { label: "Email",    url: "mailto:jeffrey.jahja7@gmail.com",                  icon: "mail" }
    ]
  },

  /* --------------------------------------------------------------- ABOUT */
  about: {
    // Put your picture in /images and point to it here, e.g. "images/profile.jpg"
    // A portrait (4:5) crop looks best.
    photo: "images/profile-image.jpg",

    // Rotating words typed out in the hero
    typed: ["Engineer", "Developer", "Maker", "Problem solver"],

    // Paragraphs may contain simple HTML such as <strong> or <a href="">
    paragraphs: [
      "Hi, I'm <strong>Jeffrey</strong> — an Engineering graduate looking for opportunities in the robotics and medical field.",
      "I have studied Mechatronics Engineering at Monash University as I have always been into robotics!",
      "I am an eager person and love to learn more about the world"
    ],

    facts: [
      { icon: "map-pin", label: "Based in",  value: "Melbourne, Australia" },
      { icon: "grad",    label: "Studied",   value: "Bachelor of Engineering, Monash University" },
      { icon: "globe",   label: "Speaks",    value: "Indonesian, English, Chinese" },
      { icon: "zap",     label: "Currently", value: "Interested in Robotics and Medical Devices" }
    ],

    // value: a number, or use auto: "projects" | "languages" | "countries" | "coding" to count automatically
    stats: [
      { auto: "projects",  label: "Projects built" },
      { value: 7, suffix: "+", label: "Years coding" },
      { auto: "languages", label: "Languages spoken" },
      { auto: "countries", label: "Countries visited" }
    ]
  },

  /* ------------------------------------------- EDUCATION & EXPERIENCE */
  // type: "education" or "work". Newest first reads best.
  // logo: optional, e.g. "images/logos/monash.png" — replaces the icon on the timeline.
  timeline: [
    {
      type: "work",
      title: "Pricing Analyst",
      org: "Energy Australia",
      location: "Melbourne, Australia",
      start: "2024",
      end: "2024",
      summary: "Determined the Price of Energy in sveral parts of Australia.",
      points: [
      ],
      tags: ["Skill", "Tool", "Domain"]
    },
    {
      type: "work",
      title: "Business Intern",
      org: "PT Fajar Surya Wisesa, Tbk",
      location: "Jakarta, Indonesia · On-site",
      start: "Jun 2023",
      end: "Jul 2023",
      summary: "Internship exploring robotic process automation, company finances and Indonesian taxation.",
      points: [
        "Studied how robotic process automation (RPA), databases and SQL could reduce manual work.",
        "Studied the company's assets and liabilities, along with the Indonesian tax system."
      ],
      tags: ["SQL", "Databases", "Robotic Process Automation"]
    },
    {
      type: "work",
      title: "Technical Trainee",
      org: "Telstra",
      location: "Melbourne, Australia",
      start: "2022",
      end: "2023",
      summary: "Worked in the Cloud division",
      points: [
      ],
      tags: ["Skill", "Tool"]
    },
    {
      type: "education",
      title: "Bachelor of Robotics & Mechatronics Engineering & Bachelor of Commerce",
      org: "Monash University",
      location: "Melbourne, Australia",
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
      type: "work",
      title: "Mathematics and Chemistry Tutor",
      org: "Cluey Learning",
      location: "Australia · Online",
      start: "Jan 2021",
      end: "Sep 2022",
      summary: "Part-time online tutor providing weekly mathematics and chemistry tuition to 10 Australian students in Years 7–12.",
      points: [
        "Trained and qualified to tutor students with ADHD and dyslexia.",
        "Specialised in the Australian Curriculum for Years 7–12 across all states and territories.",
        "Balanced tutoring commitments with university study."
      ]
    },
    {
      type: "work",
      title: "Operations (Outreach) Lead",
      org: "Monash Connected Autonomous Vehicle (MCAV)",
      start: "Mar 2022",
      end: "Aug 2022",
      summary: "Part-time outreach role creating an Arduino and 3D printing curriculum for students in Years 10–11.",
      points: [
        "Developed the Arduino and 3D printing curriculum.",
        "Worked with one other person to deliver the curriculum."
      ],
      tags: ["Arduino", "3D Printing"]
    },
    {
      type: "education",
      title: "High School / Certificate",
      org: "Australian International School Singapore",
      location: "Singapore, Singapore",
      start: "2016",
      end: "2018",
      summary: "Anything worth mentioning.",
      points: []
    }
  ],

  /* -------------------------------------------------------- VOLUNTEERING */
  // Newest first. Every field except role and org is optional.
  //   image  → optional photo, e.g. "images/volunteering/event.jpg" (click to view full screen)
  //   gallery→ optional more photos
  //   link   → optional { label, url }
  // Leave the list empty ([]) to hide the whole section and its nav link.
  volunteering: [
    {
      "role": "Event Coordinator",
      "org": "Cityzen · Buddhist Society of Victoria",
      "start": "Feb 2024",
      "end": "Feb 2025",
      "summary": "Organised community events, including picnics and Songkran celebrations."
    },
    {
      "role": "Education, Social & Culture",
      "org": "PPIA Victoria",
      "start": "Nov 2020",
      "end": "Nov 2021",
      "summary": "Promoted Indonesian culture and helped deliver student community events.",
      "points": [
        "Led a team of 20 to organise Cultural Night.",
        "Coordinated logistics for Nobaria, bringing together Indonesian university club committees.",
        "Supported events with AIYA and contacted partners to assist with delivery and promotion."
      ]
    },
    {
      "role": "General Committee",
      "org": "Female Engineers at Monash",
      "start": "Oct 2020",
      "end": "Sep 2021",
      "summary": "Promoted gender diversity in STEM, particularly engineering."
    },
    {
      "role": "General Committee",
      "org": "Logan Hall Society",
      "start": "Mar 2020",
      "end": "Dec 2020",
      "summary": "Helped organise activities for hall residents during COVID-19.",
      "points": [
        "Organised Games Night and proposed online Mid-Autumn Festival celebrations.",
        "Prepared SWOTVAC packs for residents.",
        "Nominated for the RES Awards."
      ]
    }
  ],

  /* ------------------------------------------------------------ PROJECTS */
  // The most important section. Each project becomes a square card; clicking
  // it opens the detail view.
  //   type       → optional "software" or "hardware"; missing types stay in an unlabelled grid
  //   short      → card description (keep it to ~20 words)
  //   skills     → shown on the card (first 3) and in full in the detail view.
  //                Names that match your coding languages / frameworks get icons
  //                and are linked from the Skills section.
  //   details    → paragraphs for the detail view (simple HTML allowed)
  //   highlights → bullet points of what YOU did
  //   cost       → total is optional; if left out it's the sum of the breakdown
  //   image      → optional cover photo, e.g. "images/projects/robot.jpg"
  //                (shown on the card and first in the detail view)
  //   gallery    → optional extra photos for the detail view, e.g.
  //                gallery: ["images/projects/robot-2.jpg",
  //                          { src: "images/projects/robot-3.jpg", caption: "Final demo" }]
  //   featured   → true makes the card double-size on wide screens
  // Keep completed projects in newest-to-oldest order.
  // Optional section title and ordered groups; empty groups are hidden.
  // projectGroups[]: id matches projects[].type; title labels the group.
  projectsTitle: "Projects",
  projectGroups: [
    { id: "software", title: "Software Projects" },
    { id: "hardware", title: "Hardware Projects" }
  ],
  projects: [
    {
      id: "ratangga",
      type: "hardware",
      title: "Ratangga: LLM-Controlled Robot",
      short: "A Raspberry Pi robot that asks Claude where to go, fusing camera, 360° LiDAR and ultrasonic data under a local 20 Hz safety layer.",
      category: "Robotics & AI",
      year: "2025–2026",
      status: "In progress",
      skills: ["Python", "ROS 2", "Raspberry Pi", "Claude API", "LiDAR", "Sensor Fusion", "Linux"],
      image: "images/projects/ratangga.jpg",
      details: [
        "<strong>Ratangga</strong> is a small differential-drive robot built on a <strong>Raspberry Pi 4</strong> running <strong>ROS 2 Jazzy</strong> on Ubuntu 24.04. Its navigation decisions come from Claude: every couple of seconds it sends a camera frame and its fused distance readings to the Claude API and gets back where to go.",
        "It combines an RPi Camera, a <strong>360° Witmotion D05 dTOF LiDAR</strong> and a front HC-SR04 ultrasonic sensor, with optional IR edge sensors to stop falls. Two DC motors are driven through an L298N motor driver.",
        "The key design rule is that <strong>Claude never drives the motors directly</strong>. Claude returns a validated intent (speed, turn, duration, reason), and a local motion controller running at 20 Hz turns it into smooth motion. That controller owns safety: it ramps speed, slows near obstacles, steers off walls and stops before a collision whatever Claude asks for.",
        "The robot also has a persona and memory: its identity is loaded as Claude's system prompt, and notes it makes about its surroundings are saved and recalled in later decisions."
      ],
      highlights: [
        "Designed a two-rate architecture: Claude decides about every 2 s, and a 20 Hz local controller handles smoothness and safety.",
        "Fused 360° LiDAR, ultrasonic and camera data into a perception summary for each decision.",
        "Constrained Claude's replies to a validated JSON intent schema so the robot only acts on well-formed commands.",
        "Built ROS 2 packages for the Claude agent, motion controller, L298N motor driver and sensors, with unit tests for the core logic.",
        "Wrote a step-by-step setup guide so a first-time user can get from a blank SD card to a robot driven by Claude."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/jjah0001/LLM-Controlled-Robot" }
      ]
    },
    {
      id: "momowo",
      type: "hardware",
      title: "Momowo 摸摸我",
      short: "An animated ESP32 desk companion with expressive eyes, clock, local weather, classical Chinese quotes, a Pomodoro timer and optional Claude AI.",
      category: "Embedded",
      year: "2026",
      status: "In progress",
      skills: ["C++", "Arduino", "ESP32", "Claude API", "REST APIs", "OLED UI"],
      image: "",
      cost: {
        currency: "AUD",
        total: 20,
        note: ""
      },
      details: [
        "<strong>Momowo</strong> (摸摸我, \"pat me\") is an animated desk companion built on an <strong>ESP32 / ESP32-C3 SuperMini</strong> with a 1.3\" SH1106 OLED, a TTP223 touch pad and a buzzer. It began as DeskBuddy and grew into a small device that is both a companion and genuinely useful.",
        "A single touch pad drives everything: tap for the next page, double-tap to return to the buddy, and hold for page actions. The pages include expressive animated eyes with moods, a large clock, local weather with tomorrow's forecast and sunrise/sunset, a classical Chinese quote matched to the season, weather and time of day, the Chinese lunar calendar with solar terms, a 25-minute Pomodoro timer and top news headlines.",
        "It works fully offline for the buddy, clock, calendars, focus timer and built-in quotes. Holding the pad shows a QR code; scanning it opens a setup page on your phone that sets the clock and, optionally, WiFi. With WiFi it finds its location from the public IP, fetches weather from Open-Meteo, and can use <strong>Claude</strong> for quote translations, a news briefing and feelings of its own."
      ],
      highlights: [
        "Wrote the firmware in C++ for the Arduino-ESP32 core, with pin layouts that switch automatically between ESP32 and ESP32-C3 boards.",
        "Built a phone setup flow: Momowo hosts its own WiFi and setup page, reached by scanning a QR code on the OLED.",
        "Integrated web APIs for IP geolocation, Open-Meteo weather and classical Chinese quotes, plus optional Claude features.",
        "Added a night mode that dims and switches off the OLED to protect it, and an optional DS3231 RTC to keep time through power cuts."
      ],
      links: []
    },
    {
      "id": "oelek",
      "type": "software",
      "title": "Oelek — Sambal Atlas",
      "short": "An interactive atlas of Indonesian sambal with regional profiles, a province map, dish pairing, a spice guide and a personality quiz.",
      "category": "Interactive Website",
      "year": "2026",
      "skills": [
        "JavaScript",
        "HTML",
        "CSS",
        "Claude API",
        "Cloudflare Workers"
      ],
      "details": [
        "Oelek is an English-language atlas of Indonesian sambal, with regional profiles, illustrated cards and a province map.",
        "Visitors can explore sambal families, discover a sambal of the day, browse a spice guide, find dish pairings and take a personality quiz.",
        "Built with HTML, CSS and JavaScript. Dish pairing uses Claude through a Cloudflare Worker, with a built-in keyword matcher as a fallback. An animated village backdrop and synthesised soundscape respond to the time of day."
      ],
      "links": [
        {
          "label": "Visit website",
          "url": "https://jjah0001.github.io/oelek/"
        },
        {
          "label": "GitHub",
          "url": "https://github.com/jjah0001/oelek"
        }
      ]
    },
    {
      "id": "tea-time",
      "type": "software",
      "title": "Tea Time (Cha 茶)",
      "short": "An interactive guide to Chinese and Taiwanese teas, combining regional maps, tea profiles, a brewing timer, pairings and a personality quiz.",
      "category": "Interactive Website",
      "year": "2026",
      "skills": [
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js"
      ],
      "details": [
        "Tea Time, currently branded Cha 茶, is an interactive tea guide covering teas from China and Taiwan.",
        "It combines regional maps and tea profiles with a brewing timer, pairing tools, a tea personality quiz and a personal tea shelf.",
        "A Node.js build assembles the site into a single HTML page. The animated Wuyi tea-mountain backdrop and soundscape follow the seasons, local sunrise and sunset, and traditional solar terms."
      ],
      "links": [
        {
          "label": "Visit website",
          "url": "https://jjah0001.github.io/cha/"
        },
        {
          "label": "GitHub",
          "url": "https://github.com/jjah0001/cha"
        }
      ]
    },
    {
      id: "ece4078-penguinpi",
      type: "hardware",
      title: "PenguinPi Fruit Search",
      short: "A PenguinPi robot that detects fruit with deep learning, localises using ArUco markers, and visualises navigation in a custom GUI.",
      category: "Robotics",
      year: "2023",
      status: "Completed",
      featured: true,
      skills: ["Python", "YOLOv8", "EKF SLAM", "OpenCV", "ArUco", "Pygame", "NumPy", "A* Path Planning"],
      image: "",
      video: "videos/ece4078-penguinpi-demo.mp4",
      videoCaption: "PenguinPi fruit search demonstration · ECE4078 Group 407",
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
      type: "hardware",
      title: "Parcel Delivery Robot",
      short: "A parcel-delivery robot with custom SolidWorks mechanical design, QR-code destination scanning and a Raspberry Pi-based ROS 2 control system.",
      category: "Robotics & Mechanical Design",
      year: "2023",
      status: "Completed",
      skills: ["SolidWorks", "Mechanical Design", "CAD", "ROS 2", "Raspberry Pi", "Python"],
      image: "images/projects/ece4191-parcel-robot.jpg",
      video: "videos/ece4191-parcel-robot-demo.mp4",
      videoCaption: "Parcel delivery robot demonstration · ECE4191 Group 11",
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
      "type": "hardware",
      "video": "videos/fyp-yanshee-demo.mp4",
      "videoCaption": "FYP demonstration · Yanshee robot",
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
      "type": "hardware",
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
      "id": "foot-interface-internship",
      "type": "hardware",
      "title": "Foot Interface Internship",
      "short": "An unfinished foot-interface prototype for a four-degree-of-freedom robot, designed in SolidWorks during a Monash RoMI Lab research internship.",
      "category": "Robotics & Mechanical Design",
      "year": "2021–2022",
      "status": "Prototype",
      "role": "Undergraduate Research Assistant · Monash University · RoMI Lab",
      "skills": ["SolidWorks", "Mechanical Design", "Prototyping"],
      "details": [
        "From November 2021 to February 2022, I worked as an <strong>Undergraduate Research Assistant</strong> during an internship at Monash University's <strong>Robotics in Medicine and Interaction (RoMI) Laboratory</strong> in Clayton, Victoria.",
        "I contributed to constructing a novel foot interface for a <strong>four-degree-of-freedom (4-DOF) robot</strong>, intended to be comfortable, functional and distraction-free. The interface remained an unfinished prototype.",
        "I reviewed previous foot-interface designs to inform my own designs and used <strong>SolidWorks</strong> to design the interface."
      ],
      "highlights": [
        "Reviewed previous foot-interface designs to inform the prototype.",
        "Designed the interface in SolidWorks.",
        "Contributed to construction of the unfinished 4-DOF foot-interface prototype."
      ],
      "links": [
        {
          "label": "LinkedIn",
          "url": "https://www.linkedin.com/in/jeffrey-jahja-%E8%91%89%E9%A9%8A%E6%85%B6-8b10a493/"
        }
      ]
    },
    {
      "id": "ece4179-deep-learning",
      "type": "software",
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
      type: "software",
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
      "type": "software",
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
      "type": "software",
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
      skills: { speaking: 100, listening: 100, reading: 100, writing: 100 }
    },
    {
      name: "Chinese", native: "华语", flag: "cn",
      level: "Professional", cefr: "C1", percent: 100,
      skills: { speaking: 100, listening: 100, reading: 100, writing: 100},
      note: "Required language as I was educated in a Singaporean curriculum school"
    },
    {
      name: "German", native: "Deutsch", flag: "de",
      level: "Conversational", cefr: "B1", percent: 80,
      skills: { speaking: 80, listening: 80, reading: 80, writing: 70 },
      note: "Picked it up when I was 13, still improving until now"
    },
    {
      name: "French", native: "Français", flag: "fr",
      level: "Conversational", cefr: "A1", percent: 30,
      skills: { speaking: 10, listening: 20, reading: 80, writing: 10 },
      note: ""
    },
    {
      name: "Japanese", native: "日本語", flag: "jp",
      level: "Conversational", cefr: "A1", percent: 30,
      skills: { speaking: 10, listening: 30, reading: 40, writing: 10 },
      note: ""
    },
  ],

  /* ------------------------------------------- awards & certifications */
  // recognition: optional { title, navLabel, items[] }; empty/missing items hide section/nav.
  // items[]: title required; kind, issuer, date, description optional plain text.
  // link: optional { label, url } for a credential or labelled source (HTTP/S).
  // Dated entries newest first, then undated entries.
  // Sources: Jeffrey's LinkedIn profile and supplied Beihang certificate details.
  // ROS course date unavailable.
  recognition: {
    "title": "Awards & Certifications",
    "navLabel": "Awards",
    "items": [
      {
        "title": "Engineering Medicine Summer School",
        "kind": "Certificate",
        "issuer": "Beihang University",
        "date": "July 2026"
      },
      {
        "title": "CSWA Exam",
        "kind": "Certification",
        "issuer": "Dassault Systemes Solutions Lab",
        "date": "May 2021"
      },
      {
        "title": "Ideathon 2020 Runner-up",
        "kind": "Award",
        "issuer": "Engineers Without Borders",
        "date": "September 2020"
      },
      {
        "title": "Fundamentals of Robot Operating System ROS for Beginners",
        "kind": "Training",
        "issuer": "Tertiary Courses Singapore"
      }
    ]
  },

  // Display order: proficiency descending, then experience for ties.
  // level: 0–100 (shown as a ring + label). invertDark: true for black logos
  // so they stay visible on the dark theme.
  coding: [
    { name: "Python",     icon: "python",     level: 90, years: "5 yrs" },
    { name: "MATLAB",     icon: "matlab",     level: 90, years: "5 yrs" },
    { name: "SQL",                            level: 90, years: "2 yrs" },
    { name: "HTML",       icon: "html5",      level: 85, years: "4 yrs" },
    { name: "CSS",        icon: "css3",       level: 80, years: "4 yrs" },
    { name: "JavaScript", icon: "javascript", level: 75, years: "3 yrs" },
    { name: "C++",        icon: "cplusplus",  level: 60, years: "4 yrs" },
    { name: "C",          icon: "c",          level: 60, years: "3 yrs" },
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
        { name: "Raspberry Pi", icon: "raspberrypi" }
      ]
    },
    {
      group: "Design, CAD & Simulation",
      items: [
        { name: "SolidWorks" },
        { name: "Fusion 360" },
        { name: "KiCad" },
        { name: "Unity",       icon: "unity", invertDark: true }
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

  /* ----------------------------------------------------------- INTERESTS */
  // image   → optional photo shown on the card, e.g. "images/interests/amazing-race.jpg"
  // gallery → optional more photos; clicking the card opens them full screen
  // imagePosition → optional crop focus for the card photo, e.g. "center 25%" keeps faces in a tall photo
  interests: [
    { title: "Travel",      icon: "plane",  text: "I am a huge fan of the TV show called The Amazing Race since young and the show has inspired my travels."},
    { title: "Badminton",   icon: "shuttlecock", text: "Fast, tactical and great fun: my favourite way to stay active and catch up with friends." },
    { title: "Cooking", icon: "food", text: "I enjoy cooking in my spare time. I usually cook numerous Indonesian and Chinese dishes." },
    { title: "Chinese Tea", icon: "tea",    text: "Exploring Chinese tea culture: brewing, tasting and learning the stories behind different teas." },
    { title: "Music",       icon: "music",  text: "A huge fan of Mandopop" },
  ],

  // Travel map (Google GeoChart world map + Google Maps embed).
  //   code     → ISO country / territory code (HK, MO, TW work as their own jurisdictions)
  //   regions  → optional list of states/provinces; clicking the country zooms in to them
  //   mapQuery → optional search text for the Google Maps panel (defaults to name)
  //   photos   → optional, e.g. photos: ["images/travel/bali-1.jpg", { src: "images/travel/bali-2.jpg", caption: "Uluwatu" }]
  //              shown as thumbnails under the Google Map when that place is selected
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
      { code: "NZ", name: "New Zealand",    note: "Replace with a memory or highlight." },
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
      { code: "TH", name: "Thailand",          note: "" },
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
      { code: "JP", name: "Japan",          note: "" },
      {
        code: "US", name: "United States", note: "Replace with a memory or highlight.",
        regions: [
          { code: "US-CA", name: "California" },
          { code: "US-NV", name: "Nevada" },
          { code: "US-AZ", name: "Arizona" },
          { code: "US-PA", name: "Pennsylvania" },
          { code: "US-FL", name: "Florida" },
          { code: "US-NY", name: "New York" },
          { code: "US-DC", name: "Washington, DC" },
          { code: "US-VA", name: "Virginia" },
          { code: "US-MD", name: "Maryland" },
          { code: "US-NJ", name: "New Jersey" }
        ]
      },
      { code: "IN", name: "India", note: "Transit stop in West Bengal.",
        regions: [
          { code: "IN-WB", name: "West Bengal" }
        ]
      },
      { code: "BT", name: "Bhutan" },
      { code: "AE", name: "United Arab Emirates" },
      { code: "QA", name: "Qatar" },
      { code: "CA", name: "Canada",
        regions: [
          { code: "CA-BC", name: "British Columbia" },
          { code: "CA-ON", name: "Ontario" }
        ]
      },
      { code: "GB", name: "United Kingdom", note: "Replace with a memory or highlight." },
      { code: "FR", name: "France",         note: "Replace with a memory or highlight." },
      { code: "DE", name: "Germany",         note: "Replace with a memory or highlight." },
      { code: "CH", name: "Switzerland" },
      { code: "AT", name: "Austria" },
      { code: "NL", name: "Netherlands" },
      { code: "BE", name: "Belgium" },
      { code: "IT", name: "Italy",          note: "Replace with a memory or highlight." },
    ]
  }
};

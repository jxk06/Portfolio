const projects = [
  {
    id: 1,
    category: "design",
    tag: "Design",
    title: "Sustainable Fashion E-Commerce UI",
    subtitle: "High-fidelity desktop & mobile UI designed in Figma.",
    image: "/images/Screenshot 2025-12-09 202307.png",

    media: [
      "/videos/screen-recording2.mp4",
      
    ],

    meta: ["Figma", "UI/UX", "Wireframes to Hi-Fi", "Prototype"],

    process: {
      conceptualisation:
        "Identified common pain points in sustainable shopping (trust, product transparency, decision fatigue, and filtering. Defined the goal: make eco-friendly choices feel easy, credible, and visually premium while still being fast to browse.",

      planning:
        "Created low-fidelity sketches, user flows, and information hierarchy before developing a full design system.",

      development:
        "Designed hi-fi mockups for desktop and mobile, applying components and auto-layout for consistency."
    }
  },

  {
    id: 2,
    category: "development",
    tag: "Dev",
    title: "Tree Tracking App",
    subtitle: "A React Native mobile application for tracking trees.",
    image: "images2/Screenshot 2026-02-04 145550.png",

    media: [
      "/videos/C346_CA2TreeMobileAppTeam4_VideoDemo.mp4",
      
    ],

    meta: ["React Native", "Mobile App", "Async Storage", "Front-end", "Back-end", "Authorization", "Authentication", "SQL"],

    process: {
      conceptualisation:
        ".",

      planning:
        "Created moodboards, style direction, and layout sketches before designing screens.",

      development:
        "Built a working front-end mobile app and back-end database."
    }
  },

  {
    id: 3,
    category: "development",
    tag: "Dev",
    title: "Expense Manager App",
    subtitle: "A React Native mobile application for tracking expenses.",
    image: "/images/Screenshot 2025-12-06 173402.png",

    media: [
      "/images/Screenshot 2025-12-06 184653.png",
      "/images/Screenshot 2025-12-06 184720.png",
      "/images/Screenshot 2025-12-06 184743.png",
      "/images/Screenshot 2025-12-06 184814.png",
      "/images/Screenshot 2025-12-06 185052.png",
      "/videos/Screen Recording 2025-12-06 184330.mp4"
    ],

    meta: ["React Native", "AsyncStorage", "Mobile App", "Front-end"],

    process: {
      conceptualisation:
        "The goal was to create a simple personal finance tool to help students better understand and keep track of their  spending.",

      planning:
        "Designed screens for adding expenses, setting limits, viewing history, and calculating totals to target specific needs of students.",

      development:
        "Implemented persistent storage with AsyncStorage, UI components, and spending limit alerts."
    }
  },

  {
    id: 4,
    category: "development",
    tag: "Dev",
    title: "VR Escape Room Prototype",
    subtitle: "A Unity VR puzzle game involving object sequence interaction.",
    image: "/images/vr-cover.png",

    media: [
    
      "/videos/Screen Recording 2025-08-01 220548.mp4"
    ],

    meta: ["Unity", "C#", "VR Interaction"],

    process: {
      conceptualisation:
        "Inspired by real escape rooms and magic, the goal was to recreate dramatic, interactive and immersive puzzle mechanics in VR.",

      planning:
        "Created a Game Design Document, Storyboarded the user journey, created user personas, mapped out object interactions, and created a sequence system for puzzle logic.",

      development:
        "Used C# scripting to detect correct object sequence interactions and trigger animations."
    }
  },

  {
    id: 5,
    category: "development",
    tag: "Dev",
    title: "AR Business Card",
    subtitle: "A AR 3D Business Card with scanning recognition, tracking, interaction and animation.",
    image: "/images2/Screenshot 2025-05-18 215631.png",

    media: [
      "/videos/Screen Recording 2025-05-19 024027 - Copy.mp4",
      "/images2/Screenshot 2026-02-04 152451.png",
      
    ],

    meta: ["Unity", "Vuforia", "AR"],

    process: {
      conceptualisation:
        "Developed a lightweight packing planner for users to organise travel essentials.",

      planning:
        "Planned component breakdown: form, list, stats section, sorting options, and clear functions.",

      development:
        "Used React hooks to manage user input, add/delete items, track packed items, and display progress."
    }
  }

  
];

export default projects;


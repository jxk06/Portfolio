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

    meta: ["Figma", "UI/UX", "Wireframes to Hi-Fi"],

    process: {
      conceptualisation:
        "Analysed user needs and eco-friendly shopping behavior to create an intuitive browsing experience.",

      planning:
        "Created low-fidelity sketches, user flows, and information hierarchy before developing a full design system.",

      development:
        "Designed hi-fi mockups for desktop and mobile, applying components and auto-layout for consistency."
    }
  },

  {
    id: 2,
    category: "design",
    tag: "Design",
    title: "Persona 5 Inspired Landing Page",
    subtitle: "Creative UI exploration inspired by Persona 5’s visual motifs.",
    image: "/images/persona-cover.png",

    media: [
      "/images/persona1.png",
      "/images/persona2.png"
    ],

    meta: ["Figma", "HTML/CSS", "Creative UI"],

    process: {
      conceptualisation:
        "Studied Persona 5's bold graphic motifs and comic-style UI to recreate a stylised hero section.",

      planning:
        "Created moodboards, style direction, and layout sketches before designing screens.",

      development:
        "Built a working front-end prototype using HTML/CSS with hover interactions reflecting Persona's visual flair."
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
      "/videos/test.mp4"
    ],

    meta: ["React Native", "AsyncStorage", "Mobile App"],

    process: {
      conceptualisation:
        "The goal was to create a simple personal finance tool to help students understand daily spending.",

      planning:
        "Designed screens for adding expenses, setting limits, viewing history, and calculating totals.",

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
      "/images/vr1.png",
      "/images/vr2.png",
      "/videos/vr-demo.mp4"
    ],

    meta: ["Unity", "C#", "VR Interaction"],

    process: {
      conceptualisation:
        "Inspired by real escape rooms, the goal was to recreate interactive puzzle mechanics in VR.",

      planning:
        "Storyboarded the user journey, mapped out object interactions, and created a sequence system for puzzle logic.",

      development:
        "Used C# scripting to detect correct object sequence interactions and trigger door unlocking animations."
    }
  },

  {
    id: 5,
    category: "development",
    tag: "Dev",
    title: "React Packing List Web App",
    subtitle: "A React project for managing travel packing lists.",
    image: "/images/packing-cover.png",

    media: [
      "/images/packing1.png",
      "/images/packing2.png"
    ],

    meta: ["React", "JavaScript", "State Management"],

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


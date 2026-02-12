const projects = [
  {
    id: 1,
    category: "design",
    tag: "Design",
    title: "Sustainable Fashion E-Commerce UI",
    subtitle: "High-fidelity desktop & mobile UI designed in Figma.",
    image: "/images/Screenshot 2025-12-09 202307.png",

    media: [
      "xPVtaejTem8",

    ],

    meta: ["Figma", "UI/UX", "Wireframe", "Prototype"],

    process: {
      conceptualisation: [
        "Conducted market and competitor research on existing sustainable fashion platforms to identify strengths, weaknesses, and gaps in user experience.",
        "Carried out user interviews and surveys to understand pain points such as trust issues, lack of product transparency, decision fatigue, and complex filtering systems.",
        "Synthesised findings into user personas and user stories to define clear design goals: making sustainable shopping intuitive, credible, and efficient to browse."
      ],

      planning: [
        "Created low-fidelity sketches, user journey map, user personas, and user flows.",
        "Established information hierarchy to structure content effectively.",
        "Developed a full design system (UI kit) before moving to high-fidelity designs."
      ],

      development: [
        "Designed high-fidelity interactive prototypes in Figma for both desktop and mobile using components and Auto Layout for scalability.",
        "Used components from UI kit wherever possible for consistency and efficiency."
      ]
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
      "F6emgMSFkeg",

    ],

    meta: ["React Native", "Mobile App", "Async Storage", "Front-end", "Back-end", "Authorization", "Authentication", "SQL", "CSS"],

    process: {
      conceptualisation: [
        "The idea was to create a community-focused mobile application that tracks tree counts across different regions in Singapore.",
        "The goal was to promote environmental awareness by visualising tree data and calculating environmental severity levels based on total tree counts.",
        "The concept focused on simplicity, accessibility, and real-time data tracking across devices."
      ],

      planning: [
        "Planned the overall system architecture and logic including front-end mobile interfaces and a backend web service for data storage.",
        "Designed user flows for adding tree data, viewing regional statistics, authentication, and monthly reset functionality.",
        "Structured the database schema to organise tree counts by region and ensure accurate calculations of environmental severity.",
        "Color-coded regions according to severity and incorporated styled icons to improve clarity and user engagement."
      ],

      development: [
        "Developed the mobile application using React Native in Webstorm and integrated it with a backend web service connected to an SQL database I created in MySQL Workbench.",
        "Implemented authentication and authorization to manage user access, built CRUD functionality for tree data, enabled automatic environmental severity calculations, and ensured persistent storage and retrieval of data across sessions and devices.",
        "Used external CSS for styling."
      ]
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
      "EiEEvYv3kYQ"
    ],

    meta: ["React Native", "AsyncStorage", "Mobile App", "Front-end"],

    process: {
      conceptualisation: [
        "The goal was to create a simple personal finance tool to help students better understand and keep track of their spending."
      ],

      planning: [
        "Designed screens for adding expenses, setting limits, viewing history, and calculating totals to target specific needs of students."
      ],

      development: [
        "Implemented persistent storage with AsyncStorage, UI components, and spending limit alerts."
      ]
    }
  },

  {
    id: 4,
    category: "development",
    tag: "Dev",
    title: "VR Escape Room Prototype",
    subtitle: "A Unity VR puzzle game involving object sequence interaction.",
    image: "/images/Screenshot 2026-02-04 193818.png",

    media: [

      "6Y41D9qAD6M"
    ],

    meta: ["Unity", "C#", "VR Interaction"],

    process: {
      conceptualisation: [
        "Inspired by real escape rooms and magic, the goal was to recreate dramatic, interactive, and immersive puzzle mechanics in VR."
      ],

      planning: [
        "Created a Game Design Document, storyboarded the user journey, created user personas, mapped out object interactions, and created a sequence system for puzzle logic."
      ],

      development: [
        "Used C# scripting to detect correct object sequence interactions and trigger animations."
      ]
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
      "Egc98lN_eIA",
      "/images2/Screenshot 2026-02-04 152451.png",
      "/images2/Screenshot 2025-05-18 215631.png",

    ],

    meta: ["Unity", "Vuforia", "AR"],

    process: {
      conceptualisation: [
        "Developed a lightweight packing planner for users to organise travel essentials."
      ],

      planning: [
        "Planned component breakdown: form, list, stats section, sorting options, and clear functions."
      ],

      development: [
        "Used React hooks to manage user input, add/delete items, track packed items, and display progress."
      ]
    }
  }


];

export default projects;


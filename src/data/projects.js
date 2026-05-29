const projects = [
  {
    id: 1,
    category: "design",
    tag: "Design",
    title: "Health Food Tracker and Finder",
    subtitle: "High-fidelity desktop & mobile UI designed in Figma.",
    image: "/images/Screenshot 2026-05-29 190328.png",

    media: [
      "/images/Screenshot 2026-05-29 185551.png",
      "/images/Screenshot 2026-05-29 185612.png",
      "/images/Screen Recording 2026-02-07 235759.mp4"
    ],

    meta: ["Figma", "UI/UX", "Wireframe", "Prototype"],

    process: {
      conceptualisation: [
        "Conducted market and competitor research on existing health food tracking platforms to identify strengths, weaknesses, and gaps in user experience.",
        "Carried out user interviews and surveys to understand pain points such as difficulty tracking meals, lack of reliable nutritional information, and finding healthy food options nearby.",
        "Synthesised findings into user personas and user stories to define clear design goals: making healthy eating intuitive, engaging, and efficient to track."
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

    meta: ["Async Storage", "Front-end", "Back-end", "Authorization", "Authentication", "CSS", "Verification"],

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

    meta: ["AsyncStorage", "Front-end", "CSS"],

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
    subtitle: "A VR puzzle game involving object sequence interaction.",
    image: "/images/Screenshot 2026-02-04 193818.png",

    media: [
      "6Y41D9qAD6M",
      "/images/Screenshot 2026-02-12 145115.png",
      "/images/Screenshot 2026-02-12 145335.png",
      "/images/Screenshot 2026-02-12 145404.png",
      "/images/Screenshot 2026-02-12 145511.png"
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
      "/images/Screenshot 2025-05-19 021708.png"
    ],

    meta: ["Unity", "Vuforia", "AR", "3D Modeling"],

    process: {
      conceptualisation: [
        "Envisioned a modern, interactive way to present a professional portfolio, replacing a standard paper business card with an immersive AR experience.",
        "The goal was to allow potential clients or employers to scan the physical card and instantly see 3D models and interactive buttons pop up on their screen."
      ],

      planning: [
        "Sketched out the layout for the AR elements, deciding where interactive buttons (like email and portfolio links) and 3D assets would appear relative to the physical card.",
        "Created and sourced 3D assets to be rendered in augmented reality."
      ],

      development: [
        "Used Unity and the Vuforia Engine to set up image target recognition, ensuring stable tracking of the business card.",
        "Programmed interactive elements in C# to handle user inputs, triggering animations and opening external links when the virtual buttons are tapped."
      ]
    }
  },

  {
    id: 6,
    category: "design",
    tag: "Design",
    title: "Travel Instagram Grid Post",
    subtitle: "A seamless 3x3 Instagram grid puzzle made using Adobe tools.",
    image: "/images/Screenshot 2025-07-25 214107.png",

    media: [
      "/images/Screenshot 2025-07-21 142529.png",
      "/images/Screenshot 2025-07-25 214107.png"
    ],

    meta: ["Adobe Photoshop", "Adobe Illustrator", "Social Media Design", "Grid Layout"],

    process: {
      conceptualisation: [
        "Wanted to create an engaging visual experience for a travel campaign encouraging people to travel with this company'.",
        "Decided on a continuous 9-square grid puzzle for Instagram that reveals a larger, interconnected landscape when viewed on a profile page."
      ],

      planning: [
        "Sourced high-quality imagery of iconic landmarks, including the Great Wall of China, Big Ben, and the Sydney Opera House.",
        "Mapped out the 3x3 layout to ensure each individual square could stand alone as an interesting post while contributing to the cohesive bigger picture."
      ],

      development: [
        "Used Adobe Photoshop and Illustrator to blend the different landscapes, adjust lighting and color grading for consistency, and add dynamic elements like the airplane and sun rays.",
        "Sliced the final large canvas into nine perfectly sized 1080x1080px squares ready for sequential publishing."
      ]
    }
  },

  {
    id: 7,
    category: "design",
    tag: "Design",
    title: "Marine Biodiversity Trail Poster",
    subtitle: "An educational event poster designed in Canva",
    image: "/images/Screenshot 2025-04-27 211913.png",

    media: [
      "/images/Screenshot 2025-04-27 211913.png"
    ],

    meta: ["Canva", "Graphic Design", "Print Media", "Event Poster"],

    process: {
      conceptualisation: [
        "Tasked with creating an engaging poster for a Marine Biodiversity Trail event at East Coast Park, organized by Greennudge.",
        "The primary goal was to showcase local marine life and their interconnected ecosystem to attract environmentally conscious participants."
      ],

      planning: [
        "Compiled essential information (date, time, location, organizer) to establish a clear typographic structure.",
        "Opted for a split-composition design featuring a winding path, a magnifying glass, and various hidden elements to emphasize discovery and exploration."
      ],

      development: [
        "Utilised Canva to assemble the artwork, incorporating vibrant illustrations of aquatic animals, coral reefs, and footprints.",
        "Constructed a visual food web flowchart in the top section to educate viewers at a glance.",
        "Applied core principles like visual hierarchy to smoothly guide the reader's eye downwards, and used high contrast to ensure text readability against the rich background."
      ]
    }
  }
];

export default projects;


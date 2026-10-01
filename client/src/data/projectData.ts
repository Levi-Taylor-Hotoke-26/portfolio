export interface Project {
  id: string;
  title: string;
  status?: string;
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  description: string;
  role: string[];
  motivation: string[];
  learned: string[];
  improvements: string[];
}

export const projectsData: Project[] = [
  
  {
    id: 'momodex',
    title: 'Momodex',
    githubUrl: 'https://github.com/Hotoke-2026/Momodex',
    liveUrl: 'https://momodex.onrender.com/',
    imageUrl: '/images/momodex.png',
    description: 'A Kiwi based project to identify creatures in the wild and use them to battle, created in a team of five for Dev Academy.',
    role: [
      'Configured and queried relational databases using SQLite, Knex, cloud-based Turso',
      'Integrated Auth0 JWT Validation',
      'Used Vitest to ensure routes are protected',
      'Acted as Git Keeper and maintained the integrity of the main branch code',
      'Configured Render settings to deploy our project to a public site',
    ],
    motivation: [
      "Our goal was to collaborate and practice full-stack development using serverless database infrastructure"
    ],
    learned: [
      "In my role as Git Keeper, I learned best practices for protecting branches and maintaining code integrity. Working in a team also pushed me to write better commit messages for clarity. This was my first time handling deployment configurations on Render, and using cloud-based Turso to query and configure relational databases"
    ],
    improvements: ["As it is now, users can only battle the AI with the cards they've collected. If I come back to this project, it would be to add a way for users to battle other users, and to create a leaderboard."]
  },
  {
    id: 'acnh-calculator',
    title: 'Animal Crossing New Horizons Friendship Calculator',
    status: '(In Progress)',
    githubUrl: 'https://github.com/Hotoke-2026/acnh-friendship-calculator',
    liveUrl: 'https://acnh-friendship-calculator.onrender.com/',
    imageUrl: '/images/acnh.png',
    description: 'A solo project for Animal Crossing New Horizons players to log their interactions with villagers and track their friendship levels.',
    role: [
      'Built a dynamic user interface using React, Typescript, and Sass CSS',
      'Used Node.js and Express to set up RESTful routes and integrate the Nookipedia API',
      'Integrated Auth0 JWT Validation',
    ],
    motivation: [
      "In Animal Crossing New Horizons, you can earn friendship points with your villagers by doing different interactions. One example is giving them a daily gift; The number of points you earn is determined by how well your gift matches the villagers' color and style. You can also receive bonus points if you wrap your gift.",
      "Earning friendship points can lead to greater rewards from villagers so I wanted to track my interactions and select the best gifts. I also want to track what items I've already gifted. There are apps that show what items make good gifts for villagers, but they don't have a ranking or points system, and I haven't found any that track other villager interactions."
    ],
    learned: [
      "In previous projects, Dev Academy would give us code with npm installed to start with. For this project I've learned to create a filetree from scratch, and using pnpm install to save storage space. This project is also the first time I'm using Sass CSS to manage the dynamic UI with React and TypeScript. This project has strengthened my understanding of external API integration and JWT authorization",
    ],
    improvements: [
      "As it is now, users can save which villagers are on their island, and they can track their points and interaction history. For future development, I intend to include a way users can save what items and clothing they have in their wardrobe, and users will be able to pull a ranked list of potential gifts based on what they own."
    ]
  },
  {
    id: 'spam',
    title: 'Spam',
    githubUrl: 'https://github.com/Hotoke-2026/Spam',
    imageUrl: '/images/spam.png',
    description: 'A web app with games, community ratings, and other content focused on spam meat, created in a team of four for Dev Academy.',
    role: [
      'Used Node.js and Express to set up API endpoints and RESTful routes',
      'Integrated Auth0 JWT Validation',
      'Used Vitest to raise code reliability',
    ],
    motivation: [
      "This was a teacher-led project that was meant to show us how collaboration might appear in the workplace; We had a kanban style ticket board where we assigned tasks to ourselves and tracked our progress to keep others apprised. We also created a discord chat so we could track when pull requests had been opened or closed."
    ],
    learned: [
      "This project taught me the importance of keeping up with merges and pulling from main. We had some issues where we were receiving repeated conflict errors only to realize that we weren't pulling the updates from main and merging them into our branches."
    ],
    improvements: [
      "As a future improvement we could add a database function to join the comments and users tables so the user's name appears when they leave a comment."
    ]
  },
  {
    id: 'kiwisaver-calculator',
    title: 'Kiwisaver Investment Calculator',
    githubUrl: 'https://github.com/Levi-Taylor-Hotoke-26/kiwisaver-calculator',
    imageUrl: '/images/kiwisaver.png',
    description: 'A solo Python-based command-line tool created for a Yoobee assessment to calculate and project investment growth across multiple interest rates over time.',
    role: [
      'Developed core financial calculation logic',
      'Implemented data transformation functions to convert yearly totals into monthly breakdowns',
      'Designed robust validation loops to ensure inputs are correctly handled and error-free',
      'Built terminal output tables with aligned columns for both yearly and monthly summary views',
    ],
    motivation: [
      "This project was to strengthen core programming logic and data handling fundamentals in Python"
    ],
    learned: [
      "This taught me the importance of commented working code, thorough pseudocode planning, and designing robust testing environments.This also taught me about technical writing as we were required to include a user guide for the program."
    ],
    improvements: [
      "In the future I would add an option for the users to export their summary reports into a CSV or TXT file."
    ]
  },
  {
    id: 'portfolio',
    title: 'This Portfolio Website!',
    githubUrl: 'https://github.com/Levi-Taylor-Hotoke-26/portfolio',
    description: 'A solo project where I can show off my skills for potential clients and employers.',
    role: [
      'Built a dynamic user interface using React, Typescript, and CSS',
      'Used Node.js and Express to set up RESTful routes',
    ],
    motivation: ["To show off what I can do!"],
    learned: ["This project has taught me to think more critically about my design choices as I want to create an engaging website that stands out while still respecting accessibility needs."],
    improvements: ["In the future I'll integrate a live contact form so employers and clients can reach out to me directly."]
  },
];
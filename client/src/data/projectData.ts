export interface Project {
  id: string;
  title: string;
  status?: string;
  githubUrl: string;
  liveUrl?: string;
  description: string;
  role: string[];
}

export const projectsData: Project[] = [
  
  {
    id: 'acnh-calculator',
    title: 'Animal Crossing New Horizons Friendship Calculator',
    status: '(In Progress)',
    githubUrl: 'https://github.com/Hotoke-2026/acnh-friendship-calculator',
    liveUrl: 'https://acnh-friendship-calculator.onrender.com/',
    description: 'A solo project for Animal Crossing New Horizons players to log their interactions with villagers and track their friendship levels.',
    role: [
      'Built a dynamic user interface using React, Typescript, and Sass CSS',
      'Used Node.js and Express to set up RESTful routes and integrate the Nookipedia API',
      'Integrated Auth0 JWT Validation',
    ],
  },
  {
    id: 'momodex',
    title: 'Momodex',
    githubUrl: 'https://github.com/Hotoke-2026/Momodex',
    liveUrl: 'https://momodex.onrender.com/',
    description: 'A Kiwi based project to identify creatures in the wild and use them to battle, created in a team of five.',
    role: [
      'Configured and queried relational databases using SQLite, Knex, cloud-based Turso',
      'Integrated Auth0 JWT Validation',
      'Used Vitest to ensure routes are protected',
      'Acted as Git Keeper and maintained the integrity of the main branch code',
      'Configured Render settings to deploy our project to a public site',
    ],
  },
  {
    id: 'spam',
    title: 'Spam',
    githubUrl: 'https://github.com/Hotoke-2026/Spam',
    description: 'A teacher-led project with games, community ratings, and other content focused on spam meat, created in a team of four.',
    role: [
      'Used Node.js and Express to set up API endpoints and RESTful routes',
      'Integrated Auth0 JWT Validation',
      'Used Vitest to raise code reliability',
    ],
  },
  {
    id: 'kiwisaver-calculator',
    title: 'Kiwisaver Investment Calculator',
    githubUrl: 'https://github.com/Levi-Taylor-Hotoke-26/kiwisaver-calculator',
    description: 'A solo Python-based command-line tool created for a Yoobee assessment to calculate and project investment growth across multiple interest rates over time.',
    role: [
      'Developed core financial calculation logic',
      'Implemented data transformation functions to convert yearly totals into monthly breakdowns',
      'Designed robust validation loops to ensure inputs are correctly handled and error-free',
      'Built terminal output tables with aligned columns for both yearly and monthly summary views',
    ],
  },
  {
    id: 'portfolio',
    title: 'This Portfolio Wesbite!',
    githubUrl: 'https://github.com/Levi-Taylor-Hotoke-26/portfolio',
    description: 'A solo project where I can show off my skills for potential clients and employers.',
    role: [
      'Built a dynamic user interface using React, Typescript, and CSS',
      'Used Node.js and Express to set up RESTful routes',
    ],
  },
];
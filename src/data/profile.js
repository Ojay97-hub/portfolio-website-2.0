// Profile data for Owen Cotter
// Edit this file to update your personal information, projects, and content

export const profile = {
  name: 'Owen Cotter',
  title: 'Junior Full-Stack Developer & UI Designer',
  location: 'Swansea, Wales',
  email: 'owenjames97@outlook.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/junior-software-dev-owen-cotter/',
    github: 'https://github.com/Ojay97-hub',
    portfolio: 'https://owencotter.dev', // Replace with your actual portfolio URL
  },
  shortBio: "I bridge UI design and development to build web experiences that look considered and work seamlessly. From early Figma concepts to production-ready applications, I apply a designer’s eye to structure, interaction, and implementation.",
}

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'Django',
  'Bootstrap',
  'PostgreSQL',
  'Stripe',
  'UI Design',
  'Figma',
  'Accessibility',
  'Responsive Design',
  'Agile',
  'Kanban',
  'Sprint Iterations',
  'MVP',
  'User Stories',
  'React',
  'TailwindCSS',
  'Git',
  'SEO',
  'Semantic HTML',
  'Heroku Deployment',
  'AWS S3',
  'Components & Variants',
  'Typography',
  'Colour Theory',
  'Interactivity',
  'Layout Design',
  'Branding & Personality',
  'Design Systems',
  'Wireframing'
]

export const services = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive websites using HTML, CSS, JavaScript, and React frameworks.',
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React Development', 'Responsive Design'],
    certificate: 'Code Institute Full Stack Software Development'
  },
  {
    title: 'Backend Development',
    description: 'Server-side development with Python, Django, and database management.',
    skills: ['Python Programming', 'Django Framework', 'PostgreSQL', 'API Development'],
    certificate: 'Code Institute Full Stack Software Development'
  },
  {
    title: 'UI Design',
    description: 'User interface design principles with modern design tools and methodologies.',
    skills: ['Figma Design', 'Visual Design', 'Wireframing', 'Layout Design'],
    certificate: 'UI Design Certification'
  }
]

export const projects = [
  {
    title: 'Jungle Peaks Brewing E-Commerce (P5)',
    description: 'Full-stack e-commerce platform for a brewery with user authentication, payment processing using Stripe, and complete admin functionality. Recently updated based on assessor feedback with improved responsive design and accessibility features.',
    image: '/project-pics/jungle-peaks-portfolio.webp',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://jungle-peaks-update-01b3f62083c2.herokuapp.com/',
    githubUrl: 'https://github.com/Ojay97-hub/Jungle-Peaks-Brewing-Co',
    featured: true,
    projectType: 'Full Stack'
  },
  {
    title: 'Eventory Event Scheduler (P4)',
    description: 'Event scheduling application allowing users to create, manage, and track events with user authentication and CRUD functionality.',
    image: '/project-pics/eventory.webp',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://eventory-5d4c90f0ec37.herokuapp.com/',
    githubUrl: 'https://github.com/Ojay97-hub/event-scheduler',
    featured: true,
    projectType: 'Full Stack'
  },
  {
    title: 'Blackjack Game (P3)',
    description: 'Interactive Blackjack card game built with Python, featuring game logic, scoring system, and user interaction.',
    image: '/project-pics/blackjack.webp',
    technologies: ['Python', 'Object-Oriented Programming', 'Game Logic'],
    liveUrl: 'https://black-jack-lvl1-25fdd631e5ae.herokuapp.com/',
    githubUrl: 'https://github.com/Ojay97-hub/black-jack-game',
    featured: true,
    projectType: 'Python'
  },
  {
    title: 'Dinosaur Quiz (P2)',
    description: 'Educational quiz application about dinosaurs with interactive questions, scoring, and responsive design.',
    image: '/project-pics/dino-quiz.webp',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
    liveUrl: 'https://ojay97-hub.github.io/Dinosaur-Quiz-/',
    githubUrl: 'https://github.com/Ojay97-hub/Dinosaur-Quiz-',
    featured: true,
    projectType: 'Frontend'
  },
  {
    title: 'The Winchester Pub Website (P1)',
    description: 'Static website for a pub featuring responsive design, accessibility considerations, and modern HTML/CSS techniques.',
    image: '/project-pics/winchester.webp',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    liveUrl: 'https://ojay97-hub.github.io/The-Winchester/',
    githubUrl: 'https://github.com/Ojay97-hub/The-Winchester',
    featured: true,
    projectType: 'Frontend'
  },
  {
    title: 'SheCanGitIt Hackathon - Team 4 (3rd Place)',
    description: 'Collaborative project developed during a hackathon, showcasing teamwork and rapid development skills. Achieved 3rd place.',
    image: '/project-pics/shegitsit.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Team Collaboration'],
    liveUrl: 'https://she-gits-it-8555f0353cc7.herokuapp.com/',
    githubUrl: 'https://github.com/Carlos-n21/Team-4-SheCanGitIt',
    featured: true,
    projectType: 'Hackathon'
  }
]

export const education = [
  {
    title: 'UI Design Certification',
    institution: 'Professional Design Institute',
    description: 'User-centered design principles, wireframing, prototyping, and design systems. Created a comprehensive banking application with 9 responsive screens across mobile, tablet, and desktop platforms.',
    completion: '2025',
    credentials: 'Certificate',
    projects: 'Banking App - 9 Responsive Screens',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    title: 'Full Stack Software Development',
    institution: 'Code Institute',
    description: 'Comprehensive bootcamp covering HTML/CSS, JavaScript, Python, Django, and PostgreSQL. Completed 5 portfolio projects demonstrating full-stack development skills.',
    completion: '2025',
    credentials: 'Diploma',
    projects: '5 Portfolio Projects',
    skills: ['HTML5/CSS3', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'Git/GitHub']
  },
  {
    title: 'Continuous Learning - In Progress',
    institution: 'Self-Directed & Online Platforms',
    description: 'Actively expanding technical skills through online courses, documentation, and hands-on projects. Currently focusing on modern development practices and cloud technologies.',
    completion: 'Ongoing',
    credentials: 'Learning Journey',
    projects: 'Personal Projects & Skill Building',
    skills: ['TypeScript', 'Node.js', 'AWS/Azure', 'Testing (Jest)', 'Docker', 'Next.js']
  }
]

export const benefits = [
  {
    title: 'Fresh Perspective',
    description: 'Recent graduate bringing modern development practices and contemporary design trends to your team.',
    icon: 'Eye'
  },
  {
    title: 'Eager to Learn',
    description: 'Passionate about continuous learning and staying up-to-date with the latest technologies and best practices.',
    icon: 'BookOpen'
  },
  {
    title: 'Strong Foundation',
    description: 'Solid understanding of full-stack development principles from comprehensive bootcamp training.',
    icon: 'Building'
  },
  {
    title: 'Project Experience',
    description: 'Hands-on experience from 5 diverse projects, including e-commerce platforms and interactive applications.',
    icon: 'Code'
  },
  {
    title: 'Design-Minded',
    description: 'Combined technical skills with UI design knowledge for well-rounded development approach.',
    icon: 'Palette'
  },
  {
    title: 'Team Player',
    description: 'Proven collaboration skills from hackathon experience and ability to work effectively in team environments.',
    icon: 'Users'
  }
]

// UI Design Showcase - FinWiz Banking App (9 Screens)
// Mobile-first financial application design
// NOTE: Images are prefixed with /portfolio-website-2.0 to match the Vite base path
const BASE_PATH = '/portfolio-website-2.0';

export const uiDesigns = [
  // DESKTOP DESIGNS (3)
  {
    title: "FinWiz - Cards & Magic",
    category: "Desktop",
    description: "The Cards page showcases the 'Magic' balance system with AI-powered financial tips. Features quick actions for money transfer, spending categories, and a detailed transaction ledger with real-time insights.",
    image: `${BASE_PATH}/project-pics/figma-exports/spending-desktop.webp`,
    tools: ["Figma", "Auto Layout", "Desktop"],
    figmaUrl: "#"
  },
  {
    title: "FinWiz - Accounts Dashboard",
    category: "Desktop",
    description: "Gamified account overview with 'Total Coins' balance, achievement badges, and treasure tracker analytics. Includes spending visualization, upcoming payments, and partner perks for an engaging financial experience.",
    image: `${BASE_PATH}/project-pics/figma-exports/accounts-desktop.webp`,
    tools: ["Figma", "Data Viz", "Dashboard"],
    figmaUrl: "#"
  },
  {
    title: "FinWiz - Trends & Insights",
    category: "Desktop",
    description: "Comprehensive analytics dashboard with Crystal Ball Insights, spending breakdowns by category, and an interactive Wizard Spending Locator map. Features income allowances and multi-account balance tracking.",
    image: `${BASE_PATH}/project-pics/figma-exports/current-account-desktop.webp`,
    tools: ["Figma", "Components", "Grid"],
    figmaUrl: "#"
  },

  // TABLET DESIGNS (3)
  {
    title: "My Accounts - Tablet View",
    category: "Tablet",
    description: "Adaptive layout for tablet devices, maintaining the card-based structure while optimizing for touch interaction and medium-sized viewports.",
    image: `${BASE_PATH}/project-pics/figma-exports/accounts-tablet.webp`,
    tools: ["Figma", "Responsive", "Tablet"],
    figmaUrl: "#"
  },
  {
    title: "My Spending - Tablet Analytics",
    category: "Tablet",
    description: "Touch-friendly spending report interface, presenting charts and transaction lists in a layout optimized for tablet ergonomics.",
    image: `${BASE_PATH}/project-pics/figma-exports/spending-tablet.webp`,
    tools: ["Figma", "Auto Layout", "Tablet"],
    figmaUrl: "#"
  },
  {
    title: "Current Account - Tablet View",
    category: "Tablet",
    description: "Tablet-optimized transaction history and account management, ensuring legibility and easy access to controls on portable screens.",
    image: `${BASE_PATH}/project-pics/figma-exports/current-tablet.webp`,
    tools: ["Figma", "Components", "Tablet"],
    figmaUrl: "#"
  },

  // MOBILE DESIGNS (3)
  {
    title: "My Accounts - Mobile App",
    category: "Mobile",
    description: "Mobile-first hub for accessing all accounts. Prioritizes essential information and one-handed navigation for on-the-go banking.",
    image: `${BASE_PATH}/project-pics/figma-exports/accounts-mobile.webp`,
    tools: ["Figma", "Mobile System", "App"],
    figmaUrl: "#"
  },
  {
    title: "My Spending - Mobile Insights",
    category: "Mobile",
    description: "Compact spending summary and categorization for mobile devices, giving users quick insights into their financial habits anytime.",
    image: `${BASE_PATH}/project-pics/figma-exports/spending-mobile.webp`,
    tools: ["Figma", "Mobile", "Data"],
    figmaUrl: "#"
  },
  {
    title: "Current Account - Mobile View",
    category: "Mobile",
    description: "Streamlined transaction list and account actions for mobile, allowing users to check balances and manage funds effortlessly.",
    image: `${BASE_PATH}/project-pics/figma-exports/current-mobile.webp`,
    tools: ["Figma", "Mobile", "UX"],
    figmaUrl: "#"
  }
]

export const qualifications = [
  {
    title: 'BA (Hons) Events Management',
    institution: 'Leeds Beckett University',
    field: '1st Class Honours',
    year: '2017–2021',
    description: 'First-class honours degree with work placement experience in Florida, USA for 1 year. Developed strong project management and organizational skills. My dissertation focused on drug-related deaths and harm-reduction strategies for nightlife & festivals.',
    icon: 'GraduationCap'
  },
  {
    title: 'MSc International Events Management',
    institution: 'Leeds Beckett University',
    field: 'Merit',
    year: '2022–2023',
    description: 'Advanced postgraduate study in international event management with Merit classification. Specialized in experiential marketing and brand event transfer, further understanding the importance of brand and personality fit.',
    icon: 'Award'
  }
]

export const featuresList = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive web applications using React, JavaScript, and CSS frameworks.',
    icon: 'Code'
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions with Python, Django, and database management.',
    icon: 'Server'
  },
  {
    title: 'UI Design',
    description: 'User-centered design process from research to high-fidelity prototypes.',
    icon: 'Palette'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store development with payment processing and inventory management.',
    icon: 'ShoppingCart'
  }
]

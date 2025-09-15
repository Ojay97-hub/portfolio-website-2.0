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
  shortBio: 'Recent Code Institute graduate seeking my first role as a developer. Passionate about creating intuitive web applications and user experiences, with hands-on experience from 6 portfolio projects ranging from interactive games to full-stack e-commerce platforms.',
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
  'UI/UX',
  'Figma',
  'Accessibility',
  'Responsive Design',
  'Agile',
  'React',
  'TailwindCSS',
  'Git',
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
    title: 'UI/UX Design',
    description: 'User-centered design principles with modern design tools and methodologies.',
    skills: ['Figma Design', 'User Research', 'Wireframing', 'Prototyping'],
    certificate: 'UI/UX Design Certification'
  }
]

export const projects = [
  {
    title: 'Jungle Peaks Brewing E-Commerce (P5)',
    description: 'Full-stack e-commerce platform for a brewery with user authentication, payment processing using Stripe, and complete admin functionality.',
    image: '/screenshot-responsive_jps.png',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://jungle-peaks-brewing-29d2cf7236c2.herokuapp.com/',
    githubUrl: 'https://github.com/Ojay97-hub/Jungle-Peaks-Brewing-Co',
    featured: true,
    projectType: 'Full Stack'
  },
  {
    title: 'Eventory Event Scheduler (P4)',
    description: 'Event scheduling application allowing users to create, manage, and track events with user authentication and CRUD functionality.',
    image: '/responsive_screenshots_eventory.png',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://eventory-5d4c90f0ec37.herokuapp.com/',
    githubUrl: 'https://github.com/Ojay97-hub/event-scheduler',
    featured: true,
    projectType: 'Full Stack'
  },
  {
    title: 'Blackjack Game (P3)',
    description: 'Interactive Blackjack card game built with Python, featuring game logic, scoring system, and user interaction.',
    image: '/screenshots_blackjack.png',
    technologies: ['Python', 'Object-Oriented Programming', 'Game Logic'],
    liveUrl: 'https://black-jack-lvl1-25fdd631e5ae.herokuapp.com/',
    githubUrl: 'https://github.com/Ojay97-hub/black-jack-game',
    featured: true,
    projectType: 'Python'
  },
  {
    title: 'Dinosaur Quiz (P2)',
    description: 'Educational quiz application about dinosaurs with interactive questions, scoring, and responsive design.',
    image: '/responsive-screenshot-dinosaurquiz.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
    liveUrl: 'https://ojay97-hub.github.io/Dinosaur-Quiz-/',
    githubUrl: 'https://github.com/Ojay97-hub/Dinosaur-Quiz-',
    featured: true,
    projectType: 'Frontend'
  },
  {
    title: 'The Winchester Pub Website (P1)',
    description: 'Static website for a pub featuring responsive design, accessibility considerations, and modern HTML/CSS techniques.',
    image: '/website-screenshots-winchester.jpeg',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    liveUrl: 'https://ojay97-hub.github.io/The-Winchester/',
    githubUrl: 'https://github.com/Ojay97-hub/The-Winchester',
    featured: true,
    projectType: 'Frontend'
  },
  {
    title: 'SheCanGitIt Hackathon - Team 4 (3rd Place)',
    description: 'Collaborative project developed during a hackathon, showcasing teamwork and rapid development skills. Achieved 3rd place.',
    image: '/amiresponsive_shegitsit.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Team Collaboration'],
    liveUrl: 'https://she-gits-it-8555f0353cc7.herokuapp.com/',
    githubUrl: 'https://github.com/Carlos-n21/Team-4-SheCanGitIt',
    featured: true,
    projectType: 'Hackathon'
  }
]

export const education = [
  {
    title: 'Full Stack Software Development',
    institution: 'Code Institute',
    description: 'Comprehensive bootcamp covering HTML/CSS, JavaScript, Python, Django, and PostgreSQL. Completed 6 portfolio projects demonstrating full-stack development skills.',
    completion: '2025',
    credentials: 'Diploma',
    projects: '6 Portfolio Projects',
    skills: ['HTML5/CSS3', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'Git/GitHub']
  },
  {
    title: 'UI/UX Design Certification',
    institution: 'Professional Design Institute',
    description: 'User-centered design principles, wireframing, prototyping, and design systems. Created a comprehensive banking application with 9 responsive screens across mobile, tablet, and desktop platforms.',
    completion: '2025',
    credentials: 'Certificate',
    projects: 'Banking App - 9 Responsive Screens',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    title: 'React Certificate',
    institution: 'Scrimba',
    description: 'Comprehensive React training covering modern React development, components, hooks, state management, and building interactive web applications.',
    completion: '2025',
    credentials: 'Certificate',
    projects: 'React Projects & Interactive Apps',
    skills: ['React', 'JSX', 'Hooks', 'State Management', 'Component Architecture']
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
    description: 'Hands-on experience from 6 diverse projects, including e-commerce platforms and interactive applications.',
    icon: 'Code'
  },
  {
    title: 'Design-Minded',
    description: 'Combined technical skills with UI/UX design knowledge for well-rounded development approach.',
    icon: 'Palette'
  },
  {
    title: 'Team Player',
    description: 'Proven collaboration skills from hackathon experience and ability to work effectively in team environments.',
    icon: 'Users'
  }
]

// UI Design Showcase - Banking Application (9 responsive screens)
// Challenger banking brand focused on Clear, Playful, and Trustworthy design principles
export const uiDesigns = [
  // Mobile Designs - Banking Application
  {
    title: 'Accounts Overview - Mobile',
    category: 'Mobile',
    description: 'Banking home screen showing account overview with current, savings, and joint accounts. Clean navigation to other banking features.',
    image: '/ui-mobile-accounts.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Mobile UI', 'Financial UX'],
    type: 'Mobile App'
  },
  {
    title: 'Current Account - Mobile',
    category: 'Mobile',
    description: 'Day-to-day spending account interface with recent transactions and quick links to regular payees for mobile users.',
    image: '/ui-mobile-current.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Mobile Design', 'Banking UX'],
    type: 'Mobile App'
  },
  {
    title: 'Spending Insights - Mobile',
    category: 'Mobile',
    description: 'Mobile spending analysis with savings goals, spending over time, and data visualization for financial insights.',
    image: '/ui-mobile-spending.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Data Visualization', 'Mobile UI'],
    type: 'Mobile App'
  },
  // Tablet Designs - Banking Application
  {
    title: 'Accounts Overview - Tablet',
    category: 'Tablet',
    description: 'Tablet-optimized banking dashboard with enhanced account overview and improved navigation for medium-sized screens.',
    image: '/ui-tablet-accounts.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Tablet UI', 'Financial UX'],
    type: 'Banking App'
  },
  {
    title: 'Current Account - Tablet',
    category: 'Tablet',
    description: 'Enhanced current account view for tablets with expanded transaction history and improved payee management interface.',
    image: '/ui-tablet-current.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Tablet Design', 'Banking UX'],
    type: 'Banking App'
  },
  {
    title: 'Spending Insights - Tablet',
    category: 'Tablet',
    description: 'Comprehensive spending analysis optimized for tablet screens with detailed charts, goals tracking, and financial planning tools.',
    image: '/ui-tablet-spending.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Data Visualization', 'Tablet UI'],
    type: 'Banking App'
  },
  // Desktop Designs - Banking Application
  {
    title: 'Accounts Overview - Desktop',
    category: 'Desktop',
    description: 'Full-featured desktop banking dashboard with comprehensive account overview, quick actions, and detailed financial summary.',
    image: '/ui-desktop-accounts.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Desktop UI', 'Financial UX'],
    type: 'Banking Platform'
  },
  {
    title: 'Current Account - Desktop',
    category: 'Desktop',
    description: 'Desktop current account interface with extensive transaction management, advanced filtering, and detailed payee controls.',
    image: '/ui-desktop-current.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Desktop Design', 'Banking UX'],
    type: 'Banking Platform'
  },
  {
    title: 'Spending Insights - Desktop',
    category: 'Desktop',
    description: 'Advanced desktop spending analytics with comprehensive data visualization, detailed reporting, and financial planning features.',
    image: '/ui-desktop-spending.jpg', // Replace with actual design screenshot
    tools: ['Figma', 'Data Visualization', 'Desktop UI'],
    type: 'Banking Platform'
  }
]

export const qualifications = [
  {
    title: 'BA (Hons) Events Management',
    institution: 'Leeds Beckett University',
    field: '1st Class Honours', 
    year: '2017–2021',
    description: 'First-class honours degree with work placement experience in Florida, USA for 1 year. Developed strong project management and organizational skills.',
    icon: 'GraduationCap'
  },
  {
    title: 'MSc International Events Management',
    institution: 'Leeds Beckett University',
    field: 'Merit',
    year: '2022–2023',
    description: 'Advanced postgraduate study in international event management with Merit classification. Specialized in global event planning and cross-cultural project coordination.',
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
    title: 'UI/UX Design',
    description: 'User-centered design process from research to high-fidelity prototypes.',
    icon: 'Palette'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store development with payment processing and inventory management.',
    icon: 'ShoppingCart'
  }
]

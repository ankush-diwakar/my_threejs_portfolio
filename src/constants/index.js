export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Aniket Mishra',
    position: 'Data Scientist',
    img: 'assets/review1.jpg',
    review:
      'Working with Ankush has been a fantastic experience. He always brings creative solutions to the table. He is not only skilled but also great at collaborating and communicating. I highly recommend him for any web development projects.',
  },
  {
    id: 2,
    name: 'Balaji Tukuntala',
    position: 'Flutter Developer',
    img: 'assets/review2.jpg',
    review:
      "Your portfolio reflects a solid foundation in modern web development. The projects showcase your skills, and it's clear you have a strong grasp of best practices. Your work is both innovative and practical, demonstrating a keen ability to tackle real-world problems.",
  },
  {
    id: 3,
    name: 'Yash Gadhave',
    position: 'Data Scientist',
    img: 'assets/review3.jpg',
    review:
      'I was blown away by the complexity and execution of your web apps. Your ability to create dynamic and responsive designs is exceptional.  I wholeheartedly recommend him for any web development role or project.',
  },
  {
    id: 4,
    name: 'Aayush Rajbhar',
    position: 'Software Engineer',
    img: 'assets/review4.jpg',
    review:
      "Hiring Ankush is a decision you won't regret. His projects showcase not only technical proficiency but also a strong sense of design and user experience. He is reliable, detail-oriented, and a joy to work with. ",
  },
];

export const myProjects = [
  {
    title: 'Etato Foods — Food Commerce & Subscription Platform',
    desc: 'A production e-commerce platform for ordering fresh, protein-rich salad bowls online in Pune, built from planning to deployment.',
    subdesc:
      'Developed a complete admin dashboard for subscriptions, plans, menu items, payments, and blog content, integrated Razorpay for online payments, and built RESTful APIs with Express.js, PostgreSQL, and Prisma. The platform was deployed on a private VPS.',
    href: 'https://etatofoods.in',
    texture: '/textures/project/etato.mp4',
    logo: '/assets/et.png',
    logoStyle: {
      backgroundColor: '#fff7ed',
      border: '0.2px solid #fdba74',
      boxShadow: '0px 0px 60px 0px rgba(249, 115, 22, 0.25)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Express.js',
        path: '/assets/express_logo.png',
      },
      {
        id: 2,
        name: 'PostgreSQL',
        path: '/assets/nodejs_logo.png',
      },
      {
        id: 3,
        name: 'Prisma',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Razorpay',
        path: '/assets/razorpay.png',
      },
    ],
  },
  {
    title: 'Airbnb - Vacation Rentals Platform',
    desc: 'A comprehensive web application resembling Airbnb, designed to allow users to list, search, and book accommodations. This full-stack platform features functionalities for user authentication, CRUD operations for listings, and a review system, providing a robust and interactive experience.',
    subdesc:
      'Leveraging Express.js, Node.js, EJS, and MongoDB, the application integrates Passport.js for secure authentication, and uses RESTful APIs to enhance user interactions.',
    href: 'https://airbnb-8297.onrender.com/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#FF5A60',
      background:
        'linear-gradient(0deg, #fff, #fff), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/nodejs_logo.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/express_logo.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb_logo.png',
      },
      {
        id: 4,
        name: 'Bootstrap',
        path: '/assets/bootstrap_logo.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://live-docs-chi-seven.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Prompts Hub - AI Prompt Sharing Platform',
    desc: 'This project is an interactive platform designed to explore and share AI prompts. It provides users with a visually appealing interface inspired by modern design trends like glassmorphism and enables seamless interaction with AI-generated content.',
    subdesc:
      'Built with Next.js 14 and integrated with NextAuth for Google authentication.Key features include editing and deleting prompts, profile management, content search by tags, and full responsiveness across devices.',
    href: 'https://prompts-hub.onrender.com/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.svg',
    logoStyle: {
      backgroundColor: '#fff',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Saas Landing Page',
    desc: 'This project is a sleek, modern landing page created using cutting-edge technologies to deliver a responsive and visually captivating experience. It combines the latest in design trends and performance optimization.',
    subdesc:
      'Built with Next.js 14 for server-side rendering, Tailwind CSS for utility-first styling, and Framer Motion for smooth animations, this landing page ensures seamless functionality across all devices, including mobile and tablets.',
    href: 'https://saas-landing-page-three-virid.vercel.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/logosaas.png',
    logoStyle: {
      backgroundColor: '#000',
      border: '0.1px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Doze Studio - Animated Landing Page',
    desc: 'This project is a sleek, modern landing page created using GSAP and scroll trigger providing visually captivating experience. It combines the latest in design trends and performance optimization.',
    subdesc:
      'This project is a dynamic, interactive website built with HTML canvas (animating images based on scroll) also used lenis for smooth scrolling and GSAP for engaging animations. Also used Tailwind for styling.    Note ~ It might take a few minutes to load.',
    href: 'https://doze-studio-tau.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project5.png',
    logoStyle: {
      backgroundColor: '#fff',
      border: '0.1px solid #000',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [

      {
        id: 1,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 2,
        name: 'GSAP',
        path: '/assets/gsap_logo.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: '3JS Model - Animated 3D Model Showcase',
    desc: 'This project is a sleek, modern 3D website created using Three.js, showcasing a 3D model with animations, providing a visually captivating experience. It combines the latest in design trends and performance optimization.',
    subdesc:
      'This project is a dynamic, interactive website built with Three.js (displaying a 3D model with animations) also used Lenis for smooth scrolling and GSAP for engaging animations. Also used Tailwind for styling. Note ~ It might take a few minutes to load.',
    href: 'https://animatedmodelshowcase.vercel.app/',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project5.png',
    logoStyle: {
      backgroundColor: '#fff',
      border: '0.1px solid #000',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [

      {
        id: 1,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 2,
        name: 'GSAP',
        path: '/assets/gsap_logo.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [10, -5, 0] : isTablet ? [5, -5, 0] : [18, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [10, 4, 0] : isTablet ? [5, 4, 0] : [18, 3, 0],
    ringPosition: isSmall ? [-5, 8, 0] : isMobile ? [10, -40, -10] : isTablet ? [-19, 29, 0] : [-15, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-20, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'TechStalwarts Software Development LLP, Vikhroli',
    pos: 'Software Engineer',
    duration: 'Mar 2025 - Present',
    title: 'Worked on a confidential banking platform with geolocation features, geo tagging, notification systems, and file upload validations. Integrated RabbitMQ, S3, SQS, SNS, and Google Maps API to support reliable workflows and notifications, and contributed to Probe 42-related modules and backend reliability improvements.',
    icon: '/assets/ts2.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Yogineers Technologies Pvt. Ltd., Thane',
    pos: 'Software Engineer',
    duration: 'Jul 2025 - Feb 2026',
    title: 'Worked from requirement gathering to deployment on a full-scale hybrid ophthalmology platform using React, Node.js/Express, and PostgreSQL. Implemented patient registration, appointment booking, priority-based queueing, OPD and doctor workflows, OT and stock management, staff attendance, reminders, and multi-role dashboards including TPA workflows for surgery, claims, and payments.',
    icon: '/assets/yog2.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Yogineers Technologies Pvt. Ltd., Thane',
    pos: 'Full Stack Developer Intern',
    duration: 'Apr 2025 - Jun 2025',
    title: 'Built RESTful APIs using Node.js/Express and developed full-stack React applications with PostgreSQL, Prisma, and Tailwind CSS for company portfolio and photo editing platforms. Implemented admin dashboards for blog management, project uploads, order tracking, and engagement analytics, deployed applications on AWS EC2 with Nginx and PM2, and refactored existing codebases to improve readability, error handling, and maintainability.',
    icon: '/assets/yog2.png',
    animation: 'salute',
  },
];
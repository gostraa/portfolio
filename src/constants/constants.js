import minimalImg from '../images/projects/minimal.jpg';
import cinemaImg from '../images/projects/cinema.jpg';
import moneyGuardImg from '../images/projects/moneyguard.jpg';
import carRentImg from '../images/projects/carrent.jpg';
import englishImg from '../images/projects/english.jpg';
import waterImg from '../images/projects/water_tracker.jpg';
import manicuristImg from '../images/projects/manicurist.jpg';
import sportingImg from '../images/projects/sporting.jpg';
import { ReactComponent as Telegram } from '../svg/telegram-svgrepo-com.svg';
import { ReactComponent as GitHub } from '../svg/logo-github.svg';
import { ReactComponent as Linkedin } from '../svg/logo-linkedin.svg';
import { ReactComponent as Instagram } from '../svg/logo-instagram.svg';

//footer

const defaultAnimation = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: () => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  }),
};
export const animationSettingsFooter = {
  variants: defaultAnimation,
  whileInView: 'animate',
  initial: 'initial',
  viewport: { once: false },
};

export const socialLinks = [
  {
    id: 'telegram',
    href: 'https://t.me/halfway_sunny',
    Icon: Telegram,
  },
  {
    id: 'github',
    href: 'https://github.com/gostraa',
    Icon: GitHub,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/mariia-cherkashynaa/',
    Icon: Linkedin,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/_gostraa_/?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr',
    Icon: Instagram,
  },
];

//skils list

const listVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: 'spring',
    },
  }),
};

export const animationSettingsSkills = {
  variants: listVariants,
  whileInView: 'animate',
  initial: 'initial',
  viewport: { once: true },
};

//project modal

export const ModalVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
};

export const animationSettingsModal = {
  variants: ModalVariants,
  animate: 'visible',
  initial: 'hidden',
  transition: {
    bounce: 0.9,
    duration: 0.5,
  },
  style: { overflow: 'hidden' },
};

// navigation menu

export const NavigateVariants = {
  visible: (width = 1200) => ({
    clipPath: `circle(${width}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
    },
  }),
  hidden: {
    clipPath: 'circle(1px at calc(100% - 45px) 30px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 50,
    },
  },
};

export const animationSettingsNavigate = {
  variants: NavigateVariants,
  animate: 'visible',
  initial: 'hidden',
  transition: {
    bounce: 0.9,
    duration: 0.5,
  },
  style: { overflow: 'hidden' },
  exit: 'hidden',
};

//settings for project list
export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

// styles for header links

export const linkStyle = {
  cursor: 'pointer',
};

export const iconStyles = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
};

export const linkSettings = {
  offset: -150,
  smooth: true,
  duration: 500,
  style: linkStyle,
};

// skills array

export const skillsArr = [
  'HTML5',
  'CSS',
  'Responsive/Adaptive Design',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux Toolkit',
  'Next.js',
  'Angular',
  'NgRx',
  'RxJs',
  'Node.js',
  'Express.js',
  'Mongoose',
  'REST API',
  'ChakraUI',
  'Framer Motion',
  'Angular Material',
  'Material UI',
  'Bootstrap',
  'Tailwind CSS',
  'Plasmo',
];
export const projectImages = {
  '/images/projects/minimal.jpg': minimalImg,
  '/images/projects/cinema.jpg': cinemaImg,
  '/images/projects/moneyguard.jpg': moneyGuardImg,
  '/images/projects/carrent.jpg': carRentImg,
  '/images/projects/english.jpg': englishImg,
  '/images/projects/water_tracker.jpg': waterImg,
  '/images/projects/manicurist.jpg': manicuristImg,
  '/images/projects/sporting.jpg': sportingImg,
};

// header navigation links
export const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Work Experience' },
  { to: 'socialMedia', label: 'Contacts' },
];

// work experience projects data
export const projects = [
  {
    id: 1,
    title: 'Upwork Job Search Extension',
    description:
      'Developed a Chrome extension built with Plasmo that automates the process of finding relevant job opportunities on Upwork based on specified criteria. The extension intelligently filters listings, analyzes job content, and automatically forwards qualified opportunities to a Slack channel for team review.',
    responsibilities: [
      'Designed and implemented the complete extension architecture',
      'Integrated OpenAI SDK for intelligent job content analysis',
      'Built automated job discovery and filtering system',
      'Configured Slack API integration for notification delivery',
      'Implemented web scraping with Puppeteer for dynamic content handling',
    ],
    technologies: [
      'Plasmo',
      'React',
      'TypeScript',
      'Node.js',
      'Puppeteer',
      'Slack API',
      'OpenAI SDK',
    ],
  },
  {
    id: 2,
    title: 'AI-Powered Clinical Workflow Automation Extension',
    description:
      'Worked on a browser extension that helps medical facilities optimize their work with medical forms and assessments. The product uses artificial intelligence to automate data entry, provide recommendations, and simplify complex documentation processes.',
    responsibilities: [
      'Maintained existing functionality and performed regular bug fixes',
      'Implemented UI for new features based on product requirements',
      'Built frontend components using React and Plasmo Framework for Chrome Extensions',
      'Integrated new screens and elements into the current application workflow',
      'Collaborated with the team to improve UX and extension stability',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Plasmo',
      'Chrome Extensions API',
      'REST API',
    ],
  },
  {
    id: 3,
    title:
      'Property Rental Platform (Airbnb/Booking analog) — Full-Cycle Development',
    description:
      'Worked in the frontend team on creating a web platform for property rental from scratch. The service allows users to publish and edit listings, book accommodations, view available properties, and use a filter system to find optimal options.',
    responsibilities: [
      'Developed platform interface using Next.js, TypeScript, and Chakra UI',
      'Fixed bugs and critical errors',
      'Built a system of reusable components and documentation in Storybook',
      'Developed property type selection, photo uploads, and detailed information forms',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Chakra UI',
      'Framer Motion',
      'Storybook',
      'Zod',
      'Google Maps API',
    ],
  },
  {
    id: 4,
    title: 'AI Platform for Automatic Technical Documentation Generation',
    description:
      'Worked on a web application that uses artificial intelligence to help teams quickly form project structure. Users input their idea description in a chat, and the system generates user stories, requirements, and other specification elements, presenting them as interactive cards in multiple columns.',
    responsibilities: [
      'Developed UI and interactive components using Next.js, TypeScript, and Chakra UI',
      'Implemented card status change functionality',
      'Built features to delete, edit, and manually add custom tasks',
      'Created content rewriting functionality using built-in AI features',
      'Fixed bugs and critical errors',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Chakra UI',
      'Vercel AI SDK',
    ],
  },
  {
    id: 5,
    title: 'Corporate Communication Website with AI Consultant',
    description:
      'Worked on developing a corporate website that serves as a modern showcase for company products. In addition to informational pages, the platform includes an interactive AI chat that allows users to receive consultations about products in text or voice format.',
    responsibilities: [
      'Created and styled individual UI components for chat system and information blocks',
      'Implemented attachment functionality in chat',
      'Developed UI for transcription and voice input processing',
      'Worked on responsiveness, accessibility, and smooth interactions',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Chakra UI',
      'Framer Motion',
      'Vercel AI SDK',
    ],
  },
  {
    id: 6,
    title:
      'Anonymous Chat for Emotional Support (Multi-language B2C and B2B Platform)',
    description:
      'Worked on a large-scale platform providing anonymous emotional support to users in English, French, and Spanish-speaking markets. The service includes separate modules for regular users and moderators/administrators, and supports corporate subscriptions for companies.',
    responsibilities: [
      'Worked with existing large-scale production Angular codebase',
      'Resolved bugs and stabilized critical interface components',
      'Developed new UI elements and implemented new features in user and admin modules',
      'Adapted frontend to updated backend endpoints and logic',
    ],
    technologies: ['TypeScript', 'Angular', 'RxJS', 'NgRx'],
  },
  {
    id: 7,
    title: 'Corporate Company Website (Internal Project)',
    description:
      'Working in a frontend development team on creating a company corporate website. The project includes a modern responsive interface, form integration, interaction with internal services, and static content generation without a backend.',
    responsibilities: [
      'Developed interface based on Next.js, TypeScript, and TailwindCSS',
      'Created and managed structured data in markup format as backend replacement',
      'Worked on UI components and page integration',
      'Participated in team planning and frontend architecture development',
    ],
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Nodemailer'],
  },
  {
    id: 8,
    title: 'Language Learning Application',
    description:
      'Working on creating an educational application for learning foreign languages. The app helps users expand vocabulary, practice pronunciation, and review material using adaptive mechanisms.',
    responsibilities: [
      'Developed frontend from scratch using Next.js, TypeScript, and Chakra UI',
      'Designed and implemented database in MongoDB (CRUD operations)',
      'Integrated AI functionality through Vercel AI SDK',
      'Built flashcard system with three languages and transcription',
      'Implemented card addition, editing, and deletion features',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Chakra UI',
      'MongoDB',
      'Vercel AI SDK',
    ],
  },
  {
    id: 9,
    title: 'Jira AI Extension (Automatic Jira Ticket Generation)',
    description:
      'Chrome extension that automates Jira ticket creation using AI. Generates titles, descriptions, and fills out the task creation form directly on the Jira page.',
    responsibilities: [
      'Implemented complete UI and extension logic for a Chrome extension',
      'Integrated AI-based text generation using OpenAI GPT-4, including prompt customization',
      'Developed automation features on Jira pages (auto-filling fields, markdown handling)',
      'Implemented persistent and secure settings storage using Redux Persist',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Plasmo',
      'Chakra UI',
      'Redux',
      'Redux Persist',
      'React Hook Form',
      'Framer Motion',
      'OpenAI API',
    ],
  },
];

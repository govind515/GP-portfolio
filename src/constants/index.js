// Importing assets for navigation icons
import {
  backend,
  creator,
  web,
  Almabetter,
  Educator,
  moviepeek,
  diceGame,
  resumebuilder,
} from "../assets";

// Array of navigation links
export const navLinks = [
  {
    id: "about",
    title: "About👨🏻‍💻",
  },
  {
    id: "work",
    title: "Work✍🏻",
  },
  {
    id: "contact",
    title: "Contact📧",
  },
];

// Array of services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

// Array of experiences
const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Almabetter",
    icon: Almabetter,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - may-2024",
    points: [
      "Created, Deployed & Delivered Full Stack Web App Project from Scratch using recent technologies. Make thier web dev material error free.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Taken the doubt class of Merge Sort & Redux Toolkit.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Skilla : [HTMl5, CSS, JavaScript, ReactJS, Nodejs ].",
    ],
  },
  {
    title: "Educator",
    company_name: "Govind Parihar",
    icon: Educator,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "As a hobby i am helping community by sharing my experience via different social media platform like Youtube, Website, LinkedIn & more.",
      "skills: [DSA,Explainer,Listener].",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

// Array of projects
const projects = [
  {
    name: "Resume Builder",
    description:
      "Build your resume by choosing from predefined template & export it as pdf. This is application is fully free, easy to use & best suitable for freshers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "React Hook From",
        color: "blue-text-gradient",
      },
    ],
    image: resumebuilder,
    source_code_link: "https://github.com/",
  },
  {
    name: "DiceGame",
    description:
      "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: diceGame,
    source_code_link: "https://github.com/",
  },
  {
    name: "MoviePeek",
    description:
      "At the heart of Popcorn Peek is the drive to provide users with a comprehensive and engaging platform to explore entertainment content.",
    tags: [
      {
        name: "JavaScritp",
        color: "blue-text-gradient",
      },
      {
        name: "DSA",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.Js",
        color: "green-text-gradient",
      },
      {
        name: "Node.Js",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap & React Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: moviepeek,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects }; // Exporting services, experiences, and projects arrays

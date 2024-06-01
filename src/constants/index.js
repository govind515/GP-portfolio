import {
  backend,
  creator,
  web,
  meta,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

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

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Almabetter",
    icon: meta,
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
    icon: meta,
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
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
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
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "MoviePeek",
    description:
      "At the heart of Popcorn Peek is the drive to provide users with a comprehensive and engaging platform to explore entertainment content.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences,  projects };

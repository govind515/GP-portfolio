// Importing the HoverEffect component from the Ball module in the canvas folder.
import { HoverEffect } from "./canvas/Ball";

// Importing various icons from the react-icons/si library.
import {
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

// Defining the CardHoverEffectDemo functional component.
export function CardHoverEffectDemo() {
  return (
    // Container for the hover effect cards, centered and with padding.
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />{" "}
      {/* Rendering the HoverEffect component with the projects array as a prop */}
    </div>
  );
}

// Exporting an array of project objects, each containing a title and an icon.
export const projects = [
  {
    title: "HTML5",
    icon: SiHtml5, // Icon representing HTML5.
  },
  {
    title: "CSS",
    icon: SiCss3, // Icon representing CSS.
  },
  {
    title: "JavaScript",
    icon: SiJavascript, // Icon representing JavaScript.
  },
  {
    title: "React",
    icon: SiReact, // Icon representing React.
  },
  {
    title: "Redux",
    icon: SiRedux, // Icon representing Redux.
  },
  {
    title: "Tailwindcss",
    icon: SiTailwindcss, // Icon representing Tailwind CSS.
  },
  {
    title: "NextJs",
    icon: SiNextdotjs, // Icon representing Next.js.
  },
  {
    title: "MongoDB",
    icon: SiMongodb, // Icon representing MongoDB.
  },
  {
    title: "Git",
    icon: SiGit, // Icon representing Git.
  },
];

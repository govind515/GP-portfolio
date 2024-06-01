import {HoverEffect}  from "./canvas/Ball";

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

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "HTML5",
    icon: SiHtml5,
  },
  {
    title: "CSS",
    icon: SiCss3,
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
  },
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "Redux",
    icon: SiRedux,
  },
  {
    title: "Tailwindcss",
    icon: SiTailwindcss,
  },
  {
    title: "NextJs",
    icon: SiNextdotjs,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Git",
    icon: SiGit,
  },
];

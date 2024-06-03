import React from "react"; // Importing React.
import Tilt from "react-parallax-tilt"; // Importing Tilt component for parallax tilt effect.
import { motion } from "framer-motion"; // Importing motion for animations.

import { styles } from "../styles"; // Importing custom styles.
import { github } from "../assets"; // Importing GitHub icon.
import { SectionWrapper } from "../hoc"; // Importing HOC for section wrapping.
import { projects } from "../constants"; // Importing projects data.
import { fadeIn, textVariant } from "../utils/motion"; // Importing animation variants.

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // Applying fade-in animation to the project card.
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45, // Maximum tilt angle.
          scale: 1, // Scale factor on hover.
          speed: 450, // Speed of the tilt effect.
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg shadow-slate-500"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl shadow-lg shadow-cyan-500"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Open the source code link in a new tab.
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>{" "}
          {/* Project name */}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>{" "}
          {/* Project description */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag.
              className={`text-[14px] ${tag.color}`} // Applying tag color.
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {" "}
        {/* Text animation variant */}
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} // Fade-in animation for the description.
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} /> // Rendering ProjectCard for each project.
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, ""); // Exporting the Works component wrapped with SectionWrapper HOC.

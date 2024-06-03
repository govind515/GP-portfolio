import React from "react"; // Importing React for component creation.
import Tilt from "react-parallax-tilt"; // Importing Tilt for the parallax tilt effect.
import { motion } from "framer-motion"; // Importing motion for animations.

import { styles } from "../styles"; // Importing custom styles.
import { services } from "../constants"; // Importing a list of services from constants.
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping.
import { fadeIn, textVariant } from "../utils/motion"; // Importing custom animation variants.

const ServiceCard = ({ index, title, icon }) => (
  // ServiceCard component to render individual service cards.
  <Tilt className="xs:w-[250px] w-full">
    {/* Applying Tilt effect with custom width */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // Applying fadeIn animation variant with staggered delay based on index.
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      // Applying gradient background, padding, rounded corners, and shadow.
    >
      <div
        options={{
          max: 45, // Maximum tilt angle.
          scale: 1, // No scale effect.
          speed: 450, // Speed of the tilt effect.
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        // Applying background color, rounded corners, padding, minimum height, and flexbox styling.
      >
        <img
          src={icon} // Setting image source to the icon prop.
          alt="web-development" // Alt text for the image.
          className="w-16 h-16 object-contain" // Applying width, height, and object-fit styling.
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
          {/* Displaying the title prop in a styled heading */}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // About component to render the about section.
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Applying textVariant animation to the introductory text */}
        <p className={styles.sectionSubText}>Introduction</p>
        {/* Applying custom styling for the section subtitle */}
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        {/* Applying custom styling for the section heading */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        // Applying fadeIn animation to the paragraph with a slight delay.
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        // Applying margin, text color, font size, max width, and line height styling.
      >
        I am an enthusiastic problem solver, consistence learner. Eager to
        embrace new challenges. Fueled by a passion in technology. I am
        dedicated to delivering top-notch results. With a positive mindset and a
        commitment to growth, I am ready to create a meaningful impact and
        attain significant achievements.
        {/* Displaying a descriptive paragraph about the individual */}
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {/* Creating a container for the service cards with margin, flexbox, and gap styling */}
        {services.map((service, index) => (
          // Mapping through the services array to render a ServiceCard for each service.
          <ServiceCard key={service.title} index={index} {...service} />
          // Passing the service details and index as props to ServiceCard.
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
// Wrapping the About component with SectionWrapper and exporting it.

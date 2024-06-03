import { motion } from "framer-motion"; // Importing motion for animations from framer-motion.
import { styles } from "../styles"; // Importing custom styles.
import { useRef, useEffect } from "react"; // Importing useRef and useEffect hooks from React.
import Typed from "typed.js"; // Importing Typed.js for typing animations.

const Hero = () => {
  const typedRef = useRef(null); // Creating a reference to attach Typed.js instance.

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: [
        "Full Stack Web Developer 👨🏻‍💻. ",
        "Consistence Learner 🎯.",
        "Software Developer 💻⚙️. ",
        "Problem Solver 🕵🏻‍♂️.",
        "Programmar 👈. ",
      ],
      typeSpeed: 50, // Speed of typing.
      backSpeed: 50, // Speed of backspacing.
      loop: true, // Loop the typing animation.
    };

    const typed = new Typed(typedRef.current, options); // Initializing Typed.js with the options.

    return () => {
      typed.destroy(); // Cleanup function to destroy the Typed.js instance when the component unmounts.
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          {/* A small circle element with a specific background color. */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          {/* A vertical line element with a gradient background. */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Govind</span>
          </h1>
          {/* Main heading with custom styles and highlighted text. */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            And I'm <h1 ref={typedRef} className="text-[#915EFF]"></h1>
            {/* Subheading with a reference for the Typed.js instance. */}
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* A div container for the scroll-down indicator. */}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* The scroll-down indicator with border and padding. */}
            <motion.div
              animate={{
                y: [0, 24, 0], // Animation moving up and down.
              }}
              transition={{
                duration: 1.5, // Duration of one animation cycle.
                repeat: Infinity, // Repeat the animation infinitely.
                repeatType: "loop", // Type of repetition (loop).
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            {/* A small animated dot inside the scroll-down indicator. */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

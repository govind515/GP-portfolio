import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher Order Component (HOC) to wrap a component with animation and styling
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Adding a span with id for smooth scrolling */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Rendering the wrapped component */}
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

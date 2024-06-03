import { cn } from "../../utils/Skill"; // Importing a utility function 'cn' from a utils module.
import { AnimatePresence, motion } from "framer-motion"; // Importing animation components from framer-motion.
import { useState } from "react"; // Importing useState hook from React.
import { fadeIn } from "../../utils/motion"; // Importing a custom motion variant for animations.
import Tilt from "react-parallax-tilt"; // Importing a third-party component for tilt effect.

export const HoverEffect = ({ items, index, className }) => {
  // HoverEffect component that takes items, index, and className as props.

  const [hoveredIndex, setHoveredIndex] = useState(null); // State to keep track of the currently hovered item index.

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Wrapping the Tilt component with motion.div for entrance animation */}
      <Tilt
        options={{
          max: 45, // Maximum tilt angle.
          scale: 1, // Scale effect.
          speed: 450, // Speed of the tilt effect.
        }}
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-10",
          className
        )}
      >
        {/* Adding responsive grid classes and additional classes through cn utility function */}
        {items.map((item, idx) => {
          // Mapping through the items to create grid elements.
          const Icon = item.icon; // Extracting the icon component from each item.
          return (
            <div
              key={idx} // Unique key for each item.
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)} // Setting hovered index on mouse enter.
              onMouseLeave={() => setHoveredIndex(null)} // Resetting hovered index on mouse leave.
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  // Conditionally rendering the hover effect background.
                  <motion.span
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    className="absolute inset-0 h-full w-full slate shadow-lg shadow-slate-500 bg-neutral-200 dark:bg-fuchsia-400/[0.6] block rounded-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }} // Initial opacity for animation.
                    animate={{
                      opacity: 1, // Animate to full opacity.
                      transition: { duration: 0.15 }, // Animation duration.
                    }}
                    exit={{
                      opacity: 0, // Exit animation to fade out.
                      transition: { duration: 0.15, delay: 0.2 }, // Animation duration and delay.
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-md w-full p-2 bg-gray-900 overflow-hidden group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500 cursor-pointer">
                {/* Container for the icon and title, with hover effects and transition */}
                <div className="py-10 z-50 relative space-y-5">
                  {/* Inner container for spacing */}
                  <Icon className="w-6 h-6 mx-auto shadow-md shadow-orange-500" />
                  {/* Icon with styling */}
                  <p className="text-1xl font-bold text-center text-gray-300 shadow-lg">
                    {item.title}
                    {/* Title with styling */}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Tilt>
    </motion.div>
  );
};

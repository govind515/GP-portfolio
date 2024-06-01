import { cn } from "../../utils/Skill";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../utils/motion";
import Tilt from "react-parallax-tilt";

export const HoverEffect = ({ items, index, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-10",
          className
        )}
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    className="absolute inset-0 h-full w-full slate shadow-lg shadow-slate-500 bg-neutral-200 dark:bg-fuchsia-400/[0.6] block rounded-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-md w-full p-2 bg-gray-900 overflow-hidden group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500 cursor-pointer">
                <div className="py-10 z-50 relative space-y-5">
                  <Icon className="w-6 h-6 mx-auto shadow-md shadow-orange-500" />
                  <p className="text-1xl font-bold text-center text-gray-300 shadow-lg">
                    {item.title}
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

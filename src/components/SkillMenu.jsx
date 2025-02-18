import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Data } from "../Data";

export default function SkillsMenu() {
  return (
    <div className="">
      <nav className="flex flex-col h-full">
        {Data.skills.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

const MarqueeContent = ({ details }) => (
  <div className="flex items-center gap-8 mx-8">
    <div className="flex items-center gap-4">
      {details.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 rounded-full text-sm font-medium text-white whitespace-nowrap bg-midText"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

function MenuItem({ link, text, details }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState("top");

  const handleMouseEnter = (ev) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const mouseY = ev.clientY - rect.top;
    setMousePosition(mouseY < rect.height / 2 ? "top" : "bottom");
    setIsHovered(true);
  };

  const handleMouseLeave = (ev) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const mouseY = ev.clientY - rect.top;
    setMousePosition(mouseY < rect.height / 2 ? "top" : "bottom");
    setIsHovered(false);
  };

  const slideVariants = {
    enter: (position) => ({
      y: position === "top" ? "-100%" : "100%",
      transition: { duration: 0, ease: "easeInOut" },
    }),
    center: {
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (position) => ({
      y: position === "top" ? "-100%" : "100%",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  // Create repeated content for the marquee
  const repeatedContent = [...Array(4)].map((_, i) => (
    <MarqueeContent key={i} text={text} details={details} />
  ));

  return (
    <div
      className="flex-1 relative overflow-hidden text-center border-b border-gray-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-darktext text-base hover:text-gray-900 focus:text-white focus-visible:text-gray-900 transition-colors duration-300 py-2"
        href={link}
      >
        {text}
      </a>

      <AnimatePresence custom={mousePosition}>
        {isHovered && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-paper"
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            custom={mousePosition}
          >
            <div className="h-full overflow-hidden">
              <motion.div
                className="flex items-center h-full"
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of content */}
                <div className="flex items-center h-full">
                  {repeatedContent}
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="flex items-center h-full">
                  {repeatedContent}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

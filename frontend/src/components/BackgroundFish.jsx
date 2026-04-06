import React from "react";
import { motion } from "framer-motion";

export const BackgroundFish = ({ isDark }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden px-10">
      <motion.img
        src="/logo.png"
        alt="background-krylatka"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? [0.03, 0.05, 0.03] : [0.04, 0.07, 0.04],
          y: [0, -40, 0],
          rotate: [-5, 5, -5],
          scale: [1, 1.05, 1],
          filter: isDark
            ? [
                "drop-shadow(0 0 40px rgba(6,182,212,0.2)) blur(2px)",
                "drop-shadow(0 0 100px rgba(6,182,212,0.5)) blur(4px)",
                "drop-shadow(0 0 40px rgba(6,182,212,0.2)) blur(2px)",
              ]
            : [
                "invert(1) hue-rotate(180deg) drop-shadow(0 0 40px rgba(6,182,212,0.15)) blur(3px)",
                "invert(1) hue-rotate(180deg) drop-shadow(0 0 80px rgba(6,182,212,0.3)) blur(5px)",
                "invert(1) hue-rotate(180deg) drop-shadow(0 0 40px rgba(6,182,212,0.15)) blur(3px)",
              ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[90vw] max-w-[1200px] object-contain select-none"
      />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = ({ isDark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [{ x: e.clientX, y: e.clientY }, ...prev].slice(0, 8));
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {trail.map((point, i) => (
        <motion.img
          key={i}
          src="/logo.png"
          className="absolute w-6 h-6 object-contain"
          style={{
            left: point.x,
            top: point.y,
            x: "-50%",
            y: "-50%",
            opacity: 1 - i * 0.1,
            filter: `drop-shadow(0 0 ${10 - i}px rgba(6, 182, 212, 0.8)) ${
              !isDark ? "invert(1) hue-rotate(180deg)" : ""
            }`,
          }}
        />
      ))}
    </div>
  );
};

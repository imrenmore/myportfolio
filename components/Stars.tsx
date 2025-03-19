"use client";
import { motion } from "framer-motion";
import React, { useMemo, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Stars = () => {
  const { darkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    if (!darkMode) return [];
    const totalStars = 65; // Number of stars
    return Array.from({ length: totalStars }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.5 + 0.5,
      blur: Math.random() > 0.6 ? "1px" : "0px",
      speed: Math.random() * 1.5 + 0.5, //  sparkle effect
    }));
  }, [darkMode]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full shadow-md"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            filter: `blur(${star.blur})`,
          }}
          animate={{
            opacity: [
              star.opacity,
              Math.random() * 0.3 + 0.7, // Brightness
              star.opacity,
              Math.random() * 0.1 + 0.6, // flicker motion
              star.opacity,
            ],
            scale: [1, 1.5, 1], 
            boxShadow: [
              "0 0 2px rgba(255, 255, 255, 0.5)",
              "0 0 4px rgba(255, 255, 255, 0.8)",
              "0 0 2px rgba(255, 255, 255, 0.5)",
            ],
          }}
          transition={{
            duration: star.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(Stars);

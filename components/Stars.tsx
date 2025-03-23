"use client";
import { motion } from "framer-motion";
import React, { useMemo, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

// Type for single star
type Star = {
  top: string;
  left: string;
  size: string;
  opacity: number;
  blur: string;
  speed: number;
};

// Total number of stars
const TOTAL_STARS = 40; 

// Animation 
const starAnimation = {
  opacity: [0.5, 0.8, 0.5, 0.6, 0.5],
  scale: [1, 1.5, 1],
  boxShadow: [
    "0 0 2px rgba(255, 255, 255, 0.5)",
    "0 0 4px rgba(255, 255, 255, 0.8)",
    "0 0 2px rgba(255, 255, 255, 0.5)",
  ],
};

// Transition config
const starTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

const Stars: React.FC = () => {
  const { darkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stars in dark mode
  const stars = useMemo(() => {
    if (!mounted || !darkMode) return [] as Star[];

    const generateStar = (): Star => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.5 + 0.5,
      blur: Math.random() > 0.6 ? "1px" : "0px",
      speed: Math.random() * 0.5 + 0.5,
    });

    return Array.from({ length: TOTAL_STARS }, generateStar);
  }, [mounted, darkMode]);

  // Don't render on the server or if not mounted
  if (!mounted || typeof window === "undefined") return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="star absolute bg-white rounded-full shadow-md"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            filter: `blur(${star.blur})`,
          }}
          animate={starAnimation}
          transition={{ ...starTransition, duration: star.speed }}
        />
      ))}
    </div>
  );
};

export default React.memo(Stars);
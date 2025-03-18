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
    const totalStars = 80;
    return Array.from({ length: totalStars }).map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.5 + 0.5,
      blur: Math.random() > 0.7 ? "1px" : "0px",
    }));
  }, [darkMode]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            filter: `blur(${star.blur})`,
          }}
          animate={{
            y: [0, -1, 0],
            opacity: [
              star.opacity,
              star.opacity - 0.3,
              star.opacity,
              star.opacity - 0.1,
              star.opacity,
            ],
            scale: [1, 1.2, 1],
            backgroundColor: ["#ffffff", "#aabbff", "#ffffff"],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(Stars);

"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

// Type duck
type Duck = {
  direction: "ltr" | "rtl";
  size: number;
  speed: number;
  top: number;
  rotateBase: number;
};

const Ducks: React.FC = () => {
  const numDucks = 10;

  // Duck properties
  const ducks = useMemo<Duck[]>(() => {
    return Array.from({ length: numDucks }).map(() => ({
      direction: Math.random() < 0.5 ? "ltr" : "rtl",
      size: 4 + Math.random() * 4, // Random size 
      speed: 12 + Math.random() * 8, // Random speed 
      top: 10 + Math.random() * 80, // Random vertical position 
      rotateBase: Math.random() * 360, // Random rotation
    }));
  }, [numDucks]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ducks.map((duck, i) => {
        const { direction, size, speed, top, rotateBase } = duck;
        const initialX = direction === "ltr" ? "-10vw" : "110vw";
        const finalX = direction === "ltr" ? "110vw" : "-10vw";

        return (
          <motion.img
            key={i}
            src="/duckie.svg"
            alt="Duck"
            className="absolute"
            style={{
              width: `${size}vw`,
              height: `${size}vw`,
              top: `${top}%`,
            }}
            initial={{ x: initialX }}
            animate={{
              x: finalX,
              y: [0, -8, 0, 8, 0], // Floating effect
              rotate: [rotateBase, rotateBase + 10, rotateBase - 10, rotateBase], // Rotation effect
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 3, // Staggered animation
            }}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Ducks);
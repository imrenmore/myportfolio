"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

const Ducks = () => {
  const numDucks = 15;

  const ducks = useMemo(() => {
    return Array.from({ length: numDucks }).map(() => {
      // ducks spawn from both left and right side randomly and diff sizes
      const direction: "ltr" | "rtl" = Math.random() < 0.5 ? "ltr" : "rtl";
      return {
        direction,
        size: 4 + Math.random() * 4, 
        speed: 12 + Math.random() * 8,
        top: 10 + Math.random() * 80,
        rotateBase: Math.random() * 360,
      };
    });
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
              y: [0, -8, 0, 8, 0],
              rotate: [rotateBase, rotateBase + 10, rotateBase - 10, rotateBase],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Ducks);

"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import React from "react";

// Languages 
type LanguageSkill = {
  name: string;
  years: number;
  progress: number;
  color: string;
};

const LanguagesCard: React.FC = () => {
  const { darkMode } = useTheme();

  // Skills data
  const languageSkills: LanguageSkill[] = [
    { name: "Java", years: 4, progress: 90, color: "bg-blue-300" },
    { name: "Python", years: 3, progress: 75, color: "bg-purple-300" },
    { name: "JavaScript", years: 2.5, progress: 60, color: "bg-yellow-200" },
  ];

  return (
    <motion.div
      className={`relative p-6 rounded-2xl shadow-xl max-w-sm w-full border backdrop-blur-lg transition-all duration-300
        ${
          darkMode
            ? "bg-gray-900/70 border-gray-700 text-white"
            : "bg-white/70 border border-gray-300 shadow-lg"
        }
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      {/* Floating Duck on div */}
      <motion.div
        className="absolute -top-8 right-6 w-14 h-14"
        animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/duckie.svg"
          alt="Duck Mascot"
          width={56}
          height={56}
          style={{ width: "auto", height: "auto" }} // ✅ Fix aspect ratio
        />
      </motion.div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Languages</h2>

      {/* Progress Bars */}
      <div className="space-y-3">
        {languageSkills.map((skill, index) => (
          <div key={index}>
            <p className="text-sm font-medium">
              {skill.name} - {skill.years} years
            </p>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full mt-1 relative overflow-hidden">
              <motion.div
                className={`${skill.color} h-3 rounded-full`}
                initial={{ width: "0%" }}
                animate={{ width: `${skill.progress}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(LanguagesCard);
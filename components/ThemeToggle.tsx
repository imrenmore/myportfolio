"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      className={`relative w-12 h-6 flex items-center rounded-full transition-all duration-300 ${
        darkMode ? "bg-gray-800" : "bg-gray-300"
      }`}
      onClick={toggleDarkMode}
    >
      <motion.div 
        className={`w-5 h-5 rounded-full shadow-md ${
          darkMode ? "bg-white" : "bg-yellow-400"
        }`}
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </button>
  );
};

export default ThemeToggle;

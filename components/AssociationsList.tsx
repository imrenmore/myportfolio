"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const AssociationsList = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
    className={`mt-12 text-left w-full max-w-4xl p-6 rounded-xl transition-all duration-300 shadow-lg border 
        ${darkMode ? "bg-gray-900/50 text-white border-gray-700"
        : "bg-white/80 border-gray-300 shadow-md backdrop-blur-md"}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}>
      <h2 className="text-2xl font-semibold mb-4">Associations</h2>
      <ul className="pl-5 space-y-2">
        <li>★ Women in STEM (Officer)</li>
        <li>★ Cybersecurity Club (Officer)</li>
        <li>★ MESA/MEP</li>
        <li>★ GE Honors Program</li>
        <li>★ Girls Who Code</li>
        <li>★ Society of Women Engineers</li>
        <li>★ Association for Computing Machinery (Secretary)</li>
      </ul>
    </motion.div>
  );
};

export default AssociationsList;

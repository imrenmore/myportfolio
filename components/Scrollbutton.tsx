"use client";
import { motion } from "framer-motion";

const ScrollButton = () => {
  return (
    <motion.a
      href="#about"
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}>
      ⬇
    </motion.a>
  );
};

export default ScrollButton;

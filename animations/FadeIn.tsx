"use client";
import { motion } from "framer-motion";
// fade in motion for front page
type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

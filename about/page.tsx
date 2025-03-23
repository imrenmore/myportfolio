"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import LanguagesCard from "@/components/LanguagesCard";
import AssociationsList from "@/components/AssociationsList";
import React, { Suspense } from "react";

const AboutMe: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 transition-all duration-300">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-8 w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-4xl w-full">
        {/* Left Column - Text */}
        <motion.div
          className="text-lg leading-relaxed md:text-xl max-w-lg space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            I am a computer science student from{" "}
            <strong className="font-semibold">
              California State University, Sacramento
            </strong>
            . I have a minor in{" "}
            <strong className="font-semibold">Applied Mathematics</strong> and
            an honors minor in{" "}
            <strong className="font-semibold">
              Global Engagement and Leadership
            </strong>
            .
          </p>
        </motion.div>

        {/* Right Column - Language Card */}
        <Suspense fallback={<div>Loading...</div>}>
          <LanguagesCard />
        </Suspense>
      </div>

      {/* Associations Section */}
      <motion.div
        className="w-full max-w-4xl mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <AssociationsList />
        </Suspense>
      </motion.div>
    </section>
  );
};

export default React.memo(AboutMe);
"use client";
import { useTheme } from "@/context/ThemeContext";
import Stars from "./Stars";
import Ducks from "./Ducks";
import React, { Suspense } from "react";

const BackgroundElements: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <Suspense fallback={null}>
      {darkMode ? <Stars /> : <Ducks />}
    </Suspense>
  );
};

export default React.memo(BackgroundElements);
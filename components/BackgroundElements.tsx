"use client";
import { useTheme } from "@/context/ThemeContext";
import Stars from "./Stars";
import Ducks from "./Ducks"; 
// switch theme from stars to ducks
const BackgroundElements = () => {
  const { darkMode } = useTheme();
  return <>{darkMode ? <Stars /> : <Ducks />}</>; // Stars in dark mode, Ducks in light mode
};

export default BackgroundElements;

"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Stars from "@/components/Stars";

// Define the type for the theme context
type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) {
      setDarkMode(storedTheme === "true");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={`relative min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-[#0a0d22] text-white" : "bg-blue-300 text-black"
        }`}
      >
        {/* Render Stars in Dark Mode */}
        {darkMode && <Stars />}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
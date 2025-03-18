"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) {
      setDarkMode(storedTheme === "true");
    }
  }, []);

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
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-[#0a0d22] text-white" : "bg-blue-300 text-black"
        }`}
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 50% 55%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 85%),
               linear-gradient(to right, rgba(255, 255, 255, 0.02), transparent, rgba(255, 255, 255, 0.02))`
            : `radial-gradient(circle at 50% 55%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.12) 50%, transparent 85%),
               linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent, rgba(255, 255, 255, 0.05))`,
        }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

"use client";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import SlideIn from "@/animations/SlideIn";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SlideIn direction="top">
      <nav className="flex justify-between items-center px-8 py-4 w-full">
        {/*  Name */}
        <h1 className="text-lg font-semibold">Imren More</h1>

        {/* Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle Menu">
          <HiMenu className="w-6 h-6" />
        </button>

        {/* Center (Desktop) */}
        <div className="hidden sm:flex gap-6">
          <a
            href="#about"
            className="hover:underline px-4 py-2 rounded-lg bg-opacity-30">
            About
          </a>
          <a
            href="#projects"
            className="hover:underline px-4 py-2 rounded-lg bg-opacity-30">
            Projects
          </a>
          <a
            href="#resume"
            className="hover:underline px-4 py-2 rounded-lg bg-opacity-30">
            Resume
          </a>
        </div>

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
            <div className="flex flex-col items-center gap-4 py-4">
              <a
                href="#about"
                className="hover:underline px-4 py-2 rounded-lg bg-opacity-30"
                onClick={toggleMenu}>
                About
              </a>
              <a
                href="#projects"
                className="hover:underline px-4 py-2 rounded-lg bg-opacity-30"
                onClick={toggleMenu}>
                Projects
              </a>
              <a
                href="#resume"
                className="hover:underline px-4 py-2 rounded-lg bg-opacity-30"
                onClick={toggleMenu}>
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </SlideIn>
  );
};

export default Navbar;

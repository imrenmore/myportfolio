"use client";
import { useTheme } from "@/context/ThemeContext"; 
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useTheme(); 

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-blue-300 text-gray-900"
      }`}
    >
      {/* Footer Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Socials*/}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:imrenmore@gmail.com"
            className={`flex items-center ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-900 hover:text-blue-700"
            } transition-colors`}
          >
            <FaEnvelope className="w-5 h-5 mr-2" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/imrenmore"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-900 hover:text-blue-700"
            } transition-colors`}
          >
            <FaLinkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/imrenmore"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-900 hover:text-blue-700"
            } transition-colors`}
          >
            <FaGithub className="w-5 h-5 mr-2" />
            Github
          </a>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            darkMode ? "border-gray-700" : "border-gray-400"
          } mx-auto w-24 mb-6`}
        ></div>

        {/* Copyright and Credits */}
        <div
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-700"
          } space-y-2 text-center`}
        >
          <p>
            Copyright © 2025{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-700"
              } font-medium`}
            >
              Imren More
            </span>
          </p>
          <p>
            Designed in{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-700"
              } font-medium`}
            >
              Figma
            </span>{" "}
            and coded in{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-700"
              } font-medium`}
            >
              Visual Studio Code
            </span>
            .
          </p>
          <p>
            Built with{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-700"
              } font-medium`}
            >
              Next.js
            </span>{" "}
            and{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-700"
              } font-medium`}
            >
              Tailwind CSS
            </span>
            , deployed with{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-700"
              } font-medium`}
            >
              Vercel
            </span>
            .
          </p>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className={`${
          darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-600 text-white"
        } py-8`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium">
            Out of all the sites on the internet, you landed here.{" "}
            <span className="font-semibold">Thanks for being here! :)</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
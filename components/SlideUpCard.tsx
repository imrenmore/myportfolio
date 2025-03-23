"use client";
import React, { useState } from "react";

type SlideUpCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  darkMode: boolean;
};

const SlideUpCard: React.FC<SlideUpCardProps> = ({
  title,
  description,
  imageUrl,
  darkMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`cursor-pointer w-full ${
        isExpanded ? "h-[400px]" : "h-64"
      } transition-all duration-500 ease-in-out`}
      onClick={() => setIsExpanded(!isExpanded)}>
      <div
        className={`w-full h-full ${
          darkMode 
            ? "bg-gray-900/95 border-gray-800" 
            : "bg-white border-gray-200"
        } backdrop-blur-lg rounded-3xl p-8 border shadow-lg ${
          darkMode ? "shadow-gray-900/50" : "shadow-gray-200/50"
        } flex flex-col items-center justify-center`}
        style={{
          backgroundImage: isExpanded
            ? `linear-gradient(${
                darkMode 
                  ? "rgba(17,24,39,0.7)" 
                  : "rgba(255,255,255,0.6)"
              }, ${
                darkMode 
                  ? "rgba(17,24,39,0.7)" 
                  : "rgba(255,255,255,0.6)"
              }), url(${imageUrl})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Front Content */}
        <div
          className={`${
            isExpanded ? "hidden" : "block"
          } text-center space-y-4 px-4`}>
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight ${
              darkMode 
                ? "text-gray-100 drop-shadow-md" 
                : "text-gray-900 drop-shadow-sm"
            }`}>
            {title}
          </h2>
          <p
            className={`text-lg md:text-xl font-medium ${
              darkMode 
                ? "text-gray-300 hover:text-gray-200" 
                : "text-gray-700 hover:text-gray-600"
            } transition-colors duration-300`}>
            Click for more information.
          </p>
        </div>

        {/* Expanded Content */}
        <div className={`${isExpanded ? "block" : "hidden"} w-full h-full p-8`}>
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <p
              className={`text-xl md:text-2xl leading-relaxed max-w-2xl ${
                darkMode 
                  ? "text-gray-200 bg-gray-800/40" 
                  : "text-gray-700 bg-white/30"
              } backdrop-blur-lg px-6 py-4 rounded-xl font-medium mb-6 transition-all duration-300`}>
              {description}
            </p>
            <div
              className={`w-16 h-1 rounded-full ${
                darkMode 
                  ? "bg-gray-400 hover:bg-gray-300" 
                  : "bg-gray-300 hover:bg-gray-400"
              } transition-all duration-300`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideUpCard;
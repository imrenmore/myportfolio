"use client";
import React from "react";
import FadeIn from "@/animations/FadeIn";
import { useTheme } from "@/context/ThemeContext";
import SlideUpCard from "@/components/SlideUpCard";

// Type for a project
type Project = {
  title: string;
  description: string;
  imageUrl: string;
};

// Props for the Projects component
type ProjectsProps = {
  projects?: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { darkMode } = useTheme(); // Get the current theme

  // Projects data
  const defaultProjects: Project[] = [
    {
      title: "RDK 01 - PCCI",
      description:
        "A next-generation network device for efficient network deployment, reducing wait times from months to days for reliable internet connection.",
      imageUrl: "images/rdk.jpg",
    },
    {
      title: "Five9: Dashboard",
      description:
        "Real-time analytics dashboard designed for performance of agent avaliability providing clarity.",
      imageUrl: "/images/five9.jpg",
    },
    {
      title: "CAMEL: Wynco Services",
      description:
        "Leveraging different business assests into a singular project management application.",
      imageUrl: "/images/camel.jpg",
    },
    {
      title: "Vendia Fuzz Testing",
      description:
        "Testing the client's SDK for bugs and vulnerabilities.",
      imageUrl: "images/vendia.jpg",
    }
  ];

  const projectList = projects || defaultProjects;

  return (
    <section
      id="projects"
      className={`relative flex flex-col items-center justify-center px-4 py-16 md:px-8 `}>
      <FadeIn delay={0.2}>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
          Projects{" "}
          <span className="text-base md:text-lg align-middle">(4)</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p
          className={`max-w-2xl text-center text-lg md:text-xl ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-12`}>
          Below are some of the projects I’ve worked on.
        </p>
      </FadeIn>
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {projectList.map((project, index) => (
          <FadeIn key={project.title} delay={0.6 + index * 0.2}>
            <SlideUpCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              darkMode={darkMode}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;

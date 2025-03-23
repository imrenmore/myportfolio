"use client";
import { useTheme } from "@/context/ThemeContext"; 

const Resume = () => {
  const { darkMode } = useTheme(); 
  const handleDownload = () => {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ImrenMore_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with Download Button */}
      <header className="text-center mb-12 relative">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Resume
        </h1>
        <button
          onClick={handleDownload}
          className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
        >
          Download PDF
        </button>
      </header>

      {/* Experience Section */}
      <section className="mb-12">
        <h2
          className={`text-2xl font-bold mb-6 border-b pb-2 ${
            darkMode ? "text-white border-gray-700" : "text-gray-900 border-gray-200"
          }`}
        >
          Professional Experience
        </h2>

        {/* Cybersecurity IT Intern */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-sm border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-blue-50 border-blue-100" 
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-xl font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Cybersecurity IT Intern
            </h3>
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Pacific Coast Companies, Inc.
            </span>
          </div>
          <ul className="space-y-2">
            {[
              "Identified advanced threats using industry-leading network detection tools, reducing incident response time by 30%",
              "Initiated implementation of new tools and facilitated technology stack transitions, reducing system vulnerabilities by 40%",
              "Researched and developed proof of concept for emergency response systems adopted across multiple subsidiaries",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-3 bg-blue-500 rounded-full"></span>
                <span
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Elevate to Innovate Program */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-sm border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-blue-50 border-blue-100" // Soft blue background for light mode
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-xl font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Elevate to Innovate Program Participant
            </h3>
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Accenture
            </span>
          </div>
          <ul className="space-y-2">
            {[
              "Implemented AI-driven solutions to real-world challenges, improving operational efficiency by 25%",
              "Gained hands-on experience with AWS and AI technologies, reducing infrastructure costs by 15%",
              "Enhanced technical proficiency in innovative solutions through collaboration with industry leaders",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-3 bg-blue-500 rounded-full"></span>
                <span
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-12">
        <h2
          className={`text-2xl font-bold mb-6 border-b pb-2 ${
            darkMode ? "text-white border-gray-700" : "text-gray-900 border-gray-200"
          }`}
        >
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Java",
            "Python",
            "JavaScript",
            "SQL",
            "C",
            "Assembly",
            "Wireshark",
            "Kali Linux",
            "Tableau",
            "Azure",
            "Jira",
            "VSCode",
            "MySQL",
            "Figma",
            "PowerBI",
          ].map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-blue-50 border-blue-100" // Soft blue background for light mode
              }`}
            >
              <span
                className={`font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
    </section>
  );
};

export default Resume;
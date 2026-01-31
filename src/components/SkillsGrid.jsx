import React, { useState } from "react";

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState("skills");

  const iconFiles = {
    // skills
    Java: "Java-Dark.svg",
    Python: "Python-Dark.svg",
    "C++": "CPP.svg",
    C: "C.svg",
    JavaScript: "JavaScript.svg",
    Firebase: "Firebase-Dark.svg",
    Tensorflow: "TensorFlow-Dark.svg",
    React: "React-Dark.svg",
    "Node.js": "NodeJS-Dark.svg",
    TailwindCSS: "TailwindCSS-Dark.svg",
    Swift: "Swift.svg",
    R: "R-Dark.svg",
    OpenCV: "OpenCV-Dark.svg",
    NextJS: "NextJS-Dark.svg",
    MongoDB: "MongoDB.svg",
    SQL: "MySQL-Dark.svg",
    // tools
    "VS Code": "VSCode-Dark.svg",
    Xcode:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
    Git: "Git.svg",
    GitHub: "Github-Dark.svg",
    Docker: "Docker.svg",
    "Jupyter Notebook":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    "Google Colab":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg",
    Figma: "Figma-Dark.svg",
  };

  const skills = [
    // Languages
    "Java",
    "Python",
    "C++",
    "C",
    "JavaScript",
    "Swift",
    "R",
    // Databases
    "MongoDB",
    "SQL",
    "Firebase",
    // Everything else
    "React",
    "Node.js",
    "NextJS",
    "TailwindCSS",
    "Tensorflow",
    "OpenCV",
  ];

  const tools = [
    "VS Code",
    "Xcode",
    "Git",
    "GitHub",
    "Docker",
    "Jupyter Notebook",
    "Google Colab",
    "Figma",
  ];

  const list = activeTab === "skills" ? skills : tools;

  const baseUrl =
    "https://cdn.jsdelivr.net/gh/tandpfun/skill-icons@main/icons/";

  return (
    <section className="py-30 w-full bg-[#0A0A0A] text-white flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Left Side */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            {/* Vertical Text */}
            <div className="absolute -left-4 top-16 sm:left-16 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise & Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies that I use as a computer
            science student. I leverage them to turn ideas into fully functional
            applications that solve real-world problems.
          </p>

          <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button
              onClick={() => setActiveTab("skills")}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-300"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeTab === "tools"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-300"
              }`}
            >
              Tools
            </button>
          </span>
        </div>

        {/* Right Side (Skills Grid) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Consistent rows to prevent height shifts */}
          <div className="grid grid-cols-3 grid-rows-6 md:grid-cols-4 md:grid-rows-4 gap-4 h-[28rem] md:h-96">
            {list.map((name, idx) => {
              let src = "";
              const fileOrUrl = iconFiles[name];
              if (fileOrUrl.startsWith("http")) {
                src = fileOrUrl;
              } else {
                src = `${baseUrl}${fileOrUrl}`;
              }
              return (
                <div key={idx} className="text-center group">
                  <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform duration-300 transform group-hover:scale-110">
                    <img src={src} alt={name} className="w-11 h-11" />
                    <p className="text-xs mt-2">{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

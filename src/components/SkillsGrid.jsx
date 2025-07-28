import React from "react";
import JavaIcon from "devicon/icons/java/java-original.svg";
import PythonIcon from "devicon/icons/python/python-original.svg";
import CPlusPlusIcon from "devicon/icons/cplusplus/cplusplus-original.svg";
import JavaScriptIcon from "devicon/icons/javascript/javascript-original.svg";
import FirebaseIcon from "devicon/icons/firebase/firebase-original.svg";
import TensorflowIcon from "devicon/icons/tensorflow/tensorflow-original.svg";
import ReactIcon from "devicon/icons/react/react-original.svg";
import TailwindCSSIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import SwiftIcon from "devicon/icons/swift/swift-original.svg";
import RIcon from "devicon/icons/r/r-original.svg";
import OpenCVIcon from "devicon/icons/opencv/opencv-original.svg";
import NextjsIcon from "devicon/icons/nextjs/nextjs-original.svg";

export default function SkillsGrid() {
  return (
    <section className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-black flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
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
            These are the tools and technologies that I use daily to develop web
            applications. With a strong foundation in frontend, I focus on
            delivering clean, maintainable code and intuitive user experiences.
          </p>

          <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button className="rounded-lg px-4 py-2 bg-blue-500 text-white transition-all duration-300">
              Skills
            </button>
            <button className="rounded-lg px-4 py-2 bg-transparent text-gray-300 transition-all duration-300">
              Tools
            </button>
          </span>
        </div>

        {/* Right Side (Skills Grid) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Java", icon: JavaIcon },
              { name: "Python", icon: PythonIcon },
              { name: "C++", icon: CPlusPlusIcon },
              { name: "JavaScript", icon: JavaScriptIcon },
              { name: "Firebase", icon: FirebaseIcon },
              { name: "Tensorflow", icon: TensorflowIcon },
              { name: "React", icon: ReactIcon },
              { name: "TailwindCSS", icon: TailwindCSSIcon },
              { name: "Swift", icon: SwiftIcon },
              { name: "R", icon: RIcon },
              { name: "OpenCV", icon: OpenCVIcon },
              { name: "NextJS", icon: NextjsIcon },
            ].map(({ name, icon }, idx) => (
              <div key={idx} className="text-center group">
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform duration-300 transform group-hover:scale-110">
                  <img src={icon} alt={name} className="w-10 h-10" />
                  <p className="text-xs mt-2">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

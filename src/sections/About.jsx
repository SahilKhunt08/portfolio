import React, { useState, useEffect, useRef } from "react";
import BioSection from "../components/BioSection";
import SkillsGrid from "../components/SkillsGrid";
import TimelineCard from "../components/TimelineCard";

// Mobile Timeline Card Component
function MobileTimelineCard({ card, idx, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <li
      ref={cardRef}
      className={`relative flex items-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span
        className={`absolute left-8 transform -translate-x-1/2 z-10 flex-shrink-0 flex items-center justify-center w-8 h-8 bg-white rounded-full ring-8 ring-black transition-all duration-700 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <card.Icon className="w-4 h-4 text-black" aria-hidden="true" />
      </span>
      <div
        className={`ml-16 mr-4 flex-1 p-4 rounded-lg shadow-lg ${
          idx % 2 === 1 ? "bg-gradient-to-l" : "bg-gradient-to-r"
        } ${
          card.gradient
        } transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black/25`}
      >
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <time
            className={`${card.timeBgClass} whitespace-nowrap text-gray-100 text-xs px-2 py-0.5 rounded-full`}
          >
            {card.time}
          </time>
        </div>
        {card.position && (
          <p className="text-gray-200 text-sm font-medium mb-2">
            {card.position}
          </p>
        )}
        <div className="text-gray-100 text-sm">{card.description}</div>
      </div>
    </li>
  );
}

import {
  CodeBracketIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CalculatorIcon,
  BeakerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  const cardsData = [
    {
      id: 1,
      Icon: BeakerIcon,
      title: "Social Computing Systems Lab",
      position: "Software Engineering Researcher",
      time: "Sept. 2025 - Now",
      gradientFrom: "rose-500",
      gradientTo: "pink-400",
      timeBgClass: "bg-gradient-to-r from-rose-600 to-pink-500",
      gradient: "from-rose-500 to-pink-400",
      align: "end",
      description:
        "Building an AI-powered networking platform that connects researchers across academic conferences by analyzing and structuring data from thousands of research papers and profiles.",
    },
    {
      id: 2,
      Icon: CodeBracketIcon,
      title: "Disruption Lab",
      position: null,
      time: "Sept. 2025 - Now",
      gradientFrom: "cyan-500",
      gradientTo: "blue-400",
      timeBgClass: "bg-gradient-to-r from-cyan-600 to-blue-500",
      gradient: "from-cyan-500 to-blue-400",
      align: "start",
      description: (
        <>
          <div className="mb-4">
            <p className="text-gray-200 text-sm font-semibold mb-1">
              Technical Lead • Jan. 2026 - Now
            </p>
            <p className="text-gray-100">
              Leading a five-engineer team to build a CSV-based automation system for CSC Global that supports year-over-year test maintenance. 
            </p>
          </div>
          <div className="pt-3 border-t border-cyan-300/30">
            <p className="text-gray-200 text-sm font-semibold mb-1">
              Software Engineer • Sept. 2025 - Dec. 2025
            </p>
            <p className="text-gray-100">
              Developing intelligent automation systems that curate and synthesize emerging AI research to help faculty stay current with the latest developments in the field.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      Icon: GlobeAltIcon,
      title: (
        <>
          FiPet (
          <a
            href="https://fipet.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit hover:text-blue-200 hover:underline transition-colors"
          >
            fipet.dev
          </a>
          )
        </>
      ),
      position: "Web Dev Lead",
      time: "May 2025 - Now",
      gradientFrom: "amber-500",
      gradientTo: "orange-400",
      timeBgClass: "bg-gradient-to-r from-amber-600 to-orange-500",
      gradient: "from-amber-500 to-orange-400",
      align: "end",
      description:
        "Oversaw the development of a product website as Web Dev Lead, managing a team at a startup to highlight their app.",
    },
    {
      id: 4,
      Icon: RocketLaunchIcon,
      title: "Illinois Space Society (ISS)",
      position: "GNC Software Engineer",
      time: "Sept. 2024 - Now",
      gradientFrom: "indigo-600",
      gradientTo: "purple-500",
      timeBgClass: "bg-gradient-to-r from-indigo-700 to-purple-600",
      gradient: "from-indigo-600 to-purple-500",
      align: "start",
      description:
        "Developed Lyapunov-stable neural controllers and Kalman-filter trackers for quadrotor and rocket guidance on the GNC sub-team.",
    },
    {
      id: 5,
      Icon: AcademicCapIcon,
      title: "CompSci Kids",
      position: "Club Leader",
      time: "Aug. 2022 - May 2024",
      gradientFrom: "emerald-600",
      gradientTo: "teal-500",
      timeBgClass: "bg-gradient-to-r from-emerald-700 to-teal-600",
      gradient: "from-emerald-600 to-teal-500",
      align: "end",
      description:
        "Led a club teaching 5–8ᵗʰ graders CS fundamentals: built custom curriculum, supervised volunteers, and ran weekly classes.",
    },
    {
      id: 6,
      Icon: CalculatorIcon,
      title: "Mathnasium",
      position: "Lead Instructor",
      time: "June 2023 - Jan. 2024",
      gradientFrom: "sky-600",
      gradientTo: "blue-500",
      timeBgClass: "bg-gradient-to-r from-sky-700 to-blue-600",
      gradient: "from-sky-600 to-blue-500",
      align: "start",
      description:
        "Tutored K–12 students in foundational math skills, offering both homework assistance and exam preparation as lead instructor.",
    },
  ];

  return (
    <div>
      <BioSection />
      <SkillsGrid />
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center bg-[#0A0A0A] text-white py-16"
      >
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            My Experience
          </h2>
          {/* Desktop-only timeline */}
          <div className="hidden md:block relative">
            {/* Centre rail */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-gray-700 via-white to-gray-700" />
            <ol className="relative space-y-20 px-4">
              {cardsData.map((card, index) => (
                <TimelineCard
                  key={card.id}
                  Icon={card.Icon}
                  title={card.title}
                  position={card.position}
                  time={card.time}
                  gradientFrom={card.gradientFrom}
                  gradientTo={card.gradientTo}
                  align={card.align}
                  timeBgClass={card.timeBgClass}
                  delay={index * 100}
                >
                  {card.description}
                </TimelineCard>
              ))}
            </ol>
          </div>

          {/* Mobile-only timeline */}
          <div className="relative md:hidden">
            {/* Mobile rail */}
            <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-gray-700 via-white to-gray-700 z-0" />
            <ol className="space-y-8">
              {cardsData.map((card, idx) => (
                <MobileTimelineCard
                  key={card.id}
                  card={card}
                  idx={idx}
                  delay={idx * 100}
                />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

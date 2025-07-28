import React from "react";
import TimelineCard from "../components/TimelineCard";
import SkillsGrid from "../components/SkillsGrid";

import {
  CodeBracketIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CalculatorIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  const cardsData = [
    {
      id: 1,
      Icon: CodeBracketIcon,
      title: "FiPet (fipet.dev)",
      time: "June 2025 - Now",
      gradientFrom: "yellow-600",
      gradientTo: "orange-500",
      timeBgClass: "bg-yellow-700",
      gradient: "from-yellow-600 to-orange-500",
      align: "end",
      description: (
        <>
          Launched a personal portfolio at <code>fipet.dev</code> built with
          Next.js and Tailwind CSS to showcase my projects, blog, and résumé.
        </>
      ),
    },
    {
      id: 2,
      Icon: RocketLaunchIcon,
      title: "Illinois Space Society (ISS)",
      time: "Sept. 2024 - Now",
      gradientFrom: "purple-900",
      gradientTo: "purple-500",
      timeBgClass: "bg-purple-800",
      gradient: "from-purple-900 to-purple-500",
      align: "start",
      description:
        "Developed Lyapunov-stable neural controllers and Kalman-filter trackers for quadrotor and rocket guidance on the GNC sub-team.",
    },
    {
      id: 3,
      Icon: AcademicCapIcon,
      title: "CompSci Kids",
      time: "Aug. 2022 - May 2024",
      gradientFrom: "green-600",
      gradientTo: "teal-600",
      timeBgClass: "bg-green-700",
      gradient: "from-green-600 to-teal-600",
      align: "end",
      description:
        "Led a club teaching 5–8ᵗʰ graders CS fundamentals: built curriculum, supervised mentors, and ran weekly classes.",
    },
    {
      id: 4,
      Icon: CalculatorIcon,
      title: "Mathnasium",
      time: "June 2023 - Jan. 2024",
      gradientFrom: "blue-800",
      gradientTo: "blue-500",
      timeBgClass: "bg-blue-900",
      gradient: "from-blue-800 to-blue-500",
      align: "start",
      description:
        "Tutored middle-schoolers in math problem-solving techniques as a part-time instructor for six months.",
    },
  ];

  return (
    <div>
      <SkillsGrid />
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-black text-white py-16"
      >
        <div className="relative w-full max-w-6xl">
          {/* Desktop-only timeline */}
          <div className="hidden md:block relative">
            {/* Centre rail */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-gray-700 via-white to-gray-700" />
            <ol className="relative space-y-20 px-4">
              {cardsData.map((card) => (
                <TimelineCard
                  key={card.id}
                  Icon={card.Icon}
                  title={card.title}
                  time={card.time}
                  gradientFrom={card.gradientFrom}
                  gradientTo={card.gradientTo}
                  align={card.align}
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
                <li key={card.id} className="relative flex items-center">
                  <span className="absolute left-8 transform -translate-x-1/2 z-10 flex-shrink-0 flex items-center justify-center w-8 h-8 bg-white rounded-full ring-8 ring-black">
                    <card.Icon
                      className="w-4 h-4 text-black"
                      aria-hidden="true"
                    />
                  </span>
                  <div
                    className={`ml-16 mr-4 flex-1 p-4 rounded-lg shadow-lg ${
                      idx % 2 === 1 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                    } ${card.gradient}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <time
                        className={`${card.timeBgClass} whitespace-nowrap text-gray-100 text-xs px-2 py-0.5 rounded-full`}
                      >
                        {card.time}
                      </time>
                    </div>
                    <div className="text-gray-100 text-sm">
                      {card.description}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

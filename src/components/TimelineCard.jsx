import React, { useState, useEffect, useRef } from "react";

const darkerMap = {
  "yellow-600": "bg-yellow-700",
  "orange-500": "bg-orange-600",
  "purple-900": "bg-purple-800",
  "purple-500": "bg-purple-600",
  "green-600": "bg-green-700",
  "teal-600": "bg-teal-700",
  "blue-800": "bg-blue-900",
  "blue-500": "bg-blue-600",
};

/**
 * TimelineCard Component
 *
 * Props:
 *  - Icon: React component for the circle icon
 *  - title: string title of the card
 *  - position: string position/role (displayed as subline under title)
 *  - time: string timestamp
 *  - children: description content (string or JSX)
 *  - gradientFrom: Tailwind color (e.g. 'yellow-600')
 *  - gradientTo: Tailwind color (e.g. 'orange-500')
 *  - align: 'start' | 'end' to control card placement on desktop
 *  - timeBgClass: optional string of Tailwind classes to override the time badge background (supports gradients)
 *  - delay: optional number for staggered animation delay in ms
 */
export default function TimelineCard({
  Icon,
  title,
  position,
  time,
  children,
  gradientFrom,
  gradientTo,
  align = "end",
  timeBgClass,
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay for staggered effect
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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

  // decide which side to float on desktop
  const justifyClass = align === "start" ? "justify-start" : "justify-end";
  const marginClass = align === "start" ? "ml-12" : "mr-12";

  const resolvedTimeBgClass =
    timeBgClass || darkerMap[gradientFrom] || "bg-black bg-opacity-50";

  return (
    <li
      ref={cardRef}
      className={`relative w-full flex ${justifyClass} ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } transition-all duration-700 ease-out`}
    >
      {/* Icon Circle */}
      <span
        className={`absolute z-20 top-1/2 left-1/2
                   transform -translate-x-1/2 -translate-y-1/2
                   flex items-center justify-center
                   w-8 h-8 bg-white rounded-full ring-8 ring-black
                   transition-all duration-700 ease-out ${
                     isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                   }`}
      >
        <Icon className="w-4 h-4 text-black" aria-hidden="true" />
      </span>

      {/* Card */}
      <div
        className={`
          relative w-full max-w-md p-6 rounded-xl shadow-lg
          ${marginClass}
          bg-gradient-to-r from-${gradientFrom} to-${gradientTo}
          transform transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-2xl hover:shadow-black/25
        `}
      >
        {/* Timestamp */}
        <time
          className={`
            absolute top-4 right-4
            ${resolvedTimeBgClass}
            text-gray-100
            text-xs px-2 py-0.5 rounded-full
          `}
        >
          {time}
        </time>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-1">{title}</h3>

        {/* Position */}
        {position && (
          <p className="text-gray-200 text-sm font-medium mb-2">{position}</p>
        )}

        {/* Description */}
        <p className="text-gray-100">{children}</p>
      </div>
    </li>
  );
}

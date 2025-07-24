import React from "react";

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
 *  - time: string timestamp
 *  - children: description content (string or JSX)
 *  - gradientFrom: Tailwind color (e.g. 'yellow-600')
 *  - gradientTo: Tailwind color (e.g. 'orange-500')
 *  - align: 'start' | 'end' to control card placement on desktop
 */
export default function TimelineCard({
  Icon,
  title,
  time,
  children,
  gradientFrom,
  gradientTo,
  align = "end",
}) {
  // decide which side to float on desktop
  const justifyClass = align === "start" ? "justify-start" : "justify-end";
  const marginClass = align === "start" ? "ml-12" : "mr-12";

  const timeBgClass = darkerMap[gradientFrom] || "bg-black bg-opacity-50";

  return (
    <li className={`relative w-full flex ${justifyClass} `}>
      {/* Icon Circle */}
      <span
        className="absolute z-20 top-1/2 left-1/2
                   transform -translate-x-1/2 -translate-y-1/2
                   flex items-center justify-center
                   w-8 h-8 bg-white rounded-full ring-8 ring-black"
      >
        <Icon className="w-4 h-4 text-black" aria-hidden="true" />
      </span>

      {/* Card */}
      <div
        className={`
          relative w-full max-w-md p-6 rounded-xl shadow-lg
          ${marginClass}
          bg-gradient-to-r from-${gradientFrom} to-${gradientTo}
        `}
      >
        {/* Timestamp */}
        <time
          className={`
            absolute top-4 right-4
            ${timeBgClass}
            text-gray-100
            text-xs px-2 py-0.5 rounded-full
          `}
        >
          {time}
        </time>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-100">{children}</p>
      </div>
    </li>
  );
}

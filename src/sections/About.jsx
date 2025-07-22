// src/sections/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <ol className="relative border-l border-gray-700">
        {/* FiPet */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-black">
            <svg
              className="w-3 h-3 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm1 3h12a1 1 0 110 2H4a1 1 0 110-2zm-1 3a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold">FiPet (fipet.dev)</h3>
          <time className="block mb-2 text-sm text-gray-400">July 2025</time>
          <p className="text-gray-300">
            Launched a personal portfolio at <code>fipet.dev</code> built with
            Next.js and Tailwind CSS to showcase my projects, blog, and resume.
          </p>
        </li>

        {/* ISS */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-black">
            <svg
              className="w-3 h-3 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold">
            Illinois Space Society (ISS)
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Feb 2025</time>
          <p className="text-gray-300">
            Developed Lyapunov‐stable neural controllers and Kalman‐filter
            trackers for quadrotor and rocket guidance on the GNC subteam.
          </p>
        </li>

        {/* CompSci Kids */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-black">
            <svg
              className="w-3 h-3 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold">CompSci Kids</h3>
          <time className="block mb-2 text-sm text-gray-400">2022 – 2023</time>
          <p className="text-gray-300">
            Led a club teaching 5–8th graders CS fundamentals: built curriculum,
            supervised mentors, and ran weekly classes.
          </p>
        </li>

        {/* Mathnasium */}
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-black">
            <svg
              className="w-3 h-3 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 2h16v2H2V2zm0 4h12v2H2V6zm0 4h8v2H2v-2zm0 4h4v2H2v-2z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold">Mathnasium</h3>
          <time className="block mb-2 text-sm text-gray-400">2021 – 2022</time>
          <p className="text-gray-300">
            Tutored middle‐schoolers in math problem‐solving techniques as a
            part‐time instructor for six months.
          </p>
        </li>
      </ol>
    </section>
  );
}

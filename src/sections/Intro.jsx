import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Intro() {
  const [text] = useTypewriter({
    words: [
      "I am a Backend Developer.",
      "I am a Web Designer.",
      "I am a Designer.",
      "I am a Software Engineer.",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
    cursorColor: "#213da3",
  });

  const [prefix, lastWord] = useMemo(() => {
    const parts = text.split(" ");
    const last = parts.pop() || "";
    return [parts.join(" "), last];
  }, [text]);

  const [engineInitialized, setEngineInitialized] = useState(false);

  // Initialize tsparticles once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineInitialized(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: ["#ffffff"] },
        opacity: { value: 0.3, random: true },
        size: { value: { min: 2, max: 4 }, random: true },
        shape: { type: "circle" },
        move: {
          enable: true,
          speed: 2,
          direction: "right",
          straight: true,
          outModes: { default: "out" },
          gravity: {
            enable: true,
            acceleration: 0.1,
          },
        },
      },

      trail: {
        enable: true,
        length: 100,
        fillColor: "#dddddd",
      },

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
        },
      },
    }),
    []
  );

  const particlesEl = useMemo(
    () =>
      engineInitialized ? (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={options}
        />
      ) : null,
    [engineInitialized]
  );

  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      {/* {particlesEl} */}
      <h1 className="text-3xl sm:text-5xl font-bold z-10 text-center">
        {prefix && <>{prefix} </>}
        <span className="text-blue-400">{lastWord}</span>
        <Cursor cursorStyle="|" cursorColor="#4287f5" />
      </h1>
      <button
        onClick={() => {
          const about = document.getElementById("about");
          if (about) about.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 z-10"
      >
        View My Work
      </button>
    </section>
  );
}

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Intro() {
  const [engineInitialized, setEngineInitialized] = useState(false);

  // Initialize tsparticles once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineInitialized(true);
    });
  }, []);

  // Particle config: diagonal “falling stars” without overriding your CSS bg
  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // we’ll size via CSS
      detectRetina: true,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: ["#ffffff"] }, // white, gold, orange
        opacity: { value: 0.3, random: true },
        size: { value: { min: 2, max: 4 }, random: true },
        shape: { type: "circle" },
        move: {
          enable: true,
          speed: 2,
          direction: "right", // initial horizontal
          straight: true,
          outModes: { default: "out" },
          gravity: {
            // curve downward
            enable: true,
            acceleration: 0.1,
          },
        },
      },

      // <<< NEW: enable fading tails behind each particle
      trail: {
        enable: true,
        length: 100,
        fillColor: "#dddddd", // match your bg
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

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      {/* only render once engine is ready */}
      {engineInitialized && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={options}
        />
      )}

      <h1 className="text-5xl z-10">Intro</h1>
    </section>
  );
}

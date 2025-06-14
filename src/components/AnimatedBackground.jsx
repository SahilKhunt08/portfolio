// // src/components/AnimatedBackground.jsx
// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// export default function AnimatedBackground() {
//   const [engineInitialized, setEngineInitialized] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setEngineInitialized(true);
//     });
//   }, []);

//   const options = useMemo(
//     () => ({
//       fullScreen: { enable: false },
//       detectRetina: true,
//       particles: {
//         number: { value: 120, density: { enable: true, area: 800 } },
//         color: { value: ["#ffffff"] },
//         opacity: { value: 0.3, random: true },
//         size: { value: { min: 2, max: 4 }, random: true },
//         shape: { type: "circle" },
//         move: {
//           enable: true,
//           speed: 2,
//           direction: "right",
//           straight: true,
//           outModes: { default: "out" },
//           gravity: {
//             enable: true,
//             acceleration: 0.1,
//           },
//         },
//       },
//       trail: {
//         enable: true,
//         length: 100,
//         fillColor: "#dddddd",
//       },
//       interactivity: {
//         events: {
//           onHover: { enable: true, mode: "repulse" },
//         },
//         modes: {
//           repulse: { distance: 200, duration: 0.4 },
//         },
//       },
//     }),
//     []
//   );

//   if (!engineInitialized) return null;

//   return (
//     <Particles
//       id="tsparticles"
//       className="absolute inset-0 z-0"
//       options={options}
//     />
//   );
// }

export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        // black base
        backgroundColor: "#000",
        // 1px white dot, transparent beyond, repeating every 18px
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        // fade dots toward edges
        WebkitMaskImage:
          "radial-gradient(ellipse at center, transparent 50%, black)",
        maskImage: "radial-gradient(ellipse at center, transparent 50%, black)",
      }}
    />
  );
}

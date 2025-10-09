import { useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Intro from "./sections/Intro";
import Navbar from "./components/Navbar";
import SkillsCarousel from "./components/SkillsCarousel";

// Lazy load sections that aren't immediately visible
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));

// Loading component for better UX
const SectionLoader = () => (
  <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
    <div className="text-white text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Intro />
      {/* <SkillsCarousel /> */}
      
      {/* Lazy loaded sections with Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;

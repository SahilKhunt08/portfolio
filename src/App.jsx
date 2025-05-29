import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sans text-gray-900 pt-16">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

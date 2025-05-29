import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow p-4 flex space-x-6 justify-center">
      {["intro", "about", "projects", "contact"].map((sec) => (
        <a key={sec} href={`#${sec}`} className="uppercase hover:text-blue-600">
          {sec}
        </a>
      ))}
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

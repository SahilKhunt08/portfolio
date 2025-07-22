import ProjectCard from "../components/ProjectCard";

import impulse1 from "../assets/projects/impulseworkoutapp/pic1.png";
import impulse2 from "../assets/projects/impulseworkoutapp/pic2.png";
import impulse3 from "../assets/projects/impulseworkoutapp/pic3.png";
import cher1 from "../assets/projects/cher/pic1.png";
import webscrapers1 from "../assets/projects/webscrapers/pic1.png";
import nnc1 from "../assets/projects/nnc/pic1.png";
import nnc2 from "../assets/projects/nnc/pic2.png";
import nnc3 from "../assets/projects/nnc/pic3.png";

export default function Projects() {
  const projectData = [
    {
      title: "Quadrotor Neural Controller",
      description:
        "Neural network controller for quadrotors using Lyapunov-based training to ensure stable flight.",
      techStack: ["Python", "TensorFlow", "PyBullet"],
      features: [
        "Lyapunov-based loss function to enforce provable stability during neural network training.",
        "Custom neural controller architecture trained on high-fidelity quadrotor dynamics simulations.",
        "Real-time simulation tests under variable payloads and wind disturbances to validate robustness.",
        "Ran custom simulations with PyBullet on single, double, and inverted pendulums.",
      ],
      images: [nnc1, nnc2, nnc3],
      type: "AI",
    },
    {
      title: "Impulse Workout App",
      description:
        "A collaborative fitness app that helps users create, share, and follow workout routines with real-time progress tracking.",
      techStack: ["React Native", "Expo", "Firebase"],
      features: [
        "Intuitive workout builder for easily creating and organizing custom routines.",
        "Timed workouts with rest intervals and progress tracking.",
        "Multiple fitness APIs providing detailed exercise data.",
        "Custom leaderboards and challenges to compete with friends.",
      ],
      images: [impulse1, impulse2, impulse3],
      type: "Mobile",
    },
    {
      title: "C.H.E.R. – Comprehensive Human Emotion Recognition",
      description:
        "C.H.E.R. uses AI and computer vision to help parents and schools detect early signs of depression in teens, aiming to prevent suicide by notifying trusted adults so teens can get the help they need.",
      techStack: [
        "Python",
        "TensorFlow (Keras)",
        "OpenCV",
        "React",
        "Firebase",
      ],
      features: [
        "1st place team at district-wide hackathon (Fremd Hacks).",
        "Artificial intelligence model trained on over 35,000 images of human emotion.",
        "Uses computer vision to detect real-time emotions in subjects.",
        "Built to detect signs of declining mental health and alert trusted adults.",
      ],
      images: [cher1],
      type: "AI",
    },
    {
      title: "Webscrapers",
      description: "An online web development business ",
      techStack: ["React", "Firebase", "Tailwind CSS", "Vite"],
      features: [
        "30+ built-in photo filters and adjustment tools.",
        "Stories and ephemeral posts that disappear after 24h.",
        "In-app chat with image and video support.",
        "Offline capture and automatic sync on reconnect.",
      ],
      images: [webscrapers1],
      type: "Web",
    },
  ];

  return (
    <section id="projects" className="bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center font-grotesk">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 justify-items-stretch"> */}

          {projectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

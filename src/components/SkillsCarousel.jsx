import Marquee from "react-fast-marquee";

const skills = [
  { name: "Java", img: "src/assets/skills/java.svg" },
  { name: "Python", img: "src/assets/skills/python.svg" },
  { name: "React", img: "src/assets/skills/react.svg" },
  { name: "Tailwind", img: "src/assets/skills/tailwindcss.svg" },
  { name: "C++", img: "src/assets/skills/cplusplus.svg" },
  { name: "Firebase", img: "src/assets/skills/firebase.svg" },
  {
    name: "JavaScript",
    img: "src/assets/skills/javascript.svg",
  },
  //   { name: "Node.js", img: "/skills/node.svg" },
];

export default function SkillsCarousel() {
  return (
    <div className="py-12 bg-black font-nunito text-white">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">My Tech Toolbox</h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          These are the technologies I rely on to turn ideas into real,
          functional projects. From intuitive front-end experiences to powerful
          back-end systems, each tool plays a key role in building clean,
          scalable, and reliable solutions.
        </p>
      </div>

      <div className="mt-10 max-w-screen-lg mx-auto px-4">
        <Marquee
          pauseOnHover={false}
          speed={70}
          gradient={false}
          direction="left"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mx-6 bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center w-44 h-44 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-lg font-semibold text-white text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

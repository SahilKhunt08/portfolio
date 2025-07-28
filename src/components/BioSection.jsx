import React from "react";
import SelfImage from "../assets/self.JPG";

export default function BioSection() {
  return (
    <section
      id="about"
      className="pt-50 pb-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A] text-white relative overflow-hidden"
    >
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20 filter blur-3xl" />
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-2 bg-gradient-to-br from-blue-300 to-blue-700 rounded-full">
            <img
              src={SelfImage}
              alt="Sahil Khunt"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-2xl"
            />
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-gray-700 self-stretch" />

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-pink-300 text-center md:text-left">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mb-6 mx-auto md:mx-0 rounded"></div>
          <p className="text-gray-200 leading-relaxed text-center md:text-left">
            Hi, my name is Sahil, and I'm a Computer Science student at the
            University of Illinois Urbana-Champaign. I have a passion for
            building innovative software solutions and exploring the latest
            technologies. From developing full-stack applications that bring my
            ideas to life to prototyping intelligent AI systems that solve
            meaningful problems, I’m constantly driven by the desire to build
            and experiment. I chose Computer Science because it's an
            ever-evolving field that allows me to combine my creativity with
            technology to create anything I put my mind to.
          </p>
        </div>
      </div>
    </section>
  );
}

{
  /* 
  
Hi, my name is Sahil, and I'm a Computer Science student at UIUC. 
I have a passion for building innovative software solutions and exploring the latest technologies. 
My journey has taken me through full-stack web development, AI research, and even rocket guidance systems. 
I'm always eager to learn and collaborate on exciting projects that push the boundaries of what's possible in tech.
  
  
*/
}

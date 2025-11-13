import React from "react";

const UiUxABout = () => {
  const tools = [
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe XD", img: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
    { name: "Sketch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    { name: "Adobe Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg" },
    { name: "Adobe Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { 
  name: "Axure", 
  img: "https://worldvectorlogo.com/logos/axure-2.svg" 
},
    { name: "Framer", img: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
    { name: "Lunacy", img: "https://img.icons8.com/color/96/000000/lunacy.png" },
  ];

  return (
    <section className="bg-[var(--main-color)] py-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--second-color)] mb-4">
            UI / UX Design Tools
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We master industry-leading design tools to create intuitive, beautiful, and user-centered interfaces.
          </p>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white border border-cyan-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={tool.img}
                  alt={`${tool.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Gradient Underline */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--second-color)] to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default UiUxABout;
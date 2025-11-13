import React from "react";

const BlockAbout = () => {
  const techs = [
    {
      name: "Solidity",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Ruby",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    },
    {
      name: "Go",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "Simplicity",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // Placeholder – Simplicity has no official icon
    },
    {
      name: "Rholang",
      logo: "data:image/jpeg;base64,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", // Closest match (Rholang is niche)
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--main-color)] py-16 px-5 md:px-10 lg:px-20">
      <div className="absolute inset-0 -z-10 opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--second-color)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="var(--main-color)" stopOpacity="0.12" />
            </linearGradient>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--second-color)" strokeWidth="0.8" opacity="0.1" />
              <circle cx="40" cy="40" r="2" fill="var(--second-color)" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--second-color)] mb-4 font-display">
            Blockchain Development Technology
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-sans">
            We leverage cutting-edge blockchain languages and frameworks to build secure, scalable, and decentralized systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white border border-cyan-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/64/1e40af/ffffff?text=" + tech.name[0];
                  }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--second-color)] to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BlockAbout;
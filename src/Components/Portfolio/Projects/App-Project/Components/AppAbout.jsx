import React from "react";

const techs = [
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Swift",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Ionic",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  { name: "Xamarin",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
  { name: "Python",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const AppAbout = () => {
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
            App Development Technologies
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-sans">
            We master modern tools and frameworks to build fast, scalable, and beautiful mobile applications.
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

export default AppAbout;
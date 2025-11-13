import React from 'react';

const WebAbout = () => {
  const technologies = [
    {
      name: 'React JS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node JS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Angular JS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'Vue JS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    },
    {
      name: 'Express',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'MongoDB',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'MySQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'JavaScript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
  ];

  return (
    <section className="bg-[var(--main-color)] py-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--second-color)] mb-4">
            Web Development Technologies
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We master modern tools and frameworks to build fast, scalable, and beautiful web applications.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white border border-cyan-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={tech.img}
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

export default WebAbout;
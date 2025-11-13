import React from "react";

const AppHero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto lg:px-28 md:px-20 px-5 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--second-color)] leading-tight tracking-tight font-display">
              App Development
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium font-sans">
              App development is the process of creating software applications designed to run on mobile devices such as smartphones and tablets, as well as desktop platforms. This multifaceted process involves several stages, from concept and design to coding, testing, and deployment. App development is divided into three main categories: <strong className="font-semibold text-[var(--second-color)]">native</strong>, <strong className="font-semibold text-[var(--second-color)]">web</strong>, and <strong className="font-semibold text-[var(--second-color)]">hybrid</strong> apps. Native app development focuses on building applications for specific operating systems, such as iOS or Android, using languages like Swift or Kotlin.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--second-color)] to-transparent opacity-20 rounded-3xl transform rotate-6 scale-95 group-hover:rotate-12 transition-all duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Mobile App Development"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--second-color)] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
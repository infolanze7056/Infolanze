import React from "react";

const WebHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto lg:px-28 md:px-20 px-5 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--second-color)] leading-tight tracking-tight font-display">
              Web Development
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium font-sans">
              Web development is the art of creating and maintaining websites by integrating programming, design, and content creation. This process ensures the delivery of functional, efficient, and user-friendly online experiences. It covers a wide array of tasks and skills, which are primarily categorized into two main areas: <strong className="font-semibold text-[var(--second-color)]">front-end</strong> and <strong className="font-semibold text-[var(--second-color)]">back-end</strong> development. Both work together to build cohesive and fully functional websites. Additionally, web development includes ongoing maintenance and updates to keep the site secure, performing optimally, and continuously meeting user needs.
            </p>
          </div>
        
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--second-color)] to-transparent opacity-20 rounded-3xl transform rotate-6 scale-95 group-hover:rotate-12 transition-all duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1350&q=80"
                alt="Modern Web Development"
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

export default WebHero;
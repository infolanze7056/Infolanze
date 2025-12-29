import React from 'react';
import { FaChevronRight } from "react-icons/fa"; // Cleaner icon
import { NavLink } from 'react-router-dom';

function ServiceHero({ title, description }) {
  return (
    <section className="relative bg-white pt-20 pb-24 lg:pt-20 lg:pb-24 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-slate-50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
              Service Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
            {title}
          </h1>

          {/* Description: Using the gray-700 from your main hero for consistency */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Action Button: Matches the "Explore Service" button style */}
          <div className="flex justify-center">
            <NavLink to="/contact">
              <button className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                Let's Discuss Your Requirement
                <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
          </div>

        </div>
      </div>

      {/* Subtle Divider Line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
    </section>
  );
}

export default ServiceHero;
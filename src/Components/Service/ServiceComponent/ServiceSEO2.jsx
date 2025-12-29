import React from 'react';
import { VscCircleFilled } from "react-icons/vsc";

function ServiceSEO2({ imageUrl, title, description, listItems }) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#0f172a] to-[#1e3a8a] font-family text-white">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 lg:px-40 md:px-20 px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12">
          
          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
            <img 
              className="relative z-10 mx-auto max-h-[400px] object-contain transition-all duration-500 group-hover:scale-105 rounded-[2.5rem] shadow-2xl" 
              src={imageUrl} 
              alt={title} 
            />
          </div>

          <div className="lg:pe-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Service Details
            </span>
          </div>

            <h2 className="text-3xl lg:text-4xl pb-4 font-bold tracking-tight text-white">
              {title}
            </h2>
            
            <p className="text-blue-100/70 leading-relaxed mb-8">
              {description}
            </p>

            <ul className="space-y-4">
              {listItems.map((item, index) => (
                <li 
                  key={index} 
                  className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-400/30 hover:translate-x-2"
                >
                  <div className="pe-3">
                    <VscCircleFilled className="text-blue-400 text-xl group-hover:shadow-[0_0_8px_#60a5fa] transition-all" />
                  </div>
                  <div className="text-blue-50 font-medium tracking-wide">
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSEO2;
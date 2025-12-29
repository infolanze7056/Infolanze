import React from 'react';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

function ServiceData({ imageUrl, title, description, listItems }) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#0f172a] to-[#1e3a8a]">

      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-400/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl">
              <img
                className="rounded-[2rem] w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                src={imageUrl}
                alt={title}
              />
            </div>
          </div>

          <div className="lg:ps-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full transition-transform hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
                Detailed Analysis
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {title}
            </h2>
            <p className="text-lg text-blue-100/70 leading-relaxed mb-10">
              {description}
            </p>

            <div className="space-y-6">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="group/item relative flex p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                      <RiArrowRightDoubleFill className="text-2xl" />
                    </div>
                  </div>

                  <div className="ms-5">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover/item:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-blue-100/60 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServiceData;
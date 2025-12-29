import React from "react";

function ServiceTags({ tags }) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#0f172a] to-[#1e3a8a]">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Technology Stack
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8
                         transition-all duration-500 hover:border-blue-400/50 hover:bg-white/10 hover:-translate-y-2
                         hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.3)]
                         w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] xl:w-[calc(20%-1.5rem)] min-w-[220px]"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-400/20 blur-3xl group-hover:bg-blue-400/40 transition-all duration-500" />

              <div className="relative flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-400/30 blur-2xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-700" />

                  <div className="relative w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 
                                  group-hover:border-blue-400/40 transition-all duration-300">
                    <img
                      className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      src={tag.image}
                      alt={tag.name}
                    />
                  </div>
                </div>

                <h4 className="text-sm font-bold tracking-widest text-blue-100 group-hover:text-white transition-colors">
                  {tag.name}
                </h4>

                <div className="mt-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
                </div>
              </div>

              {/* Scan Line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-1000 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceTags;
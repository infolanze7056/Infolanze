import React from "react";

function CareerSection() {
  return (
    <section className="relative overflow-hidden">

      <svg
        className="absolute top-0 left-0 w-full h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#2563eb"
          fillOpacity="0.08"
          d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </svg>

      <div
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8fbff 55%, #eef4ff 100%)",
        }}
      >
        <div className="lg:px-28 md:px-20 px-5 py-16">
          <div className="text-center max-w-3xl mx-auto">

              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Careers at Infolanze
            </span>

            <h1 className="lg:text-5xl text-3xl font-extrabold text-slate-900 leading-tight">
              Join With <span className="text-blue-600">Us</span>
            </h1>

            <p className="pt-4 pb-7 text-sm lg:text-base text-slate-600 leading-relaxed">
              Explore exciting career opportunities at Infolanze Technology,
              where passionate professionals shape the future of tech with
              innovation and expertise, driving towards excellence.
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-semibold rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1">
              Let's Join
              <span className="text-lg">→</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;

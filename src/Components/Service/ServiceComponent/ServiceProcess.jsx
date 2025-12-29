import React from "react";

function ServiceProcess() {
  const steps = [
    { 
      title: "Discovery", 
      desc: "We dive deep into your requirements, target audience, and business goals to build a solid foundation.",
      icon: "01" 
    },
    { 
      title: "Planning", 
      desc: "Our team crafts a strategic roadmap, including UI/UX wireframes and technical architecture.",
      icon: "02"
    },
    { 
      title: "Execution", 
      desc: "Using agile methodologies, we build your app with clean code and regular progress updates.",
      icon: "03"
    },
    { 
      title: "Deployment", 
      desc: "After rigorous testing, we launch your app to the stores and provide ongoing support.",
      icon: "04"
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      
      {/* Background SVG Grid - Matches ServiceContent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="processGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#processGrid)" />
        </svg>
      </div>

      {/* Organic Blob SVG - Matches ServiceContent (Right Side) */}
      <div className="absolute -right-20 top-1/4 w-[500px] h-[500px] opacity-[0.05] text-blue-600 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.4,-44.7C85.5,-31.4,90.8,-15.7,89.5,-0.8C88.1,14.2,80.1,28.3,70.1,40.1C60.1,51.8,48.1,61.1,34.8,68.4C21.4,75.7,6.7,81.1,-8.5,79.5C-23.7,77.9,-39.4,69.3,-52.1,58.1C-64.8,46.9,-74.5,33,-79.8,17.7C-85.1,2.4,-86,-14.3,-80.4,-29.4C-74.8,-44.5,-62.7,-58,-48.5,-64.9C-34.3,-71.8,-17.2,-72.1,-0.4,-71.4C16.3,-70.7,31.4,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full transition-transform hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
                 Our Workflow
              </span>
            </div>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            How We Bring Your <span className="text-blue-600">Ideas to Life</span>
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector Line (visible on desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[2px] bg-slate-200 -z-0">
                  <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              )}

              <div className="relative z-10 p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/40 group-hover:-translate-y-3 group-hover:border-blue-400">
                
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <span className="text-2xl font-black text-slate-400 group-hover:text-white transition-colors duration-500">
                    {step.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                  {step.desc}
                </p>

                {/* Bottom Accents */}
                <div className="flex gap-1.5">
                  <div className="w-8 h-1 rounded-full bg-blue-600" />
                  <div className="w-2 h-1 rounded-full bg-blue-200 group-hover:bg-blue-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;
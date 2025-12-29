import React from "react";
import OneTeam from "../../../Images/team.avif";

const OurTeam = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#020617]">
      
      {/* Soft Ambient Lights */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 z-10">

        {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Leadership & Talent
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            One Team, <span className="text-blue-400">Countless Talents</span>
          </h2>

          <p className="mt-6 text-blue-100/80 text-lg">
            A unified group of professionals delivering reliable, scalable,
            and future-ready digital solutions.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src={OneTeam}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text Timeline */}
          <div className="lg:col-span-7 space-y-10">

            {[
              {
                title: "Built on Collaboration",
                desc: "A multidisciplinary team of developers, designers, strategists, and marketers working together to craft intelligent digital solutions."
              },
              {
                title: "Driven by Innovation",
                desc: "We stay ahead with modern technologies, agile practices, and a mindset focused on continuous improvement and scalability."
              },
              {
                title: "Trusted by Clients",
                desc: "Long-term partnerships built on transparency, measurable outcomes, and consistent delivery across industries."
              },
              {
                title: "Passionate About Impact",
                desc: "We love what we do—and it reflects in the quality, performance, and results we deliver."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                
                {/* Line Indicator */}
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                  {index !== 3 && (
                    <span className="w-px flex-1 bg-blue-400/30 mt-2"></span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-blue-100/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

import React from "react";

const items = [
  {
    title: "Multi-Domain Expertise",
    desc: "Expertise across web, mobile, cloud, and enterprise solutions with proven delivery excellence.",
  },
  {
    title: "IP & Data Protection",
    desc: "Strict intellectual property rights and data security practices to protect your digital assets.",
  },
  {
    title: "Experienced Professionals",
    desc: "Certified engineers and domain experts delivering scalable, high-performance solutions.",
  },
  {
    title: "Structured Reporting",
    desc: "Clear hierarchy, real-time progress updates, and transparent project communication.",
  },
  {
    title: "Escalation Framework",
    desc: "Defined escalation paths for faster decisions and seamless project execution.",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock technical support to keep your business running without interruptions.",
  },
];

const WhyInfolanze = () => {
  return (
    <section className="relative py-24 overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-indigo-500/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-400 uppercase">
            Why Choose Us
          </span> */}
           <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Why Choose Us
            </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Why <span className="text-blue-400">Infolanze</span> Technologies?
          </h2>
          <p className="mt-6 text-blue-100/80 text-lg">
            A technology partner focused on innovation, performance, and long-term success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-2xl 
                bg-white/5 backdrop-blur-xl border border-white/10 
                hover:border-blue-400/40 transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">

              {/* Accent Line */}
              <div className="absolute left-0 top-6 h-10 w-1 rounded-full 
                bg-gradient-to-b from-blue-400 to-cyan-400" />

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInfolanze;

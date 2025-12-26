import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBug } from "react-icons/fa";

const services = [
  {
    icon: CgWebsite,
    title: "Website Design & Development",
    desc: "High-performance digital experiences engineered for scalability, security, and global reach.",
  },
  {
    icon: FaAppStore,
    title: "Web Application Development",
    desc: "Cloud-native, enterprise-grade web applications built for speed, reliability, and growth.",
  },
  {
    icon: FaBug,
    title: "Software Development",
    desc: "Custom software solutions designed to streamline operations and power digital transformation.",
  },
  {
    icon: IoSettingsOutline,
    title: "Blockchain Development",
    desc: "Decentralized, secure, and future-ready blockchain systems built for trust and transparency.",
  },
];

function ServiceSection() {
  return (
    <section className="relative py-28 overflow-hidden
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-indigo-500/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Our Capabilities
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Services Built for <span className="text-blue-400">Enterprise Scale</span>
          </h2>

          <p className="mt-6 text-blue-100/80 text-lg">
            We deliver future-ready digital solutions that empower organizations to innovate, scale, and lead.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-400/40
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                {/* Accent Bar */}
                <div className="absolute left-0 top-6 h-10 w-1 rounded-full
                  bg-gradient-to-b from-blue-400 to-cyan-400" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl
                  bg-blue-400/10
                  text-blue-400
                  flex items-center justify-center text-3xl mb-6
                  transition-transform duration-500
                  group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-blue-100/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;

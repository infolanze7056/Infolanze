import React from "react";
import SupportImg from "../../Images/support.jpg";
import { BiSupport } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa6";

const features = [
  {
    title: "Lifetime Support",
    icon: <BiSupport />,
    desc: "Continuous web support and affordable maintenance to keep your platform evolving.",
    color: "blue"
  },
  {
    title: "Affordable Luxury",
    icon: <MdAccountBalanceWallet />,
    desc: "Expert project management that respects your budget without compromising quality.",
    color: "indigo"
  },
  {
    title: "Expertise",
    icon: <BsPersonCircle />,
    desc: "Deep technical knowledge meeting client expectations through modern web standards.",
    color: "purple"
  },
  {
    title: "Quality First",
    icon: <FaRegThumbsUp />,
    desc: "100% satisfaction commitment through high-performance digital products.",
    color: "emerald"
  }
];

function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Why Work With Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Innovating Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Digital Presence
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don't just build websites; we build business tools. Our methodology ensures your project is scalable, secure, and stunning.
            </p>
            <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src={SupportImg} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="IT Support" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-blue-200 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-blue-600 text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            ))}
            
            {/* Call to Action Card */}
            <div className="sm:col-span-2 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Ready to start your project?</h4>
                <p className="text-slate-400 text-sm">Let’s build something extraordinary together.</p>
              </div>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95">
                Get a Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
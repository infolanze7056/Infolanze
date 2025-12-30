import React from "react";
import { Lightbulb, Rocket, Users } from "lucide-react"; // Optional: Using Lucide for cleaner icons

function CareerWhyJoin() {
    const features = [
        {
            title: "Real-World Impact",
            desc: "Work on live projects that create measurable value for clients and global businesses.",
            icon: <Rocket className="w-6 h-6 text-blue-600" />,
            color: "bg-blue-50",
        },
        {
            title: "Fast Learning Curve",
            desc: "Mentorship, experimentation, and freedom to grow beyond your comfort zone daily.",
            icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
            color: "bg-indigo-50",
        },
        {
            title: "People-First Culture",
            desc: "Open communication, mutual respect, and a team that grows together through collaboration.",
            icon: <Users className="w-6 h-6 text-cyan-600" />,
            color: "bg-cyan-50",
        },
    ];

    return (
        <section className="relative overflow-hidden  bg-gradient-to-b from-white via-[#f6f9ff] to-[#eef4ff] py-24">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="relative max-w-7xl mx-auto lg:px-28 md:px-20 px-5">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20">
                    {/* <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Hiring Innovators
          </span> */}
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Hiring Innovators
                    </span>

                    <h2 className="lg:text-5xl text-3xl font-black text-slate-900 leading-tight">
                        Build Your Career with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Purpose & Passion
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-slate-500 text-lg leading-relaxed">
                        At Infolanze, we empower individuals to grow through real work,
                        meaningful collaboration, and continuous learning — not shortcuts.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 
                         shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                         hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
                         hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Container */}
                            <div className={`relative z-10 w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 
                              group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                {item.icon}
                            </div>

                            <h3 className="relative z-10 text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>

                            <p className="relative z-10 mt-4 text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Decorative Corner Element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500 -z-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CareerWhyJoin;
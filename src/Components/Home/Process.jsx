import React from "react";
import {
    MdOutlineAnalytics,
    MdDeveloperMode,
    MdRocketLaunch,
} from "react-icons/md";
import { IoAnalyticsSharp, IoConstructSharp } from "react-icons/io5";
import { FcAcceptDatabase } from "react-icons/fc";
import { FiCheckCircle } from "react-icons/fi";
import TreeImg from "../../Images/ecommerce-creativity-app-tree.png";

const steps = [
    { icon: <MdOutlineAnalytics />, label: "Analyse", top: "0%", left: "52%" },
    { icon: <MdDeveloperMode />, label: "Develop", top: "13%", left: "26%" },
    { icon: <IoAnalyticsSharp />, label: "QA", top: "44%", left: "23%" },
    { icon: <FcAcceptDatabase />, label: "UAT", top: "8%", left: "77%" },
    { icon: <MdRocketLaunch />, label: "Launch", top: "30%", left: "88%" },
    { icon: <IoConstructSharp />, label: "Support", top: "49%", left: "88%" },
];

const Process = () => {
    return (
        <section className="relative py-14 overflow-hidden
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

            {/* Glow */}
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/30 blur-[140px] rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-indigo-500/30 blur-[140px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 z-10">

                {/* LEFT CONTENT – UPDATED */}
                <div className="pt-6">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        Our Process
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        A Proven Workflow
                        <br />
                        <span className="text-blue-400">That Delivers Results</span>
                    </h2>

                    <p className="text-blue-100/80 text-lg max-w-lg mb-8">
                        We follow a transparent, step-by-step development process that
                        ensures quality, performance, and long-term scalability for your
                        business.
                    </p>

                    {/* PROCESS POINTS */}
                    <ul className="space-y-4 mb-10">
                        {[
                            "In-depth requirement analysis & planning",
                            "Clean, scalable development practices",
                            "Rigorous QA & user acceptance testing",
                            "Smooth deployment & continuous support",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3 text-blue-100/80">
                                <FiCheckCircle className="text-blue-400 mt-1" />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
            bg-blue-600 text-white font-semibold
            hover:bg-blue-500 transition shadow-lg">
                        Start Your Project
                        <MdRocketLaunch className="text-lg" />
                    </button>
                </div>

                {/* RIGHT TREE */}
                <div className="relative flex justify-center">
                    <img
                        src={TreeImg}
                        alt="Process Tree"
                        className="w-[480px] animate-[floatTree_4s_ease-in-out_infinite]"
                    />

                    {steps.map((step, index) => (
  <div
    key={index}
    className="absolute group"
    style={{
      top: step.top,
      left: step.left,
      animationDelay: `${index * 0.3}s`,
    }}
  >
    {/* ICON */}
    <div
      className="w-14 h-14 rounded-full
        bg-white flex items-center justify-center
        text-2xl text-blue-600
        shadow-[0_0_25px_rgba(59,130,246,0.45)]
        hover:scale-110 transition
        animate-[floatIcon_6s_ease-in-out_infinite]"
    >
      {step.icon}
    </div>

    {/* TOOLTIP */}
    <div
      className="absolute -top-12 left-1/2 -translate-x-1/2
        px-3 py-1.5 rounded-md
        text-xs font-semibold text-white
        bg-black/80 backdrop-blur
        opacity-0 scale-95
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300
        pointer-events-none
        whitespace-nowrap"
    >
      {step.label}

      {/* ARROW */}
      <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-black/80 rotate-45 -translate-x-1/2"></span>
    </div>
  </div>
))}
                </div>
            </div>
        </section>
    );
};

export default Process;

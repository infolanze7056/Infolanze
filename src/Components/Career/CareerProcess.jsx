import React from "react";
import img1 from "../../Images/Tremendous-Transparency.png";
import img2 from "../../Images/Expert-Team-Guidance.png";
import img3 from "../../Images/Superior-Support.png";

function CareerProcess() {
  const steps = [
    {
      title: "CV Submission",
      desc: "We look for curious minds who are passionate about learning, growing, and executing ideas with excellence.",
      img: img1,
    },
    {
      title: "Phone Screening",
      desc: "Great teams multiply value. We seek communicators who adapt fast and grow together.",
      img: img2,
    },
    {
      title: "Skill Assessment",
      desc: "We value unconventional thinking and problem-solving that creates meaningful impact.",
      img: img3,
    },
    {
      title: "Final Interview",
      desc: "Clarity, honesty, and purpose matter. We hire people aligned with our values.",
      img: img3,
    },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6f9ff] to-[#eef4ff]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[450px] h-[450px] bg-indigo-300/10 rounded-full blur-3xl" />

      <svg
        className="absolute top-0 left-0 w-full h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#2563eb"
          fillOpacity="0.05"
          d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,0L0,0Z"
        />
      </svg>

      <div className="relative lg:px-28 md:px-20 px-5 py-28">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          {/* <span className="inline-block mb-5 px-6 py-1 text-xs tracking-[0.2em] uppercase font-semibold text-blue-600 bg-blue-100 rounded-full">
            Hiring Process
          </span> */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
               Hiring Process
            </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Our <span className="text-blue-600">Recruitment Journey</span>
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            A transparent, thoughtful, and people-first approach to building
            exceptional teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mt-24">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group ${
                index % 2 !== 0 ? "lg:mt-16" : ""
              }`}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition" />

              {/* Glass Card */}
              <div className="relative h-full rounded-[26px] p-8 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                {/* Step Number */}
                <div className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mt-8 w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-blue-100">
                  <img src={step.img} alt={step.title} className="w-10 h-10" />
                </div>

                {/* Text */}
                <h3 className="mt-6 text-xl font-semibold text-center text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-center text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CareerProcess;

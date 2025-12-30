import React from "react";
import img1 from "../../Images/6876640.jpg";

function CareerGrowth() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative lg:px-28 md:px-20 px-5 py-24">

        <div className="max-w-3xl mb-14">
           <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Career Growth
            </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready For <span className="text-blue-400">Growth?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image Card */}
          <div className="lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 rounded-3xl blur-2xl"></div>
            <img
              src={img1}
              alt="Career Growth"
              className="relative mx-auto w-[520px] rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="lg:order-1 text-slate-200 text-lg leading-relaxed space-y-6">
            <p>
              We are a bunch of geeky and creative people, who live, breathe,
              and believe in the power of technology to create a world filled
              with innovation — a better world.
            </p>

            <p>
              We seek energetic innovators, thinkers, and doers who dare to
              learn fast, adapt faster, and execute in real time. Developers
              obsessed with perfection, designers fluent in trends, and
              marketers driven by storytelling — if that’s you, you belong
              here.
            </p>

            {/* CTA */}
            <button className="mt-6 inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:-translate-y-1">
              Grow With Us
              <span className="text-lg">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CareerGrowth;

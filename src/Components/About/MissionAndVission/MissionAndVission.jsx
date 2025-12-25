import React from "react";
import mission from "../../../Images/our-mission.svg";
import vission from "../../../Images/our-vision.svg";

const MissionAndVission = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f9fafb]">

      {/* Soft Light Blue Background Blobs */}
      <div className="absolute -top-32 -left-40 w-[520px] h-[520px] rounded-full bg-blue-100/40" />
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] rounded-full bg-blue-200/40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Core Values
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Our Mission & Vision
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            Driving innovation and delivering scalable digital solutions that
            empower businesses globally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {/* Core Values */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><b>Agility:</b> Adapting fast with modern frameworks.</li>
              <li><b>Accountability:</b> Ownership at every level.</li>
              <li><b>Innovation:</b> Breaking boundaries with ideas.</li>
              <li><b>Customer First:</b> Tailored digital solutions.</li>
              <li><b>Integrity:</b> Transparency & ethics.</li>
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
            <img src={mission} alt="Mission" className="w-20 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              Empowering businesses through scalable, secure, and high-performing
              digital solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
            <img src={vission} alt="Vision" className="w-20 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To lead global innovation and shape the future of digital
              transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVission;

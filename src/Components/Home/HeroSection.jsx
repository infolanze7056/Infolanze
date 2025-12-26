import React from "react";
import HeroVideo from "../../Images/zoho-store-banner-illus.mp4"; // your video path
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="lg:flex lg:min-h-screen">

        <div className="lg:w-1/2 w-full h-screen overflow-hidden">
          <video
            src={HeroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center px-6 lg:px-16 py-20 lg:py-0">
          <div className="text-center lg:text-left space-y-6 max-w-lg">

            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Shaping the Future of Digital Enterprise
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Crafting <span className="text-blue-600">Next-Generation Platforms</span> That Transform Businesses Globally
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              At Infolanze Technologies, we engineer transformative digital ecosystems that accelerate innovation and scale effortlessly.
              Leveraging cloud-first architectures, modern frameworks, and deep domain expertise, we turn ambitious visions into enterprise-grade solutions that drive measurable impact worldwide.
            </p>



            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <NavLink
                to="/service/web-development"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Explore Service
              </NavLink>
              <NavLink
                to="/contact"
                className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                Contact Us
              </NavLink>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

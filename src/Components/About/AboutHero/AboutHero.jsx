import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../Images/about-us (1).png";

const AboutHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* SVG Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 py-28">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Content */}
          <div className="relative text-center lg:text-left">

            {/* Decorative SVG Line */}
            <svg
              className="absolute -top-10 left-0 hidden lg:block"
              width="80"
              height="4"
              viewBox="0 0 80 4"
              fill="none"
            >
              <rect width="80" height="4" rx="2" fill="#2563eb" />
            </svg>

            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              About Infolanze
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Engineering{" "}
              <span className="text-blue-600">Digital Solutions</span>{" "}
              That Scale Globally
            </h1>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Infolanze Technologies is a technology-driven software development
              company delivering secure, scalable, and future-ready digital
              products for modern enterprises.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We combine engineering excellence, modern frameworks, and cloud
              infrastructure to transform ideas into impactful technology.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 text-sm
                  font-medium rounded-lg bg-blue-600 text-white
                  hover:bg-blue-700 transition-all shadow-lg"
              >
                Contact for More
                <span>→</span>
              </NavLink>
            </div>
          </div>

          {/* Image with SVG Frame */}
          <div className="relative flex justify-center lg:justify-end">

            {/* SVG Frame */}
            <svg
              className="absolute -top-10 -left-10"
              width="420"
              height="420"
              viewBox="0 0 420 420"
              fill="none"
            >
              <rect
                x="10"
                y="10"
                width="400"
                height="400"
                rx="32"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>

            <div className="relative bg-white rounded-3xl border border-gray-200 p-3 shadow-xl">
              <img
                src={img}
                alt="About Infolanze"
                className="w-full max-w-md rounded-2xl"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;

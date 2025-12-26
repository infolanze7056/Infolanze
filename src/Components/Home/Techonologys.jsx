import React, { useState, useEffect } from "react";
import Data from "./TechnologyData";

const categories = [
  { id: 1, label: "Front End", value: "Front" },
  { id: 2, label: "Back End", value: "Back" },
  { id: 3, label: "Mobile", value: "Mobile" },
  { id: 4, label: "Database", value: "Database" },
  { id: 5, label: "CMS / eCommerce", value: "eCommerce" },
  { id: 6, label: "Cloud", value: "Cloud" },
];

const Technologys = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setItems(Data.filter((i) => i.Category === "Front"));
  }, []);

  const changeCategory = (cat, id) => {
    setItems(Data.filter((i) => i.Category === cat));
    setActive(id);
  };

  // 👉 Center logic for small counts
  const isCentered = items.length <= 5;

  return (
    <section className="relative py-20 overflow-hidden">

      {/* BACKGROUND SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ecfeff" />
          </linearGradient>

          <pattern
            id="hexPattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="40,0 80,20 80,60 40,80 0,60 0,20"
              fill="none"
              stroke="#dbeafe"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgGradient)" />
        <rect width="100%" height="100%" fill="url(#hexPattern)" opacity="0.25" />

        {/* <path
          d="M0,650 C240,600 480,700 720,680 960,660 1200,560 1440,600 L1440,900 L0,900 Z"
          fill="#dbeafe"
          opacity="0.35"
        /> */}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Technology Stack
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-5">
            Explore Our <span className="text-blue-600">Digital Ecosystem</span>
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            A connected system of modern technologies powering scalable and
            high-performance products.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center mb-20">
          <div className="flex flex-wrap gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur shadow-xl border border-blue-200">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => changeCategory(c.value, c.id)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all
                  ${
                    active === c.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* TECH ITEMS */}
        <div
          className={
            isCentered
              ? "flex flex-wrap justify-center gap-12"
              : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 justify-items-center"
          }
        >
          {items.map((tech, i) => (
            <div
              key={i}
              className="group relative w-32 h-32 flex flex-col items-center"
            >
              <svg
                className="absolute w-full h-full -z-10 opacity-40 group-hover:opacity-100 transition"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id={`cardGrad-${i}`}>
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,0 95,25 95,75 50,100 5,75 5,25"
                  fill="none"
                  stroke={`url(#cardGrad-${i})`}
                  strokeWidth="3"
                />
              </svg>

              <div className="w-28 h-28 bg-white rounded-xl shadow-lg border border-blue-200
                flex flex-col items-center justify-center
                transition transform group-hover:-translate-y-3">
                <img src={tech.img} alt={tech.Name} className="w-12 h-12" />
                <span className="text-xs font-semibold text-slate-700 mt-2 text-center">
                  {tech.Name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologys;

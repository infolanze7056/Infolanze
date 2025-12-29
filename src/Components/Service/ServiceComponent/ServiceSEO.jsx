import React from 'react';
import { VscCircleFilled } from "react-icons/vsc";

function ServiceSEO({ imageUrl, title, description, listItems }) {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">

      {/* Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="seoGridRight" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seoGridRight)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full transition-transform hover:scale-105">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
                  SEO Optimization
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] mb-6">
                {title}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {description}
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm group/item hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <VscCircleFilled className="text-sm" />
                  </div>
                  <span className="font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 relative group">

            {/* Blob SVG behind image – right corner touch */}
            <div className="absolute -right-28 -bottom-28 w-[520px] h-[520px] text-blue-600 opacity-[0.06] pointer-events-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.4,-44.7C85.5,-31.4,90.8,-15.7,89.5,-0.8C88.1,14.2,80.1,28.3,70.1,40.1C60.1,51.8,48.1,61.1,34.8,68.4C21.4,75.7,6.7,81.1,-8.5,79.5C-23.7,77.9,-39.4,69.3,-52.1,58.1C-64.8,46.9,-74.5,33,-79.8,17.7C-85.1,2.4,-86,-14.3,-80.4,-29.4C-74.8,-44.5,-62.7,-58,-48.5,-64.9C-34.3,-71.8,-17.2,-72.1,-0.4,-71.4C16.3,-70.7,31.4,-83.6,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-blue-200/30 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            {/* Image Card */}
            <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-200/60">
              <img
                className="rounded-[2rem] w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
                src={imageUrl}
                alt={title}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSEO;

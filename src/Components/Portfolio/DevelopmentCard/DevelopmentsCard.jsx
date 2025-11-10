import React from "react";

const DevelopmentsCard = ({ imageSrc, imageSrcSmall, title, technology }) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
      {/* Large Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Text Overlay (fade out on hover) */}
        <div className="absolute bottom-4 left-4 text-white z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-300 mt-1">Technology: {technology}</p>
        </div>
      </div>

      {/* Floating Small Card (fade in on hover) */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-gray-100 flex items-center gap-3 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-500">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img
            src={imageSrcSmall}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold text-sm">{title}</h4>
          <p className="text-gray-600 text-xs">{technology}</p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentsCard;

import React from "react";

const UiUxHero = () => {
  // 100% WORKING UI/UX design image (Pexels – fast, reliable)
  const UI_IMAGE_URL =
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto lg:px-28 md:px-20 px-5 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--second-color)] leading-tight tracking-tight font-display">
              UI / UX Design
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium font-sans">
              <strong className="font-semibold text-[var(--second-color)]">UI (User Interface):</strong>{" "}
              design focuses on the aesthetics and layout of a digital product, including buttons, icons, spacing, typography, and color schemes. It's about creating visually appealing interfaces that guide users intuitively.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium font-sans">
              <strong className="font-semibold text-[var(--second-color)]">UX (User Experience):</strong>{" "}
              design emphasizes the overall feel and functionality of the product. It involves understanding user needs, creating user journeys, and ensuring the product is easy to use and provides value. UX design considers usability, accessibility, and satisfaction to enhance user interactions and achieve seamless experiences.
            </p>
          </div>

          {/* Image with Hover Effect */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--second-color)] to-transparent opacity-20 rounded-3xl transform rotate-6 scale-95 group-hover:rotate-12 transition-all duration-500"></div>
              <img
                src={UI_IMAGE_URL}
                alt="UI/UX Design"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--second-color)] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxHero;
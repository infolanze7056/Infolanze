import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo-main.webp";
import logo3 from "../../Images/ABSS-LOGO-png.png";
import logo4 from "../../Images/doshion-logo.png";
import logo5 from "../../Images/Quosha-logo.png";
import logo6 from "../../Images/Hydropod_Logo.png";
import logo7 from "../../Images/Betterwatater-logo.png";

const CompanyLogo = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Subtle SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="softGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#ecfeff" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 C240,260 480,140 720,160 960,180 1200,260 1440,200 L1440,0 L0,0 Z"
          fill="url(#softGrad)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Trusted By
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our <span className="text-blue-600">Clients</span>
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            We partner with forward-thinking brands to build impactful digital
            experiences.
          </p>
        </div>

        {/* Logo Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {[...Array(14)].map((_, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex items-center justify-center
                  h-28 rounded-2xl bg-white
                  border border-blue-200
                  shadow-sm hover:shadow-xl
                  transition-all duration-300"
              >
                <img
                  src={logos[index % logos.length]}
                  alt="Client logo"
                  className="
                    max-h-16 max-w-[140px] object-contain
                  
                    group-hover:grayscale-0 group-hover:opacity-100
                    transition duration-300
                  "
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyLogo;

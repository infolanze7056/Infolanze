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

    const logoStyle = {
        width: "140px",      // Increased size
        height: "90px",      // Increased size
        padding: "10px",     // More breathing room
        margin: "0 auto",
        display: "block",
        objectFit: "contain",
        filter: "none"
    };

    return (
        <div className="lg:px-24 md:px-14 sm:px-6 px-6 py-10 sm:py-8 bg-img-2">
            <div className="text-center pb-10 font-family">
                <div className="uppercase text-4xl font-bold text-[--second-color]">
                    Our Client
                </div>
                <div className="text-sm font-medium pt-2 opacity-90">
                    We take pride in serving diverse clients, delivering high-quality website themes that enhance their digital presence and drive success.
                </div>
            </div>
            <div className="text-center py-5">
                <Swiper
                    spaceBetween={20}  // Slightly more space between slides
                    slidesPerView={5}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 15 },
                        375: { slidesPerView: 2, spaceBetween: 15 },
                        480: { slidesPerView: 3, spaceBetween: 18 },
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                >
                    {[...Array(14)].map((_, index) => (  // More slides for smoother loop
                        <SwiperSlide key={index}>
                            <motion.img
                                src={logos[index % logos.length]}
                                className="drop-shadow-lg"
                                style={logoStyle}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CompanyLogo;
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
    const logos = [logo1, logo2, logo3, logo4, logo5,logo6,logo7];

    const logoStyles = [
        { margin: "10px", padding: "5px", width: "90px", filter: "grayscale(0%)" },
        { margin: "15px", paddingTop: "25px", width: "100px", filter: "brightness(90%)" },
        { margin: "5px", paddingTop: "32px", width: "110px", filter: "contrast(120%)" },
        { marginTop: "-3px", marginLeft: "-3px", paddingBottom: "0px", width: "110px", filter: "sepia(30%)" },
        { margin: "12px", paddingTop: "30px", width: "105px", filter: "hue-rotate(30deg)" },
    ];

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
                    spaceBetween={15}
                    slidesPerView={5}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        375: { slidesPerView: 2, spaceBetween: 12 },
                        480: { slidesPerView: 3, spaceBetween: 14 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        768: { slidesPerView: 4, spaceBetween: 15 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <motion.img
                                src={logos[index % logos.length]}
                                className="items-center mx-auto drop-shadow-lg"
                                style={logoStyles[index % logoStyles.length]}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CompanyLogo;

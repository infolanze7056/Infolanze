import React from "react";
import Main from "../../../Images/person.jpg";
import Darshil from "../../../Images/Darshil Patel.jpeg";
import Manish from "../../../Images/Manish.jpg";
import Kush from "../../../Images/KushPhoto.png";
import Nishant from "../../../Images/NishantPhoto.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Founder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const team = [
    {
      img: Darshil,
      name: "Darshil Patel",
      role: "Director / Full-Stack Blockchain Developer",
      desc:
        "Leads Infolanze with innovation, vision, and technical excellence, driving scalable and future-ready solutions.",
      link: "https://www.linkedin.com/in/darshilpatel7056/",
    },
    {
      img: Main,
      name: "Shreya Patel",
      role: "Director / Chief Marketing Head",
      desc:
        "Shapes brand identity and growth through strategic, creative, and data-driven marketing initiatives.",
    },
    {
      img: Nishant,
      name: "Nishant Timbadiya",
      role: "Frontend Developer",
      desc:
        "Crafts clean, responsive, and engaging user interfaces with performance-focused modern web practices.",
    },
    {
      img: Manish,
      name: "Manish Chaudhary",
      role: "Full Stack Developer",
      desc:
        "Builds robust full-stack applications with a focus on scalability, performance, and maintainability.",
    },
    {
      img: Kush,
      name: "Kush Mevada",
      role: "Backend Developer",
      desc:
        "Architects reliable backend systems ensuring speed, security, and seamless data flow.",
      link: "https://kush-mevada.vercel.app",
    },
    {
      img: Main,
      name: "Vishal Chauhan",
      role: "MERN Stack Developer",
      desc:
        "Develops modern web applications by blending efficiency across MongoDB, Express, React, and Node.js.",
    },
    {
      img: Main,
      name: "Meet Agarwal",
      role: "Full Stack Developer",
      desc:
        "Bridges design and functionality to deliver interactive, scalable, and user-centric applications.",
    },
    {
      img: Main,
      name: "Karan Dhamecha",
      role: "React.js Developer",
      desc:
        "Creates dynamic and high-performance React interfaces with refined UI and seamless UX.",
    },
  ];

  return (
    <section className="relative bg-[#f9fafb] py-20 overflow-hidden">

      {/* LIGHT SVG DECORATION */}
      {/* <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 1440 600"
        fill="none"
      >
        <path
          d="M0 140C240 220 480 60 720 100C960 140 1200 240 1440 200"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <path
          d="M0 340C280 300 560 380 840 340C1120 300 1300 380 1440 360"
          stroke="#60a5fa"
          strokeWidth="2"
        />
      </svg> */}

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          The People Who Power <span className="text-blue-600">Infolanze</span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Every member of our team contributes expertise, passion, and commitment
          to deliver outstanding digital solutions.
        </p>

        {/* SLIDER */}
        <div className="mt-14">
          <Slider {...settings}>
            {team.map((member, index) => (
              <div key={index} className="px-4 py-6">
                <div className="relative bg-white rounded-2xl border border-blue-100 p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100"
                    >
                      View →
                    </a>
                  )}

                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-100 mb-4"
                  />

                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>

                  <p className="text-sm font-medium text-blue-600 mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Founder;

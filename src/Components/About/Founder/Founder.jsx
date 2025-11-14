import React from "react";
import Main from "../../../Images/person.jpg";
import Darshil from "../../../Images/Darshil Patel.jpeg";
import Manish from "../../../Images/Manish.jpg";
import Kush from "../../../Images/KushPhoto.png";
import Nishant from "../../../Images/NishantPhoto.png";
// import Vishal from "../../../Images/vishalPhoto.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Founder.css";

const Founder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="relative bg-gradient-to-br from-[#e8f5ff] via-[#f5fcff] to-[#f0faff] py-16 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent mb-3">
          Meet Our Team
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
          A passionate team of innovators, creators, and problem-solvers driving digital excellence.
        </p>

        <Slider {...settings}>
          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <a
                href="https://www.linkedin.com/in/darshilpatel7056/"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-800 text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 shadow-sm"
              >
                View Profile →
              </a>
              <img
                src={Darshil}
                alt="Darshil Patel"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Darshil Patel
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                Director / Full-Stack Blockchain Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Darshil Patel, our CEO at Infolanze, leads with vision and innovation, driving our company towards growth and success in the tech industry.
              </p>
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <img
                src={Main}
                alt="Shreya Patel"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Shreya Patel
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                Director / Chief Marketing Head
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shreya Patel, our Chief Marketing Head, drives strategic initiatives, enhancing brand presence and market reach with innovative and effective marketing campaigns.
              </p>
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <img
                src={Nishant}
                alt="Nishant Timbadiya"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Nishant Timbadiya
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                Frontend Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nishant, Our Frontend Developer, crafts stunning, intuitive user interfaces with cutting-edge web technologies, ensuring exceptional performance.
              </p>
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <img
                src={Manish}
                alt="Manish Chaudhary"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Manish Chaudhary
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                Full Stack Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manish, our Full Stack Developer, specializes in building dynamic and scalable web applications using React.js and Node.js.
              </p>
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <a
                href="https://kush-mevada.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-800 text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 shadow-sm"
              >
                View Profile →
              </a>
              <img
                src={Kush}
                alt="Kush Mevada"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Kush Mevada
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                Backend Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kush, our Backend Developer, builds powerful, scalable server-side systems using modern technologies, ensuring seamless functionality and top-notch performance.
              </p>
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <img
                src={Main}
                alt="Vishal Chauhan"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Vishal Chauhan
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                MERN Stack Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vishal, our MERN Stack Developer, builds modern and scalable web applications,
                blending efficiency and innovation across MongoDB, Express, React, and Node.js.
              </p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <img
                src={Main}
                alt="Meet Agarwal"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Meet Agarwal
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                Full Stack Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Meet, Our Fullstack Developer bridges design and functionality, turning ideas into reliable, interactive web applications while exploring new technologies.
              </p>
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-6 border border-gray-100">
              <img
                src={Main}
                alt="Karan Dhamecha"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Karan Dhamecha
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-3">
                React.js Developer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Karan, our React.js Developer, builds dynamic and responsive web applications
                with elegant UIs and seamless user experiences using React.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Founder;

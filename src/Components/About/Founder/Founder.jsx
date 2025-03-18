import React from "react";
import Main from "../../../Images/person.jpg";
import Darshil from "../../../Images/Darshil Patel.jpeg"
// import Mayur from "../../../Images/Mayur.jpg"
import Manish from "../../../Images/Manish.jpg"
import Kush from "../../../Images/Kush.png"
import Nishant from "../../../Images/Nishant.png"
import FounderCard from "./FounderCard/FounderCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Founder.css";

const Founder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Set centerMode to true
    centerPadding: "0px", // Adjust the value as per your requirement
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="font-family bg-[#e9f6fc] py-10">
      <div className="py-3">
      <h3 className="text-center lg:text-3xl md:text-3xl text-2xl font-bold ">Meet Our Team</h3>
      <p className="text-center lg:text-lg md:text-lg text-sm">
        Discover more about our high performing team
      </p>
      </div>
      <div >
      <Slider {...settings}>
        <FounderCard
          name="Darshil Patel"
          role="Director/Full-Stack Blockchain Developer"
          description="Darshil Patel, our CEO at Infolanze, leads with vision and innovation, driving our company towards growth and success in the tech industry."
          image={Darshil}
          link="https://darshil-patel.vercel.app/"
        />
        <FounderCard
          name="Shreya Patel"
          role="Director/Chief Marketing Head"
          description="Shreya Patel, our Chief Marketing Head, drives strategic initiatives, enhancing brand presence and market reach with innovative and effective marketing campaigns."
          image={Main}
        />
        <FounderCard
          name="Nishant Timbadiya"
          role="Frontend Developer"
          description="Nishant, Our Frontend Developer, crafts stunning, intuitive user interfaces with cutting-edge web technologies, ensuring exceptional performance."
          image={Nishant}
        />
        <FounderCard
          name="Manish Chaudhary"
          role="Full Stack Developer"
          description="Manish, our Full Stack Developer, specializes in building dynamic and scalable web applications using React.js and Node.js."
          image={Manish}
        /> 
        {/* <FounderCard
          name="Mayur Prajapati"
          role="Graphic Designer"
          description="Mayur, our Graphic Designer, creates stunning visuals and impactful designs, ensuring our brand's aesthetic excellence and visual appeal."
          image={Mayur}
        />  */}
        <FounderCard
          name="Kush Mevada"
          role="UI-UX Designer"
          description="Kush, our UI/UX Developer, designs intuitive, user-friendly interfaces, enhancing user experience with innovative and efficient solutions."
          image={Kush}
          link="https://kush-mevada.vercel.app"
        /> 
      </Slider>
      </div>
    </div>
  );
};

export default Founder;

import React from "react";
import Main from "../../../Images/person.jpg";
import Darshil from "../../../Images/Darshil Patel.jpeg"
import Mayur from "../../../Images/Mayur.jpg"
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
    centerPadding: "60px", // Adjust the value as per your requirement
    // autoplay: true, // Set autoplay to true
    // autoplaySpeed: 2000,
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
      <h3 className="text-center text-3xl font-bold ">Meet Our Team</h3>
      <p className="text-center text-2xl">
        Discover more about our high performing team
      </p>
      </div>
      <div >
      <Slider {...settings}>
        <FounderCard
          name="Darshil Patel"
          role="Director/Full-Stack Blockchain Developer"
          description="Hello, I'm Darshil Patel, a fervent blockchain developer with a keen interest in pioneering projects that push the boundaries of innovation."
          image={Darshil}
          link="https://darshil-patel.vercel.app/"
        />
        <FounderCard
          name="Shreya Patel"
          role="Director/Chief Marketing Head"
          description="Hello, I'm John Doe, a passionate designer with a focus on creating visually stunning and user-friendly interfaces."
          image={Main}
        />
        <FounderCard
          name="Manish Chaudhary"
          role="Frontend Developer"
          description="Hello, I'm John Doe, a passionate designer with a focus on creating visually stunning and user-friendly interfaces."
          image={Manish}
        /> 
        <FounderCard
          name="Nishant Timbadiya"
          role="Frontend Developer"
          description="Hello, I'm John Doe, a passionate designer with a focus on creating visually stunning and user-friendly interfaces."
          image={Nishant}
        />
        <FounderCard
          name="Mayur Prajapati"
          role="Backend Developer"
          description="Hello, I'm John Doe, a passionate designer with a focus on creating visually stunning and user-friendly interfaces."
          image={Mayur}
        /> 
        <FounderCard
          name="Kush Mevada"
          role="Backend Developer"
          description="Hello, I'm John Doe, a passionate designer with a focus on creating visually stunning and user-friendly interfaces."
          image={Kush}
        /> 
      </Slider>
      </div>
    </div>
  );
};

export default Founder;

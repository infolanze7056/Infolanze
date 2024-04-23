import React from "react";
import "./AboutHero.css";
import Underline from "../../../Images/angry-underline.svg";

const AboutHero = () => {
  return (
    <>
    <div className="font-family">
      <div className="text-center text-5xl font-bold">About Us</div>
      <img src={Underline} alt="Underline" className="mx-auto about-under" />
      <div className="About pt-10">
        <div className="text-center px-20 text-3xl">
          Infolanze Technologies is in top software development solutions that
          stimulate your business with our comprehensive modern app development
          services. We offer customized digital solutions that will help engage
          your audience in the competitive era. <br />
          We work with the best tools and technologies for iOS, Android, and web
          applications. You can have the most reliable and cost-effective
          next-gen solutions for your requirement by having us as your IT
          outsourcing partner. Our experienced team offers research-based
          insights to enhance software experience. <br />
          We have professionals to fulfil the requirements of the clients in the
          area of:
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutHero;

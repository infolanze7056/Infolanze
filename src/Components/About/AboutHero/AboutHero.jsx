import React from "react";
import "./AboutHero.css";
import img from "../../../Images/about-us (1).png"
import { NavLink } from "react-router-dom";

const AboutHero = () => {
  return (
    <>
    <div className="font-family lg:px-28 md:px-20 px-5 lg:pt-14 md:pt-10 pt-5 lg:pb-24 md:pb-16 pb-5 background-image">
      {/* <div className="text-center text-4xl font-bold">About Us</div>
      <div className="About pt-7">
        <div className="text-center lg:px-40 md:px-20 px-5 aboutus text-sm md:text-lg lg:text-lg"> 
          Infolanze Technologies is in top software development solutions that
          stimulate your business with our comprehensive modern app development
          services. We offer customized digital solutions that will help engage
          your audience in the competitive era.
          
        </div>
        <div className="text-center lg:px- md:px-20 px-5 aboutus pt-3 text-sm md:text-lg lg:text-lg">
          We work with the best tools and technologies for iOS, Android, and web
          applications. You can have the most reliable and cost-effective
          next-gen solutions for your requirement by having us as your IT
          outsourcing partner. Our experienced team offers research-based
          insights to enhance software experience.
        </div>
      </div> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:pb-0 md:pb-5 pb-5"><img className="lg:w-[600px] md:w-[500px] mx-auto" src={img} alt="img" /></div>
          <div className="lg:ps-10 text-center lg:text-start">
            <div className=" lg:text-3xl md:text-3xl text-xl text-[--second-color] pb-2 font-bold">About Us</div>
            <div className="opacity-90 lg:text-base md:text-base text-sm"> 
              Infolanze Technologies is in top software development solutions that
              stimulate your business with our comprehensive modern app development
              services. We offer customized digital solutions that will help engage
              your audience in the competitive era.
              
            </div>
            <div className="opacity-90 lg:text-base md:text-base text-sm pt-3">
              We work with the best tools and technologies for iOS, Android, and web
              applications. You can have the most reliable and cost-effective
              next-gen solutions for your requirement by having us as your IT
              outsourcing partner. Our experienced team offers research-based
              insights to enhance software experience.
            </div>
            <div className="pt-4">
              <NavLink to="/contact" className="text-sm bg-[--second-color] p-2 px-4 text-white rounded-md">Contact For More..</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;

import React from "react";
import "./Career.css";
import img1 from "../../Images/Tremendous-Transparency.png";
import img2 from "../../Images/Expert-Team-Guidance.png";
import img3 from "../../Images/Superior-Support.png";


function CareerProcess() {
  return (
    <div className="font-family">
      <div className="lg:px-28 md:px-20 px-5 py-16">
        <div className="">
          <div className="lg:text-4xl md:text-4xl text-3xl font-semibold uppercase text-center text-[--second-color]">
            Learn Our Recruitment Process
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20 pt-16">
          <div className="bg-[--main-color] shadow-lg p-7 lg:mb-16 md:mb-10">
            <div className="bg-img2 p-5 w-max">
              <img className="w-14 mx-auto" src={img1} alt="test" />
            </div>
            <div className="text-2xl font-semibold pt-7 pb-3">CV Submition</div>
            <div className="">
              We love hiring people who are passionate about their skills and
              career. Someone who is hungry to learn, know and execute.
            </div>
          </div>
          <div className="bg-[--main-color] shadow-lg p-7 lg:mt-16 md:mt-10">
            <div className="bg-img2 p-5 w-max">
              <img className="w-14 mx-auto" src={img2} alt="test" />
            </div>
            <div className="text-2xl font-semibold pt-7 pb-3">
              Phone scoring
            </div>
            <div className="">
              1 plus 1 is 11. That’s the mathematics for Team players who learn
              faster, add more value, and have a fantastic career trajectory.
            </div>
          </div>
          <div className="bg-[--main-color] shadow-lg p-7 lg:mb-16 md:mb-10">
            <div className="bg-img2 p-5 w-max">
              <img className="w-14 mx-auto" src={img3} alt="test" />
            </div>
            <div className="text-2xl font-semibold pt-7 pb-3">
              Skill Assignment
            </div>
            <div className="">
              We encourage a culture that accepts the differences and cultivates
              best with them. Being conventionally unconventional we ought to
              bring out the best with anything we do.
            </div>
          </div>
          <div className="bg-[--main-color] shadow-lg p-7 lg:mt-16 md:mt-10">
            <div className="bg-img2 p-5 w-max">
              <img className="w-14 mx-auto" src={img3} alt="test" />
            </div>
            <div className="text-2xl font-semibold pt-7 pb-3">
              Final Interview
            </div>
            <div className="">
              We love people who have clarity. Honesty is non-negotiable for us
              and something which we always look for before giving an
              opportunity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerProcess;

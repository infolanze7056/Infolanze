import React from "react";
import mission from "../../../Images/our-mission.svg";
import vission from "../../../Images/our-vision.svg";
import "./MissionAndVission.css"

const MissionAndVission = () => {
  return (
    <>  
      <div className="flex flex-col lg:flex-row lg:px-28 md:px-20 px-5 font-family py-10">
        <div className="lg:w-1/2 bg-pink p-6 p-md-5 h-100">
          <h2 className="text-2xl font-bold">Core Values</h2>
          <p className="mt-4">
            <b>Agility:</b> Embracing change and swiftly adapting to veering
            with the dynamic demands of the market is our formula for success.
            With a customer-centric approach, our tech solutions are built to
            survive on robust frameworks that are relevant and effective.
          </p>
          <p className="mt-4">
            <b>Accountability:</b> We hold ourselves accountable and assume
            responsibility for every action or consequence, both individually
            and collectively. This level of persistence enables us to develop a
            benchmark for dependable success and attain excellence.
          </p>
          <p className="mt-4">
            <b>Trailblazing:</b> At the heart of our operations lies the cult
            of groundbreaking innovation and discovery. Our team continuously
            challenges the status quo and seeks endless progress to retain our
            position as tech innovators.
          </p>
          <p className="mt-4">
            <b>Customer First:</b> Our active engagement in client requirements
            enables us to understand their unique needs and deliver bespoke
            solutions that perform exceptionally. From paramount priority to
            customer satisfaction to fostering long-term partnerships, we
            always exceed expectations.
          </p>
          <p className="mt-4">
            <b>Integrity:</b> Our business conduct encompasses unwavering
            honesty, transparency, and upholding ourselves to high ethical
            standards. Hence, every solution delivered is immaculate and
            precise.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:p-4 lg:pt-0 lg:pb-0 md:px-0 py-5" >
          <div className="flex flex-col py-10 mb-4 items-center border-collapse p-4 border shadow">
            <img src={mission} alt="mission" className="w-32 h-auto place-self-start" />
            <div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-2">
                At Infolanze Tech, we believe in empowering businesses
                with complete digital transformation by engineering
                groundbreaking and scalable solutions. Our mission is to tackle
                every tech challenge and pave the path for fresh opportunities
                and positive ROIs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 p-4 border shadow">
            <img src={vission} alt="vission" className="w-32  h-auto place-self-start" />
            <div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-2">
                We believe in charting the path to technological innovation in
                every aspect. From driving business growth to pioneering
                cutting-edge solutions that transform industries, we catalyze
                the tech revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionAndVission;

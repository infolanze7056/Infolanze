import React from "react";
import OneTeam from "../../../Images/team.avif";

const OurTeam = () => {
  return (
    <>
      <div className="font-family lg:px-28 md:px-20 px-5 py-7">
        <h3 className="text-center text-3xl font-bold pb-7">
          One Team, Countless Talents
        </h3>
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 items-center gap-4">
          <div class="">
            <img src={OneTeam} alt="oneteam" className="w-full" />
          </div>
          <div className="">
            <ul className="">
              <li className="pb-3">
              » Teamwork is an art, and we have a great team of skilled
                resources. We have an agile team of web developers, web
                designers, technical experts, and digital marketing experts to
                develop beautiful and smart websites.
              </li>
              <li className="pb-3">
              » Our team is well-versed in inventive technologies and modern-day
                approaches ready to blend their experiences in developing your
                software. With more than a decade of experience in Technology,
                we help businesses with customized web and mobile solutions that
                will help them engage with audiences worldwide.
              </li>
              <li className="pb-3">
              » Our team is known for their long-term, collaborative
                relationships with clients through measurable and well-designed
                solutions. We offer a complete solution from planning,
                development to website maintenance, integration, and actionable
                digital marketing strategies.
              </li>
              <li>» We excel at what we do, and we love every moment of it.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;

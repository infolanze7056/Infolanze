import React from "react";
import OneTeam from "../../../Images/team.avif";

const OurTeam = () => {
  return (
    <>
      <div className="font-family lg:px-28 md:px-20 px-5 py-5">
        <h3 className="text-center text-3xl font-bold py-4">One Team, Countless Talents</h3>    
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="align-items-center  h-100">
            <img src={OneTeam} alt="oneteam" className="w-full" />
          </div>
          <div>
            <p className="text-lg">
              Teamwork is an art, and we have a great team of skilled resources. We
              have an agile team of web developers, web designers, technical
              experts, and digital marketing experts to develop beautiful and smart
              websites.
              <br />
              Our team is well-versed in inventive technologies and modern-day
              approaches ready to blend their experiences in developing your
              software. With more than a decade of experience in Technology, we help
              businesses with customized web and mobile solutions that will help
              them engage with audiences worldwide. <br />
              Our team is known for their long-term, collaborative relationships
              with clients through measurable and well-designed solutions. We offer
              a complete solution from planning, development to website maintenance,
              integration, and actionable digital marketing strategies. <br />
              We excel at what we do, and we love every moment of it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;

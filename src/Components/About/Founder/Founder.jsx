import React from "react";
import "./Founder.css"

const Founder = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 font-family p-3 lg:px-28 md:px-20 px-5 gap-4 pb-10">
        <div className="Card border shadow-lg p-4 rounded-2xl founder animate-slide-in-left px-3">
          <div className="pb-5">
            <h3 className="text-xl font-semibold">Darshil Patel</h3>
            <p className="">Director/Full-Stack Blockchain Developer</p>
          </div>
          <div className="pb-5">
            <p>
              Hello, I'm Darshil Patel, a fervent blockchain developer with a
              keen interest in pioneering projects that push the boundaries of
              innovation. My journey is defined by a commitment to excellence
              and a genuine passion for blockchain technology.
            </p>
          </div>
          <div>
            <p>darshil.infolanze@gmail.com</p>
            <p>+91 7016160435</p>
          </div>
        </div>
        <div className="Card border shadow-lg p-4 rounded-2xl founder animate-slide-in-right px-3">
          <div className="pb-5">
            <h3 className="text-xl font-semibold">Shreya Patel</h3>
            <p>Director/Chief Marketing Head</p>
          </div>
          <div>
            <p className="pb-5">
              Hello, I'm Shreya Patel, a forward-thinking individual pursuing a
              Bachelor's degree in Computer Science from PDEU, leading the charge
              as Marketing Head, bringing a unique blend of technical expertise
              and creative flair to the forefront. My passion for technology is
              coupled with a keen eye for marketing strategies with a commitment
              to pushing boundaries and embracing challenges.
            </p>
          </div>
          <div>
            <p>shreya.infolanze@gmail.com</p>
            <p>+91 9898228284</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;

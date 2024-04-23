import React, { useState } from "react";
import firstImage from "../../../Images/web development.webp";
import "./Skills.css";

const Skills = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };

  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };

  return (
    <>
    <div className="font-family">
      <div className="text-center text-4xl font-bold pt-14 pb-4">Our Technologies</div>
      <div className="flex flex-wrap justify-center">
        <div
          className="w-full sm:w-1/3 p-4 introBottomHealth introBottomCommon"
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
        >
          <div
            className={`bg-gray-200 rounded-lg overflow-hidden shadow-md flip-card ${
              isHovered1 ? "flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={firstImage} alt="Avatar" className="w-full" />
                <h1 className="text-shadow text-xl font-bold text-center">
                  Web Development
                </h1>
              </div>
              <div className="flip-card-back">
                <div className="p-4 text-center">
                  <p className="text-sm text-white-700">
                    We believe in caring along with curing – that is why we want
                    to enable access to healthcare globally through smart
                    technology.
                  </p>
                  <p className="mt-2 flipLink">
                    <a
                      href="https://product.scriptalldna.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visit us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full sm:w-1/3 p-4 introBottomHealth introBottomCommon"
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
        >
          <div
            className={`bg-gray-200 rounded-lg overflow-hidden shadow-md flip-card ${
              isHovered2 ? "flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={firstImage} alt="Avatar" className="w-full" />
                <h1 className="text-shadow text-xl font-bold text-center">
                  App Development
                </h1>
              </div>
              <div className="flip-card-back">
                <div className="p-4 text-center">
                  <p className="text-sm text-white-700">
                    We believe in caring along with curing – that is why we want
                    to enable access to healthcare globally through smart
                    technology.
                  </p>
                  <p className="mt-2 flipLink">
                    <a
                      href="https://product.scriptalldna.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visit us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full sm:w-1/3 p-4 introBottomHealth introBottomCommon"
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
        >
          <div
            className={`bg-gray-200 rounded-lg overflow-hidden shadow-md flip-card ${
              isHovered3 ? "flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={firstImage} alt="Avatar" className="w-full" />
                <h1 className="text-shadow text-xl font-bold text-center">
                  Blockchain
                </h1>
              </div>
              <div className="flip-card-back">
                <div className="p-4 text-center">
                  <p className="text-sm text-white-700">
                    We believe in caring along with curing – that is why we want
                    to enable access to healthcare globally through smart
                    technology.
                  </p>
                  <p className="mt-2 flipLink">
                    <a
                      href="https://product.scriptalldna.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visit us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Skills;

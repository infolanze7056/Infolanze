import React from "react";
import img1 from "../../Images/6876640.jpg"

function CareerGrowth() {
  return (
    <div className="font-family bg-[--main-color]">
      <div className="lg:px-28 md:px-20 px-5 py-16">
        <div>
          <div className="text-4xl font-semibold">Ready For Growth?</div>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="lg:order-2">
              <img className="mx-auto w-[500px]" src={img1} alt="alt" />
            </div>
            <div className="lg:order-1 text-lg">
              <div>
                We are a bunch of geeky and creative people, who live, breathe,
                and believe in the power of technology to create a world with
                innovations - a better world. We are in search of energetic
                innovators, thinkers, and doers who dare to learn fast, adapt
                faster and execute in real-time.
              </div>
              <div className="pt-4">
                The developers who passionately talk about the perfection in
                design and the designers who talk about development trends with
                conviction or a marketer who wants to build up their sphere of
                stories. Think you have got what it takes? With your heartfelt
                desire to be a pioneer in this digital realm, consider joining a
                forward-thinking team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerGrowth;

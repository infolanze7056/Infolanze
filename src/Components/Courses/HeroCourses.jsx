import React from "react";
import Course from "../../Images/course.webp";

const HeroCourses = () => {
  return (
    <div>
      <div className="background-image lg:px-28 md:px-20 px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 md:order-2 lg:order-1">
            <h1 className="font-semibold lg:text-4xl md:text-3xl text-4xl text-[--second-color]">
              Courses
            </h1>
            <p className="py-5">Providing the best learning experience.</p>
            <p className="py-5 text-sm">
              In the digital realm, website, application, and blockchain
              development represent pillars of innovation. Website development
              prioritizes user experience and responsive design, employing
              technologies like HTML5 and CSS3. Application development focuses
              on scalability and security, utilizing frameworks like Flutter for
              cross-platform efficiency. Meanwhile, blockchain development
              revolutionizes industries with decentralized ledgers and smart
              contracts, enhancing transparency and trust. These domains
              converge to shape a dynamic digital landscape, where businesses
              and developers navigate opportunities for growth and
              transformation. Embracing the latest technologies, they propel the
              evolution of digital experiences, fostering connectivity and
              efficiency in an ever-changing world.
            </p>
          </div>
          <div className="order-1 md:order-1 lg:order-2">
            <div className="h-full w-full">
              <img
                src={Course}
                alt="course image"
                className="object-cover h-full w-full pb-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCourses;

import React from "react";
import BlockChain from "../../Images/herosection.webp";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "./HeroSection.css";
import WebImg from "../../Images/web.png";
import AppImg from "../../Images/app.png";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <TECarousel
        // showControls
        showIndicators
        crossfade
        ride="carousel"
        interval={3000}
        prevBtnIcon={
          <>
            <span className="hidden text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="hidden text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full overflow-hidden bg-img after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {/* <img src={Hero1} className="block w-full" alt="..." /> */}
            <div className=" inset-x-[15%] bottom-5 items-center text-black lg:px-36 md:px-24 px-5 py-14">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="pb-5 lg:order-2">
                  <div className="">
                    <img
                      className="w-[500px] mx-auto"
                      src={WebImg}
                      alt="Hero"
                    />
                  </div>
                </div>
                <div className="py-5 lg:order-1 lg:text-start text-center lg:ps-7 font-family">
                  {/* <div className="bg-[--main-color] w-max px-7 rounded-sm mb-3 py-2 text-sm text-gray-900">UI Design</div> */}
                  <div className="text-5xl font-semibold pb-4">
                    Web Design And Development
                  </div>
                  <div className="text-md pb-4">
                    We help our clients to boost the growth of their business by
                    making their online presence with the help of Our Website
                    Desiging & Development Service. At Infolanze Tech, we understand
                    the importance of having a website that is accessible on any
                    device.We specialize in responsive design for optimal user experience.
                  </div>
                  <div className="">
                    <NavLink
                      to="/service/web-development"
                      className="text-white bg-[--second-color] hover:bg-blue-500  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                    >
                      Know More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {/* <img src={Hero2} className="block w-full" alt="..." /> */}
            <div className="inset-x-[15%] bottom-5 text-black lg:px-36 md:px-24 px-5 py-14">
              <div className="grid lg:grid-cols-2  items-center">
                <div className="pb-5 lg:order-2">
                  <div className="">
                    <img
                      className="w-[700px] mx-auto"
                      src={AppImg}
                      alt="Hero"
                    />
                  </div>
                </div>
                <div className="py-5 lg:order-1 lg:text-start text-center lg:ps-7 font-family">
                  <div className="text-5xl font-semibold pb-4">
                    Mobile App Development
                  </div>
                  <div className="text-md pb-4">
                    We are a top-notch custom mobile app development company
                    helps to create next generation Android and iOS hybrid
                    platform solutions with secure coding standards. Our mobile
                    app developers have in depth knowledge and skills in
                    developing customer centric applications.
                  </div>
                  <div className="">
                    <NavLink
                      to="/service/app-development"
                      className="text-white bg-[--second-color] hover:bg-blue-500 rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Know More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {/* <img src={Hero3} className="block w-full" alt="..." /> */}
            <div className="inset-x-[15%] bottom-5 text-black lg:px-36 md:px-24 px-5 py-14">
              <div className="grid lg:grid-cols-2  items-center">
                <div className="pb-5 lg:order-2">
                  <div className="">
                    <img
                      className="w-[630px] mx-auto"
                      src={BlockChain}
                      alt="Hero"
                    />
                  </div>
                </div>
                <div className="py-5 lg:order-1 lg:text-start text-center lg:ps-7 font-family">
                  <div className="text-5xl font-semibold pb-4">
                    Blockchain Development
                  </div>
                  <div className="text-md pb-4">
                    Whether you're seeking enhanced security, transparent
                    transactions, or decentralized applications, we bring a
                    wealth of expertise to tailor solutions that align
                    seamlessly with your business objectives. Partner with us to
                    unlock the full potential of blockchain for your web
                    platform.
                  </div>
                  <div className="">
                  <NavLink
                      to="/service/blockchain"
                      className="text-white bg-[--second-color] hover:bg-blue-500  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                    >
                      Know More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}

export default HeroSection;

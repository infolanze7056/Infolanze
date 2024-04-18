import React from "react";
import { NavLink } from "react-router-dom";
import "../ServiceSection.css";

function ServiceBredcumb({ serviceName, serviceNameB }) {
  return (
    <div className="font-family">
      <div className="pb-20 pt-12">
        <div className="text-center">
          <div className="lg:text-4xl md:text-3xl text-2xl pb-3">{serviceName}</div>
          <div className="bg-[--main-color] lg:p-3 md:p-3 md:px-10 p-2 lg:px-10 px-5 lg:text-sm md:text-sm text-xs rounded-full w-max mx-auto opacity-90 z-50">
            <NavLink className="hover:text-[--second-color]" to="/">Home </NavLink>{serviceNameB}
          </div>
          <div className="absolute w-full top-44 -z-10">
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(37, 170, 255, 0.6" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(37, 170, 255, 0.4)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(37, 170, 255, 0.1)" />
            <use href="#gentle-wave" x="48" y="7" fill="rgb(37, 170, 255)" />
            </g>
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBredcumb;

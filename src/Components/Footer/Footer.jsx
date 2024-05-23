import React from "react";
import {Link } from 'react-router-dom';
import Flogo from "../../Images/Logo 1 (1).webp";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[--main-color] border-t font-family">
      {/* <svg
        id="svg-section-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="37 0 70.54 17.34"
        preserveAspectRatio="none"
        fill="#f5f5f5"
      >
        <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
      </svg> */}
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-0">
        <div className="grid gap-7 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="w-8" src={Flogo} alt="logo" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                InfoLanze
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                InfoLanze Technologies is a reputed IT company in Ahmedabad,
                helping Startups and Fintech by providing result-oriented Web
                and Mobile application development services, and Cloud and
                DevOps consulting.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                We have a team of professional dedicated developers who have
                years of expertise and proficiency to create top-notch apps.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm lg:ps-7 md:ps-5">
          <p className=" font-bold text-lg tracking-wide text-gray-900">
              Services
            </p>
            <div className="text-sm text-gray-800">
             <li className="list-none hover:text-[--second-color]"><Link className="pb-1" to="/service/web-development">Web Design</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/web-development">Web Application Development</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/app-development">Android Application</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/app-development">IOS Application</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/web-development">API Integration & Development</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/web-development">Payment Gateway Integration</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/web-development">E-Commerce Website</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link className="pb-1" to="/service/web-development">Cloud Based ERP Solutions</Link></li> 
             <li className="list-none hover:text-[--second-color]"> <Link to="/service/web-development">Website Maintenance Service</Link></li> 
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-lg font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex text-sm text-gray-800">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:+91 7016160435"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +91 7016160435
              </a>
            </div>
            <div className="flex text-sm text-gray-800">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:infolanze.tech@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                infolanze.tech@gmail.com
              </a>
            </div>
            <div className="flex text-sm text-gray-800">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                A-807, Empire Business Hub, Science City Road, Sola, Ahmedabad,
                380060.
              </a>
            </div>
          </div>

          <div className="md:ps-5">
            <span className="text-lg font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://www.linkedin.com/company/infolanze24/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/infolanze?igsh=OXR2d2I4Mm1mMDZt"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiFillInstagram className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555278311151"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-800">
              We strive to educate and collaborate with like-minded businesses to make a difference environmentally and socially. Let's collaborate.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2023 InfoLanze Tech. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li className="list-none hover:text-[--second-color]">
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li className="list-none hover:text-[--second-color]">
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li className="list-none hover:text-[--second-color]">
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

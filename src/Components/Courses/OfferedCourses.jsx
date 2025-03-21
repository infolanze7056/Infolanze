import React from "react";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";
import Web from "../../Images/Web-Design-and-Development.b2380d273412f3cbaf4f.gif";
import App from "../../Images/Mobile-app-development.3aa540737e7c3c3b50b3.gif";
import Block from "../../Images/Blockcahin.gif";

const OfferedCourses = () => {
  return (
    <div>
      <div className="bg-[--main-color] lg:px-28 md:px-20 px-5 py-10">
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-semibold uppercase text-center text-[--second-color] pb-10">
          We Offered Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          <div className="bg-white lg:p-10 md:p-5 p-4 lg:col-span-5 col-span-6 ">
            <h1 className="lg:text-4xl md:text-2xl text-xl text-black">
              Why you should choose...
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 pt-10 gap-6">
                <div>
                    <h1 className=" text-[--second-color]">| Website Development</h1>
                    <p className="md:text-sm text-sm">Website development focuses on creating visually appealing and
                user-friendly.</p>
                </div>
                <div>
                    <h1 className=" text-[--second-color]">| Application Development</h1>
                    <p className="md:text-sm text-sm">Application development involves building software tailored for
                specific platforms.</p>
                </div>
                <div>
                    <h1 className=" text-[--second-color]">| Blockchain Development</h1>
                    <p className="md:text-sm text-sm"> Blockchain development revolves around decentralized ledger
                systems, enabling transparent and secure transactions.</p>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5 lg:col-span-7 col-span-6">
            
            <div className="bg-white grid grid-cols-6 p-4">
              <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[50px] xl:w-[50px] col-span-1">
              <img src={Web} alt="" className="w-full h-full border border-[#eeeeee]" />
              </div>
              <h1 className="lg:text-xl md:text-lg text-lg text-[--second-color] col-span-5 pl-2 py-1.5 lg:py-2.5">
                Website Development
              </h1>
              <p className="col-span-6 pt-2 lg:pt-1 text-sm">
                Website development focuses on creating visually appealing and
                user-friendly online platforms using technologies like HTML,
                CSS, and JavaScript.
              </p>
            </div>

            <div className="bg-white grid grid-cols-6 p-4">
              <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[50px] xl:w-[50px] col-span-1">
              <img src={App} alt="" className="w-full h-full border border-[#eeeeee]"  />
              </div>
              <h1 className="lg:text-xl md:text-lg text-lg text-[--second-color] col-span-5 pl-2 py-1.5 lg:py-2.5">
                Application Development
              </h1>
              <p className="col-span-6 pt-2 lg:pt-1 text-sm">
                Application development involves building software tailored for
                specific platforms, prioritizing scalability and security.
              </p>
            </div>

            <div className="bg-white grid grid-cols-6 p-4">
              <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[50px] xl:w-[50px] col-span-1">
              <img src={Block} alt="" className="w-full h-full border border-[#eeeeee]"/>
              </div>
              <h1 className="lg:text-xl md:text-lg text-lg text-[--second-color] col-span-5 pl-2 py-1.5 lg:py-2.5">
                Blockchain Development
              </h1>
              <p className="col-span-6 pt-2 lg:pt-1 text-sm">
                Blockchain development revolves around decentralized ledger
                systems, enabling transparent and secure transactions through
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferedCourses;

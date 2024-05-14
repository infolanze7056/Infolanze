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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="bg-white p-10">
            <h1 className="lg:text-4xl md:text-4xl text-xl text-black">
              Why you should choose...
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 pt-10 gap-6">
                <div>
                    <h1 className=" text-[--second-color]">| Website Devlopment</h1>
                    <p>Website development focuses on creating visually appealing and
                user-friendly.</p>
                </div>
                <div>
                    <h1 className=" text-[--second-color]">| Application Devlopment</h1>
                    <p>Application development involves building software tailored for
                specific platforms.</p>
                </div>
                <div>
                    <h1 className=" text-[--second-color]">| Blockchain Devlopment</h1>
                    <p> Blockchain development revolves around decentralized ledger
                systems, enabling transparent and secure transactions.</p>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
            <div className="bg-white grid grid-cols-3 p-5">
              {/* <MdOutlineWeb className="col-span-1 text-6xl" /> */}
              <img src={Web} alt="" className="w-[60px] h-[60px]" />
              <h1 className="lg:text-xl md:text-xl text-xl text-[--second-color] col-span-2">
                Website Devlopment
              </h1>
              <p className="col-span-3 text-sm">
                Website development focuses on creating visually appealing and
                user-friendly online platforms using technologies like HTML,
                CSS, and JavaScript.
              </p>
            </div>

            <div className="bg-white grid grid-cols-3 p-5">
              {/* <FaAppStoreIos className="col-span-1 text-6xl" /> */}
              <img src={App} alt="" className="w-[60px] h-[60px]"  />
              <h1 className="lg:text-xl md:text-xl text-xl text-[--second-color] col-span-2">
                Application Devlopment
              </h1>
              <p className="col-span-3 text-sm">
                Application development involves building software tailored for
                specific platforms, prioritizing scalability and security.
              </p>
            </div>

            <div className="bg-white grid grid-cols-3 p-5">
              {/* <SiHiveBlockchain className="col-span-1 text-6xl" /> */}
              <img src={Block} alt="" className="w-[60px] h-[60px]"/>
              <h1 className="lg:text-xl md:text-xl text-xl text-[--second-color] col-span-2">
                Blockchain Devlopment
              </h1>
              <p className="col-span-3 text-sm">
                Blockchain development revolves around decentralized ledger
                systems, enabling transparent and secure transactions through
                technologies like smart contracts and consensus mechanisms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferedCourses;

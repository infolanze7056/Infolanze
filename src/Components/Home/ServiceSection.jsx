import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBug } from "react-icons/fa";

function ServiceSection() {
  return (
    <div>
      <div className="lg:px-24 md:px-14 px-4 py-10 pb-20 bg-[#e9f6fc]">
        <div className="text-center pb-10 font-family">
          <div className="uppercase text-4xl font-bold text-[#25a9e0]">Our Services</div>
          <div className="text-sm font-medium pt-2 opacity-90">
            We turns Your Throughts into Reality with Our Srvices.
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 px-3">
          <div className="p-4 bg-white rounded-lg hover:shadow-xl">
            <div className=" border-2 border-dashed border-spacing-5 hover:border-blue-500 text-center bg-white p-5 rounded-lg h-full font-family">
              <div className="py-5">
                <CgWebsite className="bg-[#eaf7fc] text-8xl p-5 mx-auto rounded-lg" />
              </div>
              <div className="text-xl pb-2 pt-4 font-semibold">
                Website Desiging
              </div>
              <div className="text-sm">
                Seamlessly blending cutting-edge technologies, intuitive design,
                and unparalleled functionality, we empower your business to
                thrive in the digital landscape.
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg hover:shadow-xl">
            <div className=" border-2 border-dashed border-spacing-5 hover:border-blue-500 text-center bg-white p-5 rounded-lg h-full font-family">
              <div className="py-5">
                <FaAppStore className="bg-[#eaf7fc] text-8xl p-5 mx-auto rounded-lg" />
              </div>
              <div className="text-xl pb-2 pt-4 font-semibold">
                Web Application Development
              </div>
              <div className="text-sm">
                Experience innovation with every click as we redefine user
                experiences and set new benchmarks for performance.
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg hover:shadow-xl">
            <div className=" border-2 border-dashed border-spacing-5 hover:border-blue-500 text-center bg-white p-5 rounded-lg h-full font-family">
              <div className="py-5">
                <FaBug className="bg-[#eaf7fc] text-8xl p-5 mx-auto rounded-lg" />
              </div>
              <div className="text-xl pb-2 pt-4 font-semibold">
                Software Development
              </div>
              <div className="text-sm">
                From your innovetive business idea to intutive, Appelling &
                perfect Android and Iphone mobile apps.
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg hover:shadow-xl">
            <div className=" border-2 border-dashed border-spacing-5 hover:border-blue-500 text-center bg-white p-5 rounded-lg h-full font-family">
              <div className="py-5">
                <IoSettingsOutline className="bg-[#eaf7fc] text-8xl p-5 mx-auto rounded-lg" />
              </div>
              <div className="text-xl pb-2 pt-4 font-semibold">
                BlockChain Development
              </div>
              <div className="text-sm">
                Elevate your business with our cutting-edge Blockchain
                Development Services.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;

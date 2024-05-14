import React from 'react'
import { MdOutlineAnalytics } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoConstructSharp } from "react-icons/io5";
import { MdRocketLaunch } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
// import { IoArrowForwardCircleSharp } from "react-icons/io5";


function Process() {
  return (
    <div>
    <div className="lg:px-36 md:px-24 px-4 py-10 bg-[#e9f6fc] font-family">
        <div className="text-center pb-10">
            <div className="uppercase text-4xl font-bold text-[--second-color]">Our Process</div>
            <div className="text-sm font-medium pt-2 opacity-90">We are with you always...From analysis of your requirement to Maintenance & Support phase.</div>
        </div>
        <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-10 px-5 lg:text-left md:text-left text-center py-5'>
            <div>
                <div className="">
                    <MdOutlineAnalytics className="bg-white text-8xl p-5 rounded-lg lg:mx-0 md:mx-0 mx-auto" />
                </div>
                <div className='text-xl font-semibold py-1'>Analyse</div>
                <div className='text-sm'>Whether new design or restructuring, requirement analysis is a critical initial step in website development.</div>
            </div>
            <div className='lg:pt-16 md:pt-16'>
                <div className="">
                    <MdDeveloperMode className="bg-white text-8xl p-5 rounded-lg lg:mx-0 md:mx-0 mx-auto" />
                </div>
                <div className='text-xl font-semibold py-1'>Develop</div>
                <div className='text-sm'>Web development is the most important work to place your business higher.</div>
            </div>
            <div>
                <div className="">
                    <IoAnalyticsSharp className="bg-white text-8xl p-5 rounded-lg lg:mx-0 md:mx-0 mx-auto" />
                </div>
                <div className='text-xl font-semibold py-1'>Quality Assurance</div>
                <div className='text-sm'>Quality assuranceis an important step in the website development process and, by all means, should not be skipped.</div>
            </div>
            <div className='lg:pt-16 md:pt-16'>
                <div className="">
                    <FcAcceptDatabase className="bg-white text-8xl p-5 rounded-lg lg:mx-0 md:mx-0 mx-auto" />
                </div>
                <div className='text-xl font-semibold py-1'>User Acceptance</div>
                <div className='text-sm'>User acceptance testing certifies the system's alignment with agreed-upon requirements, conducted by the client.</div>
            </div>
            <div>
                <div className="">
                    <MdRocketLaunch className="bg-white text-8xl p-5 rounded-lg lg:mx-0 md:mx-0 mx-auto" />
                </div>
                <div className='text-xl font-semibold py-1'>launch</div>
                <div className='text-sm'>Finally..!!! Launching a Website or Web application..!!! All processes are done just to reach to this level.!!</div>
            </div>
            <div className='lg:pt-16 md:pt-16'>
                <div className="">
                    <IoConstructSharp className="bg-white text-8xl p-5 rounded-lg lg:mx-0 md:mx-0 mx-auto" />
                </div>
                <div className='text-xl font-semibold py-1'>Maintain & Support</div>
                <div className='text-sm'>Just likea house or a business, a website needs to be secure nad regularly maintained.</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Process
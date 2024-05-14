import React from 'react'
import "./ServiceSection.css";
import { NavLink } from 'react-router-dom';
import img1 from "../../Images/service-image1.png";
import img2 from "../../Images/service-image2.png";
import img3 from "../../Images/service-image6.png";
import img4 from "../../Images/service-image4.png";
import img5 from "../../Images/service-image5.png";
import ServiceBredcumb from './ServiceComponent/ServiceBredcumb';


function ServiceMain() {
  return (
    <div className='font-family '>
    <ServiceBredcumb
        serviceName="Service"
      />
        <div className='lg:px-28 md:px-20 px-5 lg:py-10 md:pb-10 pb-10 servicemain'>
            <div className='text-center'>
                <div className='w-max bg-[--main-color] text-sm p-2 rounded-full px-5 text-[--second-color] mx-auto'>Our Solutions</div>
                <div className='text-3xl font-semibold pt-3 pb-2'>Our Services</div>
                <div className='max-w-xl mx-auto'>Infolanze Tech offers a wide range of services that help businesses to improve their operational efficiency, reduce costs, and drive growth.</div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-10'>
                <NavLink to="/service/ui-ux" className='border p-7 rounded-md shadow-md bg-white hover:cursor-pointer'>
                    <div><img className='w-36 h-36' src={img1} alt="img" /></div>
                    <div className='pt-4 text-lg font-semibold'>UI - UX Design</div>
                    <div className='text-sm text-gray-700'>UI-UX design focuses on creating intuitive, visually appealing interfaces that enhance user interaction and overall experience across platforms.</div>
                </NavLink>
                <NavLink to="/service/web-development" className='border p-7 rounded-md shadow-md bg-white'>
                    <div><img className='w-40' src={img2} alt="img" /></div>
                    <div className='pt-4 text-lg font-semibold'>Web Development</div>
                    <div className='text-sm text-gray-700'>Web development builds sites or apps with diverse tech to achieve functionality, interactivity, and accessibility goals.</div>
                </NavLink>
                <NavLink to="/service/app-development" className='border p-7 rounded-md shadow-md bg-white'>
                    <div><img className='w-44' src={img3} alt="img" /></div>
                    <div className='pt-4 text-lg font-semibold'>App Development</div>
                    <div className='text-sm text-gray-700'>App development involves designing, coding, and testing software applications for mobile devices or desktop platforms to meet specific user needs.</div>
                </NavLink>
                <NavLink to="/service/blockchain" className='border p-7 rounded-md shadow-md bg-white'>
                    <div><img className='w-40' src={img4} alt="img" /></div>
                    <div className='pt-4 text-lg font-semibold'>Blockchain Development</div>
                    <div className='text-sm text-gray-700'>Blockchain dev creates decentralized ledgers using cryptography for secure peer-to-peer transactions and transparent data storage, fostering trust.</div>
                </NavLink>
                <NavLink to="/service/seo" className='border p-7 rounded-md shadow-md bg-white'>
                    <div><img className='w-48' src={img5} alt="img" /></div>
                    <div className='pt-4 text-lg font-semibold'>Search Engine Optimizaton</div>
                    <div className='text-sm text-gray-700'>SEO services optimize websites to rank higher in search engine results, improving visibility, traffic, and ultimately, online business success.</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ServiceMain;
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../ServiceSection.css";

function ServiceHero({title, description}) {
  return (
    <div className='font-family herosection'>
        <div className='px-5 md:px-20 lg:px-52 lg:pb-28 lg:pt-20 md:pb-28 md:pt-20 pb-28 pt-10'>
            <div className='text-center'>
                <div className='lg:text-6xl md:text-4xl text-2xl font-semibold mx-auto max-w-3xl lg:pb-7 md:pb-7 pb-4'>{title}</div>
                <div className='lg:text-lg md:text-lg text-sm pb-7'>{description}</div>
                <div><NavLink to="/contact"><button className='flex mx-auto items-center text-white p-3 px-5 rounded bg-[--second-color] hover:cursor-pointer'>Let's Discuss Your Requirement&nbsp;<FaRegArrowAltCircleRight /></button></NavLink></div>
            </div>
        </div>
    </div>
  )
}

export default ServiceHero;
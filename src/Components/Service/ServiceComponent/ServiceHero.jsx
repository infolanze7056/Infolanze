import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../ServiceSection.css";

function ServiceHero({title, description}) {
  return (
    <div className='font-family herosection'>
        <div className='px-5 md:px-20 lg:px-52 lg:pb-28 lg:pt-20 md:pb-44 md:pt-40 pb-28 pt-16'>
            <div className='text-center'>
                <div className='lg:text-6xl md:text-6xl text-4xl font-semibold mx-auto max-w-3xl pb-7'>{title}</div>
                <div className='text-lg pb-7'>{description}</div>
                <div><NavLink to="/contact"><button className='flex mx-auto items-center text-white p-3 px-5 rounded bg-[--second-color] hover:cursor-pointer'>Let's Discuss Your Requirement&nbsp;<FaRegArrowAltCircleRight /></button></NavLink></div>
            </div>
        </div>
    </div>
  )
}

export default ServiceHero;
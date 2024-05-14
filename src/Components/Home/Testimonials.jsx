import React from 'react'
import "./HeroSection.css"
import person_1 from "../../Images/Screenshot 2024-05-14 180229.png";
import image1 from "../../Images/Screen-Shot-2023-12-04.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

function Testimonials() {
  return (
    <div className='bg-img font-family'>
        <div className='py-10 lg:px-36 md:px-20 px-5'>
            <div className='text-center'>
                <div className='uppercase text-3xl font-bold text-[--second-color]'>Testimonials</div>
                <div className='text-sm font-medium pt-1 opacity-90'>Words of praise by my valuable clients.</div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 py-10'>
                <div className='border hover:border-blue-300 rounded-lg shadow-lg hover:shadow-xl p-7 bg-white z-10'>
                    <div className='flex items-center'>
                        <img className='w-14 rounded-full' src={image1} alt="person" />
                        <div className='ps-3'>
                        <div className=' font-bold'>Sameer Purain</div>
                        <div className='flex text-yellow-400'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                    <div className='pt-4 text-sm'>The right skills make so much of a difference. Infolanze Technologies has the right mix of creative skill, technical perfection and prompt action,perfection and prompt action.</div>
                </div>
                <div className='border hover:border-blue-300 rounded-lg shadow-lg hover:shadow-xl p-7 bg-white z-10'>
                    <div className='flex items-center'>
                        <img className='w-14 rounded-full' src={person_1} alt="person" />
                        <div className='ps-3'>
                        <div className=' font-bold'>Tony Lehtimaki</div>
                        <div className='flex text-yellow-400'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                        </div>
                    </div>
                    <div className='pt-4 text-sm'>Their team of experts jotted down every need of mine and turned them into a high performing web application within no time. Just superb!</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react'
import "./HeroSection.css"
import person_1 from "../../Images/person.jpg";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

function Testimonials() {
  return (
    <div className='bg-img font-family'>
        <div className='py-10 lg:px-36 md:px-20 px-5'>
            <div className='text-center'>
                <div className='uppercase text-3xl font-bold text-[#25a9e0]'>Testimonials</div>
                <div className='text-sm font-medium pt-1 opacity-90'>Words of praise by my valuable clients.</div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 py-10'>
                <div className='border hover:border-blue-300 rounded-lg shadow-lg hover:shadow-xl p-7 bg-white z-10'>
                    <div className='flex items-center'>
                        <img className='w-14 rounded-full' src={person_1} alt="person" />
                        <div className='ps-3'>
                        <div className=' font-bold'>Josh Brollins</div>
                        <div className='flex text-yellow-400'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                        </div>
                    </div>
                    <div className='pt-4 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptatem ullam error est! Ut hic, impedit amet veniam provident sint molestias blanditiis sunt suscipit ducimus magni est aperiam commodi velit.</div>
                </div>
                <div className='border hover:border-blue-300 rounded-lg shadow-lg hover:shadow-xl p-7 bg-white z-10'>
                    <div className='flex items-center'>
                        <img className='w-14 rounded-full' src={person_1} alt="person" />
                        <div className='ps-3'>
                        <div className=' font-bold'>Tosh Brollins</div>
                        <div className='flex text-yellow-400'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                        </div>
                    </div>
                    <div className='pt-4 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptatem ullam error est! Ut hic, impedit amet veniam provident sint molestias blanditiis sunt suscipit ducimus magni est aperiam commodi velit.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react';
import { IoCheckboxSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaHandshakeAngle,FaBusinessTime } from "react-icons/fa6";
import { FaUserTie,FaChalkboardTeacher } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiMiniUserGroup,HiMiniBuildingOffice } from "react-icons/hi2";

const KeypointCourse = () => {
  return (
    <div>
      <div className='bg-[--main-color] lg:px-28 md:px-20 px-5 py-10'>
      <h1 className="lg:text-4xl md:text-4xl text-3xl font-semibold uppercase text-center text-black opacity-85 pb-12">
           Key Highlights
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div>
          <RiTeamFill className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Limited Opening</h1>
          </div>
          <div>
          <FaHandshakeAngle className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Personalised Attention</h1>
          </div>
          <div>
          <FaUserTie className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Highly Qualified Devlopers</h1>
          </div>
          <div>
          <FaBusinessTime className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Flexible Timings</h1>
          </div>
          <div>
          <HiMiniUserGroup className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Interactive Learning</h1>
          </div>
          <div>
          <BsPersonWorkspace className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Live Projects</h1>
          </div>
          <div>
          <HiMiniBuildingOffice className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>career Support</h1>
          </div>
          <div>
          <FaChalkboardTeacher className='m-auto text-5xl text-[--second-color] pb-3' />
          <h1 className='text-lg text-black text-center'>Job Oriented Training</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeypointCourse

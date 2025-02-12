import React from 'react';
import Kiku from '../../../../../Images/kikuu-app.png';
import Attnd from '../../../../../Images/attnd-app.png';
import Task from '../../../../../Images/task-app.png';
import Oda from '../../../../../Images/oda-app.png';

const AppProjects = () => {
  return (
    <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
        <h1 className='text-xl lg:text-4xl text-[--second-color] font-semibold pb-8 text-center'>App Development Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>
       
       <a href='https://play.google.com/store/apps/details?id=com.kikuu' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Kiku} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>Kikuu Shoping</h1>
            </div>
        </div>
        </a>
        
        <a href='https://play.google.com/store/apps/details?id=com.trillionbits.attndadmin' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Attnd} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>Attnd:Employee Management </h1>
            </div>
        </div>
        </a>
        
        <a href='https://play.google.com/store/apps/details?id=com.fenchtose.reflog' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Task} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>Taskito</h1>
            </div>
        </div>
        </a>
       
        <a href='https://play.google.com/store/apps/details?id=com.yyinedu.pigeon' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Oda} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>ODA Class</h1>
            </div>
        </div>
        </a>
        
      </div>
    </div>
  )
}

export default AppProjects

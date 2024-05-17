import React from 'react'
import projectImg from '../../../../../Images/UI&UX.jpg'

const UiUxProjects = () => {
  return (
    <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
        <h1 className='lg:text-4xl text-[--second-color] font-semibold pb-8 text-center'>UI / UX Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-5'>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={projectImg} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>nnovateNook Apps</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={projectImg} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>AppXplorium</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={projectImg} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>NovelWave Tech</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={projectImg} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>Pioneera Apps</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={projectImg} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>QuirkApp Solutions</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={projectImg} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>Appfinity Innovations</h1>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default UiUxProjects

import React from 'react'
// import Web from '../../../../../Images/web-design.jpg';
import xbeat from "../../../../../Images/x-beat.png"
import flowcart from "../../../../../Images/flow-cart.png"
import fastpizza from "../../../../../Images/fast-pizza.png"

const WebProjects = () => {
  return (
    <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
        <h1 className='text-xl lg:text-4xl text-[--second-color] font-semibold pb-8 text-center'>Web Devlopment Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>
       <a href='https://demo-x-beat.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={xbeat} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>X-BEAT</h1>
            </div>
        </div>
        </a>
        <a href='https://demo-flowycart.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={flowcart} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>FLOWY CART</h1>
            </div>
        </div>
        </a>
        <a href='https://react-node-pizza-store.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={fastpizza} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>FAST PIZZA</h1>
            </div>
        </div>
        </a>
        {/* <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Web} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>PixelPioneers Inc</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Web} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>TechThrive Solutions</h1>
            </div>
        </div>
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={Web} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-xl rounded-b-3xl p-2'>
                <h1>InfinityInk Design</h1>
            </div>
        </div>  */}
      </div>
    </div>
  )
}

export default WebProjects

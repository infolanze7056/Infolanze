import React from 'react'
// import Web from '../../../../../Images/web-design.jpg';
import xbeat from "../../../../../Images/x-beat.png"
import flowcart from "../../../../../Images/flowy-cart.png"
import fastpizza from "../../../../../Images/fast-pizza.png"
import shopit from "../../../../../Images/shopit.png"
import beach from "../../../../../Images/beach.png"
import teaofassam from "../../../../../Images/teaofassam.png"

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
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>X-BEAT</h1>
            </div>
        </div>
        </a>
        <a href='https://demo-flowycart.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={flowcart} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>FLOWY CART</h1>
            </div>
        </div>
        </a>
        <a href='https://react-node-pizza-store.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={fastpizza} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>FAST PIZZA</h1>
            </div>
        </div>
        </a>
        <a href='https://demo-shop-it.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={shopit} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>SHOP IT</h1>
            </div>
        </div>
        </a>
        <a href='https://demo-resort.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={beach} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>BEACH RESORT</h1>
            </div>
        </div>
        </a>
        <a href='https://demo-tea-of-assam.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={teaofassam} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>TEA OF ASSAM</h1>
            </div>
        </div>
        </a>
      </div>
    </div>
  )
}

export default WebProjects

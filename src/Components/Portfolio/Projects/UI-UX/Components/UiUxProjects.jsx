import React from 'react'
import xbeat from '../../../../../Images/xbeatnew.png'
import flowycart from '../../../../../Images/flowy-cart-ui-ux.png'
import fastpizza from '../../../../../Images/fast-pizza-ui-ux.png'
import shopit from '../../../../../Images/shopitnew.png'
import beach from '../../../../../Images/beachnew.png'
import teamofassam from '../../../../../Images/teaofassamnew.png'

const UiUxProjects = () => {
  return (
    <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
        <h1 className='text-xl lg:text-4xl text-[--second-color] font-semibold pb-8 text-center'>UI / UX Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>
      
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={xbeat} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-base rounded-b-3xl p-2'>
                <h1>X-BEAT</h1>
            </div>
        </div>
        
        
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={flowycart} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>FLOWY-CART</h1>
            </div>
        </div>
        
        
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={fastpizza} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>FAST-PIZZA</h1>
            </div>
        </div>
        
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={shopit} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>SHOP IT</h1>
            </div>
        </div>
       
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={beach} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>BEACH RESORT</h1>
            </div>
        </div>

        
        <div className='shadow-2xl rounded-3xl border border-[#eee]'>
            <div className='relative m-auto overflow-hidden rounded-t-3xl'>
            <img src={teamofassam} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
            </div>
            <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                <h1>TEA OF ASSAM</h1>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default UiUxProjects

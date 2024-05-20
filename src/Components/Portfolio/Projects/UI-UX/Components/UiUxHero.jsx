import React from 'react'
import UI from '../../../../../Images/UI  & Ux.png'

const UiUxHero = () => {
  return (
    <div>
      <div className='background-image lg:px-28 md:px-20 px-5 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center'>
          <div className='order-2 lg:order-1 lg:items-center'>
        <h1 className='text-[--second-color] text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pb-2'>
          UI / UX Design
        </h1>
        <p className='py-2'><b>UI (User Interface) :</b> design focuses on the aesthetics and layout of a digital product, including buttons, icons, spacing, typography, and color schemes. It's about creating visually appealing interfaces that guide users intuitively.</p>
        <p className='py-2'><b>UX (User Experience) : </b> design, on the other hand, emphasizes the overall feel and functionality of the product. It involves understanding user needs, creating user journeys, and ensuring the product is easy to use and provides value.UX design considers usability, accessibility, and satisfaction to enhance user interactions and achieve seamless experiences.</p>
        </div>
        <div className='order-1 lg:order-2'>
          <div className='w-full h-full pb-3 lg:pb-0'>
            <img src={UI} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UiUxHero

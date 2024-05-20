import React from 'react';
import Web from '../../../../../Images/web-design.jpg';
const WebHero = () => {
  return (
    <div>
      <div className='background-image lg:px-28 md:px-20 px-5 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center'>
          <div className='order-2 lg:order-1 lg:items-center'>
        <h1 className='text-[--second-color] text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pb-2'>
          Web Devlopment
        </h1>
        <p className='py-1'>
        Web development is the process of building and maintaining websites, involving a combination of programming, design, and content creation to produce functional, efficient, and user-friendly online experiences. It encompasses a broad range of tasks and skills, divided into two main areas: front-end development and back-end development.Front-end and Back-end development create a cohesive and fully functional website. Web development also involves ongoing maintenance and updates to ensure the site remains secure, performs well, and continues to meet user needs.
</p>
        </div>
        <div className='order-1 lg:order-2'>
          <div className='w-full h-full pb-3 lg:pb-0'>
            <img src={Web} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WebHero

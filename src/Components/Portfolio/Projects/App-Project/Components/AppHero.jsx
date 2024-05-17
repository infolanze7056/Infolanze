import React from 'react'
import App from  '../../../../../Images/appdev.jpg'

const AppHero = () => {
  return (
    <div>
      <div className='background-image lg:px-28 md:px-20 px-5 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center'>
          <div className='order-2 lg:order-1 lg:items-center'>
        <h1 className='text-[--second-color] text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pb-2'>
          App Devlopment
        </h1>
        <p className='py-2'>
App development is the process of creating software applications designed to run on mobile devices such as smartphones and tablets, as well as desktop platforms. This multifaceted process involves several stages, from concept and design to coding, testing, and deployment. App development is divided into three main categories: native, web, and hybrid apps.app development focuses on building applications for specific operating systems, such as iOS or Android, using languages like Swift or Objective-C for iOS, and Java or Kotlin for Android</p>
               </div>
        <div className='order-1 lg:order-2'>
          <div className='w-full h-full'>
            <img src={App} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AppHero

import React from 'react'

const UiUxABout = () => {
  return (
    <div>
      <div className='bg-[--main-color] lg:px-28 md:px-20 px-5 py-10'>
        <h1 className='lg:text-4xl text-xl text-[--second-color] font-semibold pb-8 text-center'>UI / UX Design Tools</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:items-center gap-6'>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2'>
                    <img src="https://uxtools.co/img/database/logos/figma.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Figma</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://uxtools.co/img/database/logos/adobe-xd.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Adobe XD</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://uxtools.co/img/database/logos/sketch.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Sketch</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://uxtools.co/img/database/logos/adobe-illustrator.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Adobe illustrator</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://uxtools.co/img/database/logos/adobe-photoshop.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Adobe Photoshop</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://uxtools.co/img/database/logos/axure.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Axure</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://uxtools.co/img/database/logos/framer.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Framer</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2'>
                    <img src="https://uxtools.co/img/database/logos/lunacy.png" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Luncey</div>
            </div>
        </div>
                </div>
        </div>
  )
}

export default UiUxABout

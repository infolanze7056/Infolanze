import React from 'react';
import Kiku from '../../../../../Images/kikuu-app.png';
import Attnd from '../../../../../Images/attnd-app.png';
import Task from '../../../../../Images/task-app.png';
import Oda from '../../../../../Images/oda-app.png';
import bw from '../../../../../Images/betterwater-app.png';
import Doshion from '../../../../../Images/doshion-app.png';
import Hydropod from "../../../../../Images/hydropod-app.png";


const AppProjects = () => {
    return (
        <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
            <div className="relative z-10 text-center mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-5 font-poppins">
                    Our <span className="text-[--second-color]">App Development</span> Projects
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-base md:text-lg leading-relaxed">
                    Discover our innovative app projects — designed to deliver smooth performance, engaging UI, and great user experiences.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>

                 <div>
                    <div className='shadow-2xl rounded-3xl border border-[#eee]'>
                        <div className='relative m-auto overflow-hidden rounded-t-3xl'>
                            <img src={Hydropod} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
                        </div>
                        <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                            <h1>Hydropod</h1>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='shadow-2xl rounded-3xl border border-[#eee]'>
                        <div className='relative m-auto overflow-hidden rounded-t-3xl'>
                            <img src={Doshion} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
                        </div>
                        <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                            <h1>Doshion</h1>
                        </div>
                    </div>
                </div>

                  <a href='https://play.google.com/store/apps/details?id=com.techteam807.waterroapp' target="_blank" rel="noopener noreferrer">
                    <div className='shadow-2xl rounded-3xl border border-[#eee]'>
                        <div className='relative m-auto overflow-hidden rounded-t-3xl'>
                            <img src={bw} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
                        </div>
                        <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
                            <h1>Better Water</h1>
                        </div>
                    </div>
                </a>

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

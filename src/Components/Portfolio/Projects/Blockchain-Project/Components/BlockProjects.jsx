// import React from 'react';
// import AID from '../../../../../Images/KyivAid.com.png';
// import LION from '../../../../../Images/roaringlion.png';
// import FROG from '../../../../../Images/Defrogs.png';
// import CAPY from '../../../../../Images/Capybara world.png';
// import MARKET from '../../../../../Images/Market Move.png'
// import ATL from '../../../../../Images/Altn.png'

// const BlockProjects = () => {
//     return (
//         <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
//             <div className="relative z-10 text-center mb-16">
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-5 font-poppins">
//                     Our <span className="text-[--second-color]">Blockchain Development</span> Projects
//                 </h1>
//                 <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-base md:text-lg leading-relaxed">
//                     Explore our cutting-edge blockchain solutions secure, scalable, and designed for modern digital ecosystems.
//                 </p>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>
//                 <a href='https://token.kyivaid.com/' target="_blank" rel="noopener noreferrer">
//                     <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//                         <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//                             <img src={AID} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//                         </div>
//                         <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
//                             <h1>Kyiv Aid</h1>
//                         </div>
//                     </div>
//                 </a>

//                 <a href='https://www.roaringlion.xyz/' target="_blank" rel="noopener noreferrer">
//                     <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//                         <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//                             <img src={LION} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//                         </div>
//                         <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
//                             <h1>Roaring Lion</h1>
//                         </div>
//                     </div>
//                 </a>

//                 <a href='https://reject-evolution.vercel.app/' target="_blank" rel="noopener noreferrer">
//                     <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//                         <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//                             <img src={FROG} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//                         </div>
//                         <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
//                             <h1>Defrogs</h1>
//                         </div>
//                     </div>
//                 </a>

//                 <a href='https://www.capybaraworld.com/' target="_blank" rel="noopener noreferrer">
//                     <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//                         <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//                             <img src={CAPY} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//                         </div>
//                         <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
//                             <h1>Capybara World</h1>
//                         </div>
//                     </div>
//                 </a>

//                 <a href='https://marketmove.ai/' target="_blank" rel="noopener noreferrer">
//                     <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//                         <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//                             <img src={MARKET} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//                         </div>
//                         <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
//                             <h1>Market Move</h1>
//                         </div>
//                     </div>
//                 </a>

//                 <a href='https://altntoken.org/' target="_blank" rel="noopener noreferrer">
//                     <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//                         <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//                             <img src={ATL} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//                         </div>
//                         <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
//                             <h1>Altn Token</h1>
//                         </div>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default BlockProjects

import React, { useEffect, useState } from 'react';
import AID from '../../../../../Images/KyivAid.com.png';
import LION from '../../../../../Images/roaringlion.png';
import FROG from '../../../../../Images/Defrogs.png';
import CAPY from '../../../../../Images/Capybara world.png';
import MARKET from '../../../../../Images/Market Move.png';
import ATL from '../../../../../Images/Altn.png';

const BlockProjects = () => {
  const [loading, setLoading] = useState(true);

  // Project Data
  const projects = [
    { img: AID, name: "Kyiv Aid", link: "https://token.kyivaid.com/" },
    { img: LION, name: "Roaring Lion", link: "https://www.roaringlion.xyz/" },
    { img: FROG, name: "Defrogs", link: "https://reject-evolution.vercel.app/" },
    { img: CAPY, name: "Capybara World", link: "https://www.capybaraworld.com/" },
    { img: MARKET, name: "Market Move", link: "https://marketmove.ai/" },
    { img: ATL, name: "Altn Token", link: "https://altntoken.org/" },
  ];

  useEffect(() => {
    // Fake loading effect
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-5 font-poppins">
          Our <span className="text-[--second-color]">Blockchain Development</span> Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-base md:text-lg leading-relaxed">
          Explore our cutting-edge blockchain solutions secure, scalable, and designed for modern digital ecosystems.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>

        {/* -------------- Skeleton Loader -------------- */}
        {loading &&
          projects.map((_, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-3xl border border-[#eee] p-3 animate-pulse"
            >
              {/* Image skeleton */}
              <div className="w-full h-64 bg-gray-200 rounded-3xl"></div>

              {/* Title skeleton */}
              <div className="bg-gray-200 h-6 w-1/2 mx-auto mt-4 rounded"></div>
            </div>
          ))}

        {/* -------------- Actual Projects -------------- */}
        {!loading &&
          projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='shadow-2xl rounded-3xl border border-[#eee]'>
                <div className='relative m-auto overflow-hidden rounded-t-3xl'>
                  <img
                    src={project.img}
                    alt={project.name}
                    className='hover:scale-[1.07] transition-all duration-[0.5s]'
                  />
                </div>
                <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase'>
                  <h1>{project.name}</h1>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default BlockProjects;

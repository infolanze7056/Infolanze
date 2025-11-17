// import React from 'react'
// import xbeat from '../../../../../Images/xbeatnew.png'
// import fastpizza from '../../../../../Images/fast-pizza-ui-ux.png'
// import shopit from '../../../../../Images/shopitnew.png'
// import beach from '../../../../../Images/beachnew.png'
// import teamofassam from '../../../../../Images/teaofassamnew.png'

// const UiUxProjects = () => {
//   return (
//     <div className='bg-white lg:px-28 md:px-20 px-5 py-10 pb-20'>
//         <div className="relative z-10 text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight font-poppins">
//           Our <span className="text-[--second-color]">UI/UX</span> Projects
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-base md:text-lg leading-relaxed">
//           Explore our best design work each crafted with strategy, aesthetics, and user experience in mind.
//         </p>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8'>
      
//         <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//             <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//             <img src={xbeat} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//             </div>
//             <div className='bg-white text-black text-center lg:text-base rounded-b-3xl p-2'>
//                 <h1>X-BEAT</h1>
//             </div>
//         </div>
        
        
//         {/* <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//             <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//             <img src={flowycart} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//             </div>
//             <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
//                 <h1>FLOWY-CART</h1>
//             </div>
//         </div> */}
        
        
//         <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//             <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//             <img src={fastpizza} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//             </div>
//             <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
//                 <h1>FAST-PIZZA</h1>
//             </div>
//         </div>
        
//         <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//             <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//             <img src={shopit} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//             </div>
//             <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
//                 <h1>SHOP IT</h1>
//             </div>
//         </div>
       
//         <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//             <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//             <img src={beach} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//             </div>
//             <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
//                 <h1>BEACH RESORT</h1>
//             </div>
//         </div>

        
//         <div className='shadow-2xl rounded-3xl border border-[#eee]'>
//             <div className='relative m-auto overflow-hidden rounded-t-3xl'>
//             <img src={teamofassam} alt="" className='hover:transform hover:scale-[1.07] transition-all duration-[0.5s]' />
//             </div>
//             <div className='bg-white text-black text-center lg:text-sm rounded-b-3xl p-2'>
//                 <h1>TEA OF ASSAM</h1>
//             </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default UiUxProjects

import React, { useEffect, useState } from "react";
import xbeat from "../../../../../Images/xbeatnew.png";
import fastpizza from "../../../../../Images/fast-pizza-ui-ux.png";
import shopit from "../../../../../Images/shopitnew.png";
import beach from "../../../../../Images/beachnew.png";
import teamofassam from "../../../../../Images/teaofassamnew.png";

const UiUxProjects = () => {
  const [loading, setLoading] = useState(true);

  // Project list (clean & scalable)
  const projects = [
    { img: xbeat, name: "X-BEAT" },
    { img: fastpizza, name: "FAST-PIZZA" },
    { img: shopit, name: "SHOP IT" },
    { img: beach, name: "BEACH RESORT" },
    { img: teamofassam, name: "TEA OF ASSAM" },
  ];

  useEffect(() => {
    // fake loading for animation
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white lg:px-28 md:px-20 px-5 py-10 pb-20">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight font-poppins">
          Our <span className="text-[--second-color]">UI/UX</span> Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-base md:text-lg leading-relaxed">
          Explore our best design work each crafted with strategy, aesthetics,
          and user experience in mind.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8">
        
        {/* ---------- Skeleton Loader ---------- */}
        {loading &&
          projects.map((_, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-3xl border border-[#eee] p-3 animate-pulse"
            >
              <div className="w-full h-64 bg-gray-200 rounded-3xl"></div>
              <div className="bg-gray-200 h-6 w-2/3 mx-auto mt-4 rounded"></div>
            </div>
          ))}

        {/* ---------- Actual Cards ---------- */}
        {!loading &&
          projects.map((project, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-3xl border border-[#eee]"
            >
              <div className="relative m-auto overflow-hidden rounded-t-3xl">
                <img
                  src={project.img}
                  alt={project.name}
                  className="hover:scale-[1.07] transition-all duration-[0.5s]"
                />
              </div>
              <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
                <h1>{project.name}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UiUxProjects;
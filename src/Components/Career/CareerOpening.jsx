import React, { useState } from 'react';
import img1 from "../../Images/Superior-Support.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const openings = [
  {
    title: 'React Js & Node Js developer',
    experience: '6 to 8 years',
    numberOfOpenings: 2,
  },
  {
    title: 'Jr. asp.net mvc developer',
    experience: '1 to 2 years',
    numberOfOpenings: 3,
  },
  {
    title: 'QA Manual and automation',
    experience: '0 to 0.6 years',
    numberOfOpenings: 1,
  },
  {
    title: 'UI/UX designer',
    experience: '1 to 2 years',
    numberOfOpenings: 1,
  },
];

function CareerOpening() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOpening, setSelectedOpening] = useState(null);

    const openPopup = (opening) => {
        setSelectedOpening(opening);
        setIsPopupOpen(true);
      };

  return (
    <div className='font-family'>
      <div className='lg:px-28 md:px-20 px-5 py-10'>
        <div>
          <div className='text-4xl font-semibold uppercase text-center pb-10'>Current Openings Us?</div>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          {openings.map((opening, index) => (
            <div key={index} className='bg-[--main-color] rounded-lg lg:p-10 md:p-10 p-5'>
              <div><img className='w-20' src={img1} alt="img" /></div>
              <div className='pt-4 text-xl font-semibold pb-3'>{opening.title}</div>
              <div className='flex items-center'>
                <div className='border-e-2 border-gray-500 pe-2'>Experience: {opening.experience}</div>
                <div className='ps-2'>No. of Openings: {opening.numberOfOpenings}</div>
              </div>
              <div className='pt-5'>
                <button className='border rounded-full p-3 px-7 border-gray-500 text-sm hover:bg-white flex items-center' onClick={() => openPopup(opening)}>
                  Apply Now&nbsp;&nbsp;<FaAngleDoubleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-2 rounded-lg  max-w-lg">
            <div className='border rounded-lg p-4'>
                <div onClick={() => setIsPopupOpen(false)} className='hover:cursor-pointer'><IoCloseSharp className='text-lg' /></div>
                    <h2 className="text-2xl font-semibold">{selectedOpening.title}</h2>
                    <p className="text-gray-600">Experience: {selectedOpening.experience}</p>
                    <p className="text-gray-600">Number of Openings: {selectedOpening.numberOfOpenings}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CareerOpening;

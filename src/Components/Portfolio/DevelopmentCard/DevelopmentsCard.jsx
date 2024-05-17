import React from 'react';

const DevelopmentsCard = ({ imageSrc, imageSrcSmall, title, technology }) => {
  return (
    <>
    
    <div className="w-full max-w-1/3 p-2.5 relative">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full hover:opacity-70 transition duration-300 ease-in-out" />
      </div>
      <div className="bg-white rounded border border-gray-100 w-full max-w-[calc(100%-35px)] p-4 flex shadow-md hover:shadow-xl z-10 relative mx-auto mt-[-65px] transition duration-300">
        <div className="w-full h-24 max-w-24 bg-white border-gray-300 shadow-sm rounded-lg relative">
          <img src={imageSrcSmall} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="pl-4 max-w-[calc(100%-130px)] w-full">
          <div className="text-xl font-semibold mb-2">
            {title}
          </div>
          <div className="text-gray-700">
            <p>Technology: {technology}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DevelopmentsCard;

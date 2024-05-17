import React from 'react';
import Portfolio from '../../../Images/portfoliobg.avif';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      <img src={Portfolio} alt="Portfolio" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-2">PORTFOLIO</h1>
        <p className="text-lg">Our Acute Combination Innovation and Technology</p>
      </div>
    </div>
  );
}

export default HeroSection;

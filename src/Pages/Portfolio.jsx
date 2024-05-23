import React from 'react';
import HeroPortfolio from '../Components/Portfolio/HeroPortfolio/HeroPortfolio';
import DevelopmentsProject from '../Components/Portfolio/DevelopmentCard/DevelopmentsProject';
import HeroSection from '../Components/Portfolio/HeroPortfolio/HeroSection';

 

const Portfolio = () => {
  return (
    <div className="font-family">
      {/* <HeroSection/> */}
      <HeroPortfolio />
      <DevelopmentsProject/>
    </div>
  );
}

export default Portfolio;

import React from 'react';
import HeroPortfolio from '../Components/Portfolio/HeroPortfolio/HeroPortfolio';
import DevelopmentsProject from '../Components/Portfolio/DevelopmentCard/DevelopmentsProject';
import HeroSection from '../Components/Portfolio/HeroPortfolio/HeroSection';
import { Helmet } from 'react-helmet';
// import TestimonialsSection from '../Components/Portfolio/Client/TestimonialsSection';

 

const Portfolio = () => {
  return (
    <div className="font-family">
      <Helmet>
        <title>Portfolio | Infolanze</title>
      </Helmet>
      {/* <HeroSection/> */}
      <HeroPortfolio />
      <DevelopmentsProject/>
      {/* <TestimonialsSection /> */}
    </div>
  );
}

export default Portfolio;

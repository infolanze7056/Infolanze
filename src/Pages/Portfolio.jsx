import React from 'react';
import HeroPortfolio from '../Components/Portfolio/HeroPortfolio/HeroPortfolio';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div>
      <HeroPortfolio />

      <nav>
        <ul className="flex space-x-4 mt-4">
          <li><Link to="/portfolio/ui-ux-design" className="text-blue-500">UI/UX Development</Link></li>
          <li><Link to="/portfolio/web-development" className="text-blue-500">Web Development</Link></li>
          <li><Link to="/portfolio/app-development" className="text-blue-500">App Development</Link></li>
          <li><Link to="/portfolio/blockchain" className="text-blue-500">Blockchain</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Portfolio;

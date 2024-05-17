import React from "react";
import DevelopmentsCard from "../DevelopmentCard/DevelopmentsCard";
import { Link } from "react-router-dom";
import UiUx from "../../../Images/UiUxNew.jpg";
import UiUxSmall from "../../../Images/UiUxSmall.jpg";
import Web from "../../../Images/webnew.avif";
import WebSmall from "../../../Images/web development small.jpg";
import App from "../../../Images/app development.jpg";
import AppSmall from "../../../Images/appsmall.jpg";
import Blockchain from "../../../Images/blockchainnew.avif";
import BlockchainSmall from "../../../Images/blockchainnewsmall.jpg";
import "./DevelopmentsProject.css"

const DevelopmentsProject = () => {
  return (
    <div className="px-5 lg:px-28 md:px-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[--second-color]">Our Works</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          In today's cutting-edge era, failure to implement an application or an
          unpredicted downtime can result in losing your consumers' trust.
          </p>
        <div className="relative bg-gradient-to-r from-[#25aae1] to-[#1189bd] h-1.5 w-24 rounded-full my-5 mx-auto heading-line"></div>
      </div>
      <nav className="">
        <ul className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-4">
          <li>
            <Link to="/portfolio/ui-ux-design" className="text-blue-500">
              <DevelopmentsCard
                imageSrc={UiUx}
                imageSrcSmall={UiUxSmall}
                title="UI/UX Development"
                technology="React, Node"
              />
            </Link>
          </li>
          <li>
            <Link to="/portfolio/web-development" className="text-blue-500">
              <DevelopmentsCard
                imageSrc={Web}
                imageSrcSmall={WebSmall}
                title="Web Development"
                technology="HTML, CSS, JavaScript"
              />
            </Link>
          </li>
          <li>
            <Link to="/portfolio/app-development" className="text-blue-500">
              <DevelopmentsCard
                imageSrc={App}
                imageSrcSmall={AppSmall}
                title="App Development"
                technology="React Native, Swift"
              />
            </Link>
          </li>
          <li>
            <Link to="/portfolio/blockchain" className="text-blue-500">
              <DevelopmentsCard
                imageSrc={Blockchain}
                imageSrcSmall={BlockchainSmall}
                title="Blockchain"
                technology="Ethereum, Solidity"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DevelopmentsProject;

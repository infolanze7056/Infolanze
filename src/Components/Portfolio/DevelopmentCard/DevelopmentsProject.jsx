import React from "react";
import DevelopmentsCard from "../DevelopmentCard/DevelopmentsCard";
import { Link } from "react-router-dom";
import UiUx from "../../../Images/Ui&UXImage.jpg";
import UiUxSmall from "../../../Images/Ui&UXSmall.jpg";
import Web from "../../../Images/webDevelopment.jpg";
import WebSmall from "../../../Images/webDevelopmentSmall.jpg";
import App from "../../../Images/development.jpg";
import AppSmall from "../../../Images/SmallD.jpg";
import Blockchain from "../../../Images/BlockChain.jpg";
import BlockchainSmall from "../../../Images/blockchainnewsmall.jpg";
import "./DevelopmentsProject.css";

const DevelopmentsProject = () => {
  return (
    <section className="px-6 md:px-16 lg:px-28 py-20 bg-gradient-to-b from-[#f9fafb] to-[#eef6f9] relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#25aae1]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-[#1189bd]/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1189bd] to-[#25aae1] bg-clip-text text-transparent">
          Our Works
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
          Explore our portfolio of innovative projects — crafted with creativity,
          precision, and cutting-edge technology.
        </p>
        <div className="relative bg-gradient-to-r from-[#25aae1] to-[#1189bd] h-1.5 w-28 rounded-full mt-6 mx-auto heading-line"></div>
      </div>

      {/* Projects Grid */}
      <ul className="grid md:grid-cols-2 gap-10 relative z-10">
        <li>
          <Link to="/portfolio/ui-ux-design">
            <DevelopmentsCard
              imageSrc={UiUx}
              imageSrcSmall={UiUxSmall}
              title="UI/UX Development"
              technology="Figma, Axure"
            />
          </Link>
        </li>

        <li>
          <Link to="/portfolio/web-development">
            <DevelopmentsCard
              imageSrc={Web}
              imageSrcSmall={WebSmall}
              title="Web Development"
              technology="React Js, Node Js"
            />
          </Link>
        </li>

        <li>
          <Link to="/portfolio/app-development">
            <DevelopmentsCard
              imageSrc={App}
              imageSrcSmall={AppSmall}
              title="App Development"
              technology="React Native, Swift"
            />
          </Link>
        </li>

        <li>
          <Link to="/portfolio/blockchain">
            <DevelopmentsCard
              imageSrc={Blockchain}
              imageSrcSmall={BlockchainSmall}
              title="Blockchain"
              technology="Ethereum, Solidity"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default DevelopmentsProject;

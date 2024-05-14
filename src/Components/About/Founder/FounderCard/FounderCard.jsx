import React from "react";
import "./FounderCard.css";

const FounderCard = ({ name, role, description, image, link }) => {
  return (
    <div className="h-full flex py-5 lg:py-10 md:py-10 px-5">
      <div className="card border bg-white text-center py-4 shadow rounded m-auto">
        <img src={image} alt={name} className="rounded-full image mx-auto" />
        <h3 className="text-xl pt-2 font-bold">{name}</h3>
        <p className="font-semibold text-[--second-color] px-5">{role}</p>
        <p className="p-5">{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <button className="btn rounded bg-[#d6eff9] px-5 py-2">
            View More
          </button>
        </a>
      </div>
    </div>
  );
};

export default FounderCard;

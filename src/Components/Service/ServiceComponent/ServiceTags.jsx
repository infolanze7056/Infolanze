import React from "react";

function ServiceTags({ tags }) {
  return (
    <div className="px-4 lg:py-20 md:py-16 py-12">
      <div className="flex flex-wrap lg:gap-10 gap-5 justify-center">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center border hover:border-blue-400 p-5 shadow-md hover:shadow-lg rounded-md w-64 justify-center text-center hover:cursor-pointer">
            <div>
              <img className="w-14 h-14" src={tag.image} alt={tag.name} />
            </div>
            <div className="ps-2 text-lg font-semibold">{tag.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceTags;

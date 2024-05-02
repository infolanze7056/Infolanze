import React, { useState, useEffect } from "react";
import img1 from "../../Images/Superior-Support.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const openings = [
  {
    title: "React Js & Node Js developer",
    experience: "6 to 8 years",
    numberOfOpenings: 2,
  },
  {
    title: "Jr. asp.net mvc developer",
    experience: "1 to 2 years",
    numberOfOpenings: 3,
  },
  {
    title: "QA Manual and automation",
    experience: "0 to 0.6 years",
    numberOfOpenings: 1,
  },
  {
    title: "UI/UX designer",
    experience: "1 to 2 years",
    numberOfOpenings: 1,
  },
];

function CareerOpening() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOpening, setSelectedOpening] = useState(null);

  useEffect(() => {
    if (isPopupOpen) {
      // Disable scrolling on the body when the popup is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling on the body when the popup is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset"; // Reset overflow on component unmount
    };
  }, [isPopupOpen]);

  const openPopup = (opening) => {
    setSelectedOpening(opening);
    setIsPopupOpen(true);
  };

  return (
    <div className="font-family">
      <div className="lg:px-28 md:px-20 px-5 py-10">
        <div>
          <div className="text-4xl font-semibold uppercase text-center pb-10">
            Current Openings Us?
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {openings.map((opening, index) => (
            <div
              key={index}
              className="bg-[--main-color] rounded-lg lg:p-10 md:p-10 p-5"
            >
              <div>
                <img className="w-20" src={img1} alt="img" />
              </div>
              <div className="pt-4 text-xl font-semibold pb-3">
                {opening.title}
              </div>
              <div className="flex items-center">
                <div className="border-e-2 border-gray-500 pe-2">
                  Experience: {opening.experience}
                </div>
                <div className="ps-2">
                  No. of Openings: {opening.numberOfOpenings}
                </div>
              </div>
              <div className="pt-5">
                <button
                  className="border rounded-full p-3 px-7 border-gray-500 text-sm hover:bg-white flex items-center"
                  onClick={() => openPopup(opening)}
                >
                  Apply Now&nbsp;&nbsp;
                  <FaAngleDoubleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center px-4 z-50">
          <div className="bg-white p-2 rounded-lg  max-w-lg w-[520px]">
            <div
              onClick={() => setIsPopupOpen(false)}
              className="hover:cursor-pointer"
            >
              <IoCloseSharp className="text-lg" />
            </div>
            <div className="border rounded-lg p-4">
            <form action="">
            <label
                for="input-group-1"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Apply For
              </label>
              <div class="relative mb-4">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Technology"
                  value={selectedOpening.title}
                  disabled
                />
              </div>
              <label
                for="input-group-1"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <div class="relative mb-4">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                />
              </div>
              <label
                for="input-group-1"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div class="relative mb-4">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email"
                />
              </div>
              <label
                for="input-group-1"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Number
              </label>
              <div class="relative mb-5">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Number"
                />
              </div>
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-5">
                            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            {/* <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
              <div className="pt-5 text-center"><button className="w-max bg-[--second-color] border-[--second-color] border hover:text-[--second-color] hover:bg-white text-white text-sm p-2 px-5 rounded-md" type="submit">Submit</button></div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerOpening;

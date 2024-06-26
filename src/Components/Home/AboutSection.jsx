import React, { useState } from "react";
import "./HeroSection.css";
import SupportImg from "../../Images/support.jpg";
import { BiSupport } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa6";
import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });

function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  function rotateIcon(iconId) {
    const iconSpan = document.getElementById(iconId);
    // const arrowIcon = document.getElementById('arrowIcon');

    if (iconSpan.classList.contains("rotate-0")) {
      iconSpan.classList.remove("rotate-0");
      iconSpan.classList.add("rotate-180");
    } else {
      iconSpan.classList.remove("rotate-180");
      iconSpan.classList.add("rotate-0");
    }
  }

  return (
    <div className="py-10 lg:px-24 md:px-14 px-5 bg-img">
      <div className="text-center pb-10 font-family">
        <div className="uppercase text-4xl font-bold text-[--second-color]">
          Why Choose Us
        </div>
        <div className="text-sm font-medium pt-2 opacity-90">
          Our work ethic, methodology, and dedication to your projects make us
          perfect business partner.
        </div>
      </div>
      <div className="grid lg:grid-cols-2 items-center lg:text-left md:text-left text-center font-family">
        <div className="">
          <img className="w-[530px] mx-auto" src={SupportImg} alt="Support" />
        </div>
        <div className="lg:px-12 md:px-10 lg:py-5 md:py-10 py-10">
          <div id="accordionFlushExample">
            {/* First Accordion Item */}
            <div className="rounded-none shadow-xl border mb-5 bg-white border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
              <h2 className="mb-0" id="flush-headingOne">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                  type="button"
                  onClick={() => {
                    toggleAccordion(0);
                    rotateIcon("iconSpanOne");
                  }}
                  aria-expanded={activeAccordion === 0 ? "true" : "false"}
                  aria-controls="flush-collapseOne"
                >
                  <div className="flex items-center">
                    <div>
                      <BiSupport className="bg-[--main-color] text-black text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                    </div>
                    <div className="text-xl text-black font-semibold ps-5 pe-7">
                      Lifetime Web Support
                    </div>
                  </div>
                  <span
                    className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-180 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                    id="iconSpanOne"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      id="arrowIconOne"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className={`px-5 pt-0 py-4 ${
                  activeAccordion === 0 ? "!visible" : "hidden"
                } border-0`}
                aria-labelledby="flush-headingOne"
              >
                <div className="text-sm">
                  Once you make website with us, We provide you lifetime ewb
                  support with affordable maintenance & support plans. We know
                  the value fo your website andwe also know how to keep it
                  better and better through out the lifetime.
                </div>
              </div>
            </div>

            {/* Second Accordion Item */}
            <div className="rounded-none border mb-5 shadow-xl bg-white border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
              <h2 className="mb-0" id="flush-headingTwo">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                  type="button"
                  onClick={() => {
                    toggleAccordion(1);
                    rotateIcon("iconSpanTwo");
                  }}
                  aria-expanded={activeAccordion === 1 ? "true" : "false"}
                  aria-controls="flush-collapseTwo"
                >
                  <div className="flex text-black items-center">
                    <div>
                      <MdAccountBalanceWallet className="bg-[--main-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                    </div>
                    <div className="text-xl font-semibold ps-5">
                      Awesome and Affordable
                    </div>
                  </div>
                  <span
                    className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                    id="iconSpanTwo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      id="arrowIconTwo"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className={`px-5 pt-0 py-4 ${
                  activeAccordion === 1 ? "!visible" : "hidden"
                } border-0`}
                aria-labelledby="flush-headingTwo"
              >
                <div className="text-sm">
                  We are awesome and We are expert in keeping project cost
                  within your budget only. We never compromise with quality
                  while providing outstanding wesites Design and Development
                  services.
                </div>
              </div>
            </div>

            {/* Third Accordion Item */}
            <div className="rounded-none border mb-5 shadow-xl bg-white border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
              <h2 className="mb-0" id="flush-headingThree">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                  type="button"
                  onClick={() => {
                    toggleAccordion(2);
                    rotateIcon("iconSpanThree");
                  }}
                  aria-expanded={activeAccordion === 2 ? "true" : "false"}
                  aria-controls="flush-collapseThree"
                >
                  <div className="flex text-black items-center">
                    <div>
                      <BsPersonCircle className="bg-[--main-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                    </div>
                    <div className="text-xl font-semibold ps-5">
                      Experience and Expertise
                    </div>
                  </div>
                  <span
                    className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                    id="iconSpanThree"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      id="arrowIconThree"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className={`px-5 pt-0 py-4 ${
                  activeAccordion === 2 ? "!visible" : "hidden"
                } border-0`}
                aria-labelledby="flush-headingThree"
              >
                <div className="text-sm">
                  We do have a good amount of experience in website designing
                  and development. We have experitse in alll web related work
                  and continuously looking to inhence our skills to meet our
                  client's expectation.
                </div>
              </div>
            </div>
            {/* four Accordion Item */}
            <div className="rounded-none border bg-white shadow-xl border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
              <h2 className="mb-0" id="flush-headingFour">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                  type="button"
                  onClick={() => {
                    toggleAccordion(3);
                    rotateIcon("iconSpanFour");
                  }}
                  aria-expanded={activeAccordion === 3 ? "true" : "false"}
                  aria-controls="flush-collapseFour"
                >
                  <div className="flex text-black items-center">
                    <div>
                      <FaRegThumbsUp className="bg-[--main-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                    </div>
                    <div className="text-xl font-semibold ps-5">
                      Quality Standards
                    </div>
                  </div>
                  <span
                    className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                    id="iconSpanFour"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      id="arrowIconFour"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className={`px-5 pt-0 py-4 ${
                  activeAccordion === 3 ? "!visible" : "hidden"
                } border-0`}
                aria-labelledby="flush-headingFour"
              >
                <div className="text-sm">
                  We know quality is the most important thing to stay in market
                  and we have uncompromising commitment to quality which help us
                  to provide 100% satisfaction to our clients. We delight our
                  consumers and serve them through the high quality of our
                  products and services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

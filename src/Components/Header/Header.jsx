import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import Logo from "../../Images/InfoLanze Logo White.png";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
// import logo1 from "../../Images/Logo 1 (1).webp";
import image1 from "../../Images/website-designing.png";
import image2 from "../../Images/web-application-development.png";
import image3 from "../../Images/website-maintenance-service.png";
import image4 from "../../Images/cloud-based-erp.png";
import image5 from "../../Images/website-server-migration.png";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setIsActive(1);
        break;
      case "/about":
        setIsActive(2);
        break;
      case "/contact":
        setIsActive(3);
        break;
      case "/service":
        setIsActive(4);
        break;
      case "/career":
        setIsActive(5);
        break;
      default:
        setIsActive(1);
        break;
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id);
    setIsOpen(true);
    if (e.target.id !== "4") {
      setIsDropdownVisible(false);
    } else {
      toggleDropdownVisibility();
    }
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="Header-p1 fixed w-full z-50">
      <div className="shadow-xl w-full bg-[--second-color] py-3">
        <div className="lg:px-16 md:px-7 px-5 lg:flex justify-between items-center">
          <div className="z-40">
            <span className="">
              {/* <img className="w-8 h-8" src={logo1} alt="logo" /> */}
              <img className="w-48 z-400" src={Logo} alt="logo" />
            </span>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute md:right-8 md:top-6 right-5 top-6 cursor-pointer h-fit z-40"
          >
            {isOpen ? (
              <FaBars className="text-3xl text-white" />
            ) : (
              <AiOutlineClose className="text-3xl text-white" />
            )}
          </div>

          <nav
            className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static bg-[--second-color] z-30 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${
            isOpen
              ? "top-[-230px] z-[-1] lg:z-0 transition-all duration-500"
              : "top-[65px] z-[-1] lg:z-0 transition-all duration-500"
          }`}
          >
            <div className="bg-[--second-color] lg:flex gap-1 text-start lg:ps-0 md:ps-5 ps-3 font-family z-30">
              <div className="lg:px-2">
                <NavLink
                  to="/"
                  activeclassname="active"
                  id="1"
                  onClick={(e) => handleNavSelected(e)}
                  className={
                    isActive === "1"
                      ? "active mr-5  hover:text-black  cursor-pointer flex link "
                      : "mr-5  hover:text-black  cursor-pointer flex link"
                  }
                >
                  Home
                </NavLink>
              </div>
              <div className="lg:px-2">
                <NavLink
                  to="/about"
                  id="2"
                  activeclassname="active"
                  onClick={(e) => handleNavSelected(e)}
                  className={
                    isActive === "2"
                      ? "active mr-5  hover:text-black  cursor-pointer flex link"
                      : "mr-5  hover:text-black  cursor-pointer flex link"
                  }
                >
                  About US
                </NavLink>
              </div>
              <div className="lg:px-2">
                <NavLink
                  to="/contact"
                  activeclassname="active"
                  id="3"
                  onClick={(e) => handleNavSelected(e)}
                  className={
                    isActive === "3"
                      ? "active mr-5  hover:text-black  cursor-pointer flex link"
                      : "mr-5  hover:text-black  cursor-pointer flex link"
                  }
                >
                  Contact US
                </NavLink>
              </div>
              <div className="lg:px-2 relative">
                <NavLink
                  to="/service"
                  activeclassname="active"
                  id="4"
                  // onClick={(e) => handleNavSelected(e)}
                  onMouseEnter={toggleDropdownVisibility}
                  onMouseLeave={toggleDropdownVisibility}
                  className={
                    isActive === "4"
                      ? "active mr-5 hover:text-black cursor-pointer flex link"
                      : "mr-5 hover:text-black cursor-pointer flex link items-center"
                  }
                >
                  {/* Services&nbsp;<FaAngleDown className="lg:block hidden" /> */}
                  Services&nbsp;
                  {isDropdownVisible ? (
                    <FaAngleUp
                      className=""
                      onClick={() => setIsDropdownVisible(false)}
                    />
                  ) : (
                    <FaAngleDown
                      className=""
                      onClick={() => setIsDropdownVisible(true)}
                    />
                  )}
                </NavLink>
                {isDropdownVisible && (
                  <div
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    //       onMouseLeave={() => setIsDropdownVisible(false)}
                    className="top-full pt-2 z-10 lg:hidden block transition duration-400 ease-in-out mr-5"
                  >
                    <div className="bg-[--second-color] borde border-gray-200 rounded shadow-l">
                      <NavLink
                        onClick={(e) => handleNavSelected(e)}
                        to="/service/ui-ux"
                        className="flex items-center px-4 py-2 text-white text-sm hover:bg-gray-200"
                      >
                        <FaAngleDoubleRight className="" />
                        &nbsp;UI-UX
                      </NavLink>
                      <NavLink
                        onClick={(e) => handleNavSelected(e)}
                        to="/service/web-development"
                        className="flex items-center px-4 py-2 text-white text-sm hover:bg-gray-200"
                      >
                        <FaAngleDoubleRight className="" />
                        &nbsp;Web
                      </NavLink>
                      <NavLink
                        onClick={(e) => handleNavSelected(e)}
                        to="/service/app-development"
                        className="flex items-center px-4 py-2 text-white text-sm hover:bg-gray-200"
                      >
                        <FaAngleDoubleRight className="" />
                        &nbsp;App
                      </NavLink>
                      <NavLink
                        onClick={(e) => handleNavSelected(e)}
                        to="/service/blockchain"
                        className="flex items-center px-4 py-2 text-white text-sm hover:bg-gray-200"
                      >
                        <FaAngleDoubleRight className="" />
                        &nbsp;Blockchain
                      </NavLink>
                      <NavLink
                        onClick={(e) => handleNavSelected(e)}
                        to="/service/seo"
                        className="flex items-center px-4 py-2 text-white text-sm hover:bg-gray-200"
                      >
                        <FaAngleDoubleRight className="" />
                        &nbsp;SEO
                      </NavLink>
                    </div>
                  </div>
                )}
                {isDropdownVisible && (
                  <div
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)}
                    className="absolute top-full right-0 w-[1000px] pt-5 z-[-1] lg:block hidden md:hidden"
                  >
                    <div className="bg-white border border-gray-200 rounded shadow-lg p-5">
                      <div className="grid grid-cols-5 gap-5">
                        <NavLink
                          onClick={(e) => handleNavSelected(e)}
                          to="/service/ui-ux"
                          className="text-gray-800 hover:bg-gray-100 border text-center py-5 rounded"
                        >
                          <div>
                            <div>
                              <img
                                className="mx-auto"
                                src={image1}
                                alt="ui-ux"
                              />
                            </div>
                            <div className="pt-3">UI-UX Designing</div>
                          </div>
                        </NavLink>
                        <NavLink
                          onClick={(e) => handleNavSelected(e)}
                          to="/service/web-development"
                          className="text-gray-800 hover:bg-gray-100 border text-center py-5 rounded"
                        >
                          <div>
                            <div>
                              <img
                                className="mx-auto"
                                src={image2}
                                alt="ui-ux"
                              />
                            </div>
                            <div className="pt-3">Web Development</div>
                          </div>
                        </NavLink>
                        <NavLink
                          onClick={(e) => handleNavSelected(e)}
                          to="/service/app-development"
                          className="text-gray-800 hover:bg-gray-100 border text-center py-5 rounded"
                        >
                          <div>
                            <div>
                              <img
                                className="mx-auto"
                                src={image3}
                                alt="ui-ux"
                              />
                            </div>
                            <div className="pt-3">App Development</div>
                          </div>
                        </NavLink>
                        <NavLink
                          onClick={(e) => handleNavSelected(e)}
                          to="/service/blockchain"
                          className="text-gray-800 hover:bg-gray-100 border text-center py-5 rounded"
                        >
                          <div>
                            <div>
                              <img
                                className="mx-auto"
                                src={image4}
                                alt="ui-ux"
                              />
                            </div>
                            <div className="pt-3">Blockchain Development</div>
                          </div>
                        </NavLink>
                        <NavLink
                          onClick={(e) => handleNavSelected(e)}
                          to="/service/seo"
                          className="text-gray-800 hover:bg-gray-100 border text-center py-5 rounded"
                        >
                          <div>
                            <div>
                              <img
                                className="mx-auto"
                                src={image5}
                                alt="ui-ux"
                              />
                            </div>
                            <div className="pt-3">
                              Search Engine Optimization
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
                {/* {isDropdownVisible && (
              <div 
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)} 
                    className="absolute top-full right-0 w-[1150px] pt-5 z-[-1] lg:block hidden md:hidden">
                <div className="bg-white border border-gray-200 rounded shadow-lg p-5">
                <div className="grid grid-cols-5 gap-5">
                  <div className="">
                    <div className="flex items-center">
                    <FaNetworkWired className="text-black" />
                    <NavLink
                      onClick={(e) => handleNavSelected(e)}
                      to="/service/ui-ux"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      UI-UX
                    </NavLink>
                    </div>
                    <ul className="text-black">
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Website Designing</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Mobile App Design</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Material Design</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Product Design</li>
                      <li className="flex items-center"><VscCircleFilled className='text-sm'/>Logo Design & Branding</li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                    <MdWeb className="text-black" />
                    <NavLink
                      onClick={(e) => handleNavSelected(e)}
                      to="/service/web-development"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Web
                    </NavLink>
                    </div>
                    <ul className="text-black">
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>.Net Core</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Wordpress</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Laravel</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>React JS</li>
                      <li className="flex items-center"><VscCircleFilled className='text-sm'/>PHP</li>
                      <li className="flex items-center"><VscCircleFilled className='text-sm'/>Angular JS</li>
                      <li className="flex items-center"><VscCircleFilled className='text-sm'/>Codeigniter</li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                    <FaMobileScreenButton className="text-black" />
                    <NavLink
                      onClick={(e) => handleNavSelected(e)}
                      to="/service/app-development"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      App
                    </NavLink>
                    </div>
                    <ul className="text-black">
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>IOS Development</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Android Development</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Flutter Development</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>React Native</li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                    <SiHiveBlockchain className="text-black" />
                    <NavLink
                      onClick={(e) => handleNavSelected(e)}
                      to="/service/blockchain"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Blockchain
                    </NavLink>
                    </div>
                    <ul className="text-black">
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Smart Contracts</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Decentralized Apps - DApps</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Decentralized FTP</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Web3 Game Development</li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                    <HiOutlineSpeakerphone className="text-black" />
                    <NavLink
                      onClick={(e) => handleNavSelected(e)}
                      to="/service/seo"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      SEO
                    </NavLink>
                    </div>
                    <ul className="text-black">
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>SEO</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Digital Marketing</li>
                      <li className="flex items-center"><VscCircleFilled className='text-xs'/>Email Marketing</li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            )} */}
              </div>
              <div className="lg:px-2">
                <NavLink
                  to="/career"
                  activeclassname="active"
                  id="5"
                  onClick={(e) => handleNavSelected(e)}
                  className={
                    isActive === "5"
                      ? "active mr-5  hover:text-black  cursor-pointer flex link"
                      : "mr-5  hover:text-black  cursor-pointer flex link"
                  }
                >
                  Careers
                </NavLink>
              </div>
              <div className="lg:px-2">
                <NavLink
                  to="/courses"
                  activeclassname="active"
                  id="6"
                  onClick={(e) => handleNavSelected(e)}
                  className={
                    isActive === "6"
                      ? "active mr-5  hover:text-black  cursor-pointer flex link"
                      : "mr-5  hover:text-black  cursor-pointer flex link"
                  }
                >
                  Courses
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import Logo from "../../Images/InfoLanze Logo White.webp";
import { FaNetworkWired } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import { MdWeb } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();

  // const toggleDropdownVisibility = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  useEffect(() => {

    // Reset isActive based on location pathname
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
        setIsActive(1); // Default to Home
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
          <span>
            <img className="w-48 z-400" src={Logo} alt="nishant" />
          </span>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden absolute md:right-8 md:top-6 right-5 top-6 cursor-pointer h-fit z-40"
        >
          {isOpen ? <FaBars className="text-3xl" /> : <AiOutlineClose className="text-3xl" />}
        </div>

        <nav
          className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static bg-[--second-color] z-30 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${isOpen ? "top-[-230px] z-[-1] lg:z-0 transition-all duration-500" : "top-[65px] z-[-1] lg:z-0 transition-all duration-500"}` }
        >
          <div className="bg-[--second-color] lg:flex gap-1 text-start lg:ps-0 md:ps-5 ps-3 font-family z-30">
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/"
                activeclassname="active"
                id="1"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "1"
                    ? "active mr-5  hover:text-black  cursor-pointer flex"
                    : "mr-5  hover:text-black  cursor-pointer flex"
                }
              >
                Home
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/about"
                id="2"
                activeclassname="active"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "2"
                    ? "active mr-5  hover:text-black  cursor-pointer flex"
                    : "mr-5  hover:text-black  cursor-pointer flex"
                }
              >
                About US
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/contact"
                activeclassname="active"
                id="3"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "3"
                    ? "active mr-5  hover:text-black  cursor-pointer flex"
                    : "mr-5  hover:text-black  cursor-pointer flex"
                }
              >
                Contact US
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5 relative">
            <NavLink
              to="/service"
              activeclassname="active"
              id="4"
              // onClick={(e) => handleNavSelected(e)}
              onMouseEnter={toggleDropdownVisibility}
              onMouseLeave={toggleDropdownVisibility}
              className={
                isActive === "4"
                  ? "active mr-5 hover:text-black cursor-pointer flex"
                  : "mr-5 hover:text-black cursor-pointer flex items-center"
              }
            >
              {/* Services&nbsp;<FaAngleDown className="lg:block hidden" /> */}
              Services&nbsp;
              {isDropdownVisible ? <FaAngleUp className="" onClick={() => setIsDropdownVisible(false)} /> : <FaAngleDown className="" onClick={() => setIsDropdownVisible(true)}  />}
            </NavLink>
            {isDropdownVisible && (
              <div 
              // onMouseEnter={() => setIsDropdownVisible(true)}
              //       onMouseLeave={() => setIsDropdownVisible(false)} 
                    className="top-full pt-2 z-10 lg:hidden block transition duration-400 ease-in-out mr-5">
                    <div className="bg-white border border-gray-200 rounded shadow-lg">
                {/* Dropdown content goes here */}
                <NavLink
                  onClick={(e) => handleNavSelected(e)}
                  to="/service/ui-ux"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  UI-UX
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavSelected(e)}
                  to="/service/web-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Web
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavSelected(e)}
                  to="/service/app-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  App
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavSelected(e)}
                  to="/service/blockchain"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Blockchain
                </NavLink>
                <NavLink
                  onClick={(e) => handleNavSelected(e)}
                  to="/service/seo"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  SEO
                </NavLink>
                </div>
              </div>
            )}
            {isDropdownVisible && (
              <div 
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)} 
                    className="absolute top-full right-0 w-[1150px] pt-2 z-10 lg:block hidden md:hidden">
                <div className="bg-white border border-gray-200 rounded shadow-lg p-5">
                <div className="grid grid-cols-5 gap-5">
                  <div className="">
                    <div className="flex items-center">
                    <FaNetworkWired className="text-black" />
                    <NavLink
                      onClick={(e) => handleNavSelected(e)}
                      to="/service/ui-ux"
                      className="block p-0 text-gray-800 hover:bg-gray-200"
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
            )}
          </div>
              <div className="lg:p-0 p-1.5">
              <NavLink
                to="/career"
                activeclassname="active"
                id="5"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "5"
                    ? "active mr-5  hover:text-black  cursor-pointer flex"
                    : "mr-5  hover:text-black  cursor-pointer flex"
                }
              >
                Careers
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

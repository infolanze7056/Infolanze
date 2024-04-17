import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import Logo from "../../Images/InfoLanze Logo White.webp";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const location = useLocation();

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
  };

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 70) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="Header-p1 fixed w-full z-50">
    <div className="shadow-xl w-full bg-[#25aae1] py-3">
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
          className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static bg-[#25aae1] z-30 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${isOpen ? "top-[-600px]" : "top-[65px]"}` }
        >
          <div className="bg-[#25aae1] lg:flex gap-1 text-start lg:ps-0 md:ps-5 ps-3 font-family z-30">
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/"
                activeClassName="active"
                id="1"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "1"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Home
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/about"
                id="2"
                activeClassName="active"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "2"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                About US
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/contact"
                activeClassName="active"
                id="3"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "3"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Contact US
              </NavLink>
            </div>
            <div className="lg:p-0 p-1.5 relative">
            <NavLink
              to="/service"
              activeClassName="active"
              id="4"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
              className={
                isActive === "4"
                  ? "active mr-5 hover:text-black cursor-pointer"
                  : "mr-5 hover:text-black cursor-pointer"
              }
            >
              Services
            </NavLink>
            {isDropdownVisible && (
              <div onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)} 
                    className="absolute top-full left-0 w-36 pt-2 z-10">
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
          </div>
              <div className="lg:p-0 p-1.5">
              <NavLink
                to="/career"
                activeClassName="active"
                id="5"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "5"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
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

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import Logo from "../../Images/InfoLanze Logo White.webp";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id);
    setIsOpen(true);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? 'Header-p1 Sticky-p1' : 'Header-p1'}>
    <div className="shadow-xl w-full bg-[#25aae1] py-3">
      <div className="lg:px-16 md:px-7 px-5 lg:flex justify-between items-center">
        <div className="">
          <span>
            <img className="w-48" src={Logo} alt="nishant" />
          </span>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden absolute md:right-8 md:top-6 right-5 top-6 cursor-pointer h-fit z-50"
        >
          {isOpen ? <FaBars className="text-3xl" /> : <AiOutlineClose className="text-3xl" />}
        </div>

        <nav
          className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static bg-[#25aae1] lg:z-auto z-50 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${isOpen ? "top-[-600px]" : "top-[65px]"}` }
        >
          <div className="bg-[#25aae1] lg:flex gap-1 text-start lg:ps-0 md:ps-5 ps-3 font-family">
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
            <div className="lg:p-0 p-1.5">
              <NavLink
                to="/service"
                activeClassName="active"
                id="4"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "4"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Services
              </NavLink>
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

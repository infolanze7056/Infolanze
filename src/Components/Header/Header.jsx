import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaChartLine, FaCode, FaCube } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleUp, FaAngleDown, FaMobileAlt } from "react-icons/fa";
import "./Header.css";
import Logo from "../../Images/InfoLanze Logo White.png";
import image1 from "../../Images/website-designing.png";
import image2 from "../../Images/web-application-development.png";
import image3 from "../../Images/website-maintenance-service.png";
import image4 from "../../Images/cloud-based-erp.png";
import image5 from "../../Images/website-server-migration.png";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);
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
      case "/courses":
        setIsActive(6);
        break;
      case "/portfolio":
        setIsActive(7);
        break;
      case "/blog":
        setIsActive(8);
        break;
      default:
        setIsActive(null);
        break;
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id);
    setIsOpen(true);
    setIsDropdownVisible(null);
  };

  return (
    <div className="Header-p1 fixed w-full z-50">
      <div className="shadow-xl w-full bg-gradient-to-br from-[#1e3a8a] via-[#0f172a] to-[#1e3a8a] py-3 rounded-br-3xl rounded-bl-3xl">
        
        <div className="lg:px-16 md:px-7 px-5 lg:flex justify-between items-center">
          <div className="z-40">
            <Link to="/">
              <img className="w-48" src={Logo} alt="logo" />
            </Link>
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
            className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static  z-30 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${isOpen
                ? "top-[-230px] z-[-1] lg:z-0"
                : "top-[65px] z-[-1] lg:z-0"
              }`}
          >
            <div className=" lg:flex gap-1 text-start lg:ps-0 md:ps-5 ps-3 font-family z-30">

              {/* Home */}
              {/* <div className="lg:px-2">
                <NavLink
                  to="/"
                  id="1"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 1 ? "active" : ""
                    }`}
                >
                  Home
                </NavLink>
              </div> */}

              {/* About */}
              <div className="lg:px-2">
                <NavLink
                  to="/"
                  id="1"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 1 ? "bg-transparent" : ""
                    }`}
                >
                  Home
                </NavLink>
              </div>

              {/* SERVICES DROPDOWN */}
              <div
                className="lg:px-2 relative"
                onMouseEnter={() => setIsDropdownVisible("services")}
                onMouseLeave={() => setIsDropdownVisible(null)}
              >
                <NavLink
                  to="/service"
                  id="4"
                  className={`mr-5 hover:text-black cursor-pointer flex items-center link ${isActive === 4 ? "active" : ""
                    }`}
                >
                  Services&nbsp;
                  {isDropdownVisible === "services" ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </NavLink>

         {isDropdownVisible === "services" && (
  <div className="absolute top-full right-0 w-[460px] pt-5 z-50 hidden lg:block">
    <div className="bg-white rounded-2xl shadow-xl border divide-y">

      {[
        { to: "/service/web-development", title: "Web Development", icon: <FaCode /> },
        { to: "/service/app-development", title: "App Development", icon: <FaMobileAlt /> },
        { to: "/service/blockchain", title: "Blockchain Development", icon: <FaCube /> },
        { to: "/service/seo", title: "SEO Optimization", icon: <FaChartLine /> },
      ].map((item, i) => (
        <NavLink
          key={i}
          to={item.to}
          onClick={handleNavSelected}
          className="group flex items-center gap-5 px-6 py-5 relative overflow-hidden"
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-blue-600
                           transform scale-y-0 group-hover:scale-y-100 transition" />

          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600
                          flex items-center justify-center">
            {item.icon}
          </div>

          <span className="font-semibold text-gray-800 group-hover:text-blue-600">
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  </div>
)}

              </div>

               <div className="lg:px-2">
                <NavLink
                  to="/about"
                  id="2"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 2 ? "active" : ""
                    }`}
                >
                  About Us
                </NavLink>
              </div>

               <div className="lg:px-2">
                <NavLink
                  to="/career"
                  id="5"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 5 ? "active" : ""
                    }`}
                >
                  Career
                </NavLink>
              </div>

               <div className="lg:px-2">
                <NavLink
                  to="/contact"
                  id="3"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 3 ? "active" : ""
                    }`}
                >
                  Contact Us
                </NavLink>
              </div>

              <div className="lg:px-2">
                <NavLink
                  to="/courses"
                  id="6"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 6 ? "active" : ""
                    }`}
                >
                  Courses
                </NavLink>
              </div>



              {/* Portfolio */}
              <div className="lg:px-2">
                <NavLink
                  to="/portfolio"
                  id="7"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 7 ? "active" : ""
                    }`}
                >
                  Portfolio
                </NavLink>
              </div>

              {/* Blog */}
              <div className="lg:px-2">
                <NavLink
                  to="/blog"
                  id="8"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 8 ? "active" : ""
                    }`}
                >
                  Blog
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

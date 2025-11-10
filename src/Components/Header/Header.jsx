import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleUp, FaAngleDown, FaAngleDoubleRight } from "react-icons/fa";
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
      case "/portfolio":
        setIsActive(7);
        break;
      case "/blog":
        setIsActive(8);
        break;
      case "/career":
        setIsActive("career");
        break;
      case "/courses":
        setIsActive("courses");
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
      <div className="shadow-xl w-full bg-[--second-color] py-3">
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
            className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute lg:static bg-[--second-color] z-30 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${isOpen
                ? "top-[-230px] z-[-1] lg:z-0"
                : "top-[65px] z-[-1] lg:z-0"
              }`}
          >
            <div className="bg-[--second-color] lg:flex gap-1 text-start lg:ps-0 md:ps-5 ps-3 font-family z-30">

              {/* Home */}
              <div className="lg:px-2">
                <NavLink
                  to="/"
                  id="1"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 hover:text-black cursor-pointer flex link ${isActive === 1 ? "active" : ""
                    }`}
                >
                  Home
                </NavLink>
              </div>

              {/* About */}
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

              {/* Contact */}
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
                  <div className="absolute top-full right-0 w-[1000px] pt-5 z-50 hidden lg:block">
                    <div className="bg-white border border-gray-200 rounded shadow-lg p-5">
                      <div className="grid grid-cols-5 gap-5">
                        {[
                          { to: "/service/ui-ux", img: image1, label: "UI-UX Designing" },
                          { to: "/service/web-development", img: image2, label: "Web Development" },
                          { to: "/service/app-development", img: image3, label: "App Development" },
                          { to: "/service/blockchain", img: image4, label: "Blockchain Development" },
                          { to: "/service/seo", img: image5, label: "SEO Optimization" },
                        ].map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.to}
                            onClick={(e) => handleNavSelected(e)}
                            className="text-gray-800 hover:bg-gray-100 border text-center py-5 rounded"
                          >
                            <img src={item.img} alt={item.label} className="mx-auto" />
                            <div className="pt-3">{item.label}</div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* WHY CHOOSE US DROPDOWN */}
              {/* WHY CHOOSE US DROPDOWN */}
              <div
                className="lg:px-2 relative"
                onMouseEnter={() => setIsDropdownVisible("why")}
                onMouseLeave={() => setIsDropdownVisible(null)}
              >
                <NavLink
                  to=""
                  id="5"
                  onClick={(e) => handleNavSelected(e)}
                  className={`mr-5 cursor-pointer flex items-center link transition-colors duration-200
                    ${isActive === 5 || isActive === "career" || isActive === "courses"
                      ? "active text-black"
                      : "hover:text-black"
                    }
    `}
                >
                  Why Choose Us&nbsp;
                  {isDropdownVisible === "why" ? <FaAngleUp /> : <FaAngleDown />}
                </NavLink>

                {isDropdownVisible === "why" && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg w-52 z-50">
                    <NavLink
                      to="/career"
                      id="career"
                      onClick={(e) => handleNavSelected(e)}
                      className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 ${isActive === "career" ? "active" : ""
                        }`}
                    >
                      <FaAngleDoubleRight className="mr-2" /> Career
                    </NavLink>
                    <NavLink
                      to="/courses"
                      id="courses"
                      onClick={(e) => handleNavSelected(e)}
                      className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 ${isActive === "courses" ? "active" : ""
                        }`}
                    >
                      <FaAngleDoubleRight className="mr-2" /> Courses
                    </NavLink>
                  </div>
                )}
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

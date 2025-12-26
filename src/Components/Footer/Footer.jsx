import React from "react";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import Flogo1 from "../../Images/logo-1.png";
import Flogo2 from "../../Images/InfoLanze Logo White.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-gray-200 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 skew-x-[-20deg] -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 skew-x-[20deg] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-4">

          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={Flogo1} alt="Logo" className="h-8" />
              <img src={Flogo2} alt="Logo Text" className="h-10" />
            </div>
            <p className="text-gray-300 text-sm">
              Infolanze Technologies is a reputed IT company in Ahmedabad,
              providing startups and enterprises with web, mobile, and cloud solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base relative inline-block mb-3">
              Services
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-blue-400"></span>
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="hover:text-blue-400"><Link to="/service/web-development">Web Design</Link></li>
              <li className="hover:text-blue-400"><Link to="/service/web-development">Web App Dev</Link></li>
              <li className="hover:text-blue-400"><Link to="/service/app-development">Android App</Link></li>
              <li className="hover:text-blue-400"><Link to="/service/app-development">iOS App</Link></li>
              <li className="hover:text-blue-400"><Link to="/service/web-development">API Integration</Link></li>
              <li className="hover:text-blue-400"><Link to="/service/web-development">Payment Gateway</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base relative inline-block mb-3">
              Contact
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-blue-400"></span>
            </h3>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Phone:</span> <a href="tel:+917016160435" className="hover:text-blue-400">+91 7016160435</a>
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Email:</span> <a href="mailto:techteam.infolanze@gmail.com" className="hover:text-blue-400">techteam.infolanze@gmail.com</a>
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Address:</span> <br />
              A-807, Empire Business Hub, Science City Road, Sola, Ahmedabad, 380060
            </p>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base relative inline-block mb-3">
              Follow Us
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-blue-400"></span>
            </h3>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/infolanze24/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-transform hover:scale-110"><FaLinkedinIn className="text-white text-sm"/></a>
              <a href="https://www.instagram.com/infolanze" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-pink-500 hover:bg-pink-400 transition-transform hover:scale-110"><AiFillInstagram className="text-white text-sm"/></a>
              <a href="https://www.facebook.com/profile.php?id=61555278311151" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-transform hover:scale-110"><FaFacebook className="text-white text-sm"/></a>
            </div>
            <p className="text-gray-300 text-xs mt-2">
              Educating and collaborating with like-minded businesses to make a difference socially and environmentally.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-4 border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2025 Infolanze Tech Pvt. Ltd. All rights reserved.</p>
          <ul className="flex gap-4 mt-2 lg:mt-0">
            <li className="hover:text-blue-400"><Link to="/">F.A.Q</Link></li>
            <li className="hover:text-blue-400"><Link to="/">Privacy Policy</Link></li>
            <li className="hover:text-blue-400"><Link to="/">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

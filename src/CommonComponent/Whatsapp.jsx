import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {/* Pop-up box */}
      {isOpen && (
        <div
          ref={popupRef}
          className="bg-white shadow-xl rounded-2xl p-4 mb-3 w-72 border border-gray-200 animate-fadeIn"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Chat with us</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <IoClose size={22} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            We're available on WhatsApp! Click below to start a chat.
          </p>
          <a
            href="https://wa.me/917016160435"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" size={20} /> Start Chat
          </a>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
};

export default Whatsapp;

import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <>
      <div className="py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-4 md:gap-0">
        {/* Left Section */}
        <div className="flex items-center gap-3 md:gap-5">
          <h1 className="text-lg md:text-2xl font-bold">Backed by:</h1>
          <img
            src="images/logo22.png"
            alt="Fyntl AI"
            className="h-10 md:h-12"
          />
        </div>

        {/* Right Section */}
        <div className="flex gap-4 md:gap-5">
          <a
            href="https://www.linkedin.com/company/fyntl-ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} md={30} color="#4267B2" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} md={30} color="#E4405F" />
          </a>
        </div>
      </div>

      {/* Divider and Footer Text */}
      <div className="py-5 bg-gray-50">
        <div className="bg-black h-[2px] mx-4 md:mx-10"></div>
        <h1 className="py-2 text-sm md:text-base text-center font-normal">
          2024 Fyntl AI. All rights reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer2;

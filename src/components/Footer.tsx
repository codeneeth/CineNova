import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="w-full p-5 border-t border-[#333333]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex flex-row-reverse justify-center gap-[2px]">
              <span className="h-3 w-[2px] bg-white"></span>
              <span className="h-5 w-[2px] bg-gradient-to-b from-[#e50914] via-white to-[#00adb5]"></span>
              <span className="h-7 w-[2px] bg-white"></span>
            </div>

            <h1 className="text-2xl text-[#e50914] font-semibold tracking-wide">
              CineNova
            </h1>

            <div className="flex flex-row-reverse justify-center gap-[2px]">
              <span className="h-7 w-[2px] bg-white"></span>
              <span className="h-5 w-[2px] bg-gradient-to-b from-[#e50914] via-white to-[#00adb5]"></span>
              <span className="h-3 w-[2px] bg-white"></span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <button className="cursor-pointer text-xl hover:text-gray-300 transform hover:-translate-y-1 transition-all duration-300">
              <FaGithub />
            </button>
            <button className="cursor-pointer text-xl hover:text-gray-300 transform hover:-translate-y-1 transition-all duration-300">
              <FaLinkedinIn />
            </button>
            <button className="cursor-pointer text-xl hover:text-gray-300 transform hover:-translate-y-1 transition-all duration-300">
              <FaInstagram />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right flex flex-col gap-1 text-sm">
            <p className="font-light">© 2025 CineNova. All rights reserved.</p>
            <p className="font-extralight">
              Made with ❤️ by{" "}
              <a href="#" className="text-[#e50914] hover:underline">
                Praneeth
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;

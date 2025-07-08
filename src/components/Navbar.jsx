import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0d0d0d]/70 border-b border-[#1f1f1f] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex gap-[1px]">
            <span className="w-[2px] h-3 bg-white"></span>
            <span className="w-[2px] h-5 bg-gradient-to-b from-[#e50914] via-white to-[#00adb5]"></span>
            <span className="w-[2px] h-3 bg-white"></span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#e50914] tracking-wide">
            CineNova
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/codeneeth"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-[#333] rounded-md hover:bg-[#e50914] hover:border-[#e50914] transition-all duration-300"
          >
            View Source
          </a>
          <div className="flex gap-4 text-lg text-gray-300">
            <a
              href="https://github.com/codeneeth"
              target="_blank"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/praneeth-sai-kancheti"
              target="_blank"
              className="hover:text-[#00adb5]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.comcodeneeth"
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <CgMenuRight />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-full max-w-xs h-screen z-[100] bg-[#121212] p-6 shadow-lg border-l border-[#2c2c2c] flex flex-col gap-6 transition-all duration-300 ease-in-out">
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-white hover:text-[#e50914] transition"
              >
                <TfiClose />
              </button>
            </div>

            <a
              href="https://github.com/codeneeth"
              target="_blank"
              className="text-sm font-medium text-white border border-[#333] rounded-md px-4 py-2 hover:bg-[#e50914] hover:border-[#e50914] transition"
            >
              View Source
            </a>

            <div className="flex gap-6 text-xl text-gray-300">
              <a
                href="https://github.com/codeneeth"
                target="_blank"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/praneeth-sai-kancheti"
                target="_blank"
                className="hover:text-[#00adb5]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/Whilepraneeth"
                target="_blank"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

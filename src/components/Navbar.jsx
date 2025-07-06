import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isMenuopen, setMenuopen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-20 w-full p-5 sticky border-1 border-[#333333] rounded-b-3xl">
        <div className="flex justify-between items-center sm:gap-2">
          <div className="flex items-center gap-2">
            <div className="flex  justify-center gap-[2px]">
              <span className="h-3 w-[2px] bg-white"></span>
              <span className="h-5 w-[2px] bg-gradient-to-b from-[#e50914] via-white to-[#00adb5]"></span>
              <span className="h-7 w-[2px] bg-white"></span>
            </div>

            <h1 className="text-2xl text-[#e50914] font-semibold tracking-wide">
              CineNova
            </h1>

            <div className="flex justify-center gap-[2px]">
              <span className="h-7 w-[2px] bg-white"></span>
              <span className="h-5 w-[2px] bg-gradient-to-b from-[#e50914] via-white to-[#00adb5]"></span>
              <span className="h-3 w-[2px] bg-white"></span>
            </div>
          </div>

          <ul className="hidden md:flex gap-5 ">
            <li>
              <a
                href="#"
                className="text-md text-white cursor-pointer hover:text-gray-300 hover:border-b-2 transition-all duration-200"
              >
                Best
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-md text-white cursor-pointer hover:text-gray-300 hover:border-b-2 transition-all duration-200"
              >
                Developer
              </a>
            </li>
          </ul>
          <div className="hidden sm:block relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <input
              type="search"
              placeholder="Search movies..."
              className="w-full bg-transparent text-white border border-[#333333] px-4 pr-10 py-2 rounded-md placeholder-[#b3b3b3] focus:outline-none text-sm sm:text-base"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ffffff] hover:text-[#646969] text-lg sm:text-xl transition-colors duration-300 cursor-pointer">
              <CiSearch />
            </button>
          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() => {
              setMenuopen(true);
            }}
          >
            {" "}
            <CgMenuRight />{" "}
          </button>
          <div
            className={`${
              isMenuopen ? "flex" : "hidden"
            } fixed top-0 right-0 w-3/4 max-w-xs h-full z-50 bg-[#1a1a1a]/80 backdrop-blur-md p-5 flex-col gap-6 shadow-lg rounded-l-xl`}
          >
            <button onClick={() => setMenuopen(false)}>
              <TfiClose />
            </button>
            {/* Navigation Links */}
            <ul className="text-white space-y-3 text-base font-medium">
              <li className="hover:text-[#00adb5] cursor-pointer">Best</li>
              <li className="hover:text-[#00adb5] cursor-pointer">Developer</li>
            </ul>

            {/* Search Input */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search movies..."
                className="w-full bg-[#0d0d0d] text-white border border-[#333333] px-4 pr-10 py-2 rounded-md placeholder-[#b3b3b3] focus:outline-none text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ffffff] hover:text-[#646969] text-lg">
                <CiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

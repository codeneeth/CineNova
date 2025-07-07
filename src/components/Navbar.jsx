import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isMenuopen, setMenuopen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-20 w-full p-5 top-0 z-40 sticky  border-1 border-[#333333] rounded-xl">
        <div className="flex justify-between items-center sm:gap-2">
          <div className="flex items-center gap-2">
            <div className="flex  justify-center gap-[2px]">
              <span className="h-3 w-[2px] bg-white"></span>
              <span className="h-5 w-[2px] bg-gradient-to-b from-[#e50914] via-white to-[#00adb5]"></span>
              <span className="h-7 w-[2px] bg-white"></span>
            </div>

            <h1 className="text-2xl text-[#e50914] font-semibold  tracking-wide">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

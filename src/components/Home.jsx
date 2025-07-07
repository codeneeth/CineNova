import React from "react";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container min-h-screen flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-10 items-center p-5 ">
          <img
            src="/hero.png"
            alt="Landing-Image"
            className=" h-[320px] md:h-[420px] shadow-lg"
          />

          <p className=" text-3xl md:text-5xl font-extrabold text-center">
            Find{" "}
            <span className="bg-gradient-to-r from-[#e50914] via-white to-[#00adb5] bg-clip-text text-transparent">
              Movies
            </span>
            You’ll Love <br /> Without the Hassle
          </p>

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

          <div className="relative md:hidden ">
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
  );
};

export default Home;

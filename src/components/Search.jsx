import React from 'react';
import { CiSearch } from "react-icons/ci";


const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className="w-full">
      {/* Desktop Search */}
      <div className=" sm:block relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <input
          type="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(event)=> setsearchTerm(event.target.value)}
          className="w-full bg-transparent text-white border border-[#333333] px-4 pr-10 py-2 rounded-md placeholder-[#b3b3b3] focus:outline-none text-sm sm:text-base"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ffffff] hover:text-[#646969] text-lg sm:text-xl transition-colors duration-300 cursor-pointer">
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;

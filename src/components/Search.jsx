import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = ({ searchTerm, setsearchTerm }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl transition-all">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Find your next favorite movie..."
          className="w-full py-3 pl-5 pr-12 rounded-xl bg-[#121212] text-white placeholder-gray-400 border border-gray-700 focus:outline-none  transition-all duration-300 shadow-sm"
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl hover:text-[#e50914] transition-colors duration-300"
        >
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { useDebounce } from "react-use";
import Search from "./Search";
import MovieCard from "./MovieCard";
import { updateSearchCount } from "../appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Home = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [debounceSearch, setdebounceSearch] = useState("");
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  useDebounce(() => setdebounceSearch(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setisLoading(true);
    seterrorMessage("");

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&sort_by=popularity.desc`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) throw new Error("Error fetching movies");

      const data = await response.json();

      if (data.response === "False") {
        seterrorMessage(data.error || "Failed to fetch movies");
        setmovieList([]);
        return;
      }

      setmovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      seterrorMessage("Couldn't fetch movies. Please try again later.");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debounceSearch);
  }, [debounceSearch]);

  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] px-4">
      {/* Hero */}
      <div className="max-w-6xl mx-auto py-16 flex flex-col items-center text-center">
        <img
          src="/hero.png"
          alt="Hero"
          className="h-[300px] md:h-[400px] object-contain drop-shadow-lg"
        />

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-6 leading-tight">
          Find{" "}
          <span className="bg-gradient-to-r from-[#e50914] via-white to-[#00adb5] bg-clip-text text-transparent">
            Movies
          </span>
          <br className="hidden sm:block" /> You’ll Love Without the Hassle
        </h1>

        <div className="mt-8 w-full max-w-xl">
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </div>
      </div>

      {/* Movies List */}
      <section className="max-w-6xl mx-auto my-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">All Movies</h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ThreeDot variant="bounce" color="#e50914" size="medium" />
          </div>
        ) : errorMessage ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-center">{errorMessage}</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movieList.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;

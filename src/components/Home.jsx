import React from "react";
import { CiSearch } from "react-icons/ci";
import Search from "./Search";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import MovieCard from "./MovieCard";

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
  const [errorMessage, seterrorMessage] = useState("");
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchMovies = async (query = "") => {
    setisLoading(true);
    seterrorMessage("");
    try {
      const endpoint =query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&sort_by=popularity.desc`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Error fetching Movies");
      }

      const data = await response.json();

      if (data.response == "False") {
        seterrorMessage(data.error || "Failed to fetch Movies");
        setmovieList([]);
        return;
      }
      setmovieList(data.results || []);
    } catch (error) {
      console.log(`Error fetching movies please try again later${error}`);
      seterrorMessage("Error fetching movies. please try again later");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);
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
          <div className="flex flex-col justify-center items-center ">
            <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
          </div>
        </div>
      </div>
      <section className="my-10">
        <h2 className="text-2xl text-white font-bold mb-6">All Movies</h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ThreeDot
              variant="bounce"
              color="#e50914"
              size="medium"
              text=""
              textColor=""
            />
          </div>
        ) : errorMessage ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">{errorMessage}</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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

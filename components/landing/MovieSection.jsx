import React from "react";
import HomeMovieCard from "./HomeMovieCard";

export default function MovieSection({
  popularMovies, 
  top_rated_movies,
  trendingMovies
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <!-- Trending Movies --> */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div
          id="trendingMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
            {
                popularMovies.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie}/>
                ))
            }
         
        </div>
      </section>

      {/* <!-- Popular Movies --> */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular on MOVIE DB</h2>
        <div id="popularMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {
                top_rated_movies.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie}/>
                ))
            }
        </div>
      </section>

      {/* <!-- Top Rated Movies --> */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
        <div
          id="topRatedMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
            {
                trendingMovies.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie}/>
                ))
            }
        </div>
      </section>
    </div>
  );
}

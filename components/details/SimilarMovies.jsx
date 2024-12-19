import React from "react";
import SimilarMovieCard from "./SimilarMovieCard";

export default async function SimilarMovies({ movieId }) { 

    const similarMoviesByIdResponse = await fetch(
        `${process.env.BASE_API_URL}/${movieId}/similar`
      );  
      const similarMoviesById = await similarMoviesByIdResponse.json();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">More Like This</h2>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {similarMoviesById.map((similarMovie) => (
          <SimilarMovieCard key={similarMovie.id} similarMovie={similarMovie}/>
        ))}
      </div>
    </div>
  );
}

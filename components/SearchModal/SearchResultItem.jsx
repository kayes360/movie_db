'use client'
import { CompareActions } from "@/app/actions";
import { ComparisonContext } from "@/app/context/ComparisonContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function SearchResultItem({ movie , slotId}) {
  const releaseYear = movie?.release_date?.split("-")[0];
  const {state, dispatch} = useContext(ComparisonContext)
  const handleMovieSelection = (movie) => {  
     dispatch({
        type: CompareActions.SELECT_MOVIE,
        payload: {id: movie.id,slotId, movie}
     })
   }
  return (
    <div className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded" onClick={() => handleMovieSelection(movie)}>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
        className="w-16 h-24 object-cover rounded"
        width={500}
        height={500}
      />
      <div>
        <h3 className="font-bold">{movie?.title}</h3>
        <p className="text-sm text-gray-400">{releaseYear}</p>
      </div>
    </div>
  );
}

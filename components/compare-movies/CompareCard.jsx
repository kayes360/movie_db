"use client";
import { CompareActions } from "@/app/actions";
import { ComparisonContext } from "@/app/context/ComparisonContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function CompareCard({ movie, slotId }) {
  const releaseYear = movie?.release_date?.split("-")[0];
  const { state, dispatch } = useContext(ComparisonContext);

  const handleRemoveMovie = () => {
    dispatch({
      type: CompareActions.REMOVE_MOVIE,
      payload: { id: movie.id, slotId },
    });
  };
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div className="flex justify-end mb-4">
        <div className="relative flex justify-end mb-4">
          <button
            className="text-gray-400 hover:text-white relative group"
            aria-label="Close"
            onClick={handleRemoveMovie}
          >
            ✕{/* Tooltip */}
            <div className="absolute w-max bottom-8 mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200 bg-neutral-700 text-white text-sm px-3 py-1 rounded shadow-lg">
              Remove This Movie
              {/* Tooltip caret */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-3 h-3 bg-neutral-700 rotate-45"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
            className="w-full rounded-lg mb-4 object-contain max-h-full"
            width={500}
            height={500}
          />

          <h2 className="text-xl font-bold mb-2 text-center">{movie?.title}</h2>
        </div>
        <div className="w-full space-y-4 col-span-3">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">{movie?.vote_average}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Total Vote:</span>
            <span className="float-right">{movie?.vote_count}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">{releaseYear}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Original Language:</span>
            <span className="float-right">{movie?.original_language}</span>
          </div>

          {/* <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">notfound</span>
          </div> */}
          {/* <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-zinc-700 px-2 py-1 rounded-full text-sm">
              notfound
              </span> 
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

'use client'
import { useAuth } from "@/app/hooks/useAuth";
import { removingFromWatchLater } from "@/app/serverActions";
import Image from "next/image";
import React from "react";

export default function WatchlaterCard({movie}) {
 const {auth, setAuth} = useAuth()
    const releaseYear = movie?.release_date?.split("-")[0];
const handleRemove = async (movie) => { 
    await removingFromWatchLater(movie, auth.user.id);
        
        // Update the auth context state
        setAuth((prevAuth) => ({
          ...prevAuth,
          user: {
            ...prevAuth.user,
            watchLater: prevAuth.user.watchLater.filter(
              (item) => item.id !== movie.id
            ),
          },
        }));
 }
  return (
    <div className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt="Armor"
        className="w-full h-[450px] object-cover"
        height={400}
        width={300}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="text-xl font-bold text-light mb-2">{movie?.title}</h2>
        <div className="flex justify-between items-center">
          <span className="text-primary">{releaseYear}</span>
          <button className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition" onClick={() => { handleRemove(movie) }}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

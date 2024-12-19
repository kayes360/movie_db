import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SearchResultCard({ movie }) {
  const releaseYear = movie?.release_date?.split("-")[0];

  return (
    <Link
      href={`/movie/${movie?.id}`}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
        className="w-full aspect-[2/3] object-cover"
        width={500}
        height={500}
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{movie?.title}</h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{releaseYear}</span>
          <span>⭐ {movie?.vote_average}</span>
        </div>
      </div>
    </Link>
  );
}

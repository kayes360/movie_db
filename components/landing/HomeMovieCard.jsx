import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function HomeMovieCard({movie}) {
    const releaseYear = movie?.release_date?.split("-")[0];
  return ( 

<div
          className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
        >
          <Link href={`/movie/${movie?.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
              className="w-full rounded-lg"
              width={500}
              height={500}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">{movie?.title}</h3>
              <p className="text-primary text-xs">{releaseYear}</p>
            </div>
          </Link>
        </div> 
  )
}

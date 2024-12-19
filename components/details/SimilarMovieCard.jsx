import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SimilarMovieCard({similarMovie}) {
  return (
    <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <Link href={`/movie/${similarMovie?.id}`}>
          <Image
              src={`https://image.tmdb.org/t/p/original/${similarMovie?.poster_path}`}
              alt={similarMovie?.title}
              className="w-full rounded-lg"
              width={500}
              height={500}
            />
          </Link>
        </div>
  )
}

 
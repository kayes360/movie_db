import MovieDetails from "@/components/details/MovieDetails";
import SimilarMovies from "@/components/details/SimilarMovies";
import SimilarMovieSkeleton from "@/components/details/SimilarMovieSkeleton";
import { Asap_Condensed } from "next/font/google";
import React, { Suspense } from "react";


export async function generateMetadata({ params, searchParams }, parent) { 
    const movieId = (await params).movieId
    
    const movie = await fetch(
        `${process.env.BASE_API_URL}/${movieId}`
      ).then((res) => res.json())
    
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: movie.title,
        description: movie?.overview,
        openGraph: {
            images: [`https://image.tmdb.org/t/p/original/${movie?.poster_path}`, ...previousImages], 
        },

        twitter: { 
            title: movie.title,
            description: movie?.overview, 
            images: [`https://image.tmdb.org/t/p/original/${movie?.poster_path}`],  
          },
    };
  }
  

export default async function page({ params }) {
  const movieId = params.movieId;
  const movieByIdResponse = await fetch(
    `${process.env.BASE_API_URL}/${movieId}`
  );
  const movieById = await movieByIdResponse.json();


  return (
    <>
      <MovieDetails movie={movieById} />
      <Suspense fallback={<SimilarMovieSkeleton />}>
        <SimilarMovies movieId={movieId} />
      </Suspense>
    </>
  );
}

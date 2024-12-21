import MovieDetails from "@/components/details/MovieDetails";
import SimilarMovies from "@/components/details/SimilarMovies";
import SimilarMovieSkeleton from "@/components/details/SimilarMovieSkeleton";
import { Asap_Condensed } from "next/font/google";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";


export async function generateMetadata({ params, searchParams }, parent) {
    const movieId = params.movieId;
  
    // Fetch the movie data
    let movie = null;
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/${movieId}`);
      if (response.ok) {
        movie = await response.json();
      }
    } catch (error) {
      console.error("Error fetching movie metadata:", error);
    }
  
    // If movie is not found, provide fallback metadata
    if (!movie) {
      return {
        title: "Movie Not Found",
        description: "The movie you are looking for does not exist.",
      };
    }
  
    // Fetch previous metadata
    const previousImages = (await parent).openGraph?.images || [];
  
    return {
      title: movie.title || "Unknown Movie",
      description: movie.overview || "No description available.",
      openGraph: {
        images: [`https://image.tmdb.org/t/p/original/${movie.poster_path}`, ...previousImages],
      },
      twitter: {
        title: movie.title || "Unknown Movie",
        description: movie.overview || "No description available.",
        images: [`https://image.tmdb.org/t/p/original/${movie.poster_path}`],
      },
    };
  }
  
  

  export default async function page({ params }) {
    const movieId = params.movieId;
  
    let movieById = null;
  
    try {
      // Attempt to fetch the movie details
      const movieByIdResponse = await fetch(
        `${process.env.BASE_API_URL}/${movieId}`
      );
  
      // Check if the response is OK (status 200-299)
      if (!movieByIdResponse.ok) {
        console.error("Failed to fetch movie details:", movieByIdResponse.status);
        notFound(); // Trigger the 404 page if not found
      }
  
      // Parse the response
      movieById = await movieByIdResponse.json();
    } catch (error) {
      console.error("Error fetching movie details:", error);
      notFound() // Return 404 if an error occurs
    }
  
    return (
      <>
        <MovieDetails movie={movieById} />
        <Suspense fallback={<SimilarMovieSkeleton />}>
          <SimilarMovies movieId={movieId} />
        </Suspense>
      </>
    );
  }
  

import React from "react";
import { DoubleCheckIcon } from "../common/SVGIcons";
import Image from "next/image";
import ShareOnSocialMedia from "./ShareOnSocialMedia";

export default async function MovieDetails({ movie }) {
  const movieId = movie.id;
  const movieCreditByIdResponse = await fetch(
    `${process.env.BASE_API_URL}/${movieId}/credits`
  );
  const movieCreditById = await movieCreditByIdResponse.json();
  const cast = movieCreditById?.cast?.slice(0, 8);
  return (
    <div id="movieDetails" className="min-h-screen pt-20 mb-8">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32 ">
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="md:w-1/3">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full rounded-lg shadow-lg "
                width={500}
                height={200}
                quality={100}
              />
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{movie?.title}</h1>

              <div className="flex items-center mb-4 space-x-4">
                <span className="text-green-500"> {movie?.release_date} </span>
                <span>| </span>
                <span>{movie?.runtime} min</span>
              </div>

              <p className="text-lg mb-6">{movie?.overview}</p>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie?.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {genre.name}{" "}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Cast</h3>
                <div className="flex flex-wrap gap-4">
                  {cast?.map((actor) => (
                    <div className="text-center" key={actor?.id}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                        alt={actor?.name}
                        className="w-24 h-24 rounded-full object-cover mb-2"
                        width={500}
                        height={500}
                        quality={100}
                      />
                      <p className="text-sm">{actor?.name} </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M12 11l0 6" />
                        <path d="M9 14l6 0" />
                      </svg>
                      Add to Wacth List
                    </button>
                  </div>

                  <div className="text-center">
                    <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
                      <DoubleCheckIcon />
                      Added to Wacth List
                    </button>
                  </div>
                </div>
              </div>

              <ShareOnSocialMedia/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
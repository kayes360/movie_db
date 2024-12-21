import React from 'react'

export default async function HeroSection() {
    let upComingSingleMovie;

    try {
      const response = await fetch(`${process.env.BASE_API_URL}/upcoming`);

      if (!response.ok) {
        throw new Error("Network Response not ok !!");
      }
      const upcomingMovies = await response.json();  
      upComingSingleMovie = upcomingMovies.results[0] 
    } catch (error) {
      console.log("failed to fetch data");
    }
  return (
    <div
    id="hero"
    className="relative h-screen"
    style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${upComingSingleMovie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
    <div className="absolute bottom-0 left-0 p-12">
      <h1 id="heroTitle" className="text-5xl font-bold mb-4">
       {upComingSingleMovie?.title}
      </h1>
      <p id="heroOverview" className="text-lg max-w-2xl mb-4">
      {upComingSingleMovie?.overview}

      </p>
      <button
        className="bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80"
      >
        ▶ Play
      </button>
    </div>
  </div>
  )
}

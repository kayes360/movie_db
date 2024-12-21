const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
  };

  export const getUpcomingMovies = async () => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming`, options)
      
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json() 
        return data
    } catch (error) {
        console.log(error)
    }
 }

export const getNowPlayingMovies = async () => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing`, options)
      
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
 }
 export const getPopularMovies = async () => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular`, options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
 }
 export const getTopRatedMovies = async () => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated`, options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
 }
 
 export const getMovieById = async (movieId) => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options) 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
 }

 export const getMovieCreditById = async (movieId) => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options) 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
 }
 export const getSimilarMovieById = async (movieId) => { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar`, options) 

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data =await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
 }
 

 export const searchMoviesByName = async (query) => { 
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,options
      );
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data =await response.json()

        return data  // Return only the results array
    } catch (error) {
      console.error('Error fetching movies:', error); 
    }
  };
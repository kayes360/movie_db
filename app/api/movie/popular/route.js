import { getPopularMovies   } from "@/utils/movie-utils"; 
 
export async function GET() {
  
        const popularMovies = await getPopularMovies()
    const filteredResults = popularMovies.results.map(({ poster_path, title, release_date, id }) => ({
        poster_path,
        title,
        release_date,
        id,
    })) 
    return Response.json(filteredResults)
}
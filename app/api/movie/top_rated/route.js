import { getTopRatedMovies   } from "@/utils/movie-utils"; 
 
export async function GET() {
    const topRatedMovies = await getTopRatedMovies()

    const filteredResults = topRatedMovies.results.map(({ poster_path, title, release_date, id }) => ({
        poster_path,
        title,
        release_date,
        id,
    })) 
    return Response.json(filteredResults)
}
import { getNowPlayingMovies   } from "@/utils/movie-utils"; 
 
export async function GET() {
    const nowPlayingMovies = await getNowPlayingMovies()
    const filteredResults = nowPlayingMovies.results.map(({ poster_path, title, release_date, id }) => ({
        poster_path,
        title,
        release_date,
        id,
    })) 
    return Response.json(filteredResults)
}
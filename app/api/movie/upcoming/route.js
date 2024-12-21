import { getUpcomingMovies } from "@/utils/movie-utils"

 

export async function GET() {
    const upcomingMovies = await getUpcomingMovies()  
    return Response.json(upcomingMovies)
}
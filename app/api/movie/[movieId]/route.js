import { getMovieById } from "@/utils/movie-utils"

export async function GET(request,{params}) {
    const movieId = params?.movieId;   
    const movieById = await getMovieById(movieId)
    
    return Response.json(movieById)
}
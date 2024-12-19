import { getMovieCreditById } from "@/utils/movie-utils";

 

export async function GET(request,{params}) {
    const movieId = params?.movieId;   
    const movieCreditById = await getMovieCreditById(movieId)
    
    return Response.json(movieCreditById)
}
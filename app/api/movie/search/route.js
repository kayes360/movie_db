import { searchMoviesByName } from "@/utils/movie-utils";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const movies = await searchMoviesByName(query);

 
  return Response.json(movies.results);
}



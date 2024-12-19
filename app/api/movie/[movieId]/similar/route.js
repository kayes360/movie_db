import { getSimilarMovieById } from "@/utils/movie-utils";

export async function GET(request, { params }) {
  const movieId = params?.movieId;
  const similarMovieById = await getSimilarMovieById(movieId);

  const filteredResults = similarMovieById.results.map(
    ({ poster_path, title, id }) => ({
      poster_path,
      title,

      id,
    })
  );
  return Response.json(filteredResults);
}

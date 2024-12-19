import SearchResultCard from "@/components/search/SearchResultCard";
import React from "react";

export default async function page({ searchParams: { query } }) {
 
  let searchedData = [];
  if (query) {
    try {
      const response = await fetch(
        `${process.env.BASE_API_URL}/search?query=${query}`
      );
      searchedData = await response.json(); 
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  return (
    <div>
      {" "}
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
          <p className="text-gray-400">Found {searchedData?.length} results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedData.length > 0 ? (
            searchedData.map((movie) => <SearchResultCard key={movie.id} movie={movie}/>)
          ) : (
            <div>No movie found</div>
          )}
        </div>
      </main>
    </div>
  );
}

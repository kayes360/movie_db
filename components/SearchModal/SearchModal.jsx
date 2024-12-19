"use client";
import React, { useState, useEffect } from "react";
import SearchResultItem from "./SearchResultItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/app/hooks/useDebounce";

export default function SearchModal({ onClose, slotId }) {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const doSearch = useDebounce(async (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);

    if (term) {
      try {
        const response = await fetch(`/api/movie/search?query=${term}`);
        const data = await response.json(); 
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setResults([]);
    }
  }, 500);

  const handleSearch = (term) => {
    doSearch(term);
  };
 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button className="text-gray-400 hover:text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query") || ""}
        />
        <div className="max-h-96 overflow-y-auto">
          {results && results.length > 0 ? (
            results.map((movie) => (
              <SearchResultItem key={movie.id} movie={movie} slotId={slotId} />
            ))
          ) : (
            <p className="text-gray-400 text-center">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

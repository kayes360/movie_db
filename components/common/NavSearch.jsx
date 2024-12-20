"use client";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Create a separate component that uses useSearchParams
const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchTerm, setSearchTerm] = useState(query || "");
  const router = useRouter();
  const debouncedSetSearchTerm = useDebounce((value) => {
    setSearchTerm(value);
  }, 100);

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    debouncedSetSearchTerm(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm !== "") {
      router.push(`/search-result?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    if (!query) {
      setSearchTerm("");
    } else {
      setSearchTerm(query);
    }
  }, [query]);

  return (
    <div className="relative">
      <input
        type="search"
        id="searchInput"
        placeholder="Search movies..."
        className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
        onChange={handleSearchTerm}
        value={searchTerm}
        onKeyDown={handleKeyDown}
      />
      <div
        id="searchResults"
        className="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
      ></div>
    </div>
  );
};

// Main component wrapped in Suspense
export default function NavSearch() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <SearchContent />
    </React.Suspense>
  );
}
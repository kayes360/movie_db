"use client";
import React from "react";
import { DoubleCheckIcon, WatchLaterIcon } from "../common/SVGIcons";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { addingToWatchLater, removingFromWatchLater } from "@/app/serverActions";

export default function WatchLater({ movie }) {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const movieIsInWatchLater = auth?.user?.watchLater?.some(
    (watchLaterMovie) => watchLaterMovie.id === movie.id // Assuming movies have a unique `id`
  );

  const toggleWatchLater = async (movie) => {
    if (!auth?.user) {
      router.push('/login');
      return;
    }

    try {
      if (movieIsInWatchLater) {
        // Remove from watch later
        await removingFromWatchLater(movie, auth.user.id);
        
        // Update the auth context state
        setAuth((prevAuth) => ({
          ...prevAuth,
          user: {
            ...prevAuth.user,
            watchLater: prevAuth.user.watchLater.filter(
              (item) => item.id !== movie.id
            ),
          },
        }));
      } else {
        // Add to watch later
        await addingToWatchLater(movie, auth.user.id);

        // Update the auth context state
        setAuth((prevAuth) => ({
          ...prevAuth,
          user: {
            ...prevAuth.user,
            watchLater: [...prevAuth.user.watchLater, movie],
          },
        }));
      }
    } catch (error) {
      console.error('Error toggling watch later:', error.message);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {movieIsInWatchLater ? (
        <div
          className="text-center"
          onClick={() => {
            toggleWatchLater(movie);
          }}
        >
          <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
            <DoubleCheckIcon />
            Added to Watch List
          </button>
        </div>
      ) : (
        <div
          className="text-center"
          onClick={() => {
            toggleWatchLater(movie);
          }}
        >
          <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
            <WatchLaterIcon />
            Add to Watch List
          </button>
        </div>
      )}
    </div>
  );
}

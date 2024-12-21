import React from "react";
import WatchlaterCard from "./WatchlaterCard";

export default function WatchLaterList({watchLaterList}) { 
  return (
    <div
      id="watchLaterList"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
        {
            watchLaterList.map((movie) => (
                <WatchlaterCard key={movie.id} movie={movie}/>
            ))
        }
   
    </div>
  );
}

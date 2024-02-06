import React from "react";

export default function ({wached,average}) {
  const avgImdbRating = average(wached.map((movie) => movie.imdbRating));
  const avgUserRating = average(wached.map((movie) => movie.userRating));
  const avgRuntime = average(wached.map((movie) => movie.runtime));


  return (
    <div className=" shadow-lg border-b border-b-slate-700 h-[93px] bg-[#424254d3] rounded-lg">
      <h1 className="text-white pt-4 pl-12 font-bold">MOVIES YOU WATCHED</h1>
      <div className="flex justify-evenly items-center text-white pt-3 font-bold">
        <p>
          <span>🚹 {wached.length}</span> movies
        </p>
        <p>
          <span>⭐</span> {Math.floor(avgImdbRating)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating}
        </p>
        <p>
          <span>⏳ {avgRuntime}</span> min
        </p>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { MoviesContext } from "./App";

export default function () {
  const { watched, average } = useContext(MoviesContext);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  // const isNaN = avgRuntime === NaN ? 0 : avgRuntime //!bug
  // console.log(isNaN);
  return (
    <div className=" shadow-lg border-b border-b-slate-700 h-[93px] bg-[#424254d3] rounded-lg">
      <h1 className="text-white pt-4 pl-12 font-bold">MOVIES YOU WATCHED</h1>
      <div className="flex justify-evenly items-center text-white pt-3 font-bold">
        <p>
          <span>🚹 {watched.length}</span> movies
        </p>
        <p>
          <span>⭐</span> {avgImdbRating.toFixed(2)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating.toFixed(2)}
        </p>
        <p>
          <span>⏳ {avgRuntime.toFixed(2)}</span> min
          {/* /***bug***** */}
        </p>
      </div>
    </div>
  );
}

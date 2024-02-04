import React from "react";

export default function ItemMovies({ movies, onSelectMovies }) {
  return (
    <>
      <li className=" shadow-lg border-b border-b-slate-700 py-[8px] px-5 over  flex items-center" 
      onClick={()=>onSelectMovies(movies.imdbID)}>
        <div className="w-[65px] bg-contain  mr-10">
          <img
            src={movies.Poster}
            alt={movies.Title}
            className="w-full h-[82px] bg-cover rounded-md "
          />
        </div>

        <div className="flex-col text-white font-bold">
          <h2 className=" mb-2">{movies.Title}</h2>
          <p className="font-bold">
            <span>📆</span>
            {movies.Year}
          </p>
        </div>
      </li>
    </>
  );
}

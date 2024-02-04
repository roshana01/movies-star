import React from "react";
import ItemMovies from "./ItemMovies";

export default function ListMovies({ movies ,onSelectMovies}) {

  return (
    <>
      <ul >
        {movies?.map((movie) => (
          <ItemMovies movies={movie} key={movie.imdbID} onSelectMovies={onSelectMovies}/>
        ))}
      </ul>
    </>
  );
}
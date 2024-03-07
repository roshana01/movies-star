import React, { useContext } from "react";
import ItemMovies from "./ItemMovies";
import { MoviesContext } from "./App";

export default function ListMovies() {
 const { movies ,onSelectMovies} = useContext(MoviesContext)

  return (
    <>
      <ul >
        {movies?.map((movie) => (
          <ItemMovies movies={movie} key={"id" + movie.imdbID} onSelectMovies={onSelectMovies}/>
        ))}
      </ul>
    </>
  );
}

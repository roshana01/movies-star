import React, { useContext } from "react";
import { MoviesContext } from "./App";

export default function NumberResult() {
  const {movies} = useContext(MoviesContext)
  return (
    <>
      <p>
        result movies <span>{movies?.length}</span>
      </p>
    </>
  );
}

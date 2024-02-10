import React, { useEffect, useState } from "react";
const KEY = "187863fe";

function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movie not found......");
        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
      // closeMoviesDetails()
    })();
  }, [query]);
  return { movies, isLoading, error };
}

export default useMovies;

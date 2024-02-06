import React, { useEffect, useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NumberResult from "./NumberResult";
import Main from "./Main";
import { tempMovieData, tempWatchedData } from "../assets/data";
import BoxMovies from "./BoxMovies";
import BoxWatche from "./BoxWatche";
import ListMovies from "./ListMovies";
import Summery from "./Summery";
import ListWached from "./ListWached";
import Loader from "./Loader";
import Message from "./Message";
import MovieDetails from "./MovieDetails";

const KEY = "187863fe";
//
export default function App() {
  const [query, setQuery] = useState('dela');
  const [movies, setMovies] = useState([]);
  const [wached, setWached] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);



  const handlerMoveisDatilas = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
    // console.log(selectedId === id); //123FFe34 === 123FFe34 = null(basteh mesheh) /123FFe34 = rf3327 =>false(zaher mesheh)
  };
  const closeMoviesDetails = () => {
    setSelectedId(null);
  };

  const AddWatchedMoveis = (move) => {
 
    setWached((wached) => [move, ...wached]);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok )
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movie not found......");
        ;
        setMovies(data.Search);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
      closeMoviesDetails()
    })();
  }, [query]);

  return (
    <>
      <Header>
        <Logo />
        <SearchInput query={query} setQuery={setQuery} />
        <NumberResult movies={movies} />
      </Header>
      {/* Component Main */}
      <Main>
        <BoxMovies>
          {!isLoading && !error ? (
            <ListMovies movies={movies} onSelectMovies={handlerMoveisDatilas} />
          ) : isLoading ? (
            <Loader />
          ) : (
            error && <Message message={error} />
          )}
        </BoxMovies>

        <BoxWatche>
          {selectedId ? ( // zamani k id vardeh state slect meheh va true meshe in bakhash zaher mesheh
            <MovieDetails
              wached={wached}
              selectedId={selectedId}
              closeFunc={closeMoviesDetails}
              addWatch={AddWatchedMoveis}
            />
          ) : (
            <>
              <Summery wached={wached} average={average}/>
              <ListWached wached={wached}  />
            </>
          )}
        </BoxWatche>
      </Main>
    </>
  );
}

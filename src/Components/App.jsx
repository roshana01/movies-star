import React, { createContext, useEffect, useState } from "react";
const ContextMovies = createContext();

import Header from "./Header";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NumberResult from "./NumberResult";
import Main from "./Main";
import BoxMovies from "./BoxMovies";
import BoxWatch from "./BoxWatch";
import ListMovies from "./ListMovies";
import Summery from "./Summery";
import ListWatched from "./ListWatched";
import Loader from "./Loader";
import Message from "./Message";
import MovieDetails from "./MovieDetails";
import useMovies from "../hooks/useMovies";
import useLocalStorage from "../hooks/useLocalStorage";

const defaultValue = {watched:[] }
export const MoviesContext = createContext(defaultValue)

export default function App(){
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  //*uesed coustom hook⚛️

  const { movies, isLoading, error } = useMovies(query);
  const { watched, setWatched } = useLocalStorage([], "watch");

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const handlerMoviesDetilas = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
    // console.log(selectedId === id); //123FFe34 === 123FFe34 = null(basteh mesheh) /123FFe34 = rf3327 =>false(zaher mesheh)
  };

  const closeMoviesDetails = () => {
    setSelectedId(null);
  };

  // version 2 hooks and localstoreg
  const AddWatchedMovies = (move) => {
    setWatched((watched) => [move, ...watched]);

    //add localStorage in add list watch movies (event)
    //* in raveshi hast k to event anjam mesheh (localstorage)
    // localStorage.setItem("watch", JSON.stringify([move, ...watched]));
  };

  //*add localStorage in add list watch movies (useEffect)

  const deletedListWatchedMovies = (id) => {
    setWatched((watched) => watched.filter((moiv) => moiv.imdbID !== id));
  };

  return (
    <>
      <MoviesContext.Provider
        value={{
          query: query,
          setQuery: setQuery,
          movies: movies,
          onSelectMovies: handlerMoviesDetilas,
          watched: watched,
          selectedId: selectedId,
          closeFunc: closeMoviesDetails,
          addWatch: AddWatchedMovies,
          average:average,
          removeList:deletedListWatchedMovies,
          message:error
        }}
      >
        <Header>
          <Logo />
          <SearchInput/>
          <NumberResult/>
        </Header>
        {/* Component Main */}
        <Main>
          <BoxMovies>
            {!isLoading && !error ? (
              <ListMovies />
            ) : isLoading ? (
              <Loader />
            ) : (
              error && <Message/>
            )}
          </BoxMovies>

          <BoxWatch>
            {selectedId ? ( // zamani k id vardeh state slect meheh va true meshe in bakhash zaher mesheh
              <MovieDetails />
            ) : (
              <>
                <Summery/>
                <ListWatched/>
              </>
            )}
          </BoxWatch>
        </Main>
      </MoviesContext.Provider>
    </>
  );
}

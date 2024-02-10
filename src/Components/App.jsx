import React, { useEffect, useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NumberResult from "./NumberResult";
import Main from "./Main";
import BoxMovies from "./BoxMovies";
import BoxWatche from "./BoxWatche";
import ListMovies from "./ListMovies";
import Summery from "./Summery";
import ListWached from "./ListWached";
import Loader from "./Loader";
import Message from "./Message";
import MovieDetails from "./MovieDetails";
import useMovies from "../hooks/useMovies";
import useLocalStorage from "../hooks/useLocalStorage";


export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  //*uesed coustom hook⚛️

  const { movies, isLoading, error } = useMovies(query);
  const {watched, setWatched} = useLocalStorage([] ,"watche");

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const handlerMoveisDatilas = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
    // console.log(selectedId === id); //123FFe34 === 123FFe34 = null(basteh mesheh) /123FFe34 = rf3327 =>false(zaher mesheh)
  };

  const closeMoviesDetails = () => {
    setSelectedId(null);
  };

  // version 2 hooks and localstoreg
  const AddWatchedMoveis = (move) => {
    setWatched((watched) => [move, ...watched]);

    //add localStorage in add list watche movies (event)
    //* in raveshi hast k to event anjam mesheh (localstorage)
    // localStorage.setItem("watche", JSON.stringify([move, ...watched]));
  };

  //*add localStorage in add list watche movies (useEffect)

  const deletedListWatchedMovies = (id) => {
    setWatched((watched) => watched.filter((moiv) => moiv.imdbID !== id));
  };

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
              watched={watched}
              selectedId={selectedId}
              closeFunc={closeMoviesDetails}
              addWatch={AddWatchedMoveis}
            />
          ) : (
            <>
              <Summery watched={watched} average={average} />
              <ListWached
                watched={watched}
                removeList={deletedListWatchedMovies}
              />
            </>
          )}
        </BoxWatche>
      </Main>
    </>
  );
}

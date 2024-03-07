import React, { useContext, useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import RatingStar from "./RatingStar";
import useKey from "../hooks/useKey";
import { MoviesContext } from "./App";

const KEY = "187863fe";
export default function MovieDetails() {
  const { selectedId, closeFunc, addWatch, watched } = useContext(MoviesContext);
  
  // ? satat
  const [movieDetal, setMovieDetal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [onRating, setOnRating] = useState("");

  //*used hook for escape for list add movies
  useKey("Escape", closeFunc);

  //?driveState
  const isWatched = watched.map((moive) => moive.imdbID).includes(selectedId);

  //? useRef
  const countRef = useRef(0);
  //update useRef be vasteh useEffect anjam mesheh
  useEffect(() => {
    if (onRating) return countRef.current++;
  }, [setOnRating]);

  //?ye destrachring darim bara inke to api hameh horofa bozorgan

  const {
    Title: title,
    Poster: poster,
    Year: Year,
    Plot: plot,
    Runtime: runtime,
    Actors: actors,
    Released: released,
    Director: director,
    Genre: genre,
    imdbRating,
  } = movieDetal;

  const addhandlerWatch = () => {
    const onAddwatch = {
      imdbID: selectedId,
      title,
      poster,
      Year,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split("").at(0)),
      userRating: onRating,
      counRefRating: countRef.current,
    };
    addWatch(onAddwatch);
    closeFunc();
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovieDetal(data);
      setIsLoading(false);
    })();
  }, [selectedId]);

  //title head (html)
  useEffect(() => {
    document.title = `movie ${title}🥤🍿`;
    //clean ues effict
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="h-70  ">
            <div className="flex items-center bg-[#61617a6d]">
              <img
                src={poster}
                alt=""
                className="h-[250px] w-[170px]  relative"
              />
              <button
                className="absolute top-2 left-2 rounded-full w-7 h-7 bg-pink-600 flex justify-center pb-1 items-center text-white text-xl font-semibold "
                onClick={closeFunc}
              >
                {" "}
                &larr;
              </button>
              <div className="mx-5 text-white">
                <h1 className="mb-7 font-bold text-lg ">{title}</h1>
                <p className="">
                  {released} &bull; {runtime}
                </p>
                <p className="my-4">{genre}</p>
                <p className="">
                  <span>⭐</span>
                  {imdbRating} IMDb rating
                </p>
              </div>
            </div>
            <section className="text-white px-9 text-justify">
              <div className="flex flex-col items-center justify-center star py-4 px-2 bg-[#61617a6d] my-10 w-96  rounded-3xl  text-xl">
                {!isWatched ? (
                  <>
                    <RatingStar maxRating={10} onSarating={setOnRating} />

                    {onRating > 0 && (
                      <button
                        className=" w-80 p-2 mt-4 border-none bg-pink-500 rounded-3xl text-[17px]"
                        onClick={addhandlerWatch}
                      >
                        + Add to list
                      </button>
                    )}
                  </>
                ) : (
                  <p className="text-pink-300 text-[18px]">
                    you rate with movie 🤖
                  </p>
                )}
              </div>

              <p>
                <em>{plot}</em>
              </p>
              <p className="py-4">Strring {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </div>
        </>
      )}
    </>
  );
}

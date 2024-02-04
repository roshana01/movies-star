import React, { useEffect, useState } from "react";
import Loader from "./Loader";
const KEY = "187863fe";

export default function MovieDetails({ selectedId, closeFunc }) {
  const [movieDetal, setMovieDetal] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // {}
  // console.log(movieDetal.Actors);
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
            <section className="text-white px-5 text-justify">
              <div className="star py-4 px-2 bg-[#61617a6d] m-10 rounded-2xl flex justify-center text-xl">
                <span>⭐⭐⭐⭐⭐⭐⭐⭐</span>
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

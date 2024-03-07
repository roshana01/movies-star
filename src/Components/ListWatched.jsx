import React, { useContext } from "react";
import ItemWached from "./ItemWached";
import { MoviesContext } from "./App";

export default function ListWatched() {
   const { watched, removeList } = useContext(MoviesContext);

  return (
    <div>
      <ul>
        {watched?.map((watch) => (
          <ItemWached
            watched={watch}
            key={watch.imdbID}
            removeList={removeList}
          />
        ))}
      </ul>
    </div>
  );
}

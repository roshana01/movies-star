import React from "react";
import ItemWached from "./ItemWached";

export default function ListWached({ wached }) {
  return (
    <div>
      <ul>
        {wached?.map((watch) => (
          <ItemWached wached={watch} key={ watch.imdbID} />
        ))}
      </ul>
    </div>
  );
}

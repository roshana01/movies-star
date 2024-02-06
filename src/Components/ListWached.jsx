import React from "react";
import ItemWached from "./ItemWached";

export default function ListWached({ watched, removeList }) {
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

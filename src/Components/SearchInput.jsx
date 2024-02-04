import React from "react";
export default function SearchInput({ query, setQuery }) {
  return (
    <>
      {" "}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-lg"
      />
    </>
  );
}

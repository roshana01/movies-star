import React from "react";

export default function SearchInput({ valInput, setValInput }) {
  return (
    <>
      {" "}
      <input
        value={valInput}
        onChange={(e) => setValInput(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </>
  );
}

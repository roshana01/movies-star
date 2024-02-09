import React, { useEffect, useRef } from "react";
export default function SearchInput({ query, setQuery }) {
  //*used useRef in input

  const inputEl = useRef(null); //*hook useRef()

  useEffect(() => {
    // console.log(inputEl.current);
    const callback = (e) => {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        // console.log(e);
        inputEl.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [setQuery]);

  return (
    <>
      {" "}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-lg"
        ref={inputEl}
      />
    </>
  );
}

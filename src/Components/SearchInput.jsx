import React, { useEffect, useRef } from "react";
import useKey from "../hooks/useKey";

export default function SearchInput({ query, setQuery }) {
  //*used useRef in input
  const inputEl = useRef(null); //*hook useRef()

 //?used custom hook
  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
 

   //👆in codaye bala hamin paeeine vali tafavoti k dareh ine k bala az custom hook estefadeh shodeh v paeiin hamon ravaesh adi hastesh👇
   
  // useEffect(() => {
  //   const callback = (e) => {
  //
  //     if (e.code === "Enter") {
  //
  //     }
  //   };

  //   document.addEventListener("keydown", callback);
  //   return () => {
  //     document.removeEventListener("keydown", callback);
  //   };
  // }, [setQuery]);

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

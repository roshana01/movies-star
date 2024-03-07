import React, { useContext } from "react";

export default function Message() {
  const { message } = useContext(ContextMovies)
  return (
    <>
      <p className="text-center text-white flex h-[60vh] w-full justify-center items-center text-2xl">
    
        {message}⚠️
      </p>
    </>
  );
}

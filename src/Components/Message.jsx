import React from "react";

export default function Message({ message }) {
  return (
    <>
      <p className="text-center text-white flex h-[60vh] w-full justify-center items-center text-2xl">
    
        {message}⚠️
      </p>
    </>
  );
}

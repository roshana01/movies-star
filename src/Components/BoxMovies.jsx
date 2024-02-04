import React, { useState } from "react";
import Button from "./Button";

export default function BoxMovies({ children }) {
  const [closeBtn1, setCloseBtn1] = useState(true);

  const isTaggleListMovies = () => {
    setCloseBtn1((tgl) => !tgl);
  };
  return (
    <>
      <div className="box-movies bg-[#31354e] w-[450px] h-[650px] ml-3 rounded-xl overflow-auto  relative ">
        <Button setCloseBtn={isTaggleListMovies} closeBtn={closeBtn1} />
        {closeBtn1 && children}
      </div>
    </>
  );
}

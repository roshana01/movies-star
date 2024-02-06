import React, { useState } from "react";
import Button from "./Button";


export default function BoxWatche({ children }) {
  const [closeBtn2, setCloseBtn2] = useState(true);

  const isTaggleListMovies = () => {
    setCloseBtn2((tgl) => !tgl);
  };
  return (
    <>
      <div className="box-watche bg-[#31354e] w-[450px] h-[650px] ml-3 rounded-xl relative overflow-hidden">
        <Button setCloseBtn={isTaggleListMovies} closeBtn={closeBtn2} />
        {closeBtn2 && children}
  
      </div>
    </>
  );
}

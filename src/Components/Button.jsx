import React from "react";

export default function Button({ setCloseBtn, closeBtn }) {
  return (
    <>
      <button
        className="absolute right-0 top-3 mx-3 w-6 h-6 bg-[#c1c1df] rounded-full"
        onClick={ setCloseBtn}
      >
        {closeBtn ?"➖" :"➕"  }
      </button>
    </>
  );
}

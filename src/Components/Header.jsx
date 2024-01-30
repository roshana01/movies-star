import React from "react";

export default function Header({ children }) {
  return (
    <>
      <div className="w-full bg-pink-300 py-5 px-16 rounded-full flex justify-between items-center">
        {children}
      </div>
    </>
  );
}

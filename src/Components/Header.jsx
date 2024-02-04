import React from "react";

export default function Header({ children }) {
  return (
    <>
      <div className="w-full bg-pink-500 py-4 px-16 rounded-full flex justify-between items-center">
        {children}
      </div>
    </>
  );
}

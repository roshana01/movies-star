import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-full bg-pink-300 py-7 px-16 rounded-full flex justify-between items-center">
        <h1>logo</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <p>
          result movies <span>0</span>
        </p>
      </div>
      <button />
    </>
  );
}

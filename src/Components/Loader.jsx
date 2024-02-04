import React from "react";

export default function Loader() {
  return (
    <>
      {" "}
      <div className="flex w-50 h-[70vh] justify-center items-center">
        <span className="loading loading-infinity loading-lg text-pink-500"></span>
      </div>
    </>
  );
}

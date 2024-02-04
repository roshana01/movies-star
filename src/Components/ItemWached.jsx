import React from "react";

export default function ItemWached({ wached }) {
  return (
    <>
      <li className=" shadow-lg border-b border-b-slate-700 py-[10px] px-5 over  flex items-center">
        <div className="w-[65px] bg-contain  mr-10">
          <img
            src={wached.Poster}
            alt={wached.Title}
            className="w-full h-[82px] bg-cover rounded-md "
          />
        </div>

        <div className="flex-col text-white">
          <h2 className=" mb-2 font-bold">{wached.Title}</h2>
          <div className="flex justify-evenly items-center text-white pt-3 font-bold">
            <p className="mx-5">
              <span>⭐</span> {wached.imdbRating}
            </p>
            <p className="mx-5">
              <span>🌟</span> {wached.userRating}
            </p>
            <p className="mx-5">
              <span>⏳</span> {wached.runtime}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

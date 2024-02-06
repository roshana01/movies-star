import React from "react";

export default function ItemWached({ watched, removeList }) {
  return (
    <>
      <li className=" shadow-lg border-b border-b-slate-700 py-[10px] px-5 over  flex items-center relative">
        <button
          className="pl-[2px] bg-[#c1c1df]  absolute right-2 top-3 w-6 h-6 text-[11px] rounded-full "
          onClick={()=>removeList(watched.imdbID)}
        >
         ✖️
        </button>

        <div className="w-[65px] bg-contain  mr-10">
          <img
            src={watched.poster}
            alt={watched.title}
            className="w-full h-[82px] bg-cover rounded-md "
          />
        </div>

        <div className="flex-col text-white">
          <h2 className=" mb-2 font-bold">{watched.title}</h2>
          <div className="flex justify-evenly items-center text-white pt-3 font-bold">
            <p className="mx-5">
              <span>⭐</span>
              {watched.imdbRating}
            </p>
            <p className="mx-5">
              <span>🌟</span> {watched.userRating}
            </p>
            <p className="mx-5">
              <span>⏳</span>
              {watched.runtime ? watched.runtime : 0}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

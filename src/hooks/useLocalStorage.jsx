import React, { useEffect, useState } from "react";

//? used hook coustom for localstorage 

function useLocalStorage(empetyArry, key) {
  const [watched, setWatched] = useState(() => {
    //*used useCallback hook for localStorage (getItem)
    const localStorVal = empetyArry ? localStorage.getItem(key) : empetyArry;
    // console.log(hi); //ye callback byd khales bashe bedoneh paramet chera? undifinde medeh chera? chon callbak to useStateh va hech vorodi be parametr nadari bedi dar nahayt undifinde
    return JSON.parse(localStorVal);
  });

  useEffect(() => {
    //* setItem
    localStorage.setItem(key, JSON.stringify(watched));
  }, [watched, key]);

  return { watched, setWatched };
}

export default useLocalStorage;

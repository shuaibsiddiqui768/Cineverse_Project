import { useState,useEffect } from "react";
//custom hook for local storage acces and updating it

export function useLocalStorageState(initialState,key){
    const [value, setValue] = useState(function(){
    const storedValue=localStorage.getItem(key);
    return storedValue?JSON.parse(storedValue):initialState;
  });

    //effect to save the watchlist in local storage
  useEffect(
    function () {
      localStorage.setItem(key,JSON.stringify(value));
    },
    [value,key]
  );
  
  return [value,setValue];
}
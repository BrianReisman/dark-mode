import { useState } from "react";

//*the key is set only once, when useLS is first called.
export const useLocalStorage = (key, initValue) => {
  const [storedValue, setStoredValue] = useState(()=>{
    //*option 1
    // if(localStorage.getItem(key)){
    //   return JSON.parse(localStorage.getItem(key));
    // } else {
    //   return initValue;
    // }

    //*option 2
    // const mode = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initValue
    // return mode

    //*option 3
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initValue

  });

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value)) //*localStorage
    setStoredValue(value) //*state
  }

  return [storedValue, setValue];
};

import { useState } from "react";

//*the key is set only once, when useLS is first called.
export const useLocalStorage = (key, initValue) => {
  const [storedValue, setStoredValue] = useState(()=>{
    if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key));
    } else {
      return initValue;
    }
  });

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value)) //*localStorage
    setStoredValue(value) //*state
  }

  return [storedValue, setValue];
};

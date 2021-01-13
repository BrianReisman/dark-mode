import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //*useState's initial value is whatever this CB function returns
  const [storedValue, setStoredValue] = useState(() => {
    //*if the value in localStorage is truthy (not undefined or null) return that value
    if(localStorage.getItem(key)){ //?If it exists get it
      return JSON.parse(localStorage.getItem(key)) //*return this to useState
    }
    //*else (if there is no such key), use the initial value passed in
    else { //? If it doesn't exist set it
      localStorage.setItem(key, initialValue)
      return initialValue; //*return this to use in useState
    }
  })

  //*This function takes in one parameter called 'value'
  const setValue = (value) => {
    //*with that value, setStoredValue is updated, to update state and
    setStoredValue(value);
    //*localStorage is also updated so that the key/value pair is updated also
    localStorage.setItem(key, JSON.stringify(value));
  }

  //*return out of this function 1. [the storedValue (state)] and 2. [the function that sets _both_ storedValue (state) and localStorage]
  return [storedValue, setValue];
};

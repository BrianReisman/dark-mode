import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //*useState's initial value is whatever this CB function returns
const [storedValue, setStoredValue] = useState(() => {
    //*if the value in localStorage is truthy (not undefined or null) return that value
    if(window.localStorage.getItem(key)){ //?If it exists get it
      return JSON.parse(window.localStorage.getItem(key)) //*return this to useState
    }
    //*else (if there is no such key), use the initial value passed in and create a key/value pair in localStorage to that value setItem(key, initialValue)
    else { //? If it doesn't exist set it
      window.localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue; //*return this to use in useState
    }
  })

  //*This function takes in one parameter called 'value'
  const setValue = (value) => {
    //*with that value, setStoredValue is updated, to update state and
    setStoredValue(value);
    //*localStorage is also updated so that the key/value pair is updated also
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  //*return out of this function 1. [the storedValue (state)] and 2. [the function that sets _both_ storedValue (state) and localStorage]
  return [storedValue, setValue];
};

//!Note about JSON.parse() and JSON.stringify() with localStorage.
//!localStorage.getItem is a method that gets and *returns* something. Because of this, the whole package window.localStorage.getItem(key) needs to be wrapped so that the *return* gets parsed into JavaScript lingo.
//!localStorage.setItem is a method that sets, ships out, sents to localStorage and doesn't get something back that we are using. Because of this we only need to wrap the value in the setItem(key, value) *if* the value is not a primative. It is best practice to just wrap it regardless since we don't know what we will get as a value to pass in. This is most useful for objects and arrays since their .toString() methods are not helpful while boolean, number, and string default .toStrings are trustworthy.
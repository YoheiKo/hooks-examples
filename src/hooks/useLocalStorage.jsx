import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  // function to export
  const setValue = (value) => {
    // check if the param is a function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    // Set to State
    setLocalStorageValue(value);
    // Set to local storage
    // You cannot store an array to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  // You have to parset the JSON value to read
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;

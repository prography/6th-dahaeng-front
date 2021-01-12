import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  function setValue(value) {
    if (value instanceof Function) {
      const result = value(state);
      window.localStorage.setItem(key, JSON.stringify(result));
      setState(result);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    }
  }
  return [state, setValue];
}
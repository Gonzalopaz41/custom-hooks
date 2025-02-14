import { useState } from "react"

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (value=1) => {
    setCounter(counter + value);
  };

  const decrement = () =>{
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0)
  };

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

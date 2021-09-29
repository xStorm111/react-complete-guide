import { useState, useEffect } from "react";
//*FOR CUSTOM HOOKS WE HAVE TO START WITH 'use'

//useState and useEffect will be tied to the component that we are using it on
//which means we are not sharing the state, we are just sharing the logic
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;

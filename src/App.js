import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  //useCallback reuses the previous functional object
  //which means that if we know that the function never changes then we can use callback to store it

  //same thing as useEffect in terms of dependencies
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  //useMemo allows you to memoize any kind of data you want to store (data objects)
  //2 "equal" objects are not equal because they occupy different spaces in memory, which means they are not equal
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  const sortedList = useMemo(() => {
    return listItems.sort((a, b) => a - b);
  }, [listItems]);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

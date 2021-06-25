import React, { useState } from "react";
import NoPure from "./NoPure";
import Pure from "./Pure";

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <h1>App</h1>
      <p>Pure vs No Pure</p>
      <Pure />
      <NoPure />
      <button
        onClick={() => {
          setCount((count) => ++count);
        }}
      >
        button
      </button>
      <p>rendered count: {count}</p>
    </div>
  );
};

export default App;

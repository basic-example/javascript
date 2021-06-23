import React from "react";
import InvalidCounter from "./InvalidCounter";
import ValidCounter from "./ValidCounter";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <p>count should be +3 per click</p>
      <h2>Valid Work</h2>
      <ValidCounter />
      <h2>Invalid Work</h2>
      <InvalidCounter />
    </div>
  );
};

export default App;

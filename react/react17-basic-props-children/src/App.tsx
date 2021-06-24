import React from "react";
import Parent from "./Parent";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <Parent>
        <h3>Child Component</h3>
      </Parent>
    </div>
  );
};

export default App;

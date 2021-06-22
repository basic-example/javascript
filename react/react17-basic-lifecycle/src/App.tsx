import React from "react";
import Parent from "./Parent";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <p>check lifecycle logs in browser console</p>
      <Parent />
    </div>
  );
};

export default App;

import React from "react";
import Hello from "./Hello";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <Hello name="Yoo" />
      <Hello name="Lee" />
      <Hello name="Kim" />
    </div>
  );
};

export default App;

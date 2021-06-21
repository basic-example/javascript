import React from "react";
import ClassBase from "./ClassBase";
import FnBase from "./FnBase";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <ClassBase />
      <FnBase />
    </div>
  );
};

export default App;

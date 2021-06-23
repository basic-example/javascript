import React from "react";
import Parent from "./Parent";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <p>
        migration reference url:
        http://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
      </p>
      <Parent />;
    </div>
  );
};

export default App;

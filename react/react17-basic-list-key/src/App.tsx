import React from "react";
import IndexKeyList from "./IndexKeyList";
import NoKeyList from "./NoKeyList";
import UniqueStringKeyList from "./UniqueStringKeyList";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      {/* invalid work */}
      <NoKeyList />
      {/* invalid work */}
      <IndexKeyList />
      {/* valid work */}
      <UniqueStringKeyList />
    </div>
  );
};

setTimeout(() => {
  document.querySelectorAll("input").forEach((el) => {
    el.value = `${Math.random()}`;
  });
}, 1000);

export default App;

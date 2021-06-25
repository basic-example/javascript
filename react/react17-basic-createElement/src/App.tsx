import React from "react";
import Hello from "./Hello";

const App = (): JSX.Element => {
  return React.createElement("div", { key: "div" }, [
    React.createElement("h1", { key: "h1" }, "App"),
    React.createElement(Hello, { name: "aaa", key: "a" }),
    React.createElement(Hello, { name: "bbb", key: "b" }),
    React.createElement(Hello, { name: "ccc", key: "c" }),
  ]);
};

export default App;

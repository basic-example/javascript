import React from "react";
import Parent from "./Parent";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <p>useDebugValue for logging in react-developer-tools</p>
      <a
        target="_blank"
        href="https://chrome.google.com/webstore/detail//fmkadmapgofadopljbjfkapdkoienihi?hl=ko"
        rel="noreferrer"
      >
        react dev tool
      </a>
      <Parent />
    </div>
  );
};

export default App;

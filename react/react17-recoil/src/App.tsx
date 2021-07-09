import React from "react";
import { useRecoilState } from "recoil";
import Child, { countState } from "./Child";

const App = (): JSX.Element => {
  const [count] = useRecoilState(countState);

  return (
    <div>
      <h1>App</h1>
      <p>count in App: {count}</p>
      <Child />
    </div>
  );
};

export default App;

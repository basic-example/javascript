import React from "react";
import useTodo from "./useTodo";

const App = (): JSX.Element => {
  const { id, setId, data } = useTodo();

  return (
    <div>
      <h1>App Component</h1>
      <p>
        id: {id}, data: {JSON.stringify(data)}
      </p>
      <button onClick={() => setId(id + 1)}>increase</button>
    </div>
  );
};

export default App;

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import Counter from "./Counter";
import Todo from "./Todo";

const App = (): JSX.Element => {
  const count = useSelector<RootState>((state) => state.counter.count);
  const list = useSelector<RootState>((state) => state.todo.list);

  return (
    <div>
      <h1>App</h1>
      <p>counter: {count}</p>
      <p>todos: {JSON.stringify(list)}</p>
      <Counter />
      <Todo />
    </div>
  );
};

export default App;

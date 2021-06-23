import React, { useReducer, useState } from "react";

type Props = obj;
type State = Array<{ id: number; title: string }>;
type Action = {
  type: string;
  payload: string;
};

const App: React.FunctionComponent<Props> = (): JSX.Element => {
  const [items, dispatch] = useReducer<React.Reducer<State, Action>>(
    (state, action) => {
      const newState = [...state];
      if (action.type === "add") {
        const lastId = state[state.length - 1]["id"];
        newState.push({ id: lastId + 1, title: action.payload });
      }

      return [...newState];
    },
    [{ id: 1, title: "test title" }]
  );
  const [title, setTitle] = useState("");

  return (
    <div>
      <h1>App Component</h1>
      <input
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: title });
        }}
      >
        add
      </button>
      {items.map((item, index) => {
        return (
          <div key={index}>
            id: {item.id}, title: {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default App;

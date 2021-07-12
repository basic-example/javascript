import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootAction, RootState } from "../reducers";

export type Props = Record<string, unknown>;

const Todo: FunctionComponent<Props> = (props: Props, ref) => {
  const list = useSelector<RootState>((state) => state.todo.list);
  const dispatch = useDispatch<Dispatch<RootAction>>();

  return (
    <div>
      <h2>Counter</h2>
      <p>list: {JSON.stringify(list)}</p>
      <button onClick={() => dispatch({ type: "todo/add", payload: "aaa" })}>
        add
      </button>
    </div>
  );
};

export default Todo;

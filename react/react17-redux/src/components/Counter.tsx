import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootAction, RootState } from "../reducers";

export type Props = Record<string, unknown>;

const Counter: FunctionComponent<Props> = (props: Props, ref) => {
  const count = useSelector<RootState>((state) => state.counter.count);
  const dispatch = useDispatch<Dispatch<RootAction>>();

  return (
    <div>
      <h2>Counter</h2>
      <p>count: {count}</p>
      <button
        onClick={() => dispatch({ type: "counter/increase", payload: 1 })}
      >
        increase
      </button>
    </div>
  );
};

export default Counter;

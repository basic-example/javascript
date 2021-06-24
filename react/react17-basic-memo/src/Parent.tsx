import React, { FunctionComponent, memo, useState } from "react";
import Child from "./Child";

type Props = Record<string, unknown>;

const Memo = memo(Child);
const NoMemo = Child;
const Parent: FunctionComponent<Props> = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Memo name="Memo" />
      <NoMemo name="noMemo" />
      <p>parent re-render count: {count}</p>
      <button
        onClick={() => {
          setCount((count) => ++count);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Parent;

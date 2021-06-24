import React, { FunctionComponent, memo, useCallback, useState } from "react";
import Child from "./Child";

const MemoChild = memo(Child);

type Props = Record<string, unknown>;

const Parent: FunctionComponent<Props> = () => {
  const [count, setCount] = useState(0);
  const callback = () => {
    //
  };
  const memoCallback = useCallback(callback, []);

  return (
    <div>
      <MemoChild func={callback} name="not using useCallback" />
      <MemoChild func={memoCallback} name="using useCallback" />
      <p>parent re-render count: {count}</p>
      <button
        onClick={() => {
          setCount((count) => ++count);
        }}
      >
        click for re-render
      </button>
    </div>
  );
};

export default Parent;

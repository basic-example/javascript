import React, { FunctionComponent, useCallback, useDebugValue } from "react";
import useCount from "./useCount";

type Props = {
  count: number;
  name: string;
};

const Child: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const [count, setCount] = useCount(props.count);

  useCallback(() => {
    // React Hook "useDebugValue" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function
    console.log(count);
  }, [count]);

  useDebugValue(`useDebugValue, count: ${count}`);

  return (
    <div>
      {props.name} count: {count}
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

export default Child;

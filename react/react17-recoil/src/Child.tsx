import React, { FunctionComponent } from "react";
import { atom, useRecoilState } from "recoil";

export const countState = atom({
  key: "count",
  default: 0,
});

export type Props = Record<string, unknown>;

const Child: FunctionComponent<Props> = (props: Props, ref) => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h3>Child</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default Child;

import React, { FunctionComponent } from "react";
import Child from "./Child";

type Props = {
  [k in string]: anything;
};

const Parent: FunctionComponent<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Child name="aaa" count={10} />
      <Child name="bbb" count={20} />
      <Child name="ccc" count={30} />
    </div>
  );
};

export default Parent;

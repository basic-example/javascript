import React, { FunctionComponent, useState } from "react";
import Child from "./Child";

type Props = Record<string, unknown>;

const Parent: FunctionComponent<Props> = (props: Props) => {
  document.body.appendChild(
    document.createTextNode(`[parent] parent rendered`)
  );
  document.body.appendChild(document.createElement("br"));

  const [childProp, setChildProp] = useState<string>("");
  const [, setParentState] = useState<string>("");

  return (
    <div>
      <h2>Parent Component</h2>
      <button
        onClick={() => {
          document.body.appendChild(
            document.createTextNode(`[parent] state changed`)
          );
          document.body.appendChild(document.createElement("br"));
          setParentState(`${Math.random()}`);
        }}
      >
        change parent state
      </button>
      <button
        onClick={() => {
          document.body.appendChild(
            document.createTextNode(`[parent] child prop changed`)
          );
          document.body.appendChild(document.createElement("br"));
          setChildProp(`${Math.random()}`);
        }}
      >
        change child prop
      </button>
      <Child childProp={childProp} />
    </div>
  );
};

export default Parent;

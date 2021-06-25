import React, { FunctionComponent, useState } from "react";

type Props = {
  childProp: string;
};

const Child: FunctionComponent<Props> = (props: Props): JSX.Element => {
  document.body.appendChild(document.createTextNode(`[child] child rendered`));
  document.body.appendChild(document.createElement("br"));
  const [, setChildState] = useState<number>(0);

  return (
    <div>
      <h3>Child Component</h3>
      <button
        onClick={() => {
          document.body.appendChild(
            document.createTextNode(`[child] child state changed`)
          );
          document.body.appendChild(document.createElement("br"));
          setChildState((count) => ++count);
        }}
      >
        child button
      </button>
    </div>
  );
};

export default Child;

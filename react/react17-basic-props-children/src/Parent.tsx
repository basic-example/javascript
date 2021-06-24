import React, { FunctionComponent } from "react";

type Props = Record<string, unknown>;

const parent: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      {children}
    </div>
  );
};

export default parent;

import React, { FunctionComponent } from "react";

export type Props = Record<string, unknown>;

const Child: FunctionComponent<Props> = (props: Props, ref) => {
  return (
    <div>
      <h3>Child</h3>
      <div ref={ref}></div>
      <button
        onClick={() => {
          console.log("[Child] child div ref created by App Component", ref);
        }}
      >
        child button
      </button>
    </div>
  );
};

export default Child;

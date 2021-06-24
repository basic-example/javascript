import React, { FunctionComponent } from "react";

type Props = {
  [k in string]: string;
};

const FnBase: FunctionComponent<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <h2>Functional Base Child Component</h2>
      <p>{props.message}</p>
    </div>
  );
};

FnBase.defaultProps = {
  message: "Hello World",
};

export default FnBase;

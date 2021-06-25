import React, { FunctionComponent } from "react";

type Props = {
  name: string;
};

const Hello: FunctionComponent<Props> = (props: Props): JSX.Element => {
  return <h2>Hello {props.name}</h2>;
};

export default Hello;

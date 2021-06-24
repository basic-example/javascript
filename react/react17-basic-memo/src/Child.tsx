import React, { FunctionComponent } from "react";

type Props = {
  name: string;
};

const Child: FunctionComponent<Props> = (props: Props) => {
  const textEl = document.createElement("p");
  textEl.innerText = `${props.name} Child rendered`;
  document.body.appendChild(textEl);

  return <p>{props.name} Component</p>;
};

export default Child;

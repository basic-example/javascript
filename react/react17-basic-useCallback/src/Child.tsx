import React, { FunctionComponent } from "react";

type Props = {
  name: string;
  func: fn;
};

const Child: FunctionComponent<Props> = (props: Props) => {
  setTimeout(() => {
    const textEl = document.createElement("p");
    textEl.innerText = `${props.name} Child rendered`;
    document.body.appendChild(textEl);
  }, 0);

  return <div>{props.name} Child Component</div>;
};

export default Child;

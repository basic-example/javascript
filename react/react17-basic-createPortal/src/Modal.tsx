import React, { FunctionComponent, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

type Props = {
  children?: ReactNode;
};

const Modal: FunctionComponent<Props> = (props: Props): ReactPortal => {
  return createPortal(
    <div>
      <h2>Modal Component</h2>
      <div>{props.children}</div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;

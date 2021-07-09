import React, { forwardRef, FunctionComponent, useRef } from "react";
import Child, { ChildRef } from "./Child";

type Props = { [k: string]: undefined };

const Parent: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const parentRef1 = useRef<ChildRef>(null);
  const parentRef2 = useRef<ChildRef>(null);
  const WrapChild = forwardRef(Child);

  return (
    <div>
      <h2>Parent Component</h2>
      <button
        onClick={() => {
          parentRef1.current?.focused();
        }}
      >
        with forwardRef and useRef
      </button>
      <button
        onClick={() => {
          parentRef2.current?.focused();
        }}
      >
        with innerRef prop
      </button>
      <WrapChild ref={parentRef1} name="With ForwardRef And UseRef" />
      <Child innerRef={parentRef2} name="With InnerRef Prop" />
    </div>
  );
};

export default Parent;

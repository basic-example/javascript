import React, {
  ForwardRefRenderFunction,
  RefObject,
  useImperativeHandle,
  useRef,
} from "react";

export type ChildProps = {
  innerRef?: RefObject<ChildRef>;
  name: string;
};
export type ChildRef = {
  focused: fn;
};

const Child: ForwardRefRenderFunction<ChildRef, ChildProps> = (
  props: ChildProps,
  ref
): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const parentRef = props.innerRef
    ? props.innerRef
    : (ref as RefObject<ChildRef>);

  useImperativeHandle(parentRef, () => ({
    focused: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <div>
      <h3>{props.name} Child </h3>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Child;

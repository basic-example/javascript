import React, {
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction,
  FunctionComponent,
} from "react";
import Child from "./Child";

export type Props = Record<string, unknown>;

const Parent: FunctionComponent<Props> = (props: Props, ref) => {
  const WrapChild = forwardRef(
    Child as ForwardRefRenderFunction<HTMLElement, ComponentProps<typeof Child>>
  );

  return (
    <div>
      <h2>Parent</h2>
      <div ref={ref}></div>
      <button
        onClick={() => {
          console.log("[Parent] child div ref created by App Component", ref);
        }}
      >
        parent button
      </button>
      <WrapChild ref={ref} />
    </div>
  );
};

export default Parent;

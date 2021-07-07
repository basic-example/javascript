import React, {
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
} from "react";
import Parent from "./Parent";

const App = (): JSX.Element => {
  const parentDivRef = useRef<HTMLElement>(null);
  const WrapParent = forwardRef(
    Parent as ForwardRefRenderFunction<
      HTMLElement,
      ComponentProps<typeof Parent>
    >
  );
  return (
    <div>
      <h1>App</h1>
      <WrapParent ref={parentDivRef} />
    </div>
  );
};

export default App;

import React from "react";
import ArrowFnInOnClick from "./ArrowFnInOnClick";
import ArrowFnInProperty from "./ArrowFnInProperty";
import BindInConstructor from "./BindInConstructor";
import BindInOnClick from "./BindInOnClick";
import NormalWithoutBind from "./NormalWithoutBind";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <h2>Arrow Fn OnClick</h2>
      <ArrowFnInOnClick />
      <h2>Arrow Fn In Property</h2>
      <ArrowFnInProperty />
      <h2>Bind In Constructor</h2>
      <BindInConstructor />
      <h2>Bind In OnClick</h2>
      <BindInOnClick />
      <h2>Normal Without Bind</h2>
      <NormalWithoutBind />
    </div>
  );
};

export default App;

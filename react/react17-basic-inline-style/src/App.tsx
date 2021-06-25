import React from "react";

const App = (): JSX.Element => {
  const inlineStyle = {
    color: "blue",
  };

  return (
    <div>
      <h1 style={inlineStyle}>App</h1>
      <h2>Hello World</h2>
    </div>
  );
};

export default App;

import React from "react";
import ThemeContext from "./ThemeContext";

export default function UsingUseContenxt(): JSX.Element {
  const theme = React.useContext(ThemeContext);

  return (
    <div>
      <h2>Using UseContext Component</h2>
      <p>{theme}</p>
    </div>
  );
}

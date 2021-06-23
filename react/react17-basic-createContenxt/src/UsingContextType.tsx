import React from "react";
import ThemeContext from "./ThemeContext";

export default class UsingContextType extends React.Component {
  static contextType = ThemeContext;

  render(): JSX.Element {
    return (
      <div>
        <h2>Using Static ContextType Component</h2>
        <p>{this.context}</p>
      </div>
    );
  }
}

import React from "react";
import ThemeContext from "./ThemeContext";

export default class UsingConsumer extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h2>Using Context.Consumer Component</h2>
        <ThemeContext.Consumer>
          {(value) => {
            return <p>{value}</p>;
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

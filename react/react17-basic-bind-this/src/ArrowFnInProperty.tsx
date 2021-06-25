import React, { Component } from "react";

export default class ArrowFnInProperty extends Component {
  click = (): void => {
    // instance of Component
    console.log("ArrowFnInProperty", this);
  };

  render(): JSX.Element {
    return <button onClick={this.click}>click</button>;
  }
}

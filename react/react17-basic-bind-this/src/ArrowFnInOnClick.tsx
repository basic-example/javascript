import React, { Component } from "react";

export default class ArrowFnInOnClick extends Component {
  click(): void {
    // instance of Component
    console.log("ArrowFnInOnClick", this);
  }

  render(): JSX.Element {
    return <button onClick={() => this.click()}>click</button>;
  }
}

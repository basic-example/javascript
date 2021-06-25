import React, { Component } from "react";

export default class NormalWithoutBind extends Component {
  click(): void {
    // this = undefined
    console.log("Normal", this);
  }

  render(): JSX.Element {
    return <button onClick={this.click}>click</button>;
  }
}

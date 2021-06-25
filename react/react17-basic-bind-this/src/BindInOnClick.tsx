import React, { Component } from "react";

export default class BindInOnClick extends Component {
  click(): void {
    // instance of Component
    console.log("BindInOnClick", this);
  }

  render(): JSX.Element {
    return <button onClick={this.click.bind(this)}>click</button>;
  }
}

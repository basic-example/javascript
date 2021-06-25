import React, { Component } from "react";

type Props = Record<string, unknown>;

export default class BindInConstructor extends Component {
  constructor(props: Props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click(): void {
    // instance of Component
    console.log("BindInConstructor", this);
  }

  render(): JSX.Element {
    return <button onClick={this.click}>click</button>;
  }
}

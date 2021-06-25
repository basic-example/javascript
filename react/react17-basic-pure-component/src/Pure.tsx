import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  render(): JSX.Element {
    document.body.appendChild(
      document.createTextNode("Pure Component Rendered")
    );
    document.body.appendChild(document.createElement("br"));

    return <h2>Pure</h2>;
  }
}

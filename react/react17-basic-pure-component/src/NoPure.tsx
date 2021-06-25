import React, { Component } from "react";

export default class NoPure extends Component {
  render(): JSX.Element {
    document.body.appendChild(
      document.createTextNode("NoPure Component Rendered")
    );
    document.body.appendChild(document.createElement("br"));
    return (
      <div>
        <h2>No Pure</h2>
      </div>
    );
  }
}

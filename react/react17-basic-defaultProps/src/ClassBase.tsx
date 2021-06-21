import React from "react";

type Props = {
  [k in string]: string;
};

type State = {
  message: string;
};

export default class ClassBase extends React.Component<Props, State> {
  static defaultProps = {
    message: "Hello World",
  };

  render(): JSX.Element {
    return (
      <div>
        <h2>Class Base Child Component</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

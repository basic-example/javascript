import React from "react";
import Child from "./Child";

type Props = {
  [k in string]?: undefined;
};

type State = {
  name: string;
};

export default class Parent extends React.Component<Props, State> {
  constructor(props: Readonly<Props> | Props) {
    super(props);
    this.state = {
      name: `name${Math.random()}`,
    };
  }

  componentDidMount(): void {
    console.log("[Parent] componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    console.log("[Parent] componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("[Parent] componentWillUnmount");
  }

  static getDerivedStateFromProps(
    nextProps: Readonly<Props>,
    prevState: State
  ): Partial<State> | null {
    console.log("[Parent] getDerivedStateFromProps");

    return {};
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): anything | null {
    console.log("[Parent] getSnapshotBeforeUpdate");

    return null;
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>
  ): boolean {
    console.log("[Parent] shouldComponentUpdate");

    if (this.state.name !== nextState.name) {
      return true;
    }

    return false;
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Parent</h1>
        <p>{`this.state.name: ${this.state.name}`}</p>
        <button
          onClick={() => {
            console.log("===Click From Parent Component===");
            this.setState({
              name: `name${Math.random()}`,
            });
          }}
        >
          Parent Button
        </button>
        <Child name={this.state.name} />
      </div>
    );
  }
}

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
    console.log(`prevProps: ${prevProps}, prevState: ${prevState}`);
  }

  componentWillUnmount(): void {
    console.log("[Parent] componentWillUnmount");
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

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: anything
  ): boolean {
    console.log("[Parent] shouldComponentUpdate");
    console.log(
      `nextProps: ${nextProps}, nextState: ${nextState}, nextContext: ${nextContext}`
    );

    if (this.state.name !== nextState.name) {
      return true;
    }

    return false;
  }

  UNSAFE_componentWillMount(): void {
    console.log("[Parent] componentWillMount");
  }

  UNSAFE_componentWillReceiveProps(
    nextProps: Readonly<Props>,
    nextContext: anything
  ): void {
    console.log("[Parent] componentWillReceiveProps");
    console.log(`nextProps: ${nextProps}, nextContext: ${nextContext}`);
  }

  UNSAFE_componentWillUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: anything
  ): void {
    console.log("[Parent] componentWillUpdate");
    console.log(
      `nextProps: ${nextProps}, nextState: ${nextState}, nextContext: ${nextContext}`
    );
  }
}

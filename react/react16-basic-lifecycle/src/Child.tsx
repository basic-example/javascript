import React from "react";

type Props = {
  name: string;
};

type State = {
  message: string;
};

type Snapshot = {
  [k in string]?: undefined;
};

export default class Child extends React.Component<Props, State, Snapshot> {
  constructor(props: Readonly<Props> | Props) {
    super(props);
    this.state = {
      message: `${this.props.name}, Hello${Math.random()}`,
    };
  }

  componentDidMount(): void {
    console.log("[Child] componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot: Snapshot
  ): void {
    console.log("[Child] componentDidUpdate");
    console.log(
      `prevProps: ${prevProps}, prevState: ${prevState}, snapshot: ${snapshot}`
    );
  }

  componentWillUnmount(): void {
    console.log("[Child] componentWillUnmount");
  }

  render(): JSX.Element {
    return (
      <div>
        <h2>Child</h2>
        <p>{`this.state.message: ${this.state.message}`}</p>
        <button
          onClick={() => {
            console.log("===Click From Child Component===");
            this.setState(() => {
              return { message: `${this.props.name}, Hello${Math.random()}` };
            });
          }}
        >
          Child Button
        </button>
      </div>
    );
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: anything
  ): boolean {
    console.log("[Child] shouldComponentUpdate");
    console.log(
      `prevProps: ${nextProps}, prevState: ${nextState}, nextContext: ${nextContext}`
    );

    if (this.state.message !== nextState.message) {
      return true;
    }

    if (this.props.name !== nextProps.name) {
      return true;
    }

    return false;
  }

  UNSAFE_componentWillMount(): void {
    console.log("[Child] componentWillMount");
  }

  UNSAFE_componentWillReceiveProps(
    nextProps: Readonly<Props>,
    nextContext: anything
  ): void {
    console.log("[Child] componentWillReceiveProps");
    console.log(`nextProps: ${nextProps}, nextContext: ${nextContext}`);
  }

  UNSAFE_componentWillUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: anything
  ): void {
    console.log("[Child] componentWillUpdate");
    console.log(
      `nextProps: ${nextProps}, nextState: ${nextState}, nextContext: ${nextContext}`
    );
  }
}

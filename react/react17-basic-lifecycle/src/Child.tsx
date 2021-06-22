import React from "react";

type Props = {
  name: string;
};
type State = {
  message: string;
};

export default class Child extends React.Component<Props, State, anything> {
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
    snapshot?: anything
  ): void {
    console.log("[Child] componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("[Child] componentWillUnmount");
  }

  static getDerivedStateFromProps(
    nextProps: Readonly<Props>,
    prevState: State
  ): Partial<State> | null {
    console.log("[Child] getDerivedStateFromProps");

    return {};
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): anything | null {
    console.log("[Child] getSnapshotBeforeUpdate");

    return null;
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: anything | null
  ): boolean {
    console.log("[Child] shouldComponentUpdate");

    if (this.state.message !== nextState.message) {
      return true;
    }

    if (this.props.name !== nextProps.name) {
      return true;
    }

    return false;
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
}

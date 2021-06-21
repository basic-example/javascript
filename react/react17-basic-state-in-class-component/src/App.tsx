import * as React from "react";

type AppProps = {
  [k: string]: AppProps | string | number | null;
};
type AppState = {
  message: string;
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      message: "Hello World",
    };
  }
  render(): JSX.Element {
    return (
      <div>
        {this.state.message}
        <button onClick={() => this.setState({ message: "Welcome" })}>
          click
        </button>
      </div>
    );
  }
}

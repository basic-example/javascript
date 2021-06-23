import PropTypes from "prop-types";
import React from "react";

type Props = {
  message: string;
};

const App = (props: Props): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      {props.message}
    </div>
  );
};

App.defaultProps = {
  message: "Hello World",
};

App.propTypes = {
  message: PropTypes.string,
};

export default App;

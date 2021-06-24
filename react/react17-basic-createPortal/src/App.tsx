import React from "react";
import Modal from "./Modal";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <Modal>
        <p>modal&#39;s parent Component is App Component.</p>
        <p>but, modal&#39;s DOM is exist in outside of App Root.</p>
      </Modal>
    </div>
  );
};

export default App;

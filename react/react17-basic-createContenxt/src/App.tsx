import React from "react";
import ThemeContext from "./ThemeContext";
import UsingConsumer from "./UsingConsumer";
import UsingContextType from "./UsingContextType";
import UsingUseContext from "./UsingUseContext";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App Component</h1>
      <ThemeContext.Provider value="light">
        <ThemeContext.Provider value="dark">
          <UsingConsumer />
          <UsingContextType />
          <UsingUseContext />
        </ThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

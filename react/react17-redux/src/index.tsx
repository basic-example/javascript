import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, PreloadedState } from "redux";
import App from "./components/App";
import rootReducer from "./reducers";

const initState: PreloadedState<{
  counter: {
    count: number;
  };
}> = {
  counter: {
    count: 1,
  },
};

const store = createStore(rootReducer, initState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

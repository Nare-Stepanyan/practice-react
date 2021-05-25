import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import CounterComponent from "./containers/CounterComponent";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </div>
  );
}

export default App;

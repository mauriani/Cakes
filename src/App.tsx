import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";

import GlobalStyle from "./assets/styles/global";

import history from "./services/history";
import store from "./store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;

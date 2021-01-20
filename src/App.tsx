import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./pages/styles/global";

import history from "./services/history";
import store from "./store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;

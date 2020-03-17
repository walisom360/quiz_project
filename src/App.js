import React from "react";
import "./styles.css";

import { Provider } from "react-redux";

import Routes from './routes/index'

import GlobaStyle from './styles/global'

import store from "./store/createStore";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GlobaStyle/>
      </Provider>
    </>
  );
}

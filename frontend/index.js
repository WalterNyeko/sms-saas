import React from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById("root");
  Modal.setAppElement(root);
  store = configureStore({});
  ReactDOM.render(<Root store={store} />, root);
});

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Root from "./pages/Root.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Root/>
  </Provider>
);

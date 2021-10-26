import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StateProvider from "./components/providers/StateProvider";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { mapReducer } from "./reducers/mapReducer";
import { socketRTK } from "./middleware/socketRTK";

const store = configureStore({
  reducer: mapReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketRTK()),
});


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { globalReducer } from "./reducers/globalReducer";
import axios from "axios";
const store = configureStore({
  reducer: globalReducer,
});

if (process.env.REACT_APP_BACKEND_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
}

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

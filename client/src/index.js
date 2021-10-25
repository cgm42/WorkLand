import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { mapReducer } from "./reducers/mapReducer";
import axios from "axios";
import { socketRTK } from "./middleware/socketRTK";
const reducer = {
  map: mapReducer,
  // visibility: visibilityReducer,
};
const store = configureStore({
  reducer: mapReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketRTK()),
});

// if (process.env.REACT_APP_BACKEND_URL) {
//   axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
// }

// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

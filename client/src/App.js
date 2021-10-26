import React from "react";
import "./App.css";
import Sidenav from "./components/SideNav";
import StateProvider from "./components/providers/StateProvider";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <StateProvider>
        <Sidenav></Sidenav>
      </StateProvider>
    </div>
  );
}

export default App;

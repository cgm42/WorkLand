import React, { useEffect } from 'react';
import './App.css';
import Sidenav from './components/SideNav';
import StateProvider from './components/providers/StateProvider';
import Login from './pages/Login';
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const userState = useSelector((state) => {
    return state.user;
  });

  return (
    <>
      {!!!userState.id ? (
        <Login></Login>
      ) : (
        <div className="app">
          <StateProvider>
            <Sidenav></Sidenav>
          </StateProvider>
        </div>
      )}
    </>
  );
}

export default App;

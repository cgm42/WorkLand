import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidenav from './components/SideNav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <div className='app'>
        
        <Sidenav></Sidenav>
      </div>
  );
}

export default App;

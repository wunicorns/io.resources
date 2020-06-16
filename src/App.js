import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import { Link } from '@material-ui/core';

function App() {
  const active = {color: "red"};

   
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink exact={true} activeStyle={active} to="/">Home</NavLink></li>
          <li><NavLink activeStyle={active} to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
        
      </Switch>
    </BrowserRouter>    
  );
}

export default App;

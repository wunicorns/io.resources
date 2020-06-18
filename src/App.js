import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import { Link } from '@material-ui/core';
import AppNav from './components/AppNav'

const styles = {
  display: 'flex'
}

function App() {

  return (
    <BrowserRouter>
      <div style={styles}>
        <AppNav />
        
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />        
        </Switch>
      </div>
    </BrowserRouter>    
  );
}

export default App;

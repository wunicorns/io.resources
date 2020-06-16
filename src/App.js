import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

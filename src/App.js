import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog/Blog'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import { Link } from '@material-ui/core';
import AppNav from './components/AppNav'

function App() {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Blog} />
        </Switch>
    </BrowserRouter>    
  );
}

export default App;

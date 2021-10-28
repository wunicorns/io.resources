import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Contents from './pages/Contents'
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
          <Route path="/blog" component={Blog} />
          <Route path="/contents" component={Contents} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>    
  );
}

export default App;

// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles & assets
import './index.scss';

// pages
import Home from './pages/HomePage';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home}/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));
// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles & assets
import './index.scss';

// pages
import Home from './pages/HomePage';
import Projects from './pages/ProjectPage';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/projects" exact component={Projects}/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));
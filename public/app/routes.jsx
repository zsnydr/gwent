import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import Home from '../home/home';
import Match from '../match/match';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/match" component={Match} />
      </Switch>
    </div>
  </Router>
);

export default Routes;

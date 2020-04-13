import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import House from '../components/House';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={House} />
    </Switch>
  </Router>
);

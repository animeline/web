import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { Home } from '@pages/Home';

import { history } from './history';

export const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

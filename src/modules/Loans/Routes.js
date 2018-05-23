import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import LoanContainer from './LoanContainer';

export default (
  <Switch>
    <Route
      exact
      path={routeConstants.LoanDashboard.fullRoute}
      component={LoanContainer}
    />
  </Switch>
);

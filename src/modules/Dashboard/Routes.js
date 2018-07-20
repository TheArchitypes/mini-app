import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import DashboardContainer from './DashboardContainer';

export default (
  <Route path={routeConstants.MiniAppDashboard.fullRoute}>
    <Switch>
      <Route
        exact
        path={routeConstants.MiniAppDashboard.fullRoute}
        component={DashboardContainer}
      />
    </Switch>
  </Route>
);

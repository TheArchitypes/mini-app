import React from 'react';
import { Route } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import DashboardContainer from './DashboardContainer';

export default (
  <Route
    exact
    path={routerConstants.MiniAppDashboard.fullRoute}
    component={DashboardContainer}
);

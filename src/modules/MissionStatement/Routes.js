import React from 'react';
import { Route } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import MissionStatementContainer from './MissionStatementContainer';

export default (
  <Route
    exact
    path={routeConstants.MissionStatement.fullRoute}
    component={MissionStatementContainer}
  />
);

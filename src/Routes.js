import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import App from './App';

export default (
  <div>
    <Switch>
      <Route
        path="/mini-app"
        render={props  => (
          <App {...props} />
        )}
      />
      <Redirect to={routeConstants.MiniAppDashboard.fullRoute} />
    </Switch>
  </div>
);

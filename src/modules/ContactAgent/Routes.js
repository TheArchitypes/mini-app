import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import ContactAgentContainer from './ContactAgentContainer';

export default (
  <Route path={routeConstants.ContactAgentContainer.fullRoute}>
    <Switch>
      <Route
        exact
        path={routeConstants.ContactAgentContainer.fullRoute}
        component={ContactAgentContainer}
      />
    </Switch>
  </Route>
);

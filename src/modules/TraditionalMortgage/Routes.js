import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import TraditionalMortgageContainer from './TraditionalMortgageContainer';

export default (
  <Route path={routeConstants.TraditionalMortgageForm.fullRoute}>
    <Switch>
      <Route
        exact
        path={routeConstants.TraditionalMortgageForm.fullRoute}
        component={TraditionalMortgageContainer}
      />
    </Switch>
  </Route>
);

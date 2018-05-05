import React from 'react';
import { Route } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import TraditionalMortgageContainer from './TraditionalMortgageContainer';

export default (
  <Route
    exact
    path={routeConstants.TraditionalMortgageForm.fullRoute}
    component={TraditionalMortgageContainer}
  />
);

import React from 'react';
import { Route } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import TestFormContainer from './TestFormContainer';

export default (
  <Route
    exact
    path={routeConstants.TestFormForm.fullRoute}
    component={TestFormContainer}
  />
);

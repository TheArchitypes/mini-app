import React from 'react';
import { Route } from 'react-router-dom';
import routeConstants from 'config/routeConstants';
import FormContainer from './FormContainer';

export default (
  <Route
    exact
    path={routeConstants.MiniAppForm.fullRoute}
    component={FormContainer}
  />
);

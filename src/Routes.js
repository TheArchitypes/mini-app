import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

export default (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </div>
);

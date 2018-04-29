import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch } from 'react-router-dom';
import DashboardRoutes from 'modules/Dashboard/Routes';
import MissionStatementRoutes from 'modules/MissionStatement/Routes';
import FormRoutes from 'modules/Form/Routes';
import routeConstants from 'config/routeConstants';
import bg from './assets/images/bg.jpg';
import './sass/index.scss';

function App({ history }) {
  console.log(history);
  return (
    <div className="App">
      <span className="bg-image">
        <img src={bg} alt="bg" />
      </span>
      <div className="app-content">
        <Switch>
          {DashboardRoutes}
          {MissionStatementRoutes}
          {FormRoutes}
        </Switch>
      </div>
    </div>
  );
}

const { shape } = PropTypes;
App.defaultProps = {
  history: shape({}).isRequired,
}

export default App;

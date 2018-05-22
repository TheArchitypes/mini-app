import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch } from 'react-router-dom';
import DashboardRoutes from 'modules/Dashboard/Routes';
import MissionStatementRoutes from 'modules/MissionStatement/Routes';
import TraditionalMortgageRoutes from 'modules/TraditionalMortgage/Routes';
import routeConstants from 'config/routeConstants';
import TopNav from 'modules/TopNav';
import BottomNav from 'modules/BottomNav';
import bg from './assets/images/bg.jpg';
import './sass/index.scss';
import 'open-iconic/font/css/open-iconic.css';
// import 'hover.css';

function App({ history }) {
  console.log('history: ', history);
  return (
    <div className="App">
      <span className="bg-image">
        <img src={bg} alt="bg" />
      </span>
      <TopNav history={history}/>
      <div className="app-content">
        <Switch>
          {DashboardRoutes}
          {MissionStatementRoutes}
          {TraditionalMortgageRoutes}
        </Switch>
      </div>
      <BottomNav history={history} />
    </div>
  );
}

const { shape } = PropTypes;
App.defaultProps = {
  history: shape({}).isRequired,
}

export default App;

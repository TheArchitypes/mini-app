import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch } from 'react-router-dom';
import DashboardRoutes from 'modules/Dashboard/Routes';
import MissionStatementRoutes from 'modules/MissionStatement/Routes';
import TraditionalMortgageRoutes from 'modules/TraditionalMortgage/Routes';
import LoansRoutes from 'modules/Loans/Routes';
import routeConstants from 'config/routeConstants';
import TopNav from 'modules/TopNav';
import Sidebar from 'modules/Sidebar';
import bg from './assets/images/bg.jpg';
import './sass/index.scss';
import 'open-iconic/font/css/open-iconic.css';
// import 'hover.css';

function App({ history }) {
  return (
    <div className="App">
      <span className="bg-image">
        <img src={bg} alt="bg" />
      </span>
      <TopNav history={history}/>
      <div className="app-content">
        <Sidebar history={history} />
        <div className="main-content">
          <Switch>
            {DashboardRoutes}
            {TraditionalMortgageRoutes}
            {LoansRoutes}
            {MissionStatementRoutes}
          </Switch>
        </div>
      </div>
    </div>
  );
}

const { shape } = PropTypes;
App.defaultProps = {
  history: shape({}).isRequired,
}

export default App;

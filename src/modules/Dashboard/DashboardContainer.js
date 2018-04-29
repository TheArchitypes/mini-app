import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from '../../logo.svg';

export default function DashboardContainer({ history }) {
  console.log('history: ', history);
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="row pad-y">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row pad-y">
          <ButtonMain
            label="MissionStatement and Corporation History"
            onClick={() => history.push(routeConstants.MissionStatement.fullRoute)}
          />
        </div>
        <div className="row pad-y">
          <div className="col" style={{ width: "33%", float: "left", margin: "0" }}>
            <ButtonMain
              label="Reverse Mortgage"
              onClick={() => history.push(routeConstants.ReverseMortgageFormContainer.fullRoute)}
            />
          </div>
          <div className="col" style={{ width: "33%", float: "left", margin: "0" }}>
            <ButtonMain
              label="Traditional Mortgage"
              onClick={() => history.push(routeConstants.TraditionalMortgageFormContainer.fullRoute)}
            />
          </div>
          <div className="col" style={{ width: "33%", float: "left", margin: "0" }}>
            <ButtonMain
              label="Private Company Mortgage"
              onClick={() => history.push(routeConstants.PrivateCompanyMortgageFormContainer.fullRoute)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  const { shape } = PropTypes;
  DashboardContainer.propTypes = {
    history: shape({}).isRequried,
  }
}

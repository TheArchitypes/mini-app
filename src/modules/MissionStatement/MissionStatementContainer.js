import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';

export default function MissionStatementContainer({ history }) {
  return (
    <div className="mission-statement-container fixed-container">
      <div>
        <h2>Mission Statement</h2>
      </div>
      <div>
        <h2>Corporation History</h2>
      </div>
      <ButtonMain
        label="Back"
        onClick={() => history.push(routeConstants.MiniAppDashboard.fullRoute)}
      />
    </div>
  );
}

const { shape } = PropTypes;
MissionStatementContainer.propTypes = {
  history: shape({}).isRequired,
}

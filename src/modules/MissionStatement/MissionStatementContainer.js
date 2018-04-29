import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function MissionStatementContainer({ history }) {
  return (
    <div className="mission-statement-container">
      <div>
        <h2>Mission Statement</h2>
      </div>
      <div>
        <h2>Corporation History</h2>
      </div>
    </div>
  );
}

const { shape } = PropTypes;
MissionStatementContainer.propTypes = {
  history: shape({}).isRequired,
}

import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from '../../logo.svg';

export default function DashboardContainer({ history }) {
  return (
    <div className="dashboard">
      <div className="dashboard-content">

      </div>
    </div>
  );
}

{
  const { shape } = PropTypes;
  DashboardContainer.propTypes = {
    history: shape({}),
  }

  DashboardContainer.defaultProps = {
    history: () => {},
  }
}

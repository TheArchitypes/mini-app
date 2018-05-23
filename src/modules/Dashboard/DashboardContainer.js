import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from '../../logo.svg';

export default function DashboardContainer({ history }) {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>OUR MISSION</h2>
        <p>Our mission is to have clients for life and establish successful relationships with our customers. We do this by providing a responsive, knowledgeable approach toward mortgage lending through the integration of people, technology, and business practices.</p>
        <p>A cooperative spirit, adherence to our core values, and enthusiastic employees are the foundation of our success.</p>
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

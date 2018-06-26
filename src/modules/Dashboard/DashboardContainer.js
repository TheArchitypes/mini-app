import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from '../../logo.svg';

export default function DashboardContainer({ history }) {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="flex-container no-border">
          <div className="flex-col" style={{ width: '100%' }}>
            <div className="flex-row" style={{ display: 'block' }}>
              <div className="dashboard-social-media">
                <div className="social-media-button email" />
                <div className="social-media-button facebook" />
                <div className="social-media-button twitter" />
              </div>
            </div>
            <div className="flex-row">
              <h2>RELIABLE LENDING</h2>
            </div>
            <div className="flex-row">
              <p>
                Do you have average to perfect credit? If so, we can get you the perfect loan for your needs. We will sit down and consult with you to dtermine the right product for your situation, and assist you from start to finish
              </p>
            </div>
            <div className="flex-row">
              <div className="dashboard-media-buttons">
                <button>818.837.6600</button>
                <button>info@myfirstchoicelender.com</button>
              </div>
            </div>
            <div className="flex-row">
              <h2>OUR MISSION</h2>
            </div>
            <div className="flex-row">
              <p>
                Our mission is to have clients for lie and establish successful relationships with out customers. We do this by providing a responsive, knowledgeable approach toward mortgage lending through the integration of people, technology, and business preactices.
              </p>
            </div>
            <div className="flex-row">
              <p>
                A cooperative sprit, adherence to our core values, and enthusiastic employees are the foundation of our success.
              </p>
            </div>
          </div>
        </div>
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

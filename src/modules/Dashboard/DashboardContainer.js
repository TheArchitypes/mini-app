import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from '../../logo.svg';

export default function DashboardContainer({ history }) {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>This is the landing page, a message will be printed within this conent div</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis iaculis sem. Sed euismod libero vel massa porttitor semper. Praesent mollis magna at maximus feugiat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer at eros vitae arcu sollicitudin consequat. Fusce elementum nisi eu pellentesque gravida. In facilisis aliquam lorem vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque at est et accumsan. Pellentesque purus dui, tempor ut erat consectetur, faucibus placerat mauris. Fusce dignissim felis purus, et ultrices nisi venenatis in. Vivamus facilisis erat at egestas egestas. In porttitor massa sit amet ligula tincidunt dapibus. Aenean a placerat nisl, eget iaculis velit.</p>
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

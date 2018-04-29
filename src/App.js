import React from 'react';
import PropTypes from 'prop-types';
import DashboardContainer from 'modules/Dashboard/DashboardContainer';
import bg from './assets/images/bg.jpg';
import './sass/index.scss';

function App({ history }) {
  return (
    <div className="App">
      <span className="bg-image">
        <img src={bg} alt="bg" />
      </span>
      <DashboardContainer history={history}/>
    </div>
  );
}

const { shape } = PropTypes;
App.defaultProps = {
  history: shape({}).isRequired,
}

export default App;

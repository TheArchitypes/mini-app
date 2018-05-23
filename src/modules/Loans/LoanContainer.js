import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import routeReplace from '../../lib/routeReplace';
import logo from '../../logo.svg';

export default function LoanContainer({ history }) {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div>
          <div className="page-title">
            <h2>LOANS</h2>
          </div>
          <div className="page-content">
            <p>Select the type of loan that you are interested in</p>
            <div className="row">
              <ButtonMain
                className="hvr-float-shadow"
                onClick={() => history.push(`${routeConstants.TraditionalMortgageForm.fullRoute}`)}
                label="Traditional Mortgage"
              />
            </div>
            <div className="row">
              <ButtonMain
                className="hvr-float-shadow"
                onClick={() => history.push(`${routeConstants.ReverseMortgageForm.fullRoute}`)}
                label="Reverse Mortgage"
              />
            </div>
            <div className="row">
              <ButtonMain
                className="hvr-float-shadow"
                onClick={() => history.push(`${routeConstants.PrivateCompanyMortgageForm.fullRoute}`)}
                label="Private Company Mortgage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  const { shape } = PropTypes;
  LoanContainer.propTypes = {
    history: shape({}),
  }

  LoanContainer.defaultProps = {
    history: () => {},
  }
}

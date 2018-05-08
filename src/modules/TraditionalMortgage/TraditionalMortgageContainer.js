import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
// import status from 'constants/status';
import autobind from 'class-autobind';
import defaultFormFields from 'config/formFields';
import { AccordionContainer } from 'modules/UXlibrary/AccordionContainer';
import { TraditionalMortgageForm } from './TraditionalMortgageForm';

export class TraditionalMortgageContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      currentPage: 1,
    }
  }

  handleSuccess(payload, id) {
    console.log('payload: ', payload);
  }

  render() {
    const { status, currentValues, history } = this.props;
    const { currentPage } = this.state;
    // if (!status) {
    //   return(
    //     <h2>Form Loading...</h2>
    //   );
    // }
    return (
      <div className="tradition-mortgage-container">
        <AccordionContainer currentPage={currentPage} >
          {Object.keys(defaultFormFields['traditional-mortgage']).map((form, index) => (
            <div className="accordion-division" key={index}>
              <TraditionalMortgageForm
                history={history}
                onSuccess={this.handleSuccess}
                formFields={defaultFormFields['traditional-mortgage'][form]}
                values={{}}
              />
            </div>
          ))}
        </AccordionContainer>
      </div>
    );
  }
}

const { shape, string, number, bool } = PropTypes;
TraditionalMortgageContainer.propTypes = {
  params: shape({
    page: string.isRequired,
  }),
  currentValues: shape({}),
  isReady: bool.isRequired,
}

TraditionalMortgageContainer.defaultProps = {
  currentValues: {},
};

function mapStateToProps(state, ownProps) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const page = ownProps.match.params.page;
  const currentValues = _.get(state, `TraditionalMortgage[${page}]`, defaultFormFields['traditional-mortgage'][page]);
  const isReady = false;
  return {
    isReady,
    history: ownProps.history,
    params: ownProps.match.params,
    currentPage: _.get(state, 'CurrentPage', null),
    currentValues,
  }
}

export default connect(mapStateToProps)(TraditionalMortgageContainer);

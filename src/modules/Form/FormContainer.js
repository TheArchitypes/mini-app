import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
// import status from 'constants/status';
import autobind from 'class-autobind';

export class FormContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const { status } = this.props;
    // if (!status) {
    //   return(
    //     <h2>Form Loading...</h2>
    //   );
    // }
    return (
      <div className="form-container">
        <h2>Form Container</h2>
      </div>
    );
  }
}

const { shape, string, number, bool } = PropTypes;
FormContainer.propTypes = {
  params: shape({
    type: string.isRequired,
    page: number.isRequired,
  }),
  isReqady: bool.isRequired,
  history: shape({}).isRequired,
}

FormContainer.defaultProps = {};

function mapStateToProps(state, { params: { type } }) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  return {
    isReady,
  }
}

export default connect(mapStateToProps)(FormContainer);

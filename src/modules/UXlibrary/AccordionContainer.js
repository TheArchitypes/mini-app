import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
// import status from 'constants/status';
import autobind from 'class-autobind';
import defaultFormFields from 'config/formFields';

export class AccordionContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      currentPage: props.currentPage,
    }
  }

  backwardPage() {
    console.log('back');
  }

  forwwardPage() {
    console.log('front');
  }

  render() {
    const { children } = this.props;
    const { currentPage } = this.state;
    return (
      <div className="accordion-container fixed-container">
        <div className="accordion-nav-l col float-l">
          <button onClick={this.backwardPage}>-</button>
        </div>
        <div className="accordion-content col">
          {children}
        </div>
        <div className="accordion-nav-r col float-r">
          <button onClick={this.forwardPage}>+</button>
        </div>
      </div>
    );
  }
}

const {string, arrayOf, node } = PropTypes;
AccordionContainer.propTypes = {
  currentPage: string.isRequired,
  children: arrayOf(node).isRequired,
}

AccordionContainer.defaultProps = {};

function mapStateToProps(state) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  return {
    isReady,
  }
}

export default connect(mapStateToProps)(AccordionContainer);

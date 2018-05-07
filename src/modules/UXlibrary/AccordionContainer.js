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
    const { children } = this.props;
    const { currentPage } = this.state;
    const childrenLength = children.length;
    this.setState({
      currentPage: currentPage - 1 % childrenLength,
    });
  }

  forwardPage() {
    const { children } = this.props;
    const { currentPage } = this.state;
    const childrenLength = children.length;
    this.setState({
      currentPage: currentPage + 1 % childrenLength,
    });
  }

  setPositionByIndex(index) {
    const { children } = this.props;
    const { currentPage } = this.state;
    const childrenLength = children.length;
    const returnDefaultClassName = 'accordion-child';
    if (currentPage === (index + 1)) {
      return `${returnDefaultClassName} active`;
    }
    return currentPage > (index + 1) ? `${returnDefaultClassName} before` : `${returnDefaultClassName} after`;
  }

  render() {
    const { children } = this.props;
    const { currentPage } = this.state;
    return (
      <div className="accordion-container fixed-container">
        <div className="accordion-nav-l col float-l">
          <button onClick={this.backwardPage}>
            <span className="oi" data-glyph="chevron-left"></span>
          </button>
        </div>
        <div className="accordion-content col">
          {React.Children.map(children, (child, index) => {
            const childClassName = this.setPositionByIndex(index);
            return (
              <div key={index} className={childClassName}>
                {child}
              </div>
            );
          })}
        </div>
        <div className="accordion-nav-r col float-r">
          <button onClick={this.forwardPage}>
            <span className="oi" data-glyph="chevron-right"></span>
          </button>
        </div>
      </div>
    );
  }
}

const { number, arrayOf, node } = PropTypes;
AccordionContainer.propTypes = {
  currentPage: number.isRequired,
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

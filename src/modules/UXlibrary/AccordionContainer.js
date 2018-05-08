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
    if (currentPage !== 1)  {
      this.setState({
        currentPage: currentPage - 1 % childrenLength,
      });
    }
  }

  forwardPage() {
    const { children } = this.props;
    const { currentPage } = this.state;
    const childrenLength = children.length;
    if (currentPage !== childrenLength) {
      this.setState({
        currentPage: currentPage + 1 % childrenLength,
      });
    }
  }

  handleChangePage(index) {
    this.setState({
      currentPage: (index + 1),
    });
  }

  setPositionByIndex(index) {
    const { currentPage } = this.state;
    const returnDefaultClassName = 'accordion-child';
    if (currentPage === (index + 1)) {
      return `${returnDefaultClassName} active`;
    }
    return currentPage > (index + 1) ? `${returnDefaultClassName} before` : `${returnDefaultClassName} after`;
  }

  calcStyleByIndex(index, className) {
    const { currentPage } = this.state;
    const distanceFromCurrent = Math.abs(currentPage - (index + 1));
    if (className.indexOf('after') !== -1) {
      return { left: `${75 - distanceFromCurrent}%`, 'zIndex': `${9999 - distanceFromCurrent}` };
    }
    if (className.indexOf('before') !== -1) {
      return { left: `${25 + distanceFromCurrent}%`, 'zIndex': `${9999 - distanceFromCurrent}` };
    }
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
            const childStyle = this.calcStyleByIndex(index, childClassName);
            return (
              <div key={index} className={childClassName} style={childStyle} onClick={(index + 1) !== currentPage ? () => this.handleChangePage(index) : () => {}}>
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

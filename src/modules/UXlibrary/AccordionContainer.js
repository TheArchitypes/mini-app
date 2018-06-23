import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
// import status from 'constants/status';
import autobind from 'class-autobind';
import defaultFormFields from 'config/formFields';
import ProgressBar from './ProgressBar';

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
    const distanceFromCurrent = currentPage - (index + 1);
    const distanceFromCurrentAbs = Math.abs(currentPage - (index + 1));
    if (className.indexOf('after') !== -1) {
      return { right: `${30 - distanceFromCurrentAbs}%`, 'zIndex': `${9999 - distanceFromCurrentAbs}` };
    }
    if (className.indexOf('before') !== -1) {
      return { left: `${30 - distanceFromCurrent}%`, 'zIndex': `${9999 - distanceFromCurrentAbs}` };
    }
  }

  render() {
    const { children, progress } = this.props;
    const { currentPage } = this.state;
    return (
      <div className="accordion-container fixed-container">
        <div className={currentPage !== 1 ? 'accordion-nav-l col float-l' : 'accordion-nav-l col float-l disabled'}>
          <button onClick={this.backwardPage} disabled={currentPage === 1} className={currentPage !== 1 ? 'hvr-bubble-float-left' : ''}>
            <span className="oi" data-glyph="chevron-left"></span>
          </button>
        </div>
        <div className="accordion-content">
          {React.Children.map(children, (child, index) => {
            const childClassName = this.setPositionByIndex(index);
            const childStyle = this.calcStyleByIndex(index, childClassName);
            return (
              <div
                key={index}
                className={childClassName}
                style={childStyle}
              >
                <span
                  className="section-tab"
                  onClick={(index + 1) !== currentPage ? () => this.handleChangePage(index) : () => {}}
                >
                  Section: {index + 1}
                </span>
                <div
                  onClick={(index + 1) !== currentPage ? () => this.handleChangePage(index) : () => {}}
                >
                  <span className={(index + 1) !== currentPage ? 'overlay' : ''}>{child}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={currentPage !== children.length ? 'accordion-nav-r col float-r' : 'accordion-nav-r col float-r disabled'}>
          <button onClick={this.forwardPage} disabled={currentPage === children.length} className={currentPage !== children.length ? 'hvr-bubble-float-right' : ''}>
            <span className="oi" data-glyph="chevron-right"></span>
          </button>
        </div>
        <ProgressBar
          children={children}
          currentPage={currentPage}
          onClick={this.handleChangePage}
          progress={progress}
        />
      </div>
    );
  }
}

const { number, arrayOf, node, shape } = PropTypes;
AccordionContainer.propTypes = {
  currentPage: number.isRequired,
  children: arrayOf(node).isRequired,
  progress: arrayOf(shape({})),
}

AccordionContainer.defaultProps = {
  progress: [
    {progress: 'in-progress'},
    {progress: 'in-progress'},
    {progress: 'in-progress'},
    {progress: 'incomplete'},
    {progress: 'in-progress'},
    {progress: 'in-progress'},
    {progress: 'in-progress'},
    {progress: 'in-progress'},
    {progress: 'in-progress'},
    {progress: 'in-progress'},
  ]
};

function mapStateToProps(state) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  return {
    isReady,
  }
}

export default connect(mapStateToProps)(AccordionContainer);

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
  const { children, currentPage, onClick, progress } = props;
  return(
    <div className="progress-bar">
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`progress-bar-element ${progress[index].progress}`}
          style={{width: `${100 / children.length}%`}}
          onClick={currentPage && (index + 1) !== currentPage ? () => onClick(index) : () => {}}
          >
          Section: {index+1}
        </div>
      ))}
    </div>
  );
}

const { oneOfType, arrayOf, node, shape, number, func } = PropTypes;
ProgressBar.propTypes = {
  children: oneOfType([
    arrayOf(node),
    arrayOf(shape({})),
  ]).isRequired,
  currentPage: number,
  onClick: func,
  progress: arrayOf(shape({})).isRequired
}

ProgressBar.defaultProps = {
  currentPage: null,
  onClick: () => {},
}

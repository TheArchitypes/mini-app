import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export function ButtonMain(props) {
  const {onClick, className, label, icon, disabled} = props;
  return (
    <button
      onClick={onClick}
      className="className"
      disabled={disabled}
    >
      <span>
        {icon !== '' &&
          <span className="icon iconic" data-glyph={icon} />
        }
        <span className="label">{label}</span>
      </span>
    </button>
  )
}

const { func, string, bool } = PropTypes;
ButtonMain.propTypes = {
  onClick: func,
  className: string,
  label: string.isRequired,
  icon: string,
  disabled: bool,
};

ButtonMain.defaultProps = {
  onclick: () => {},
  className: '',
  icon: '',
  disabled: false,
}

export default {
  ButtonMain,
}

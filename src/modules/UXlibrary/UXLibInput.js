import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function UXLibInput(props) {
  const { name, type, value, defaultValue, label, onChange, disabled } = props;
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={defaultValue}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={name}
        pattern={type === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' : ''}
      />
    </div>
  );
}

const { string, func, bool, oneOfType, element } = PropTypes;
UXLibInput.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  defaultValue: string.isRequired,
  label: oneOfType([
    string,
    element,
  ]).isRequired,
  onChange: func.isRequired,
  disabled: bool.isRequired,
}

UXLibInput.defaultProps = {}

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function UXLibCheckbox(props) {
  const { name, type, value, defaultValue, label, onChange, disabled } = props;
  return(
    <div className="ux-form form-checkbox">
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

const { string, func, bool } = PropTypes;
UXLibCheckbox.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  defaultValue: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
  disabled: bool.isRequired,
}

UXLibCheckbox.defaultProps = {}

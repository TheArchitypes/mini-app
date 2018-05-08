import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function UXLibSelectOption(props) {
  const { name, type, value, defaultValue, label, values, onChange, disabled } = props;
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        type={type}
        value={value}
        placeholder={defaultValue}
        onChange={e => { e.preventDefault(); onChange(); }}
        disabled={disabled}
        name={name}
        id={name}
      >
        {values.map((value, index) => (
          <option key={index} value={value.value}>{value.label}</option>
        ))}
      </select>
    </div>
  );
}

const { string, arrayOf, shape, func, bool } = PropTypes;
UXLibSelectOption.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  defaultValue: string.isRequired,
  label: string.isRequired,
  values: arrayOf(shape({})).isRequired,
  onChange: func.isRequired,
  disabled: bool.isRequired,
}

UXLibSelectOption.defaultProps = {}

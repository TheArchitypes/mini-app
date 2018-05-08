import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function UXLibRadio(props) {
  const { name, type, value, defaultValue, label, values, onChange, disabled } = props;
  return(
    <div>
      <div className="radio-label">{label}</div>
        {values.map((value, index) => (
          <div key={index}>
            <input
              type={type}
              value={value}
              placeholder={defaultValue}
              onChange={onChange}
              disabled={disabled}
              name={name}
              id={name}
            />
            <label htmlFor={name}>{value.label}</label>
          </div>
        ))}
    </div>
  );
}

const { string, arrayOf, shape, func, bool } = PropTypes;
UXLibRadio.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  defaultValue: string.isRequired,
  label: string.isRequired,
  values: arrayOf(shape({})).isRequired,
  onChange: func.isRequired,
  disabled: bool.isRequired,
}

UXLibRadio.defaultProps = {}

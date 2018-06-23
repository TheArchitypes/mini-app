import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function UXLibRadio(props) {
  const { name, type, value, defaultValue, label, values, onChange, disabled, float } = props;
  return(
    <div className="ux-form form-radio">
      <div className="radio-label">{label}</div>
        {values.map((value, index) => (
          <div className={float ? 'form-radio-input float-radio' : 'form-radio=input'} key={index}>
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
  float: bool,
}

UXLibRadio.defaultProps = {
  float: false,
}

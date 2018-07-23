import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Icon from './Icon';
import UXLibTelMultiSelect from './UXLibTelMultiSelect';
import UXLibSelectOption from './UXLibSelectOption';
import UXLibRadio from './UXLibRadio';
import UXLibInput from './UXLibInput';

export function FormInput(props) {
  const {type} = props;
  switch(type) {
    case('telMultiSelect'):
      return(
        <UXLibTelMultiSelect {...props} />
      );
    case('selectOption'):
      return(
        <UXLibSelectOption {...props} />
      );
    case('radio'):
      return(
        <UXLibRadio {...props} />
      );
    default:
      return(
        <UXLibInput {...props} />
      );
  };
}

const { string, arrayOf, shape, func, bool } = PropTypes;
FormInput.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  value: string,
  defaultValue: string.isRequired,
  label: string.isRequired,
  values: arrayOf(shape({})),
  onChange: func.isRequired,
  disabled: bool,
};

FormInput.defaultProps = {
  disabled: false,
}

export default {
  FormInput,
}

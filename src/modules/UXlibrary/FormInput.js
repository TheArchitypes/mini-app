import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Icon from './Icon';

export function FormInput(props) {
  const {values} = props;
  console.log('values: ', values);
  return (
    <div>
      <input />
    </div>
  )
}

const { shape } = PropTypes;
FormInput.propTypes = {
  values: shape({}).isRequired,
};

FormInput.defaultProps = {}

export default {
  FormInput,
}

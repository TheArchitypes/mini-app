import React from 'react';
import PropTypes from 'prop-types';
import { withFormik as _Formik } from 'formik';
import _changeHandler from './changeHandler';

const FormikAdaptor = (_Component) => {
  function LegacyFormikAdaptorComponent(props) {
    const changeHandler = _changeHandler(props);
    const Component = _Component;
    Component.displayName = 'Formik(Component)';
    return (
      <Component {...props} handleChangeValue={(name, value) => changeHandler(name)(value)} />
    );
  }
  const { func } = PropTypes;
  LegacyFormikAdaptorComponent.propTypes = {
    setFieldTouched: func.isRequired,
    setFieldValue: func.isRequired,
  }
  return LegacyFormikAdaptorComponent;
};

export const Formik = specification => Component => _Formik(specification)(
  FormikAdaptor(Component),
);

export default Formik;

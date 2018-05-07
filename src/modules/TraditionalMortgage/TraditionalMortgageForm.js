import React from 'react';
import { Link } from 'react-router';
import { withFormik } from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { FormInput } from 'modules/UXlibrary/FormInput'

const TraditionalMortgage =
  ({
    values,
    touched,
    errors,
    setFieldValue: handleChange,
    handleSubmit,
    formFields,
  }) => (
    <form onSubmit={handleSubmit}>
      {Object.keys(formFields).map((field, index) => (
        <div key={index}>
          <input name={formFields[field].label} value={values[field]} onChange={value => handleChange(`${formFields[field].label}`, value)}/>
        </div>
      ))}
    </form>
  )

  {
    const { shape, func } = PropTypes;

    TraditionalMortgage.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      formFields: shape({}).isRequired
    }
  }

  const validationSchema = (props) => {
    const newValidation = _.reduce(props.formFields, (fieldAcc, fieldObj, fieldKey) => ({
      ...fieldAcc,
      [fieldKey]: Yup.string().required(`${fieldKey} is required`),
    }), {});
    return Yup.object().shape({
      ...newValidation,
    });
  };

  export const TraditionalMortgageForm = withFormik({
    validationSchema: props => validationSchema(props),
    mapPropsToValues: ({ formFields }) => {
      const formFieldsToValues = _.reduce(formFields, (fieldAcc, fieldObj, fieldKey) => ({
        ...fieldAcc,
        [fieldKey]: fieldObj.defaultValue,
      }), {});
      console.log('form field values: ', formFieldsToValues);
      return {
        ...formFieldsToValues,
      };
    },
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPayload = _.reduce(props.formFields, (fieldAcc, fieldObj, fieldKey) => ({
        ...fieldAcc,
        [fieldKey]: payload[fieldKey],
      }), {});
      props.onSuccess(newPayload);
    },
  })(TraditionalMortgage);

  export default {
    TraditionalMortgageForm,
  };

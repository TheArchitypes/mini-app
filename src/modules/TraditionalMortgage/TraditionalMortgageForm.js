import React from 'react';
import { Link } from 'react-router';
import { withFormik } from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import { FormInput } from 'modules/UXlibrary/FormInput'

const TraditionalMortgage =
  ({
    values,
    touched,
    errors,
    setFieldValue: handleChange,
    handleSubmit,
    history,
    formFields,
  }) => {
  console.log('values: ', values);
  return(
    <form onSubmit={handleSubmit}>
      {Object.keys(formFields).map((field, index) => (
        <div className="form-input" key={index}>
          <FormInput
            name={field}
            type={formFields[field].type}
            value={values[field]}
            defaultValue={formFields[field].defaultValue}
            label={formFields[field].label}
            values={_.get(formFields[field], 'values', [])}
            onChange={event => handleChange(field, _.get(event, 'target.value', event))}
          />
        </div>
      ))}
      <div className="col" style={{ width: "33%", float: "left", margin: "0" }}>
        <ButtonMain
          label="Save"
          onClick={handleSubmit}
        />
      </div>
      <div className="col" style={{ width: "33%", float: "left", margin: "0" }}>
        <ButtonMain
          label="Cancel"
          onClick={() => history.push(routeConstants.MiniAppDashboard.fullRoute)}
        />
      </div>
    </form>
  )};

  {
    const { shape, func } = PropTypes;

    TraditionalMortgage.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  const validationSchema = (props) => {
    const newValidation = _.reduce(props.formFields, (fieldAcc, fieldObj, fieldKey) => ({
      ...fieldAcc,
      [fieldKey]: Yup.string(),
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
        [fieldKey]: fieldObj.value,
      }), {});
      console.log('form fields to values: ', formFieldsToValues);
      return {
        ...formFieldsToValues,
      };
    },
    handleSubmit: (payload, { props, setSubmitting }) => {
      console.log('payload: ', payload);
      setSubmitting(false);
      console.log('payload: ', payload);
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

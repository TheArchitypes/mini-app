import React from 'react';
import { Link } from 'react-router';
import { withFormik } from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain, ButtonForm } from 'modules/UXlibrary/ButtonMain';
import { FormInput } from 'modules/UXlibrary/FormInput'
import { reducePropsToValues, reducePropsToValidation, reduceValuesToPayload } from 'selectors/FormSelectors';

const NewFormThree =
  ({
    values,
    touched,
    errors,
    setFieldValue: handleChange,
    handleSubmit,
    history,
    formFields,
    incomes,
    addIncome,
  }) => {
  return(
    <form onSubmit={handleSubmit}>
      <ul className="form-style-1">
        <div className="flex-container">
          <div className="flex-col">
            <div className="flex-row">
              <h2>Do you receive any other type of income?</h2>
            </div>
            <div className="flex-row">
              such as dividends, alimony, social security or retirement
            </div>
            {incomes.length > 0 && incomes.map((income, index) => (
              <div className="flex-row">
                <div className="flex-col no-border" style={{ width: '100%' }}>
                  <div className="flex-row">
                    <ButtonForm
                      label="Remove Income"
                      onClick={() => addAsset('incomes', index, true)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-row">
              <ButtonForm
                label="Add Other Income"
                onClick={() => addIncome('incomes', null, false)}
              />
            </div>
          </div>
        </div>
      </ul>
    </form>
  )};

  {
    const { shape, func, arrayOf } = PropTypes;

    NewFormThree.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired,
      incomes: arrayOf(shape({})),
      addIncome: func.isRequired,
    }
  }

  export const NewForm3 = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(NewFormThree);

  export default {
    NewForm3,
  };

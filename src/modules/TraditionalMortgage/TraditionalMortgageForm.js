import React from 'react';
import { Link } from 'react-router';
import { withFormik } from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import { FormInput } from 'modules/UXlibrary/FormInput'
import { reducePropsToValues, reducePropsToValidation, reduceValuesToPayload } from 'selectors/FormSelectors';

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
  return(
    <form onSubmit={handleSubmit}>
      <h2>Uniform Residential Loan Application</h2>
      <p><strong>Verify and complete the information on thie application.</strong> If you are appliting for this loan with others, each additional Borrower must provide information as directed by your lender.</p>
      <span className="form -break" />
      <p><h2>Section 1: Borrower Information.</h2> This section asks about yout personal information and your income from employment and other sources, such as retirement, that you want considered to qualify for this loan.</p>
      <ul className="form-style-1">
        {Object.keys(formFields).map((field, index) => (
          <li className="form-input" key={index}>
            <FormInput
              name={field}
              type={formFields[field].type}
              value={values[field]}
              defaultValue={formFields[field].defaultValue}
              label={formFields[field].label}
              values={_.get(formFields[field], 'values', [])}
              onChange={event => handleChange(field, _.get(event, 'target.value', event))}
            />
          </li>
        ))}
        <li>
          <div className="col hvr-grow" style={{ width: "33%", margin: "0" }}>
            <ButtonMain
              label="Save"
              onClick={handleSubmit}
            />
          </div>
          <div className="col hvr-grow" style={{ width: "33%", margin: "0" }}>
            <ButtonMain
              label="Cancel"
              onClick={() => history.push(routeConstants.MiniAppDashboard.fullRoute)}
            />
          </div>
        </li>
      </ul>
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

  export const TraditionalMortgageForm = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(TraditionalMortgage);

  export default {
    TraditionalMortgageForm,
  };

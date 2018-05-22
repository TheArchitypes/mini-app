import React from 'react';
import { Link } from 'react-router';
import { withFormik } from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import { FormInput } from 'modules/UXlibrary/FormInput'
import { reducePropsToValues, reducePropsToValidation, reduceValuesToPayload } from 'selectors/FormSelectors';

const CreditDisclosure =
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
      <div className="row">
        CREDIT DISCLOSURE
        * to follow
      </div>
      <div className="row">
        <FormInput
          name="creditDisclosure"
          type="radio"
          value={values['creditDisclosure']}
          defaultValue=""
          label=""
          values={[
            {value: 'yes', label: 'Yes - I WANT my credit pulled at this time'},
            {value: 'no', label: 'No - I do NOT want my credit pulled at this time'},
          ]}
          onChange={event => handleChange('creditDisclosure', _.get(event, 'target.value', event))}
        />
      </div>
      <div className="row">
        <div className="col hvr-grow" style={{ width: "33%", margin: "0" }}>
          <ButtonMain
            label="Save"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </form>
  )};

  {
    const { shape, func } = PropTypes;

    CreditDisclosure.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  export const CreditDisclosureForm = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(CreditDisclosure);

  export default {
    CreditDisclosureForm,
  };

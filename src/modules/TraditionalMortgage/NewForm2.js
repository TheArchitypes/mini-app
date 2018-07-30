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

const NewFormTwo =
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
      <ul className="form-style-1">
        <div className="flex-container">
          <div className="flex-col">
            <div className="flex-row">
              <h2>Current Employer Information</h2>
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="employmentType"
                    type="selectOption"
                    value={values['employmentType']}
                    defaultValue="Select One"
                    label="Employment Type"
                    values={[
                      {value: 'selfEmployed', label: 'Self Employed'},
                      {value: 'salariedPosition', label: 'Salaried Position'},
                      {value: 'hourlyPosition', label: 'Hourly Position'},
                      {value: 'commissionPosition', label: 'Commission Position'},
                      {value: 'unemployed', label: 'Unemployed'},
                    ]}
                    onChange={event => handleChange('employmentType', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="position"
                    type="text"
                    value={values['position']}
                    defaultValue=""
                    label="Position"
                    onChange={event => handleChange('position', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="typeOfBusiness"
                    type="text"
                    value={values['typeOfBusiness']}
                    defaultValue="optional"
                    label="Type Of Business"
                    onChange={event => handleChange('typeOfBusiness', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="timePeriodFrom"
                      type="text"
                      value={values['timePeriodFrom']}
                      defaultValue="__/__/__"
                      label="Time Period"
                      onChange={event => handleChange('timePeriodFrom', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="timePeriodTo"
                      type="text"
                      value={values['timePeriodTo']}
                      defaultValue="Current"
                      label=""
                      onChange={event => handleChange('timePeriodTo', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="yearsInSameField"
                    type="text"
                    value={values['yearsInSameField']}
                    defaultValue="optional"
                    label="Years in same field"
                    onChange={event => handleChange('yearsInSameField', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="totalIncome"
                      type="text"
                      value={values['totalIncome']}
                      defaultValue=""
                      label="Total Income"
                      onChange={event => handleChange('totalIncome', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="totalIncomeTime"
                      type="selectOption"
                      value={values['totalIncomeTime']}
                      defaultValue=""
                      label=""
                      values={[
                        {value: 'monthly', label: 'Monthly'},
                        {value: 'yearly', label: 'Yearly'},
                      ]}
                      onChange={event => handleChange('totalIncomeTime', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="companyName"
                    type="text"
                    value={values['companyName']}
                    defaultValue=""
                    label="Company Name"
                    onChange={event => handleChange('companyName', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="businessPhone"
                    type="text"
                    value={values['businessPhone']}
                    defaultValue="(___)___-____"
                    label="Business Phone"
                    onChange={event => handleChange('businessPhone', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="companyStreet"
                    type="text"
                    value={values['companyStreet']}
                    defaultValue="optional"
                    label="Company Street"
                    onChange={event => handleChange('companyStreet', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="companyZip"
                      type="text"
                      value={values['companyZip']}
                      defaultValue="optional"
                      label="Company Zip / State"
                      onChange={event => handleChange('companyZip', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="companyState"
                      type="selectOption"
                      value={values['companyState']}
                      defaultValue="State"
                      label=""
                      values={[
                        {value: 'az', label: 'AZ'},
                        {value: 'ca', label: 'CA'},
                        {value: 'tx', label: 'TX'},
                      ]}
                      onChange={event => handleChange('companyState', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="companyCity"
                    type="text"
                    value={values['companyCity']}
                    defaultValue="optional"
                    label="Company City"
                    onChange={event => handleChange('companyCity', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <ButtonMain
                label="Add a Current Employer"
                onClick={() => addEmployer()}
              />
            </div>
          </div>
        </div>
      </ul>
    </form>
  )};

  {
    const { shape, func } = PropTypes;

    NewFormTwo.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  const validationSchema = () => ({
      employmentType: Yup.string(),
      position: Yup.string(),
      typeOfBusiness: Yup.string(),
      timePeriodFrom: Yup.string(),
      timePeriodTo: Yup.string(),
      yearsInSameField: Yup.string(),
      totalIncome: Yup.string(),
      totalIncomeTime: Yup.string(),
      companyName: Yup.string(),
      businessPhone: Yup.string(),
      companyStreet: Yup.string(),
      companyZip: Yup.string(),
      companyState: Yup.string(),
      companyCity: Yup.string(),
  });

  export const NewForm2 = withFormik({
    mapPropsToValues: props => ({
      employmentType: _.get(props.formFields, 'employmentType', ''),
      position: _.get(props.formFields, 'position', ''),
      typeOfBusiness: _.get(props.formFields, 'typeOfBusiness', ''),
      timePeriodFrom: _.get(props.formFields, 'timePeriodFrom', ''),
      timePeriodTo: _.get(props.formFields, 'timePeriodTo', ''),
      yearsInSameField: _.get(props.formFields, 'yearsInSameField', ''),
      totalIncome: _.get(props.formFields, 'totalIncome', ''),
      totalIncomeTime: _.get(props.formFields, 'totalIncomeTime', ''),
      companyName: _.get(props.formFields, 'companyName', ''),
      businessPhone: _.get(props.formFields, 'businessPhone', ''),
      companyStreet: _.get(props.formFields, 'companyStreet', ''),
      companyZip: _.get(props.formFields, 'companyZip', ''),
      companyState: _.get(props.formFields, 'companyState', ''),
      companyCity: _.get(props.formFields, 'companyCity', ''),
    }),
    validationSchema: () => validationSchema(),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      props.onSuccess(newPayload);
    },
  })(NewFormTwo);

  export default {
    NewForm2,
  };

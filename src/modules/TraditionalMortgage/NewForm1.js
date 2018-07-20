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

const NewForm =
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
              <h2>My Personal Information</h2>
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="firstName"
                    type="text"
                    value={values['firstName']}
                    defaultValue=""
                    label="First Name"
                    onChange={event => handleChange('firstName', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="middleName"
                    type="text"
                    value={values['middleName']}
                    defaultValue=""
                    label="Middle Name"
                    onChange={event => handleChange('middleName', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="lastName"
                    type="text"
                    value={values['lastName']}
                    defaultValue=""
                    label="Last Name"
                    onChange={event => handleChange('lastName', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="suffix"
                    type="text"
                    value={values['suffix']}
                    defaultValue=""
                    label="Suffix"
                    onChange={event => handleChange('suffix', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
              <div classname="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="email"
                    type="email"
                    value={values['email']}
                    defaultValue=""
                    label="Email"
                    onChange={event => handleChange('email', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="phone"
                    type="phone"
                    value={values['phone']}
                    defaultValue=""
                    label="Preferred Phone"
                    onChange={event => handleChange('phone', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="maritalStatus"
                    type="selectOption"
                    value={values['maritalStatus']}
                    defaultValue="Select One..."
                    label="Marital Status"
                    values={[
                      {value: 'single', label: 'Single'},
                      {value: 'married', label: 'Married'},
                      {value: 'divorced', label: 'Divorced'},
                    ]}
                    onChange={event => handleChange('maritalStatus', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border">
                    <FormInput
                      name="dependants"
                      type="text"
                      value={values['dependants']}
                      defaultValue=""
                      label="Dependants"
                      onChange={event => handleChange('dependants', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border">
                    <FormInput
                      name="ages"
                      type="text"
                      value={values['ages']}
                      defaultValue=""
                      label="Ages"
                      onChange={event => handleChange('ages', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <h2>Add a Co-Borrower</h2>
            </div>
            <div className="flex-row">
              <FormInput
                name="coborrower"
                type="radio"
                value={values['coborrower']}
                defaultValue=""
                label=""
                values={[
                  {value: 'yes', label: 'Yes'},
                  {value: 'no', label: 'No'},
                ]}
                onChange={event => handleChange('coborrower', _.get(event, 'target.value', event))}
              />
            </div>
            <div className="flex-row">
              <h2>My Property Information</h2>
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="street"
                    type="text"
                    value={values['street']}
                    defaultValue=""
                    label="Street"
                    onChange={event => handleChange('street', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="zip"
                      type="text"
                      value={values['zip']}
                      defaultValue=""
                      label="Zip / State"
                      onChange={event => handleChange('zip', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="state"
                      type="selectOption"
                      value={values['state']}
                      defaultValue="State"
                      label=""
                      values={[
                        {value: 'az', label: 'AZ'},
                        {value: 'ca', label: 'CA'},
                        {value: 'tx', label: 'TX'},
                      ]}
                      onChange={event => handleChange('state', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="city"
                    type="text"
                    value={values['city']}
                    defaultValue=""
                    label="City"
                    onChange={event => handleChange('city', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="occupationType"
                    type="selectOption"
                    value={values['occupationType']}
                    defaultValue=""
                    label="Occupation Type"
                    values={[
                      {value: 'primaryResidence', label: 'Primary Residence'},
                      {value: 'rental', label: 'Rental'},
                      {value: 'secondaryResidence', label: 'Secondary Residence'},
                    ]}
                    onChange={event => handleChange('occupationType', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="propertyType"
                    type="selectOption"
                    value={values['propertyType']}
                    defaultValue=""
                    label="Property Type"
                    values={[
                      {value: 'singleFamily', label: 'Single Family'},
                      {value: 'multipleFamily', label: 'Multiple Family'},
                    ]}
                    onChange={event => handleChange('propertyType', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="units"
                    type="radio"
                    value={values['units']}
                    defaultValue=""
                    label="Number of Units"
                    values={[
                      {value: '1', label: '1'},
                      {value: '2', label: '2'},
                      {value: '3', label: '3'},
                      {value: '4', label: '4'},
                    ]}
                    onChange={event => handleChange('units', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="estimatedValue"
                    type="text"
                    value={values['estimatedValue']}
                    defaultValue=""
                    label="Estimated Value"
                    onChange={event => handleChange('estimatedValue', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="loanAmount"
                    type="text"
                    value={values['loanAmount']}
                    defaultValue=""
                    label="Loan Amount"
                    onChange={event => handleChange('loanAmount', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="origPurchasePrice"
                    type="text"
                    value={values['origPurchasePrice']}
                    defaultValue=""
                    label="Orig Purchase Price"
                    onChange={event => handleChange('origPurchasePrice', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="origPurchaseDate"
                    type="text"
                    value={values['origPurchaseDate']}
                    defaultValue=""
                    label="Orig Purchase Date"
                    onChange={event => handleChange('origPurchaseDate', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <h2>Where are you in the buying process?</h2>
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <ButtonMain
                  label="I need to get pre-approved"
                  onClick={() => handleApproval(false)}
                />
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <ButtonMain
                  label="My offer has been accepted"
                  onClick={() => handleApproval(true)}
                />
              </div>
            </div>
            <div className="flex-row">
              <h2>Information on the Property I{"'"}m Purchasing</h2>
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="street"
                    type="text"
                    value={values['street']}
                    defaultValue=""
                    label="Street"
                    onChange={event => handleChange('street', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="zip"
                      type="text"
                      value={values['zip']}
                      defaultValue=""
                      label="Zip / State"
                      onChange={event => handleChange('zip', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="state"
                      type="selectOption"
                      value={values['state']}
                      defaultValue="State"
                      label=""
                      values={[
                        {value: 'az', label: 'AZ'},
                        {value: 'ca', label: 'CA'},
                        {value: 'tx', label: 'TX'},
                      ]}
                      onChange={event => handleChange('state', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="city"
                    type="text"
                    value={values['city']}
                    defaultValue=""
                    label="City"
                    onChange={event => handleChange('city', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="occupationType"
                    type="selectOption"
                    value={values['occupationType']}
                    defaultValue=""
                    label="Occupation Type"
                    values={[
                      {value: 'primaryResidence', label: 'Primary Residence'},
                      {value: 'rental', label: 'Rental'},
                      {value: 'secondaryResidence', label: 'Secondary Residence'},
                    ]}
                    onChange={event => handleChange('occupationType', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="propertyType"
                    type="selectOption"
                    value={values['propertyType']}
                    defaultValue=""
                    label="Property Type"
                    values={[
                      {value: 'singleFamily', label: 'Single Family'},
                      {value: 'multipleFamily', label: 'Multiple Family'},
                    ]}
                    onChange={event => handleChange('propertyType', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="units"
                    type="radio"
                    value={values['units']}
                    defaultValue=""
                    label="Number of Units"
                    values={[
                      {value: '1', label: '1'},
                      {value: '2', label: '2'},
                      {value: '3', label: '3'},
                      {value: '4', label: '4'},
                    ]}
                    onChange={event => handleChange('units', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="purchasePrice"
                    type="text"
                    value={values['purchasePrice']}
                    defaultValue=""
                    label="Purchase Price"
                    onChange={event => handleChange('purchasePrice', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="downPayment"
                    type="text"
                    value={values['downPayment']}
                    defaultValue=""
                    label="Down Payment"
                    onChange={event => handleChange('downPayment', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="loanAmount"
                    type="text"
                    value={values['loanAmount']}
                    defaultValue=""
                    label="Loan Amount"
                    onChange={event => handleChange('loanAmount', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="downPaymentSource"
                    type="selectOption"
                    value={values['downPaymentSource']}
                    defaultValue="Select One"
                    label="Down Payment Source"
                    values={[
                      {value: 'singleFamily', label: 'Single Family'},
                      {value: 'multipleFamily', label: 'Multiple Family'},
                    ]}
                    onChange={event => handleChange('downPaymentSource', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <h2>My Current Address Information</h2>
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="currentStreet"
                    type="text"
                    value={values['currentStreet']}
                    defaultValue=""
                    label="Street"
                    onChange={event => handleChange('currentStreet', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" wtyle={{ width: '50%' }}>
                    <FormInput
                      name="currentZip"
                      type="text"
                      value={values['currentZip']}
                      defaultValue=""
                      label="Zip / State"
                      onChange={event => handleChange('currentZip', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="currentState"
                      type="selectOption"
                      value={values['currentState']}
                      defaultValue="State"
                      label=""
                      values={[
                        {value: 'az', label: 'AZ'},
                        {value: 'ca', label: 'CA'},
                        {value: 'tx', label: 'TX'},
                      ]}
                      onChange={event => handleChange('currentState', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="currentCity"
                    type="text"
                    value={values['currentCity']}
                    defaultValue=""
                    label="City"
                    onChange={event => handleChange('currentCity', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row">
                  <FormInput
                    name="rentOrOwn"
                    type="selectOption"
                    value={values['rentOrOwn']}
                    defaultValue="Select One"
                    label="Do you rent or own?"
                    values={[
                      {value: 'rent', label: 'Rent'},
                      {value: 'own', label: 'Own'},
                    ]}
                    onChange={event => handleChange('rentOrOwn', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <div className="flex-col no-border" style={{ width: '50%' }}>
                    <FormInput
                      name="timeYears"
                      type="text"
                      value={values['timeYears']}
                      defaultValue=""
                      label="Time at Current Address"
                      onChange={event => handleChange('timeYears', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col">
                    <FormInput
                      name="timeMonths"
                      type="text"
                      value={values['timeMonths']}
                      defaultValue=""
                      label=""
                      onChange={event => handleChange('timeMonths', _.get(event, 'target.value', event))}
                    />
                  </div>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="mailingAddressDifferent"
                    type="radio"
                    value={values['mailingAddressDifferent']}
                    defaultValue=""
                    label="Mailing Address Different"
                    values={[
                      {value: 'yes', label: 'Yes'},
                      {value: 'no', label: 'No'},
                    ]}
                    onChange={event => handleChange('mailingAddressDifferent', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </form>
  )};

  {
    const { shape, func } = PropTypes;

    NewForm.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  export const NewForm1 = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(NewForm);

  export default {
    NewForm1,
  };

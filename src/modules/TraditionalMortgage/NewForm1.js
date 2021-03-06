import React from 'react';
import { Formik } from '../../lib/formikAdaptor';
import Yup from 'yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain, ButtonForm } from 'modules/UXlibrary/ButtonMain';
import { FormInput } from 'modules/UXlibrary/FormInput'

const NewFormOne =
  ({
    values,
    touched,
    errors,
    handleChangeValue: handleChange,
    handleSubmit,
    history,
    formFields,
  }) => (
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
              <div className="flex-col no-border" style={{ width: '50%' }}>
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
                name="coBorrower"
                type="radio"
                value={values['coBorrower']}
                defaultValue="no"
                label=""
                values={[
                  {value: 'yes', label: 'Yes'},
                  {value: 'no', label: 'No'},
                ]}
                onChange={event => handleChange('coBorrower', _.get(event, 'target.value', event))}
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
                <ButtonForm
                  label="I need to get pre-approved"
                  onClick={() => handleApproval(false)}
                />
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <ButtonForm
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
  );

  {
    const { shape, func } = PropTypes;

    NewFormOne.propTypes = {
      values: shape({}),
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      handleChangeValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  const validationSchema = () => ({
      firstName: Yup.string(),
      middleName: Yup.string(),
      lastName: Yup.string(),
      suffix: Yup.string(),
      email: Yup.string(),
      phone: Yup.string(),
      maritalStatus: Yup.string(),
      dependants: Yup.string(),
      ages: Yup.string(),
      coBorrower: Yup.string(),
      street: Yup.string(),
      zip: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      occupationType: Yup.string(),
      propertyType: Yup.string(),
      units: Yup.string(),
      estimatedValue: Yup.string(),
      loanAmount: Yup.string(),
      origPurchasePrice: Yup.string(),
      origPurchaseDate: Yup.string(),
      purchasePrice: Yup.string(),
      downPayment: Yup.string(),
      loanAmount: Yup.string(),
      downPaymentSource: Yup.string(),
      currentStreet: Yup.string(),
      currentZip: Yup.string(),
      currentState: Yup.string(),
      currentCity: Yup.string(),
      rentOrOwn: Yup.string(),
      timeYears: Yup.string(),
      timeMonths: Yup.string(),
      mailingAddressDifferent: Yup.string(),
    })

  export const NewForm1 = Formik({
    mapPropsToValues: props => {
        return {
          firstName: _.get(props.fieldName, 'firstName', ''),
          middleName: _.get(props.fieldName, 'middleName', ''),
          lastName: _.get(props.fieldName, 'lastName', ''),
          suffix: _.get(props.fieldName, 'suffix', ''),
          email: _.get(props.fieldName, 'email', ''),
          phone: _.get(props.fieldName, 'phone', ''),
          maritalStatus: _.get(props.fieldName, 'maritalStatus', ''),
          dependants: _.get(props.fieldName, 'dependants', ''),
          ages: _.get(props.fieldName, 'ages', ''),
          coBorrower: _.get(props.fieldName, 'coBorrower', ''),
          street: _.get(props.fieldName, 'street', ''),
          zip: _.get(props.fieldName, 'zip', ''),
          state: _.get(props.fieldName, 'state', ''),
          city: _.get(props.fieldName, 'city', ''),
          occupationType: _.get(props.fieldName, 'occupationType', ''),
          propertyType: _.get(props.fieldName, 'propertyType', ''),
          units: _.get(props.fieldName, 'units', ''),
          estimatedValue: _.get(props.fieldName, 'estimatedValue', ''),
          loanAmount: _.get(props.fieldName, 'loanAmount', ''),
          origPurchasePrice: _.get(props.fieldName, 'origPurchasePrice', ''),
          origPurchaseDate: _.get(props.fieldName, 'origPurchaseDate', ''),
          purchasePrice: _.get(props.fieldName, 'purchasePrice', ''),
          downPayment: _.get(props.fieldName, 'downPayment', ''),
          loanAmount: _.get(props.fieldName, 'loanAmount', ''),
          downPaymentSource: _.get(props.fieldName, 'downPaymentSource', ''),
          currentStreet: _.get(props.fieldName, 'currentStreet', ''),
          currentZip: _.get(props.fieldName, 'currentZip', ''),
          currentState: _.get(props.fieldName, 'currentState', ''),
          currentCity: _.get(props.fieldName, 'currentCity', ''),
          rentOrOwn: _.get(props.fieldName, 'rentOrOwn', ''),
          timeYears: _.get(props.fieldName, 'timeYears', ''),
          timeMonths: _.get(props.fieldName, 'timeMonths', ''),
          mailingAddressDifferent: _.get(props.fieldName, 'mailingAddressDifferent', ''),
        };
    },
    validationSchema: ({ formFields }) => validationSchema(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      props.onSuccess(payload);
    },
  })(NewFormOne);

  export default {
    NewForm1,
  };

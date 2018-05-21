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

const StaticTraditionalMortgage =
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
      <FormInput
        name="currentEmploymentInformationDoesNotApply"
        type="checkbox"
        value={values['currentEmploymentInformationDoesNotApply']}
        defaultValue={true}
        label={<strong>Does Not Apply</strong>}
        onChange={event => handleChange('currentEmploymentInformationDoesNotApply', _.get(event, 'target.value', event))}
      />
      <span className="form-section-tab">1b. Current Employment/Self Employment and Income</span>
      {values['currentEmploymentInformationDoesNotApply'] &&
        <div className="row">
          <div className="col" style={{width: '79%'}}>
            <div className="row">
              <FormInput
                name="currentEmploymentInformationEmployerName"
                type="text"
                value={values['currentEmploymentInformationEmployerName']}
                defaultValue=""
                label={<strong>Employer or Business Name</strong>}
                onChange={event => handleChange('currentEmploymentInformationEmployerName', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="currentEmploymentInformationEmployerPhone"
                type="text"
                value={values['currentEmploymentInformationEmployerPhone']}
                defaultValue=""
                label="Phone"
                onChange={event => handleChange('currentEmploymentInformationEmployerPhone', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="currentEmploymentInformationEmployerStreet"
                type="text"
                value={values['currentEmploymentInformationEmployerStreet']}
                defaultValue=""
                label="Street"
                onChange={event => handleChange('currentEmploymentInformationEmployerStreet', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="currentEmploymentInformationEmployerCity"
                type="text"
                value={values['currentEmploymentInformationEmployerCity']}
                defaultValue=""
                label="City"
                onChange={event => handleChange('currentEmploymentInformationEmployerCity', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="currentEmploymentInformationEmployerState"
                type="text"
                value={values['currentEmploymentInformationEmployerState']}
                defaultValue=""
                label="State"
                onChange={event => handleChange('currentEmploymentInformationEmployerState', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="currentEmploymentInformationEmployerZip"
                type="text"
                value={values['currentEmploymentInformationEmployerZip']}
                defaultValue=""
                label="Zip"
                onChange={event => handleChange('currentEmploymentInformationEmployerZip', _.get(event, 'target.value', event))}
              />
            </div>
            <div className="row">
              <div className="col" style={{width: '59%'}}>
                <FormInput
                  name="currentEmploymentInformationPosition"
                  type="text"
                  value={values['currentEmploymentInformationPosition']}
                  defaultValue=""
                  label={<strong>Position of Title</strong>}
                  onChange={event => handleChange('currentEmploymentInformationPosition', _.get(event, 'target.value', event))}
                />
                <FormInput
                  name="currentEmploymentInformationStartDate"
                  type="text"
                  value={values['currentEmploymentInformationStartDate']}
                  defaultValue=""
                  label={<strong>Start Date</strong>}
                  onChange={event => handleChange('currentEmploymentInformationStartDate', _.get(event, 'target.value', event))}
                />
                <span>(mm/yyyy)</span>
                <span>How long in this line of work</span>
                <FormInput
                  name="currentEmploymentInformationDurationYears"
                  type="text"
                  value={values['currentEmploymentInformationDurationYears']}
                  defaultValue=""
                  label="Years"
                  onChange={event => handleChange('currentEmploymentInformationDurationYears', _.get(event, 'target.value', event))}
                />
                <FormInput
                  name="currentEmploymentInformationDurationMonths"
                  type="text"
                  value={values['currentEmploymentInformationDurationMonths']}
                  defaultValue=""
                  label="Months"
                  onChange={event => handleChange('currentEmploymentInformationDurationMonths', _.get(event, 'target.value', event))}
                />
              </div>
              <div className="col" style={{width: '40%'}}>
                <strong>Check if this statement applies: </strong>
                <FormInput
                  name="currentEmploymentInformationPartyToTransaction"
                  type="checkbox"
                  value={values['currentEmploymentInformationPartyToTransaction']}
                  defaultValue=""
                  label="I am employed bya  family member, property seller, real estate agent, or other party to the transaction"
                  onChange={event => handleChange('currentEmploymentInformationPartyToTransaction', _.get(event, 'target.value', event))}
                />
              </div>
            </div>
            <div className="row">
              <div className="col" style={{width: '32%'}}>
                <FormInput
                  name="currentEmploymentInformationSelfEmployed"
                  type="checkbox"
                  value={values['currentEmploymentInformationSelfEmployed']}
                  defaultValue=""
                  label={<strong>Check if you are the Business Owner or Self-Employed</strong>}
                  onChange={event => handleChange('currentEmploymentInformationSelfEmployed', _.get(event, 'target.value', event))}
                />
              </div>
              <div className="col" style={{width: '33%'}}>
                <FormInput
                  name="currentEmploymentInformationOwnershipShare"
                  type="radio"
                  value={values['currentEmploymentInformationOwnershipShare']}
                  defaultValue=""
                  label=""
                  onChange={event => handleChange('currentEmploymentInformationOwnershipShare', _.get(event, 'target.value', event))}
                  values={[
                    { value: 'lessThan25', label: 'I have an ownership share of less that 25%' },
                    { value: 'moreThan25', label: 'I have an ownership share of 25% or more' },
                  ]}
                />
              </div>
              <div className="col" style={{width: '33%'}}>
                <FormInput
                  name="currentEmploymentInformationMonthlyIncome"
                  type="checkbox"
                  value={values['currentEmploymentInformationMonthlyIncome']}
                  defaultValue=""
                  label={<strong>Monthly Income (or Loss)</strong>}
                  onChange={event => handleChange('currentEmploymentInformationMonthlyIncome', _.get(event, 'target.value', event))}
                />
              </div>
            </div>
          </div>
          <div className="col" style={{width: '20%'}}>
            <strong>Gross Monthly Income</strong>
            <FormInput
              name="currentEmploymentInformationBaseSalary"
              type="text"
              value={values['currentEmploymentInformationBaseSalary']}
              defaultValue=""
              label="Base"
              onChange={event => handleChange('currentEmploymentInformationBaseSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="currentEmploymentInformationOvertimeSalary"
              type="text"
              value={values['currentEmploymentInformationOvertimeSalary']}
              defaultValue=""
              label="Overtime"
              onChange={event => handleChange('currentEmploymentInformationOvertimeSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="currentEmploymentInformationBonusSalary"
              type="text"
              value={values['currentEmploymentInformationBonusSalary']}
              defaultValue=""
              label="Bonus"
              onChange={event => handleChange('currentEmploymentInformationBonusSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="currentEmploymentInformationCommissionSalary"
              type="text"
              value={values['currentEmploymentInformationCommissionSalary']}
              defaultValue=""
              label="Commission"
              onChange={event => handleChange('currentEmploymentInformationCommissionSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="currentEmploymentInformationMilitaryEntitlementsSalary"
              type="text"
              value={values['currentEmploymentInformationMilitaryEntitlementsSalary']}
              defaultValue=""
              label="Military Entitlements"
              onChange={event => handleChange('currentEmploymentInformationMilitaryEntitlementsSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="currentEmploymentInformationOtherSalary"
              type="text"
              value={values['currentEmploymentInformationOtherSalary']}
              defaultValue=""
              label="Other"
              onChange={event => handleChange('currentEmploymentInformationOtherSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="currentEmploymentInformationTotalSalary"
              type="text"
              value={values['currentEmploymentInformationTotalSalary']}
              defaultValue=""
              label="Total"
              onChange={event => handleChange('currentEmploymentInformationTotalSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
          </div>
        </div>
      }
      <div className="row">
        <div className="col" style={{ width: '59%' }}>
          <div className="row">
            <FormInput
              name="personalInformationName"
              type="text"
              value={values['personalInformationName']}
              defaultValue=""
              label={<div><strong>Name</strong> (First, Middle, Last, Suffix)</div>}
              onChange={event => handleChange('personalInformationName', _.get(event, 'target.value', event))}
            />
          </div>
          <div className="row">
            <FormInput
              name="personalInformationAlternateNames"
              type="text"
              value={values['personalInformationAlternateNames']}
              defaultValue=""
              label={<div><strong>Alternate Names</strong> - List any names by which you are known or any names under which credit was previously received (First, Middle, Last, Suffix)</div>}
              onChange={event => handleChange('personalInformationAlternateNames', _.get(event, 'target.value', event))}
            />
          </div>
        </div>
        <div className="col" style={{ width: '40%' }}>
          <div className="row">
            <FormInput
              name="personalInformationSocialSecurityNumber"
              type="text"
              value={values['personalInformationSocialSecurityNumber']}
              defaultValue=""
              label={<div><strong>Social Security Number</strong></div>}
              onChange={event => handleChange('personalInformationSocialSecurityNumber', _.get(event, 'target.value', event))}
            />
            <span>(or Individaul Taxpayer Identification Number)</span>
          </div>
          <div className="row">
            <div className="col" style={{ width: '49%' }}>
              <FormInput
                name="personalInformationDateOfBirth"
                type="text"
                value={values['personalInformationDateOfBirth']}
                defaultValue=""
                label={<strong>Date of Birth (mm/dd/yyyy)</strong>}
                onChange={event => handleChange('personalInformationDateOfBirth', _.get(event, 'target.value', event))}
              />
            </div>
            <div className="col" style={{ width: '50%' }}>
              <FormInput
                name="personalInformationCitizenship"
                type="radio"
                value={values['personalInformationCitizenship']}
                defaultValue=""
                label={<strong>Citizenship</strong>}
                values={[
                  {value: 'usCitizen', label: 'U.S. Citizen'},
                  {value: 'permanentResidentAlien', label: 'Permanent Resident Alien'},
                  {value: 'nonPermanentResidentAlien', label: 'Non-Permanent Resident Alien'},
                ]}
                onChange={event => handleChange('personalInformationCitizenship', _.get(event, 'target.value', event))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
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
      </div>
    </form>
  )};

  {
    const { shape, func } = PropTypes;

    StaticTraditionalMortgage.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  export const StaticTraditionalMortgageForm1b = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(StaticTraditionalMortgage);

  export default {
    StaticTraditionalMortgageForm1b,
  };

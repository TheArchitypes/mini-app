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
      <h2>Uniform Residential Loan Application</h2>
      <p><strong>Verify and complete the information on thie application.</strong> If you are appliting for this loan with others, each additional Borrower must provide information as directed by your lender.</p>
      <span className="form -break" />
      <p><h2>Section 1: Borrower Information.</h2> This section asks about yout personal information and your income from employment and other sources, such as retirement, that you want considered to qualify for this loan.</p>
      <span className="form-section-tab">1a. Personal Information</span>
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
        <div className="col" style={{width: '59%'}}>
          <FormInput
            name="personalInformationTypeOfCredit"
            type="radio"
            value={values['personalInformationTypeOfCredit']}
            defaultValue=""
            label={<strong>Type of Credit</strong>}
            values={[
              {value: 'individualCredit', label: 'I am applying for <strong>individual credit</strong>'},
              {value: 'jointCredit', label: 'I am applying for <strong>joint credit</strong>'},
            ]}
            onChange={event => handleChange('personalInformationTypeOfCredit', _.get(event, 'target.value', event))}
          />
          {values['personalInformationTypeOfCredit'] === 'jointCredit' &&
            <div>
              <FormInput
                name="personalInformationNumberOfBorrowers"
                type="text"
                value={values['personalInformationNumberOfBorrowers']}
                defaultValue=""
                label="Total Number of Borrowers"
                onChange={event => handleChange('personalInformationNumberOfBorrowers', _.get(event, 'target.value', event))}
              />
              parseInt(values['personalInformationNumberOfBorrowers']) > 1 && _.times(parseInt(values['personalInformationNumberOfBorrowers']), (index) => (
                <FormInput
                  key={index}
                  name={`personalInformationEachBorrowerInitials${index}`}
                  type="text"
                  value={values[`personalInformationEachBorrowerInitials${index}`]}
                  defaultValue=""
                  label={<div>Each Borrower intends to apply for joint Credit. <strong>Your Initials: </strong></div>}
                  onChange={event => handleChange(`personalInformationEachBorrowerInitials${index}`, _.get(event, 'target.value', event))}
                />
              ))
            </div>
          }
        </div>
        <div className="col" style={{width: '40%'}}>
          {parseInt(values['personalInformationNumberOfBorrowers']) > 1 &&
            <div>
              <strong>List Name(s) of Other Borrower(s) Applying for this Load</strong> (First, Middle, Last, Suffix)
              {_.times(parseInt(values['personalInformationNumberOfBorrowers']), (index) => (
                <FormInput
                  keu={index}
                  name={`personalInformationName${index}`}
                  type="text"
                  value={values[`personalInformationName${index}`]}
                  defaultValue=""
                  label={<div><strong>Name</strong> (First, Middle, Last, Suffix)</div>}
                  onChange={event => handleChange(`personalInformationName${index}`, _.get(event, 'target.value', event))}
                />
              ))}
            </div>
          }
        </div>
      </div>
      <div className="row">
        <div className="col" style={{width: '59%'}}>
          <FormInput
            name="personalInformationMaritalStatus"
            type="radio"
            value={values['personalInformationMaritalStatus']}
            defaultValue=""
            label={<strong>Marital Status</strong>}
            values={[
              {value: 'married', label: 'Married'},
              {value: 'separated', label: 'Separated'},
              {value: 'unmarried', label: 'Unmarried'},
            ]}
            onChange={event => handleChange('personalInformationMaritalStatus', _.get(event, 'target.value', event))}
          />
          <span>(Single, Divorced, Widowed, CivilUnion, Domestic PARtnership, Registered Reciprocal Beneficiary Relationship)</span>
          <span><strong>Dependants</strong> (not listed by another Borrower)</span>
          <FormInput
            name="personalInformationDependantsNumber"
            type="text"
            value={values['personalInformationDependantsNumber']}
            defaultValue=""
            label="Number"
            onChange={event => handleChange('personalInformationDependantsNumber', _.get(event, 'target.value', event))}
          />
          <FormInput
            name="personalInformationDependantsAges"
            type="text"
            value={values['personalInformationDependantsAges']}
            defaultValue=""
            label="Ages"
            onChange={event => handleChange('personalInformationDependantsAges', _.get(event, 'target.value', event))}
          />
        </div>
        <div className="col" style={{width: '40%'}}>
          <strong>Contact Information</strong>
          <FormInput
            name="personalInformationHomePhone"
            type="text"
            value={values['personalInformationHomePhone']}
            defaultValue=""
            label={<div><strong>Home</strong> phone</div>}
            onChange={event => handleChange('personalInformationHomePhone', _.get(event, 'target.value', event))}
          />
          <FormInput
            name="personalInformationCellPhone"
            type="text"
            value={values['personalInformationCellPhone']}
            defaultValue=""
            label={<div><strong>Cell</strong> phone</div>}
            onChange={event => handleChange('personalInformationCellPhone', _.get(event, 'target.value', event))}
          />
          <FormInput
            name="personalInformationWorkPhone"
            type="text"
            value={values['personalInformationWorkPhone']}
            defaultValue=""
            label={<div><strong>Work</strong> phone</div>}
            onChange={event => handleChange('personalInformationWorkPhone', _.get(event, 'target.value', event))}
          />
          <FormInput
            name="personalInformationWorkPhoneExt"
            type="text"
            value={values['personalInformationWorkPhoneExt']}
            defaultValue=""
            label={<div><strong>Work</strong> phone Ext</div>}
            onChange={event => handleChange('personalInformationWorkPhoneExt', _.get(event, 'target.value', event))}
          />
          <FormInput
            name="personalInformationEmail"
            type="text"
            value={values['personalInformationEmail']}
            defaultValue=""
            label={<strong>Email</strong>}
            onChange={event => handleChange('personalInformationEmail', _.get(event, 'target.value', event))}
          />
        </div>
      </div>
      <div className="row">
        <strong>Current Address</strong>
        <FormInput
          name="personalInformationCurrentAddressStreet"
          type="text"
          value={values['personalInformationCurrentAddressStreet']}
          defaultValue=""
          label="Street"
          onChange={event => handleChange('personalInformationCurrentAddressStreet', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationCurrentAddressUnit"
          type="text"
          value={values['personalInformationCurrentAddressUnit']}
          defaultValue=""
          label="Unit #"
          onChange={event => handleChange('personalInformationCurrentAddressUnit', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationCurrentAddressCity"
          type="text"
          value={values['personalInformationCurrentAddressCity']}
          defaultValue=""
          label="City"
          onChange={event => handleChange('personalInformationCurrentAddressCity', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationCurrentAddressState"
          type="text"
          value={values['personalInformationCurrentAddressState']}
          defaultValue=""
          label="State"
          onChange={event => handleChange('personalInformationCurrentAddressState', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationCurrentAddressZip"
          type="text"
          value={values['personalInformationCurrentAddressZip']}
          defaultValue=""
          label="Zip"
          onChange={event => handleChange('personalInformationCurrentAddressZip', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationCurrentAddressCounty"
          type="text"
          value={values['personalInformationCurrentAddressCounty']}
          defaultValue=""
          label="County"
          onChange={event => handleChange('personalInformationCurrentAddressCounty', _.get(event, 'target.value', event))}
        />
        <span>How Long at Current Address?</span>
        <FormInput
          name="personalInformationCurrentAddressHowLongYears"
          type="text"
          value={values['personalInformationCurrentAddressHowLongYears']}
          defaultValue=""
          label="Years"
          onChange={event => handleChange('personalInformationCurrentAddressHowLongYears', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationCurrentAddressHowLongMonths"
          type="text"
          value={values['personalInformationCurrentAddressHowLongMonths']}
          defaultValue=""
          label="Months"
          onChange={event => handleChange('personalInformationCurrentAddressHowLongMonths', _.get(event, 'target.value', event))}
        />
        <FormInput
          name="personalInformationHousing"
          type="radio"
          value={values['personalInformationHousing']}
          defaultValue=""
          label={<strong>Housing</strong>}
          values={[
            {value: 'noPrimaryHousingExpense', label: 'No Primary Housing Expense'},
            {value: 'own', label: 'Own'},
            {value: 'rent', label: 'Rent'},
          ]}
          onChange={event => handleChange('personalInformationHousing', _.get(event, 'target.value', event))}
        />
        {values['personalInformationHousing'] === 'rent' &&
          <FormInput
            name="personalInformationHousingRent"
            type="text"
            value={values['personalInformationHousingRent']}
            defaultValue=""
            label="Rent ($/month)"
            onChange={event => handleChange('personalInformationHousingRent', _.get(event, 'target.value', event))}
          />
        }
      </div>
      <div className="row">
        <FormInput
          name="personalInformationMilitary"
          type="radio"
          value={values['personalInformationMilitary']}
          defaultValue=""
          label={<div><strong>Military Service</strong> - Did you (or your deceased spouse) ever serve, or are you currently serving, in the United States rmed Forces?</div>}
          values={[
            {value: 'no', label: 'No'},
            {value: 'yes', label: 'Yes'},
          ]}
          onChange={event => handleChange('personalInformationMilitary', _.get(event, 'target.value', event))}
        />
        {values['personalInformationMilitary'] === 'yes' &&
          <div>
            <span>If YES, check all that apply</span>
            <FormInput
              name="personalInformationMilitaryCurrentlyServing"
              type="checkbox"
              value={values['personalInformationMilitaryCurrentlyServing']}
              defaultValue=""
              label="Currently Serving on acitve duty with projected expiration sate of service/tour"
              onChange={event => handleChange('personalInformationMilitaryCurrentlyServing', _.get(event, 'target.value', event))}
            />
            {values['personalInformationMilitaryCurrentlyServing'] &&
              <FormInput
                name="personalInformationMilitaryCurrentlyServingExpiration"
                type="text"
                value={values['personalInformationMilitaryCurrentlyServingExpiration']}
                defaultValue=""
                label="(mm/yyyy)"
                onChange={event => handleChange('personalInformationMilitaryCurrentlyServingExpiration', _.get(event, 'target.value', event))}
              />
            }
            <FormInput
              name="personalInformationMilitaryCurrentlyRetired"
              type="checkbox"
              value={values['personalInformationMilitaryCurrentlyRetired']}
              defaultValue=""
              label="Currently retired, discharged, or separated from service"
              onChange={event => handleChange('personalInformationMilitaryCurrentlyRetired', _.get(event, 'target.value', event))}
            />
            <FormInput
              name="personalInformationMilitaryReserve"
              type="checkbox"
              value={values['personalInformationMilitaryReserve']}
              defaultValue=""
              label="Only period of service was as a non-activated member of the Reserve or National Guard"
              onChange={event => handleChange('personalInformationMilitaryReserve', _.get(event, 'target.value', event))}
            />
            <FormInput
              name="personalInformationMilitarySurvivingSpouse"
              type="checkbox"
              value={values['personalInformationMilitarySurvivingSpouse']}
              defaultValue=""
              label="Surviving Spouse"
              onChange={event => handleChange('personalInformationMilitarySurvivingSpouse', _.get(event, 'target.value', event))}
            />
          </div>
        }
      </div>
      <div className="row">
        <p><strong>Language Preference - Your loan transaction is likely to be conducted in English.</strong> This question requests informaiton to see if communications are available to assist you in your preferred language. Please be aware that communications may NOT be available in your preferred language.</p>
        <FormInput
          name="personalInformationLanguage"
          type="radio"
          value={values['personalInformationLanguage']}
          defaultValue=""
          label="Optional - Mark the language you would prefer, if available: "
          values={[
            {value: 'english', label: 'English'},
            {value: 'chinese', label: 'Chinese'},
            {value: 'korean', label: 'Korean'},
            {value: 'spanish', label: 'Spanish'},
            {value: 'tagalog', label: 'Tabalog'},
            {value: 'other', label: 'Other'},
            {value: 'none', label: 'I do not wish to respond'},
          ]}
          onChange={event => handleChange('personalInformationLanguage', _.get(event, 'target.value', event))}
        />
        {values['personalInformationLanguage'] === 'other' &&
          <FormInput
            name="personalInformationLanguageOther"
            type="checkbox"
            value={values['personalInformationLanguageOther']}
            defaultValue=""
            label="Other language"
            onChange={event => handleChange('personalInformationLanguageOther', _.get(event, 'target.value', event))}
          />
        }
        <p>Your answer will NOT negatively affect you mortgage application. Your answer does not mean the Lender of Other Loan Participants agree to communications or provide documents in your preferred language. However, it may let them assist you or direct you to persons who can assist you.</p>
        <p>Language assistance and resources may be available through housing soundelling agencies approved by the U.S. Department of Housing and Urban Development. To find a housing counseling agency, contact one of the following Federal governemnt agencies:</p>
        <ul>
          <li>U.S. Department of Housing and Urban Development (HUD) at (800) 569-4287 or <a href="http://www.hud.gov/counseling">www.hud.gov/counseling</a></li>
          <li> Consumer Financial Protection Bureau (CFPB) at (855) 411-2372 or <a href="http://www.consumerfinance.gov/find-a-housing-counselor.">www.consumerfinance.gov/find-a-housing-counselor.</a></li>
        </ul>
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

  export const StaticTraditionalMortgageForm1a = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(StaticTraditionalMortgage);

  export default {
    StaticTraditionalMortgageForm1a,
  };

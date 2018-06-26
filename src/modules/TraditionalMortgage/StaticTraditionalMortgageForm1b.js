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
      <div className="flex-container">
        <div className="flex-col">
          <div className="flex-row">
            <div className="flex-col no-border">
              <span className="form-section-tab" style={{ width: '268px' }}>1b. Current Employment/Self Employment and Income</span>
            </div>
            <div className="flex-col">
              <FormInput
                name="currentEmploymentInformationDoesNotApply"
                type="checkbox"
                value={values['currentEmploymentInformationDoesNotApply']}
                defaultValue={true}
                label={<strong>Does Not Apply</strong>}
                onChange={event => handleChange('currentEmploymentInformationDoesNotApply', _.get(event, 'target.value', event))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-col">
          {!values['currentEmploymentInformationDoesNotApply'] &&
            <div className="flex-row">
              <div className="flex-col" style={{width: '79%'}}>
                <div className="flex-row">
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
                <div className="flex-row">
                  <div className="flex-col" style={{width: '59%'}}>
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
                  <div className="flex-col" style={{width: '40%'}}>
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
                <div className="flex-row">
                  <div className="flex-col" style={{width: '32%'}}>
                    <FormInput
                      name="currentEmploymentInformationSelfEmployed"
                      type="checkbox"
                      value={values['currentEmploymentInformationSelfEmployed']}
                      defaultValue=""
                      label={<strong>Check if you are the Business Owner or Self-Employed</strong>}
                      onChange={event => handleChange('currentEmploymentInformationSelfEmployed', _.get(event, 'target.value', event))}
                    />
                  </div>
                  <div className="flex-col" style={{width: '33%'}}>
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
                  <div className="flex-col" style={{width: '33%'}}>
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
              <div className="flex-col" style={{width: '20%'}}>
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
        </div>
      </div>

      <FormInput
        name="selfEmploymentInformationDoesNotApply"
        type="checkbox"
        value={values['selfEmploymentInformationDoesNotApply']}
        defaultValue={true}
        label={<strong>Does Not Apply</strong>}
        onChange={event => handleChange('selfEmploymentInformationDoesNotApply', _.get(event, 'target.value', event))}
      />
      <span className="form-section-tab">1c. IF APPLICABLE, Complete Information for Additional Emplyment/Self Employment and Income</span>
      {!values['selfEmploymentInformationDoesNotApply'] &&
        <div className="flex-row">
          <div className="flex-col" style={{width: '79%'}}>
            <div className="flex-row">
              <FormInput
                name="selfEmploymentInformationEmployerName"
                type="text"
                value={values['selfEmploymentInformationEmployerName']}
                defaultValue=""
                label={<strong>Employer or Business Name</strong>}
                onChange={event => handleChange('selfEmploymentInformationEmployerName', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="selfEmploymentInformationEmployerPhone"
                type="text"
                value={values['selfEmploymentInformationEmployerPhone']}
                defaultValue=""
                label="Phone"
                onChange={event => handleChange('selfEmploymentInformationEmployerPhone', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="selfEmploymentInformationEmployerStreet"
                type="text"
                value={values['selfEmploymentInformationEmployerStreet']}
                defaultValue=""
                label="Street"
                onChange={event => handleChange('selfEmploymentInformationEmployerStreet', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="selfEmploymentInformationEmployerCity"
                type="text"
                value={values['selfEmploymentInformationEmployerCity']}
                defaultValue=""
                label="City"
                onChange={event => handleChange('selfEmploymentInformationEmployerCity', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="selfEmploymentInformationEmployerState"
                type="text"
                value={values['selfEmploymentInformationEmployerState']}
                defaultValue=""
                label="State"
                onChange={event => handleChange('selfEmploymentInformationEmployerState', _.get(event, 'target.value', event))}
              />
              <FormInput
                name="selfEmploymentInformationEmployerZip"
                type="text"
                value={values['selfEmploymentInformationEmployerZip']}
                defaultValue=""
                label="Zip"
                onChange={event => handleChange('selfEmploymentInformationEmployerZip', _.get(event, 'target.value', event))}
              />
            </div>
            <div className="flex-row">
              <div className="flex-col" style={{width: '59%'}}>
                <FormInput
                  name="selfEmploymentInformationPosition"
                  type="text"
                  value={values['selfEmploymentInformationPosition']}
                  defaultValue=""
                  label={<strong>Position of Title</strong>}
                  onChange={event => handleChange('selfEmploymentInformationPosition', _.get(event, 'target.value', event))}
                />
                <FormInput
                  name="selfEmploymentInformationStartDate"
                  type="text"
                  value={values['selfEmploymentInformationStartDate']}
                  defaultValue=""
                  label={<strong>Start Date</strong>}
                  onChange={event => handleChange('selfEmploymentInformationStartDate', _.get(event, 'target.value', event))}
                />
                <span>(mm/yyyy)</span>
                <span>How long in this line of work</span>
                <FormInput
                  name="selfEmploymentInformationDurationYears"
                  type="text"
                  value={values['selfEmploymentInformationDurationYears']}
                  defaultValue=""
                  label="Years"
                  onChange={event => handleChange('selfEmploymentInformationDurationYears', _.get(event, 'target.value', event))}
                />
                <FormInput
                  name="selfEmploymentInformationDurationMonths"
                  type="text"
                  value={values['selfEmploymentInformationDurationMonths']}
                  defaultValue=""
                  label="Months"
                  onChange={event => handleChange('selfEmploymentInformationDurationMonths', _.get(event, 'target.value', event))}
                />
              </div>
              <div className="flex-col" style={{width: '40%'}}>
                <strong>Check if this statement applies: </strong>
                <FormInput
                  name="selfEmploymentInformationPartyToTransaction"
                  type="checkbox"
                  value={values['selfEmploymentInformationPartyToTransaction']}
                  defaultValue=""
                  label="I am employed bya  family member, property seller, real estate agent, or other party to the transaction"
                  onChange={event => handleChange('selfEmploymentInformationPartyToTransaction', _.get(event, 'target.value', event))}
                />
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-col" style={{width: '32%'}}>
                <FormInput
                  name="selfEmploymentInformationSelfEmployed"
                  type="checkbox"
                  value={values['selfEmploymentInformationSelfEmployed']}
                  defaultValue=""
                  label={<strong>Check if you are the Business Owner or Self-Employed</strong>}
                  onChange={event => handleChange('selfEmploymentInformationSelfEmployed', _.get(event, 'target.value', event))}
                />
              </div>
              <div className="flex-col" style={{width: '33%'}}>
                <FormInput
                  name="selfEmploymentInformationOwnershipShare"
                  type="radio"
                  value={values['selfEmploymentInformationOwnershipShare']}
                  defaultValue=""
                  label=""
                  onChange={event => handleChange('selfEmploymentInformationOwnershipShare', _.get(event, 'target.value', event))}
                  values={[
                    { value: 'lessThan25', label: 'I have an ownership share of less that 25%' },
                    { value: 'moreThan25', label: 'I have an ownership share of 25% or more' },
                  ]}
                />
              </div>
              <div className="flex-col" style={{width: '33%'}}>
                <FormInput
                  name="selfEmploymentInformationMonthlyIncome"
                  type="checkbox"
                  value={values['selfEmploymentInformationMonthlyIncome']}
                  defaultValue=""
                  label={<strong>Monthly Income (or Loss)</strong>}
                  onChange={event => handleChange('selfEmploymentInformationMonthlyIncome', _.get(event, 'target.value', event))}
                />
              </div>
            </div>
          </div>
          <div className="flex-col" style={{width: '20%'}}>
            <strong>Gross Monthly Income</strong>
            <FormInput
              name="selfEmploymentInformationBaseSalary"
              type="text"
              value={values['selfEmploymentInformationBaseSalary']}
              defaultValue=""
              label="Base"
              onChange={event => handleChange('selfEmploymentInformationBaseSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="selfEmploymentInformationOvertimeSalary"
              type="text"
              value={values['selfEmploymentInformationOvertimeSalary']}
              defaultValue=""
              label="Overtime"
              onChange={event => handleChange('selfEmploymentInformationOvertimeSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="selfEmploymentInformationBonusSalary"
              type="text"
              value={values['selfEmploymentInformationBonusSalary']}
              defaultValue=""
              label="Bonus"
              onChange={event => handleChange('selfEmploymentInformationBonusSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="selfEmploymentInformationCommissionSalary"
              type="text"
              value={values['selfEmploymentInformationCommissionSalary']}
              defaultValue=""
              label="Commission"
              onChange={event => handleChange('selfEmploymentInformationCommissionSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="selfEmploymentInformationMilitaryEntitlementsSalary"
              type="text"
              value={values['selfEmploymentInformationMilitaryEntitlementsSalary']}
              defaultValue=""
              label="Military Entitlements"
              onChange={event => handleChange('selfEmploymentInformationMilitaryEntitlementsSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="selfEmploymentInformationOtherSalary"
              type="text"
              value={values['selfEmploymentInformationOtherSalary']}
              defaultValue=""
              label="Other"
              onChange={event => handleChange('selfEmploymentInformationOtherSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
            <FormInput
              name="selfEmploymentInformationTotalSalary"
              type="text"
              value={values['selfEmploymentInformationTotalSalary']}
              defaultValue=""
              label="Total"
              onChange={event => handleChange('selfEmploymentInformationTotalSalary', _.get(event, 'target.value', event))}
            />
            <span>/month</span>
          </div>
        </div>
      }
      <FormInput
        name="previousEmplymentInformationDoesNotApply"
        type="checkbox"
        value={values['previousEmplymentInformationDoesNotApply']}
        defaultValue={true}
        label={<strong>Does Not Apply</strong>}
        onChange={event => handleChange('previousEmplymentInformationDoesNotApply', _.get(event, 'target.value', event))}
      />
      <span className="form-section-tab">1d. IF APPLICABLE, Complete Information for Previous Emplyment/Self Employment and Income</span>
      {!values['previousEmplymentInformationDoesNotApply'] &&
        <div className="flex-row">
          <div classname="flex-col">
            <div className="flex-row">Provide at least 2 years of current and previous employment and income</div>
            <div className="flex-row">
              <div className="flex-col" style={{width: '50%'}}>
                <div className="flex-row">
                  <FormInput
                    name="previousEmplymentInformationEmployerName"
                    type="text"
                    value={values['previousEmplymentInformationEmployerName']}
                    defaultValue=""
                    label={<strong>Employer or Business Name</strong>}
                    onChange={event => handleChange('previousEmplymentInformationEmployerName', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="previousEmplymentInformationEmployerStreet"
                    type="text"
                    value={values['previousEmplymentInformationEmployerStreet']}
                    defaultValue=""
                    label="Street"
                    onChange={event => handleChange('previousEmplymentInformationEmployerStreet', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="previousEmplymentInformationEmployerCity"
                    type="text"
                    value={values['previousEmplymentInformationEmployerCity']}
                    defaultValue=""
                    label="City"
                    onChange={event => handleChange('previousEmplymentInformationEmployerCity', _.get(event, 'target.value', event))}
                  />
                  <FormInput
                    name="previousEmplymentInformationEmployerState"
                    type="text"
                    value={values['previousEmplymentInformationEmployerState']}
                    defaultValue=""
                    label="State"
                    onChange={event => handleChange('previousEmplymentInformationEmployerState', _.get(event, 'target.value', event))}
                  />
                  <FormInput
                    name="previousEmplymentInformationEmployerZip"
                    type="text"
                    value={values['previousEmplymentInformationEmployerZip']}
                    defaultValue=""
                    label="Zip"
                    onChange={event => handleChange('previousEmplymentInformationEmployerZip', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                    <FormInput
                      name="previousEmplymentInformationPosition"
                      type="text"
                      value={values['previousEmplymentInformationPosition']}
                      defaultValue=""
                      label={<strong>Position of Title</strong>}
                      onChange={event => handleChange('previousEmplymentInformationPosition', _.get(event, 'target.value', event))}
                    />
                </div>
                <div className="flex-row">
                    <FormInput
                      name="previousEmplymentInformationStartDate"
                      type="text"
                      value={values['previousEmplymentInformationStartDate']}
                      defaultValue=""
                      label={<strong>Start Date</strong>}
                      onChange={event => handleChange('previousEmplymentInformationStartDate', _.get(event, 'target.value', event))}
                    />
                    <span>(mm/yyyy)</span>
                    <FormInput
                      name="previousEmplymentInformationEndDate"
                      type="text"
                      value={values['previousEmplymentInformationEndDate']}
                      defaultValue=""
                      label={<strong>Start Date</strong>}
                      onChange={event => handleChange('previousEmplymentInformationEndDate', _.get(event, 'target.value', event))}
                    />
                    <span>(mm/yyyy)</span>
                </div>
              </div>
              <div className="flex-col" style={{width: '25%'}}>
                <FormInput
                  name="previousEmplymentInformationSelfEmployed"
                  type="checkbox"
                  value={values['previousEmplymentInformationSelfEmployed']}
                  defaultValue=""
                  label={<strong>Check if you are the Business Owner or Self-Employed</strong>}
                  onChange={event => handleChange('previousEmplymentInformationSelfEmployed', _.get(event, 'target.value', event))}
                />
              </div>
              <div className="flex-col" style={{width: '25%'}}>
                <strong>Previous Gross Monthly Income</strong>
                <FormInput
                  name="previousEmplymentInformationTotalSalary"
                  type="text"
                  value={values['previousEmplymentInformationTotalSalary']}
                  defaultValue=""
                  label="Total"
                  onChange={event => handleChange('previousEmplymentInformationTotalSalary', _.get(event, 'target.value', event))}
                />
                <span>/month</span>
              </div>
            </div>
          </div>
        </div>
      }
      <FormInput
        name="incomeFromOtherSourcesDoesNotApply"
        type="checkbox"
        value={values['incomeFromOtherSourcesDoesNotApply']}
        defaultValue={true}
        label={<strong>Does Not Apply</strong>}
        onChange={event => handleChange('incomeFromOtherSourcesDoesNotApply', _.get(event, 'target.value', event))}
      />
      <span className="form-section-tab">1e. Income from Other Sources</span>
      {!values['incomeFromOtherSourcesDoesNotApply'] &&
        <div className="flex-row">
          <div className="flex-col">
            <div className="flex-row"><span><strong>Include income from other sources below. Under Income Source, choose from the sources listed here:</strong></span></div>
            <div className="flex-row">
              <div className="flex-col">
                <ul>
                  <li>Alimony</li>
                  <li>Automobile Allowance</li>
                  <li>Boarder Income</li>
                  <li>Capital Gains</li>
                </ul>
              </div>
              <div className="flex-col">
                <ul>
                  <li>Child Support</li>
                  <li>Disability</li>
                  <li>Foster Care</li>
                  <li>Housing or Parsonage</li>
                </ul>
              </div>
              <div className="flex-col">
                <ul>
                  <li>Interest and Dividends</li>
                  <li>Mortgage Credit Certificate</li>
                  <li>Mortgage Differential Payments</li>
                </ul>
              </div>
              <div className="flex-col">
                <ul>
                  <li>Notes Receivable</li>
                  <li>Public Assistance</li>
                  <li>Retirement (e.g. Pension, IRA)</li>
                </ul>
              </div>
              <div className="flex-col">
                <ul>
                  <li>Royalty Payments</li>
                  <li>Separate Maintenance</li>
                  <li>Social Security</li>
                  <li>Trust</li>
                </ul>
              </div>
              <div className="flex-col">
                <ul>
                  <li>Unemployment Benefits</li>
                  <li>VA Compensation</li>
                  <li>Other</li>
                </ul>
              </div>
            </div>
            <div className="flex-row"><span><strong>NOTE:</strong><i>Reveal alimony, child support, separate maintenace, or other income ONLY IF you want it considered in determining your qualification for this loan.</i></span></div>
            <div className="flex-row">
              <table>
                <tr>
                  <th width="85%"><strong>Income Source</strong> - <i>use list above</i></th>
                  <th width="15%"><strong>Monthly Income</strong></th>
                </tr>
                <tr>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesOneType"
                      type="text"
                      value={values['incomeFromOtherSourcesOneType']}
                      defaultValue=""
                      label=""
                      onChange={event => handleChange('incomeFromOtherSourcesOneType', _.get(event, 'target.value', event))}
                    />
                  </td>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesOneTotal"
                      type="text"
                      value={values['incomeFromOtherSourcesOneTotal']}
                      defaultValue=""
                      label="$"
                      onChange={event => handleChange('incomeFromOtherSourcesOneTotal', _.get(event, 'target.value', event))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesTwoType"
                      type="text"
                      value={values['incomeFromOtherSourcesTwoType']}
                      defaultValue=""
                      label=""
                      onChange={event => handleChange('incomeFromOtherSourcesTwoType', _.get(event, 'target.value', event))}
                    />
                  </td>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesTwoTotal"
                      type="text"
                      value={values['incomeFromOtherSourcesTwoTotal']}
                      defaultValue=""
                      label="$"
                      onChange={event => handleChange('incomeFromOtherSourcesTwoTotal', _.get(event, 'target.value', event))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesThreeType"
                      type="text"
                      value={values['incomeFromOtherSourcesThreeType']}
                      defaultValue=""
                      label=""
                      onChange={event => handleChange('incomeFromOtherSourcesThreeType', _.get(event, 'target.value', event))}
                    />
                  </td>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesThreeTotal"
                      type="text"
                      value={values['incomeFromOtherSourcesThreeTotal']}
                      defaultValue=""
                      label="$"
                      onChange={event => handleChange('incomeFromOtherSourcesThreeTotal', _.get(event, 'target.value', event))}
                    />
                  </td>
                </tr>
                <tr>
                  <td><strong>PreviousTOTAL Amount Here</strong></td>
                  <td>
                    <FormInput
                      name="incomeFromOtherSourcesTotal"
                      type="text"
                      value={values['incomeFromOtherSourcesTotal']}
                      defaultValue=""
                      label="$"
                      onChange={event => handleChange('incomeFromOtherSourcesTotal', _.get(event, 'target.value', event))}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      }
      <div className="flex-row">
        <div className="flex-col hvr-grow" style={{ width: "33%", margin: "0" }}>
          <ButtonMain
            label="Save"
            onClick={handleSubmit}
          />
        </div>
        <div className="flex-col hvr-grow" style={{ width: "33%", margin: "0" }}>
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
    mapPropsToValues: ({ formFields }) =>({
      currentEmploymentInformationDoesNotApply: false,
      selfEmploymentInformationDoesNotApply: false,
      previousEmplymentInformationDoesNotApply: false,
      incomeFromOtherSourcesDoesNotApply: false,
      ...reducePropsToValues(formFields),
    }),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(StaticTraditionalMortgage);

  export default {
    StaticTraditionalMortgageForm1b,
  };

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

const NewFormFive =
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
              <FormInput
                name="optOut"
                type="checkbox"
                value={values['optOut']}
                defaultValue=""
                label="I do not wish to provide this information"
                onChange={event => handleChange('optOut', _.get(event, 'target.value', event))}
              />
            </div>
            <div className="flex-row">
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row col-header">
                  <h2>What si your race?</h2>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="americanIndian"
                    type="checkbox"
                    value={values['americanIndian']}
                    defaultValue=""
                    label="American Indian or Alaska Native"
                    onChange={event => handleChange('americanIndian', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="enrolledTribe"
                    type="text"
                    value={values['enrolledTribe']}
                    defaultValue="Enter Enrolled or Principal Tribe"
                    label=""
                    onChange={event => handleChange('enrolledTribe', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="asian"
                    type="checkbox"
                    value={values['asian']}
                    defaultValue=""
                    label="Asian"
                    onChange={event => handleChange('asian', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="asianIndian"
                    type="checkbox"
                    value={values['asianIndian']}
                    defaultValue=""
                    label="Asian Indian"
                    onChange={event => handleChange('asianIndian', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="chinese"
                    type="checkbox"
                    value={values['chinese']}
                    defaultValue=""
                    label="Chinese"
                    onChange={event => handleChange('chinese', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="filipino"
                    type="checkbox"
                    value={values['filipino']}
                    defaultValue=""
                    label="Filipino"
                    onChange={event => handleChange('filipino', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="japanese"
                    type="checkbox"
                    value={values['japanese']}
                    defaultValue=""
                    label="Japanese"
                    onChange={event => handleChange('japanese', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="korean"
                    type="checkbox"
                    value={values['korean']}
                    defaultValue=""
                    label="Korean"
                    onChange={event => handleChange('korean', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="vietnamese"
                    type="checkbox"
                    value={values['vietnamese']}
                    defaultValue=""
                    label="Vietnamese"
                    onChange={event => handleChange('vietnamese', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="otherAsian"
                    type="checkbox"
                    value={values['otherAsian']}
                    defaultValue=""
                    label="Other Asian"
                    onChange={event => handleChange('otherAsian', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="otherAsianText"
                    type="text"
                    value={values['otherAsianText']}
                    defaultValue="Enter Other Asian Race(s)"
                    label=""
                    onChange={event => handleChange('otherAsianText', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="africanAmerican"
                    type="checkbox"
                    value={values['africanAmerican']}
                    defaultValue=""
                    label="Black or African American"
                    onChange={event => handleChange('africanAmerican', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="pacificIslander"
                    type="checkbox"
                    value={values['pacificIslander']}
                    defaultValue=""
                    label="Native Hawaiian or Other Pacific Islander"
                    onChange={event => handleChange('pacificIslander', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="hawaiian"
                    type="checkbox"
                    value={values['hawaiian']}
                    defaultValue=""
                    label="Native Hawaiian"
                    onChange={event => handleChange('hawaiian', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="guamanianChamorro"
                    type="checkbox"
                    value={values['guamanianChamorro']}
                    defaultValue=""
                    label="Guamanian or Chamorro"
                    onChange={event => handleChange('guamanianChamorro', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="samoan"
                    type="checkbox"
                    value={values['samoan']}
                    defaultValue=""
                    label="Samoan"
                    onChange={event => handleChange('samoan', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="otherPacificIslander"
                    type="checkbox"
                    value={values['otherPacificIslander']}
                    defaultValue=""
                    label="Other Pacific Islander"
                    onChange={event => handleChange('otherPacificIslander', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="otherPacificIslanderText"
                    type="text"
                    value={values['otherPacificIslanderText']}
                    defaultValue="Enter Other Pacific Islander Race(s)"
                    label=""
                    onChange={event => handleChange('otherPacificIslanderText', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="white"
                    type="checkbox"
                    value={values['white']}
                    defaultValue=""
                    label="White"
                    onChange={event => handleChange('white', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="optOutRace"
                    type="checkbox"
                    value={values['optOutRace']}
                    defaultValue=""
                    label="I do not wish to provide this information"
                    onChange={event => handleChange('optOutRace', _.get(event, 'target.value', event))}
                  />
                </div>
              </div>
              <div className="flex-col no-border" style={{ width: '50%' }}>
                <div className="flex-row col-header">
                  <h2>What is your ethnicity?</h2>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="hispanic"
                    type="checkbox"
                    value={values['hispanic']}
                    defaultValue=""
                    label="Hispanic or Latino"
                    onChange={event => handleChange('hispanic', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="mexican"
                    type="checkbox"
                    value={values['mexican']}
                    defaultValue=""
                    label="Mexican"
                    onChange={event => handleChange('mexican', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="puertoRican"
                    type="checkbox"
                    value={values['puertoRican']}
                    defaultValue=""
                    label="Puerto Rican"
                    onChange={event => handleChange('puertoRican', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="cuban"
                    type="checkbox"
                    value={values['cuban']}
                    defaultValue=""
                    label="Cuban"
                    onChange={event => handleChange('cuban', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="otherHispanic"
                    type="checkbox"
                    value={values['otherHispanic']}
                    defaultValue=""
                    label="Other Hispanic"
                    onChange={event => handleChange('otherHispanic', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row row-indent">
                  <FormInput
                    name="otherHispanicText"
                    type="text"
                    value={values['otherHispanicText']}
                    defaultValue="Enter Other Hispanic or Latino Ethnicities"
                    label=""
                    onChange={event => handleChange('otherHispanicText', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="notHispanic"
                    type="checkbox"
                    value={values['notHispanic']}
                    defaultValue=""
                    label="Not Hispanic or Latino"
                    onChange={event => handleChange('notHispanic', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="optOutHispanic"
                    type="checkbox"
                    value={values['optOutHispanic']}
                    defaultValue=""
                    label="I do not wish to provide this information"
                    onChange={event => handleChange('optOutHispanic', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row col-header">
                  <h2>What is your sex?</h2>
                </div>
                <div className="flex-row">
                  <FormInput
                    name="male"
                    type="checkbox"
                    value={values['male']}
                    defaultValue=""
                    label="Male"
                    onChange={event => handleChange('male', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="female"
                    type="checkbox"
                    value={values['female']}
                    defaultValue=""
                    label="Female"
                    onChange={event => handleChange('female', _.get(event, 'target.value', event))}
                  />
                </div>
                <div className="flex-row">
                  <FormInput
                    name="optOutSex"
                    type="checkbox"
                    value={values['optOutSex']}
                    defaultValue=""
                    label="I do not wish to provide this information"
                    onChange={event => handleChange('optOutSex', _.get(event, 'target.value', event))}
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

    NewFormFive.propTypes = {
      values: shape({}).isRequired,
      touched: shape({}).isRequired,
      errors: shape({}).isRequired,
      setFieldValue: func.isRequired,
      handleSubmit: func.isRequired,
      history: shape({}).isRequired,
      formFields: shape({}).isRequired
    }
  }

  export const NewForm5 = withFormik({
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    mapPropsToValues: ({ formFields }) => reducePropsToValues(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      const newPaylod = reduceValuesToPayload(props.formFields, payload);
      props.onSuccess(newPayload);
    },
  })(NewFormFive);

  export default {
    NewForm5,
  };

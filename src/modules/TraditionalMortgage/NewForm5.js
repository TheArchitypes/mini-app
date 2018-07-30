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
                  <h2>What is your race?</h2>
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

  const validationSchema = () => ({
      optOut: Yup.boolean,
      americanIndian: Yup.boolean,
      enrolledTribe: Yup.string(),
      asian: Yup.boolean,
      asianIndian: Yup.boolean,
      chinese: Yup.boolean,
      filipino: Yup.boolean,
      japanese: Yup.boolean,
      korean: Yup.boolean,
      vietnamese: Yup.boolean,
      otherAsian: Yup.boolean,
      otherAsianText: Yup.string(),
      africanAmerican: Yup.boolean,
      pacificIslander: Yup.boolean,
      hawaiian: Yup.boolean,
      guamanianChamorro: Yup.boolean,
      samoan: Yup.boolean,
      otherPacificIslander: Yup.boolean,
      otherPacificIslanderText: Yup.string(),
      white: Yup.boolean,
      optOutRace: Yup.boolean,
      hispanic: Yup.boolean,
      mexican: Yup.boolean,
      puertoRican: Yup.boolean,
      cuban: Yup.boolean,
      otherHispanic: Yup.boolean,
      otherHispanicText: Yup.string(),
      notHispanic: Yup.boolean,
      optOutHispanic: Yup.boolean,
      male: Yup.boolean,
      female: Yup.boolean,
      optOutSex: Yup.boolean,
    });

  export const NewForm5 = withFormik({
    mapPropsToValues: props => ({
      optOut: _.get(props.fileName, 'optOut', false),
      americanIndian: _.get(props.fileName, 'americanIndian', false),
      enrolledTribe: _.get(props.fileName, 'enrolledTribe', ''),
      asian: _.get(props.fileName, 'asian', false),
      asianIndian: _.get(props.fileName, 'asianIndian', false),
      chinese: _.get(props.fileName, 'chinese', false),
      filipino: _.get(props.fileName, 'filipino', false),
      japanese: _.get(props.fileName, 'japanese', false),
      korean: _.get(props.fileName, 'korean', false),
      vietnamese: _.get(props.fileName, 'vietnamese', false),
      otherAsian: _.get(props.fileName, 'otherAsian', false),
      otherAsianText: _.get(props.fileName, 'otherAsianText', ''),
      africanAmerican: _.get(props.fileName, 'africanAmerican', false),
      pacificIslander: _.get(props.fileName, 'pacificIslander', false),
      hawaiian: _.get(props.fileName, 'hawaiian', false),
      guamanianChamorro: _.get(props.fileName, 'guamanianChamorro', false),
      samoan: _.get(props.fileName, 'samoan', false),
      otherPacificIslander: _.get(props.fileName, 'otherPacificIslander', false),
      otherPacificIslanderText: _.get(props.fileName, 'otherPacificIslanderText', ''),
      white: _.get(props.fileName, 'white', false),
      optOutRace: _.get(props.fileName, 'optOutRace', false),
      hispanic: _.get(props.fileName, 'hispanic', false),
      mexican: _.get(props.fileName, 'mexican', false),
      puertoRican: _.get(props.fileName, 'puertoRican', false),
      cuban: _.get(props.fileName, 'cuban', false),
      otherHispanic: _.get(props.fileName, 'otherHispanic', false),
      otherHispanicText: _.get(props.fileName, 'otherHispanicText', ''),
      notHispanic: _.get(props.fileName, 'notHispanic', false),
      optOutHispanic: _.get(props.fileName, 'optOutHispanic', false),
      male: _.get(props.fileName, 'male', false),
      female: _.get(props.fileName, 'female', false),
      optOutSex: _.get(props.fileName, 'optOutSex', false),
    }),
    validationSchema: ({ formFields }) => reducePropsToValidation(formFields),
    handleSubmit: (payload, { props, setSubmitting }) => {
      setSubmitting(false);
      props.onSuccess(newPayload);
    },
  })(NewFormFive);

  export default {
    NewForm5,
  };

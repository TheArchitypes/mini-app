import Yup from 'yup';
import _ from 'lodash';

export const reducePropsToValues = (formFields) => {
  return _.reduce(formFields, (fieldAcc, fieldObj, fieldKey) => ({
    ...fieldAcc,
    [fieldKey]: fieldObj.value,
  }), {});
}

export const reducePropsToValidation = (formFields) => {
  const newValidation = _.reduce(props.formFields, (fieldAcc, fieldObj, fieldKey) => ({
    ...fieldAcc,
    [fieldKey]: Yup.string(),
  }), {});
  return Yup.object().shape({
    ...newValidation,
  });
}

export const reduceValuesToPayload = (formFields, payload) => {
  return _.reduce(formFields, (fieldAcc, fieldObj, fieldKey) => ({
    ...fieldAcc,
    [fieldKey]: payload[fieldKey],
  }), {});
}

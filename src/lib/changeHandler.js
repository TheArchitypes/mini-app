import sleep from './sleep';

export const changeHandler = ({ setFieldValue, setFieldTouched }) => name => (value) => {
  setFieldValue(name, value);
  return sleep(1).then(() => setFieldTouched(name, true));
};

export default changeHandler;

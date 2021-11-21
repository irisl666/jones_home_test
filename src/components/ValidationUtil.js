import { INVALID_INPUT, FIELD_REQUIRED, INVALID_LENGTH } from '../constants/ErrorMessages';
let ValidationUtil;
let errors = {};

const validate = (name, value, regex, condition) => {
  if (!value.trim()) {
    errors[name] = FIELD_REQUIRED;
  }
  else if (regex && !checkRegex(regex, value.trim())) {
    errors[name] = INVALID_INPUT;
  }
  else if (condition !== undefined && !condition) {
    errors[name] = INVALID_LENGTH;
  }
  else {
    delete errors[name];
  }
  return errors;
}

const checkRegex = (regex, value) => {
  return regex.test(value);
}

export default ValidationUtil = {
  validate: (name, value, regex, condition) => validate(name, value, regex, condition),
};

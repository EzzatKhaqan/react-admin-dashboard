export const ValidationRoules = {
  required: (val) => (val ? true : 'Feild is Required!'),
  min: (min) => (value) => {
    return value > min ? true : `Minimum is ${min}`;
  },
  max: (max) => (value) => {
    return value < max ? true : `Maximum is ${max}`;
  },
  minLength:
    (min) =>
    (value = '') => {
      return value.length >= min ? true : `Minimum length is  ${min}`;
    },
  maxLength:
    (max) =>
    (value = '') => {
      return value.length <= max ? true : `Maximum Length is ${max}`;
    },
  number: (value) => (/^\d+$/.test(value) ? true : 'Only number accepted'),
  positiveNumber: (value) => (/^[1-9][0-9]*$/.test(value) ? true : 'Only positive number accepted'),
  floatNumber: (value) =>
    /^-?\d+(\.\d+)?$/.test(value) ? true : 'Only floating point number accepted',
  email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : 'Email is not valid'),
};

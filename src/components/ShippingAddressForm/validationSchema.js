import * as Yup from 'yup';

const schemas = {
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  streetAddress: Yup.string().required('This field is required'),
  postalCode: Yup.string().required('This field is required'),
  state: Yup.string().required('This field is required'),
  city: Yup.string().required('This field is required'),
  country: Yup.string().required('This field is required')
};

export default {
  firstName: value => {
    const schema = schemas.firstName;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  lastName: value => {
    const schema = schemas.lastName;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  streetAddress: value => {
    const schema = schemas.streetAddress;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  postalCode: value => {
    const schema = schemas.postalCode;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  state: value => {
    const schema = schemas.postalCode;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  city: value => {
    const schema = schemas.postalCode;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  country: value => {
    const schema = schemas.postalCode;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  }
};

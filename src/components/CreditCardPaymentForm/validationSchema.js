import * as Yup from 'yup';

import { regex } from '../../utils';

const schemas = {
  ccn: Yup.string()
    .matches(regex.getCcnRegex({ exact: true }), 'Wrong number')
    .required('This field is required'),
  cvv: Yup.string()
    .test('is-not-111', 'Wrong 111', value => value !== '111')
    .matches(/^[0-9]{3,4}$/, 'Wrong cvv')
    .required('This field is required'),
  month: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, 'Wrong month')
    .required('This field is required'),
  year: Yup.string()
    .matches(/^([0-9]{4}|[0-9]{2})$/, 'Wrong year')
    .required('This field is required')
};

export default {
  ccn: value => {
    const schema = schemas.ccn;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  cvv: value => {
    const schema = schemas.cvv;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  month: value => {
    const schema = schemas.month;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  year: value => {
    const schema = schemas.year;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  }
};

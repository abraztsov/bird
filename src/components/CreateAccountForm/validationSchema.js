import * as Yup from 'yup';

export default {
  email: value => {
    const schema = Yup.string()
      .email('Invalid email')
      .required('This field is required');
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  },
  password: value => {
    const schema = Yup.string()
      .min(10, 'Too Short!')
      .required('This field is required');
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  }
};

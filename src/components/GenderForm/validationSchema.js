import * as Yup from 'yup';

const schemas = {
  gender: Yup.string().required('This field is required')
};

export default {
  gender: value => {
    const schema = schemas.gender;
    const result = schema.validateSync(value);
    return value === result ? undefined : result;
  }
};

import React from 'react';
import cn from 'classnames';
import s from './FormInput.module.css';

const FormInput = ({
  field,
  form: { touched, errors },
  type,
  className,
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];
  const classes = cn(s.root, className, {
    [s.error]: isError
  });
  const errorMessage = errors[field.name] && errors[field.name].message;
  const { placeholder } = props;
  return (
    <div className={classes}>
      <input type={type} {...field} {...props} />
      <span className={s.label}>{placeholder}</span>
      {!isError &&
        field.value &&
        field.value.length > 0 && <span className={s.filledMark}>✓</span>}
      {isError && <div className={s.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
export default FormInput;

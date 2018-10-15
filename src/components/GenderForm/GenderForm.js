import React from 'react';
import { Field } from 'formik';
import cn from 'classnames';

import pickedImg from '../../media/images/picked.png';
import notPickedImg from '../../media/images/not-picked.png';
import validate from './validationSchema';
import s from './GenderForm.module.css';

const GenderForm = ({ className }) => (
  <div className={cn('Form', className)}>
    <h3 className="Form-title">Choose your subscription type</h3>
    <Field validate={validate.gender} name="gender">
      {({ field, form }) => {
        return (
          <div className={s.inputsGroup}>
            <div className={s.inputs}>
              <label>
                <input
                  {...field}
                  name="gender"
                  type="radio"
                  value="male"
                  // checked={field.value === 'male'}
                />
                <img src={pickedImg} alt="" />
                <p>For women</p>
              </label>
              <label>
                <input
                  {...field}
                  name="gender"
                  type="radio"
                  value="female"
                  // checked={field.values.thing === 'female'}
                />
                <img src={notPickedImg} alt="" />
                <p>For men</p>
              </label>
            </div>
            {form.touched['gender'] &&
              form.errors['gender'] && (
              <p className="Form-error">
                {form.errors['gender'] && form.errors['gender'].message}
              </p>
            )}
          </div>
        );
      }}
    </Field>
  </div>
);

export default GenderForm;

import React from 'react';
import { Field } from 'formik';
import cn from 'classnames';
import { Row, Col } from 'react-simple-flex-grid';

import FormInput from '../ui/FormInput';
import validate from './validationSchema';

const CreateAccountForm = ({ className }) => (
  <div className={cn('Form', className)}>
    <h3 className="Form-title">Create Account</h3>
    <Row gutter={20}>
      <Col md={6} sm={12} xs={12}>
        <Field
          name="email"
          type="email"
          placeholder="Email address"
          component={FormInput}
          validate={validate.email}
        />
      </Col>
      <Col md={6} sm={12} xs={12}>
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={FormInput}
          validate={validate.password}
        />
      </Col>
    </Row>
  </div>
);

export default CreateAccountForm;

import React, { PureComponent } from 'react';
import { Field } from 'formik';
import { Row, Col } from 'react-simple-flex-grid';
import cn from 'classnames';

import FormInput from '../ui/FormInput';
import s from './CreditCardPaymentForm.module.css';
import secureImg from '../../media/images/page-1-copy.png';
import ccsImg from '../../media/images/icon-cc-all.png';
import validate from './validationSchema';

class CreditCardPaymentForm extends PureComponent {
  render() {
    return (
      <div className="Form">
        <h3 className="Form-title">Secure credit card payment</h3>
        <div className={s.formWrapper}>
          <Row gutter={20} justify="space-between" align="middle">
            <Col md={8} sm={12} xs={12}>
              <div className={cn(s.secureWrapper, 'Form-field')}>
                <img src={secureImg} alt="" />
                <span>128-BIT ENCRYPTION. YOU’RE SAFE</span>
              </div>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className={cn(s.ccsWrapper, 'Form-field')}>
                <img src={ccsImg} alt="" />
              </div>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col md={8} sm={12} xs={12}>
              <Field
                className="Form-field"
                name="ccn"
                type="text"
                placeholder="Credit card number"
                component={FormInput}
                validate={validate.ccn}
              />
            </Col>
            <Col md={4} sm={{ span: 0 }} xs={{ span: 0 }}>
              <div className={s.cvvWrapper}>
                <Field
                  className="Form-field"
                  name="cvv"
                  type="text"
                  placeholder="Security code"
                  component={FormInput}
                  validate={validate.cvv}
                />
                <div className={cn(s.question, 'Form-field')}>?</div>
              </div>
            </Col>
          </Row>
          <Row gutter={20} align="middle">
            <Col md={3} sm={6} xs={6}>
              <Field
                className="Form-field"
                name="month"
                type="text"
                placeholder="Month"
                component={FormInput}
                validate={validate.month}
              />
            </Col>
            <Col md={3} sm={6} xs={6}>
              <Field
                className="Form-field"
                name="year"
                type="text"
                placeholder="Year"
                component={FormInput}
                validate={validate.year}
              />
            </Col>
            <Col md={3} sm={{ span: 0 }} xs={{ span: 0 }}>
              <p className={cn(s.expire, 'Form-field')}>Exp.</p>
            </Col>
          </Row>
          <Row gutter={20} align="middle">
            <Col
              xl={{ span: 0 }}
              lg={{ span: 0 }}
              md={{ span: 0 }}
              sm={7}
              xs={7}
            >
              <Field
                className="Form-field"
                name="cvv"
                type="text"
                placeholder="Security code"
                component={FormInput}
                validate={validate.cvv}
              />
            </Col>
            <Col
              xl={{ span: 0 }}
              lg={{ span: 0 }}
              md={{ span: 0 }}
              sm={5}
              xs={5}
            >
              <div className="Form-field">?</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CreditCardPaymentForm;

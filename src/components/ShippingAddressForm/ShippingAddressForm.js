import React, { PureComponent } from 'react';
import { Field } from 'formik';
import { Row, Col } from 'react-simple-flex-grid';
import cn from 'classnames';

import FormInput from '../ui/FormInput';
import validate from './validationSchema';
import s from './ShippingAddressForm.module.css';

class ShippingAddressForm extends PureComponent {
  state = { useAddressAsBilling: true };
  handleUseAsBillingAddressChange = () =>
    this.setState({ useAddressAsBilling: !this.state.useAddressAsBilling });
  render() {
    const { className } = this.props;
    const { useAddressAsBilling } = this.state;
    return (
      <div className={cn('Form', className)}>
        <h3 className="Form-title">Shipping address</h3>
        <Row gutter={20}>
          <Col md={6} sm={12} xs={12}>
            <Field
              className="Form-field"
              name="firstName"
              type="text"
              placeholder="First name"
              component={FormInput}
              validate={validate.firstName}
            />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Field
              className="Form-field"
              name="lastName"
              type="text"
              placeholder="Last name"
              component={FormInput}
              validate={validate.lastName}
            />
          </Col>
        </Row>
        {!useAddressAsBilling && (
          <>
            <Row gutter={20}>
              <Col md={9} sm={12} xs={12}>
                <Field
                  className="Form-field"
                  name="streetAddress"
                  // type="text"
                  placeholder="Street address"
                  component={FormInput}
                  validate={validate.streetAddress}
                />
              </Col>
              <Col md={3} sm={12} xs={12}>
                <Field
                  className="Form-field"
                  name="aptSuite"
                  type="text"
                  placeholder="Apt/Suite (Optional)"
                  component={FormInput}
                />
              </Col>
            </Row>
            <Row gutter={20}>
              <Col md={4} sm={12} xs={12}>
                <Field
                  className="Form-field"
                  name="postalCode"
                  type="text"
                  placeholder="Postal code"
                  component={FormInput}
                  validate={validate.postalCode}
                />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <Field
                  className="Form-field"
                  name="city"
                  type="text"
                  placeholder="City"
                  component={FormInput}
                  validate={validate.city}
                />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <Field
                  className="Form-field"
                  name="state"
                  type="text"
                  placeholder="State"
                  component={FormInput}
                  validate={validate.state}
                />
              </Col>
            </Row>
            <Row gutter={20}>
              <Col sm={12} xs={12}>
                <Field
                  className="Form-field"
                  name="country"
                  type="text"
                  placeholder="Country"
                  component={FormInput}
                  validate={validate.country}
                />
              </Col>
            </Row>
          </>
        )}
        <Row gutter={20} align="middle">
          <Col md={6} sm={12} xs={12}>
            <Field
              className="Form-field"
              name="phone"
              type="text"
              placeholder="Mobile number (Optional)"
              component={FormInput}
            />
          </Col>
          <Col md={6} sm={{ span: 0 }} xs={{ span: 0 }} className="Form-field">
            <p>We may send you special discounts and offers</p>
          </Col>
        </Row>
        <Row gutter={20} align="middle">
          <Col span={12}>
            <label className={cn(s.billingAddressCheckbox, 'Form-checkbox')}>
              <input
                type="checkbox"
                onChange={this.handleUseAsBillingAddressChange}
                checked={useAddressAsBilling}
              />
              <span />
              <p>Use this address as my billing address</p>
            </label>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShippingAddressForm;

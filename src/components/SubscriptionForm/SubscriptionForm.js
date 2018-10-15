import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';

import CreateAccountForm from '../CreateAccountForm';
import ShippingAddressForm from '../ShippingAddressForm';
import CreditCardPaymentForm from '../CreditCardPaymentForm';
import GenderForm from '../GenderForm';
import s from './SubscriptionForm.module.css';
import { setSubscriptionForm } from '../../actions/subscriptionForm';
import { SMALL_SCREEN_WIDTH } from '../../constants';

class SubscriptionForm extends Component {
  constructor() {
    super();
    this.state = {
      isSmallScreen: false
    };
    this.handleResize = throttle(this.handleResize, 500);
  }

  componentDidMount() {
    this.setIsSmallScreen();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setIsSmallScreen();
  };

  setIsSmallScreen = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const { isSmallScreen } = this.state;

    if (width < SMALL_SCREEN_WIDTH && !isSmallScreen) {
      this.setState({ isSmallScreen: true });
    } else if (width >= SMALL_SCREEN_WIDTH && isSmallScreen) {
      this.setState({ isSmallScreen: false });
    }
  };

  render() {
    const { setSubscriptionForm } = this.props;
    const { isSmallScreen } = this.state;
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          state: '',
          city: '',
          streetAddress: '',
          postalCode: '',
          country: '',
          phone: '',
          aptSuite: '',
          ccn: '',
          cvv: '',
          year: '',
          month: '',
          gender: ''
        }}
        onSubmit={values => {
          console.log(values);
          setSubscriptionForm(values);
        }}
        validateOnChange={false}
        render={() => {
          return (
            <Form>
              {!isSmallScreen && <CreateAccountForm />}
              {isSmallScreen && <GenderForm />}
              <ShippingAddressForm className={s.ShippingAddressForm} />
              <CreditCardPaymentForm />
              <div className={s.btnsGroup}>
                <div className={s.btnBack}>
                  <u>Back</u>
                </div>
                <button type="submit">
                  BUY NOW <span>→</span>
                </button>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

const mapDispatchToProps = {
  setSubscriptionForm
};
export default connect(
  null,
  mapDispatchToProps
)(SubscriptionForm);

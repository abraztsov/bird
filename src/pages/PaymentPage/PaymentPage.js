import React, { PureComponent } from 'react';
import cn from 'classnames';

import SubscriptionForm from '../../components/SubscriptionForm';
import CheckoutSummary from '../../components/CheckoutSummary';
import Info from './Info';

import s from './PaymentPage.module.css';

const Header = ({ title, className }) => (
  <div className={cn(s.header, className)}>
    <h1>{title}</h1>
    <p className="textLg pinkText">
      Billed monthly. Renews automatically, cancel any time. Free shipping.
    </p>
  </div>
);

class PaymentPage extends PureComponent {
  render() {
    return (
      <div className={s.root}>
        <Header title="MONTHLY SUBSCRIPTION" className={s.visibleOnSmScreen} />
        <div className={s.checkoutAndInfoBlock}>
          <CheckoutSummary className={s.CheckoutSummary} />
          <Info className={s.visibleOnLgScreen} />
        </div>
        <div className={s.formBlock}>
          <Header
            title="MONTH-TO-MONTH SUBSCRIPTION"
            className={s.visibleOnLgScreen}
          />
          <SubscriptionForm />
        </div>
        <Info className={s.visibleOnSmScreen} />
      </div>
    );
  }
}

export default PaymentPage;

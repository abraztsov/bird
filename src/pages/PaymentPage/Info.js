import React from 'react';
import infoImg from '../../media/images/page-1.png';
import cn from 'classnames';
import s from './PaymentPage.module.css';

const Info = ({ className }) => (
  <div className={cn(s.Info, className)}>
    <img src={infoImg} alt="" />
    <p>
      You will receive an email confirmation when recipient accepts your gift.
      Scentbird ships between the 15th and the 18th of every month. Recipient
      will receive an email confirmation of shipment every month. Please allow
      5-7 days for delivery.
    </p>
  </div>
);

export default Info;

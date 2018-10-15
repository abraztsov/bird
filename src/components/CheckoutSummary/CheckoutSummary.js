import React from 'react';
import cn from 'classnames';

import s from './CheckoutSummary.module.css';
import productImg from '../../media/images/free-perfume-product.png';

const CheckoutSummary = ({ className }) => (
  <div className={cn(s.root, className)}>
    <div className={s.productImgWrapper}>
      <img src={productImg} alt="" />
    </div>
    <hr />
    <div className={s.itemsWrapper}>
      <div className={s.item}>
        <p>Monthly subscription</p>
        <p>$14.95</p>
      </div>
      <div className={s.item}>
        <p>Shipping</p>
        <p>FREE</p>
      </div>
      <div className={s.item}>
        <p>Tax</p>
        <p>$2.35</p>
      </div>
      <div className={s.item}>
        <p>Discount</p>
        <p className="pinkText">-$5</p>
      </div>
      <div className={s.item}>
        <p>Credit (Balance $100)</p>
        <p className={s.credit}>
          $50{' '}
          <label className="Form-checkbox Form-checkbox-ghost">
            <input type="checkbox" checked onChange={() => {}} />
            <span />
          </label>
        </p>
      </div>
    </div>
    <hr />
    <div className={s.itemsWrapper}>
      <div className={cn(s.item, 'textLg')}>
        <p>TOTAL</p>
        <p> $25.00</p>
      </div>
    </div>
    <p className={s.couponCode}>
      Have a <span className="pinkText textLg">coupon code</span>?
    </p>
  </div>
);

export default CheckoutSummary;

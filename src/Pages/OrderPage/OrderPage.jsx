import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import * as styles from './OrderPage.module.scss';
import Payment from '../../components/Order/Payment/Payment';
import Mail from '../../components/Order/Mail/Mail';
import Address from '../../components/Order/Address/Address';

const Order = () => {
  const [step, setStep] = useState('1');

  return (
    <>
      <header>
        <Logo />
        <h2>Оформление заказа</h2>
      </header>
      <div className={styles.steps}>
        <p className={step === '1' ? styles.active : ''}>1</p>
        <p className={step === '2' ? styles.active : ''}>2</p>
        <p className={step === '3' ? styles.active : ''}>3</p>
      </div>
      <div className={styles.container}>
        {step === '1' && <Mail setStep={setStep} />}
        {step === '2' && <Address setStep={setStep} />}
        {step === '3' && <Payment setStep={setStep} />}
      </div>
    </>
  );
};

export default Order;

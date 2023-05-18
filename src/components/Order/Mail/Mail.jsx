import { Formik } from 'formik';
import React from 'react';
import * as styles from './Mail.module.scss';

const Mail = ({ setStep }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setStep('2');
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: '', number: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Обязательное поле';
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Введите верную электронную почту';
          }
          if (!values.number) {
            errors.number = 'Обязательное поле';
          }
          if (
            !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i.test(
              values.number,
            )
          ) {
            errors.number = 'Введите верный номер телефона';
          }
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email}
            <input
              type="number"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
            {touched.number && errors.number}
            <button type="submit" disabled={isSubmitting} onClick={handleClick}>
              Следующий шаг
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Mail;

import { Formik } from 'formik';
import React from 'react';

const Address = ({ setStep }) => {
  const handleClick = () => setStep('3');
  return (
    <div>
      <Formik initialValues={{ address: '' }}>
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
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Address;

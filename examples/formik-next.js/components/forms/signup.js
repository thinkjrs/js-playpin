import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
const SignupForm = () => {

  return (
    <div>
      <label htmlFor="password"></label>
      <Field name="password" placeholder="Choose a password" type="text" />
      <ErrorMessage name="password" />
    </div>
  );
};

export default SignupForm;
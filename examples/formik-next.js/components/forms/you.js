import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
const YouForm = () => {
  return (
    <div>
      <Field name="artistName" placeholder="Artist/Band name" type="text" />
      <ErrorMessage name="artistName" />
      <Field name="firstName" placeholder="Your first name" type="text" />
      <ErrorMessage name="firstName" />
      <Field name="lastName" placeholder="Your last name" type="text" />
      <ErrorMessage name="lastName" />
    </div>
  );
};

export default YouForm;
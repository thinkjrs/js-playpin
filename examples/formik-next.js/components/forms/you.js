import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function YouInfo() {
  return (
    <div>
      <label htmlFor="artistName" />
      <Field name="artistName" placeholder="Artist/Band name" type="text" />
      <ErrorMessage name="artistName" />
      <label htmlFor="firstName" />
      <Field name="firstName" placeholder="Your first name" type="text" />
      <ErrorMessage name="firstName" />
      <label htmlFor="lastName" />
      <Field name="lastName" placeholder="Your last name" type="text" />
      <ErrorMessage name="lastName" />
    </div>
  );
};

export default YouInfo;
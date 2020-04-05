import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function StartInfo() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <div>
      <label htmlFor="email" />
      <Field name="email" placeholder="Your email" type="text" />
      <ErrorMessage name="email" />
    </div>
  );
};

export default StartInfo;
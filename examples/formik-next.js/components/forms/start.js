import React from 'react';
import Link from 'next/link';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
export default StartForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  return (
    <div>
      <Field name="email" placeholder="Your email" type="text" />
      <ErrorMessage name="email" />
    </div>
  );
};

export default StartForm;
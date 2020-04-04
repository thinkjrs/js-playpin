import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
const MerchForm = () => {
  return (
    <div>
      <Field name="merchDollars" placeholder="" type="text" />
      <ErrorMessage name="merchDollars" />
    </div>
  );
};

export default MerchForm;
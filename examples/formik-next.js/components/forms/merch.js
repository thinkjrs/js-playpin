import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function MerchInfo() {
  return (
    <div>
      <label htmlFor="merchDollars" />
      <Field name="merchDollars" placeholder="Merch sales per show" type="text" />
      <ErrorMessage name="merchDollars" />
    </div>
  );
};

export default MerchInfo;
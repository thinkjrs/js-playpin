import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function StartInfo() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <div className="flex flex-col mb-4">
      <div className="col-span-3 py-2">
        <Field name="email" className="border py-1 px-3 text-grey-darkest bg-gray-200"  placeholder="Your email" type="text" />
        <ErrorMessage name="email" />
      </div>
    </div>
  );
};

export default StartInfo;
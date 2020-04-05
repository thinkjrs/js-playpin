import React from 'react';
import Link from 'next/link';
import { Field, ErrorMessage } from 'formik';
import setImmediate from 'setimmediate';


// A boilerplate, custom signup with Formik
function StartInfo() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  var _setImmediate = setImmediate;
  process.once('loaded', function() {
    global.setImmediate = _setImmediate;
  });
  return (
    <div>
      <label htmlFor="email" />
      <Field name="email" placeholder="Your email" type="text" />
      <ErrorMessage name="email" />
    </div>
  );
};

export default StartInfo;
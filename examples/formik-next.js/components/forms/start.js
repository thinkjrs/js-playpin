import React from 'react';
import { Input } from '../fidelity/styles';

// A boilerplate, custom signup with Formik
function StartInfo() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <div className="flex flex-col mb-4">
      <Input name="email" type="text" placeholder="Your email"/>
    </div>
  );
};

export default StartInfo;
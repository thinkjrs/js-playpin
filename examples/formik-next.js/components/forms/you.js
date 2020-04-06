import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function YouInfo() {
  return (
    <div className="flex flex-col mb-4">
      <div className="col-span-3 py-2">
        <Field name="artistName" className="border bg-gray-200 px-3 py-1 text-grey-darkest" placeholder="Artist/Band name" type="text" />
        <ErrorMessage name="artistName" />
      </div>
      <div class="col-span-3 py-2">
        <Field name="firstName" className="border bg-gray-200 px-3 py-1 text-grey-darkest" placeholder="Your first name" type="text" />
        <ErrorMessage name="firstName" />
      </div>
      <div class="col-span-3 py-2">
        <Field name="lastName" className="border bg-gray-200 px-3 py-1 text-grey-darkest" placeholder="Your last name" type="text" />
        <ErrorMessage name="lastName" />
      </div>
    </div>
  );
};

export default YouInfo;
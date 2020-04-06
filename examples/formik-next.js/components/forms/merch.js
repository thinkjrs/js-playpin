import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function MerchInfo() {
  return (
    <div className="flex flex-col mb-4">
      <div className="col-span-3 py-2">
        <Field name="merchDollars" className="border py-1 px-3 text-grey-darkest bg-gray-200 hover:bg-white" placeholder="Merch sales per show" type="text" />
        <ErrorMessage name="merchDollars" />
      </div>
    </div>
  );
};

export default MerchInfo;
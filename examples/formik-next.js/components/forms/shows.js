import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function ShowsInfo() {
  return (
    <div className="flex flex-col mb-4">
      <div className="col-span-3 py-2">
        <Field name="liveShowAttendance" className="border py-1 px-3 text-grey-darkest bg-gray-200 hover:bg-white" placeholder="Live show attendance" type="text" />
        <ErrorMessage name="liveShowAttendance" />
      </div>
      <div className="col-span-3 py-2">
        <Field name="liveShowFrequency" className="border py-1 px-3 text-grey-darkest bg-gray-200 hover:gb-white" placeholder="Live show frequency" type="text" />
        <ErrorMessage name="liveShowFrequency" />
      </div>
      <div className="col-span-3 py-2">
        <Field name="liveShowTixPrice" className="border py-1 px-3 text-grey-darkest bg-gray-200 hover:bg-white" placeholder="Live show ticket price" type="text" />
        <ErrorMessage name="liveShowTixPrice" />
      </div>
    </div>
  );
};

export default ShowsInfo;
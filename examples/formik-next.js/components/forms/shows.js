import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function ShowsInfo() {
  return (
    <div>
      <label htmlFor="liveShowAttendance" />
      <Field name="liveShowAttendance" placeholder="Live show attendance" type="text" />
      <ErrorMessage name="liveShowAttendance" />
      <label htmlFor="liveShowFrequency" />
      <Field name="liveShowFrequency" placeholder="Live show frequency" type="text" />
      <ErrorMessage name="liveShowFrequency" />
      <label htmlFor="liveShowTixPrice" />
      <Field name="liveShowTixPrice" placeholder="Live show ticket price" type="text" />
      <ErrorMessage name="liveShowTixPrice" />
    </div>
  );
};

export default ShowsInfo;
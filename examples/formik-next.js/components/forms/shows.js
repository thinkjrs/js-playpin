import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
const ShowForm = () => {
  return (
    <div>
      <Field name="liveShowAttendance" placeholder="" type="text" />
      <ErrorMessage name="liveShowAttendance" />
      <Field name="liveShowFrequency" placeholder="" type="text" />
      <ErrorMessage name="liveShowFrequency" />
      <Field name="liveShowTixPrice" placeholder="" type="text" />
      <ErrorMessage name="liveShowTixPrice" />
    </div>
  );
};

export default ShowForm;
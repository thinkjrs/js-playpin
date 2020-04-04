import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
const DigitalForm = () => {
  return (
    <div>
      <Field name="monthlyListenersSpotify" placeholder="" type="text" />
      <ErrorMessage name="monthlyListenersSpotify" />
      <Field name="youtubeUrl" placeholder="Link to your best video" type="text" />
      <ErrorMessage name="youtubeUrl" />
    </div>
  );
};

export default DigitalForm;
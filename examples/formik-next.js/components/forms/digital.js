import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function DigitalInfo() {
  return (
    <div> 
      <label htmlFor="monthlyListenersSpotify" />
      <Field name="monthlyListenersSpotify" placeholder="Last month's 'monthly' listeners on Spotify" type="text" />
      <ErrorMessage name="monthlyListenersSpotify" />
      <label htmlFor="youtubeUrl" />
      <Field name="youtubeUrl" placeholder="Link to your best video" type="text" />
      <ErrorMessage name="youtubeUrl" />
    </div>
  );
};

export default DigitalInfo;
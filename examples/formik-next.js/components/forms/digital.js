import React from 'react';
import { Field, ErrorMessage } from 'formik';


// A boilerplate, custom signup with Formik
function DigitalInfo() {
  return (
    <div className="flex flex-col mb-4"> 
      <div className="col-span-3 py-2">
        <Field name="monthlyListenersSpotify" className="border py-1 px-3 text-grey-darkest bg-gray-200 hover:bg-white" placeholder="Last month's 'monthly' listeners on Spotify" type="text" />
        <ErrorMessage name="monthlyListenersSpotify" />
      </div>
      <div className="col-span-3 py-2">
        <Field name="youtubeUrl" className="border py-1 px-3 text-grey-darkest bg-gray-200 hover:bg-white" placeholder="Link to your best video" type="text" />
        <ErrorMessage name="youtubeUrl" />
      </div>
    </div>
  );
};

export default DigitalInfo;
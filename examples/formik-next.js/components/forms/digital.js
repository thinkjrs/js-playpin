import React from 'react';
import { Input } from '../fidelity/styles';


// A boilerplate, custom signup with Formik
function DigitalInfo() {
  return (
    <div className="flex flex-col mb-4"> 
      <Input name="monthlyListenersSpotify" placeholder="Last month's 'monthly' listeners on Spotify" type="text" />
      <Input name="youtubeUrl" placeholder="Link to your best video" type="text" />
    </div>
  );
};

export default DigitalInfo;
import React from 'react';
import { Input } from '../fidelity/styles';


// A boilerplate, custom signup with Formik
function MerchInfo() {
  return (
    <div className="flex flex-col mb-4">
      <Input name="merchDollars" placeholder="Merch sales per show" type="text" />
    </div>
  );
};

export default MerchInfo;
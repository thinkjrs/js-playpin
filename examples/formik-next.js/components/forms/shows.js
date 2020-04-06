import React from 'react';
import { Input } from '../fidelity/styles';

// A boilerplate, custom signup with Formik
function ShowsInfo() {
  return (
    <div className="flex flex-col mb-4">
      <Input name="liveShowAttendance" placeholder="Live show attendance" type="text" />
      <Input name="liveShowFrequency" placeholder="Live show frequency" type="text" />
      <Input name="liveShowTixPrice" placeholder="Live show ticket price" type="text" />
    </div>
  );
};

export default ShowsInfo;
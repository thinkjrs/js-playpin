import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Input } from '../fidelity/styles';


// A boilerplate, custom signup with Formik
function YouInfo() {
  return (
    <div className="flex flex-col mb-2">
      <Input name="artistName" placeholder="Artist/Band name" type="text"/>
      <Input name="firstName" placeholder="Your first name" type="text"/>
      <Input name="lastName" placeholder="Your last name" type="text"/>
    </div>
  );
};

export default YouInfo;
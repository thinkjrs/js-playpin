import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


// A boilerplate, custom signup with Formik
const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
      email: Yup.string()
        .max(80, 'Must be 80 characters or less')
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Enter your first name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
       ) : null}
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Enter your last name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
       ) : null}
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
       ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
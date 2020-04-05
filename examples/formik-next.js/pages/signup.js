import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


// A boilerplate, custom signup with Formik
const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  return (
    <Formik
      initialValues={{ 
          firstName: '', 
          lastName: '', 
          email: '' , 
          artistName: '',
          liveShowAttendance: '',
          liveShowFrequency: '',
          liveShowTixPrice: '',
          merchDollars: '', 
          monthlyListenersSpotify: '',
          youtubeUrl: ''
        }
      }
      validationSchema={Yup.object({
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
        artistName: Yup.string()
          .max(80, 'Must be 80 characters or less')
          .required('Required'),
        liveShowAttendance: Yup.string()
          .required('Required'),
        liveShowFrequency: Yup.string()
          .required('Required'),
        merchDollars: Yup.string()
          .required('Required'),
        monthlyListenersSpotify: Yup.string()
          .required('Required'),
        youtubeUrl: Yup.string()
          .required('Required'),
        liveShowTixPrice: Yup.string()
          .required('Required')
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <Form>
          <div>
            <label htmlFor="artistName" />
            <Field name="artistName" placeholder="Artist/band" type="text" />
            <ErrorMessage name="artistName" />
            <label htmlFor="firstName" />
            <Field name="firstName" placeholder="Your first name" type="text" />
            <ErrorMessage name="firstName" />
            <label htmlFor="lastName" />
            <Field name="lastName" placeholder="Your last name" type="text" />
            <ErrorMessage name="lastName" />
            <label htmlFor="email" />
            <Field name="email" placeholder="Email address" type="text" />
            <ErrorMessage name="email" />
            <label htmlFor="liveShowAttendance" />
            <Field name="liveShowAttendance" placeholder="Live show attendance" type="text" />
            <ErrorMessage name="liveShowAttendance" />
            <label htmlFor="liveShowFrequency" />
            <Field name="liveShowFrequency" placeholder="Live show frequency" type="text" />
            <ErrorMessage name="liveShowFrequency" />
             <label htmlFor="liveShowTixPrice" />
            <Field name="liveShowTixPrice" placeholder="Live show ticket price" type="text" />
            <ErrorMessage name="liveShowTixPrice" />
            <label htmlFor="merchDollars" />
            <Field name="merchDollars" placeholder="Merch sales per show" type="text" />
            <ErrorMessage name="merchDollars" />
            <label htmlFor="monthlyListenersSpotify" />
            <Field name="monthlyListenersSpotify" placeholder="Last month's 'monthly' listeners on Spotify" type="text" />
            <ErrorMessage name="monthlyListenersSpotify" />
             <label htmlFor="youtubeUrl" />
            <Field name="youtubeUrl" placeholder="Link to your best video" type="text" />
            <ErrorMessage name="youtubeUrl" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
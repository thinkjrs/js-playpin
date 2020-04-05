import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const OnboardingForm = () => {
    return (
      <Formik
        initialValues={{ 
          firstName: '', lastName: '', email: '', artistName: '' 
    //      liveShowAttendance: '', liveSHowFrequency: '',
    //      liveShowTixPrice: '', merchDollars: '', monthlyListenersSpotify: '',
    //      youtubeUrl: '', artistName: '', password: ''
        }}
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
          //liveShowAttendance: Yup.string()
          //  .required('Required'),
          //liveShowFrequency: Yup.string()
          //  .required('Required'),
          //liveShowTixPrice: Yup.string()
          //  .required('Required'),
          //merchDollars: Yup.string()
          //  .required('Required'),
          //monthlyListenersSpotify: Yup.string()
          //  .required('Required'),
          //youtubeUrl: Yup.string()
          //  .required('Required'),
          artistName: Yup.string()
            .required('Required')
          //password: Yup.string()
          //  .min(8, 'Eight characters minimum')
          //  .matches(
          //    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/,
          //    "You need at least one uppercase, one lowercase, one number and one special case character"
          //  )
          //  .required('Required'),
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      > {formik => (
        <Form>
            <div>
            <Field name="email" placeholder="Your email" type="text" />
            <ErrorMessage name="email" />
            <Field name="artistName" placeholder="Artist/Band name" type="text" />
            <ErrorMessage name="artistName" />
            <Field name="firstName" placeholder="Your first name" type="text" />
            <ErrorMessage name="firstName" />
            <Field name="lastName" placeholder="Your last name" type="text" />
            <ErrorMessage name="lastName" />
            </div>
            {/*
            <Field name="liveShowAttendance" placeholder="" type="text" />
            <ErrorMessage name="liveShowAttendance" />
            <Field name="liveShowFrequency" placeholder="" type="text" />
            <ErrorMessage name="liveShowFrequency" />
            <Field name="liveShowTixPrice" placeholder="" type="text" />
            <ErrorMessage name="liveShowTixPrice" />
            <Field name="merchDollars" placeholder="" type="text" />
            <ErrorMessage name="merchDollars" />
            <Field name="monthlyListenersSpotify" placeholder="" type="text" />
            <ErrorMessage name="monthlyListenersSpotify" />
            <Field name="youtubeUrl" placeholder="Link to your best video" type="text" />
            <ErrorMessage name="youtubeUrl" />
            <Field name="password" placeholder="Choose a password" type="text" />
            <ErrorMessage name="password" />
            */}
            <div>
                <button type="submit">Submit</button>
            </div>
        </Form>
      )}
      </Formik>
    );
  };

  export default OnboardingForm;
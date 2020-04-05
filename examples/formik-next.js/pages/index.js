import Head from 'next/head';
import {Formik, Form } from 'formik';
import * as Yup from 'yup';
//import YouForm from '../components/forms/you';
//import ShowsForm from '../components/forms/shows';
//import MerchForm from '../components/forms/merch';
//import DigitalForm from '../components/forms/digital';
//import SignupForm from '../components/forms/signup';
import SignupForm from './signup';

function Index() {
  return (
    <div>
      <Head>
        <title>Formik-Next.js Tutorial</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h3>A <code>Formik</code> <code>Next.js</code> exemplar</h3>
      <blockquote>
        <em>Forms with 
          &nbsp;<code>Formik</code> and <code>Next.js</code> 
          &nbsp;are awesome!
        </em>
      </blockquote>
      <SignupForm/>
    </div>
  );
};

export default Index;

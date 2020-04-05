import Head from 'next/head';
import {FormikWizard} from 'formik-wizard';
import steps from '../components/steps';
import { useCallback } from 'react';
import setImmediate from 'setimmediate';
//import YouForm from '../components/forms/you';
//import ShowsForm from '../components/forms/shows';
//import MerchForm from '../components/forms/merch';
//import DigitalForm from '../components/forms/digital';
//import SignupForm from '../components/forms/signup';
//import SignupForm from './signup';

function FormWrapper({
  children,
  isLastStep,
  status,
  goToPreviousStep,
  canGoBack,
  actionLabel,
}) {
  return (
    <div>
      {status && (
        <div>
          {status.message}
          <hr />
        </div>
      )}
      <div>
        <button type="button" onClick={goToPreviousStep} disabled={!canGoBack}>
          Previous
        </button>
        <button type="submit">
          {actionLabel || (isLastStep ? 'Submit' : 'Next step')}
        </button>
      </div>
      <hr />
      {children}
    </div>
  )
}
function App() {
  var _setImmediate = setImmediate;
  process.once('loaded', function() {
    global.setImmediate = _setImmediate;
  });
  const handleSubmit = useCallback((values) => {
    console.log('full values:', values)

    return {
      message: 'Thanks for submitting!',
    }
  }, [])
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
      <FormikWizard steps={steps} onSubmit={handleSubmit} render={FormWrapper} />
    </div>
  );
};

export default App;

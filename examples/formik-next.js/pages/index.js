import Head from 'next/head';
import {FormikWizard} from 'formik-wizard';
import steps from '../components/steps';
import setImmediate from 'setimmediate';
import FormWrapper from '../components/FormWrapper';


function OnboardingApp() {
  var _setImmediate = setImmediate;
  process.once('loaded', function() {
    global.setImmediate = _setImmediate;
  });
  return (
    <div className="container px-3">
      <Head>
        <title>Formik-Next.js Tutorial</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <h3 className="text-lg text-bold">A <code>Formik</code> <code>Next.js</code> exemplar</h3>
        <blockquote className="bg-gray-300">
          <em>Forms with 
            &nbsp;<code className="border-left text-xs">Formik</code> and <code>Next.js</code> 
            &nbsp;are awesome!
          </em>
        </blockquote>
      </>
      <FormikWizard steps={steps} onSubmit={(values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              alert(JSON.stringify(values, null, 2))
            )
          }, 400);
        })
      }} render={FormWrapper} />
    </div>
  );
};

export default OnboardingApp;

import Head from 'next/head';
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
      <SignupForm />
    </div>
  );
};

export default Index;

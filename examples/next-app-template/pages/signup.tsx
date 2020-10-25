import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';

function validateStep(value: number, max: number = 4): number {
  if (value < max) {
    return value < 0 ? 0 : value;
  }
  return max - 1;
}
type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type LabelProps = WithChildren<{
  token: string; 
  step: number;
}>
function Label({token, step, children}: LabelProps) {
  return (
    <div className={styles.card}>
      <h3>What step are we on?</h3>
      <div style={{paddingBottom: '.75rem'}}>
        Step (incremented): <strong>{step + 1}</strong>
      </div>
      <div>Token: {token}</div>
      <div>{children}</div>
    </div>
  );
};

function error404(): JSX.Element {
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <DefaultErrorPage statusCode={404} style={{maxHeight: '25%'}}/>
  </>
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function FormOptions({checkboxContent}) {
  return (
    <>
      <div id="checkbox-group" />
      <div role="group" aria-labelledby="checkbox-group">
        { checkboxContent.map((val, index) => (
          <label>
            <Field type="checkbox" name={`${checkboxContent[index]}`} value={checkboxContent[index]} />
            {val}
          </label>
          )) 
        }
      </div>
    </>
  )
};
function Basic () {
  const defaultFormRes = {
    0: ['This', 'Is', 'A', 'Test'],
    1: ['Another','Test', 'Here'],
    2: ["Don't", 'Mind', 'Me'],
    3: ['Unless', 'The', 'Test', 'Fails']
  };
  const [step, setStep] = useState(0);
  const [formRes, setFormRes] = useState( defaultFormRes );
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          checked: [], /* name of Field "chedked" */
        }}
        onSubmit={async (values) => {
          await sleep(150);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>              
            <FormOptions  checkboxContent={defaultFormRes[step]}/>
            <div style={{display: "flex"}}>
              <div className={styles.card} style={{backgroundColor: "#999193", color: '#fff'}} onClick={() => setStep(validateStep(step - 1))}>
                Regress.
              </div>
              { step == 3 
                ? <button className={styles.card} style={{backgroundColor: "#c60000", color: '#fff'}} type="submit">Submit</button> 
                : <div className={styles.card} style={{backgroundColor: "#777", color: '#fff'}}  onClick={() => setStep(validateStep(step+1))}>
                  Progress.
                </div>
              }
            </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default function Signup(): JSX.Element {
  const router = useRouter();
  const { token } = router.query

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Basic/>

      </div>
    </div>
  )
};
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import { useState } from 'react';

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
export default function Signup(): JSX.Element {


  const router = useRouter();
  const { token } = router.query
  const [step, setStep] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Label token={token} step={step? step: 0} />
        <div className={styles.card} onClick={() => setStep(validateStep(step + 1))}>
          { 
            step === 0 
            ? <div>Step {step + 1}: initial signup display.</div>
            : step === 1
            ? <div>Step {step + 1} intermediate signup display.</div>
            : step === 2
            ? <div>Step {step + 1} intermediate signup display.</div>
            : step === 3
            ? <div>Step {step + 1} last signup display!</div>
            : <></>
          }
        </div>
        <div style={{display: "flex"}}>
          <div className={styles.card} style={{backgroundColor: "#999193", color: '#fff'}} onClick={() => setStep(validateStep(step - 1))}>
            Regress.
          </div>
          <div className={styles.card} style={{backgroundColor: "#777", color: '#fff'}}  onClick={() => setStep(validateStep(step+1))}>
            Progress.
          </div>
        </div>
      </div>
    </div>
  )
};
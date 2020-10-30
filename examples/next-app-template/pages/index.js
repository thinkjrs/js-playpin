import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Musicfox Sing Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://musicfox.io">Musicfox.</a>
        </h1>

        <p className={styles.description}>
          Bringing democracy to music{' '}
          <br></br>
          <code className={styles.code}>at least you get it somewhere</code>
        </p>

        <div className={styles.grid}>
          <Link href={"/wizardsignup"/*"/signup?token=test-token"*/}>
            <a className={styles.card}>
              <h3>Sign Up&rarr;</h3>
              <p>Sign Up for a Musicfox account. <strong>It's free!</strong></p>
            </a>
          </Link>
          <Link href={"/" /* TODO point to auth api endpoint */} >
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Login&rarr;</h3>
              <p>Login to your Musicfox account. Access your b00st apps and projects.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

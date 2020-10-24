import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Signup(): JSX.Element {
    const router = useRouter();
    const { token } = router.query

    return (
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.card}>
            <Link href="/">
              <a>
                <h3>Query data</h3>
                <p>Token: {token}</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
};
import styles from '../styles/AboutHome.module.css'
import Link from 'next/link';

const AboutHome = () => {
  return (
    <div className={styles.about}>
      <div>
        <div className={`${styles.star} ${styles['star-1']}`}></div>
        <h2>About...</h2>
        <div className={`${styles.star} ${styles['star-0']}`}></div>
      </div>
      <div>
        <div className={`${styles.star} ${styles['star-2']}`}></div>
        <p>So what do you want to know?</p>
        <div className={`${styles.star}`}></div>
      </div>
      <div className={styles.dots}>
        <span className={styles['dots-1']}>.........</span>
        <span className={styles['dots-2']}>.........</span>
        <div className={`${styles.star} ${styles['star-3']}`}></div>
      </div>
      <div>
        <div className={`${styles.star} ${styles['star-4']}`}></div>
          <Link href="/about">
            <a>
              <p>Carrer, education, works...</p>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <p>My life, history, hobbies...</p>
            </a>
          </Link>
        <div className={`${styles.star} ${styles['star-5']}`}></div>
      </div>
    </div>
  )
}

export default AboutHome;
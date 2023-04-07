import styles from '../styles/AboutHome.module.css'
import Link from 'next/link';

const AboutHome = () => {
  return (
    <>
    <h2 className={styles.title}>About ...</h2>
    <div className={styles.about}>
      <div>
        <Link href="/about">
          <a>
            <p>Carrer, education, works</p>
          </a>
        </Link>
      </div>
      <span className={styles.divider}></span>
      <div>
        <Link href="/about/more">
          <a>
            <p>My life, history, hobbies</p>
          </a>
        </Link>
      </div>
    </div>
    </>
  )
}

export default AboutHome;
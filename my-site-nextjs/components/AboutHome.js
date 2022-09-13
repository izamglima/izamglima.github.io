import styles from '../styles/AboutHome.module.css'
import Link from 'next/link';

const AboutHome = () => {
  return (
    <>
    <h2 className={styles.title}>About ...</h2>
    <div className={styles.about}>
      <p>So what do you want to know?</p>
      <div>
        <ul>
          <li>
            <Link href="/about">
              <a>
                <p>Carrer, education, works...</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <p>My life, history, hobbies...</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default AboutHome;
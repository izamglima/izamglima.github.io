import Link from "next/link";
import styles from '../styles/ProjectsHome.module.css'

const ProjectsHome = () => {
  return (
    <section className={styles['projects-home']}>
      <h2 className="text-center">Little Projects</h2>
      <div className={styles['projects-container']}>
        <div className={styles['projects-list']}>
          <Link href="/projects/kaleidoscope">
            <a>
              <div className={`${styles['projects-list__item']} ${styles['item-kaleidoscope']}`} >
                <p>kaleidoscope</p>
              </div>
            </a>
          </Link>
          <Link href="/projects/wordle">
              <a>
                <div className={`${styles['projects-list__item']} ${styles['item-wordle']}`} >
                  <p>
                    <span className={styles['item-wordle__letter']}>w</span>
                    <span className={styles['item-wordle__letter']}>o</span>
                    <span className={styles['item-wordle__letter']}>r</span>
                    <span className={styles['item-wordle__letter']}>d</span>
                    <span className={styles['item-wordle__letter']}>l</span>
                    <span className={styles['item-wordle__letter']}>e</span>
                    <br />
                    <span className={styles['item-wordle__detail']}>clone</span>
                  </p>
                </div>
              </a>
          </Link>
          <Link href="/projects/tools">
            <a>
              <div className={`${styles['projects-list__item']} ${styles['item-tools']}`} >
                <p>handy tools</p>
              </div>
            </a>
          </Link>
          <Link href="/projects/tarot">
            <a>
              <div className={`${styles['projects-list__item']} ${styles['item-tarot']}`}>
                <p>tarot *</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHome;
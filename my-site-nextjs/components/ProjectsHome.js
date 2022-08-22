import Link from "next/link";
import styles from '../styles/ProjectsHome.module.css'

const ProjectsHome = () => {
  return (
    <div className={styles['projects-home']}>
      <h2 className="text-center">Little Projects</h2>
      <div className={styles['projects-list']}>
        <div className={`${styles['projects-list__item']} ${styles['item-kaleidoscope']}`} >
          <Link href="/projects/kaleidoscope">
            <a>
              <p>kaleidoscope</p>
            </a>
          </Link>
        </div>
        <div className={`${styles['projects-list__item']} ${styles['item-wordle']}`} >
          <Link href="/projects/wordle">
            <a>
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
            </a>
          </Link>
        </div>
        <div className={`${styles['projects-list__item']} ${styles['item-tools']}`} >
          <Link href="/projects/tools">
            <a>
              <p>handy tools</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHome;
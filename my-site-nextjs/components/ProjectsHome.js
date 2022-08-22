import Link from "next/link";
import styles from '../styles/ProjectsHome.module.css'

const ProjectsHome = () => {
  return (
    <div className={styles['projects-home']}>
      <h2 className="text-center">Little Projects</h2>
      <div className={styles['projects-list']}>
        <div className={styles['projects-list__item']}>
          <p>kaleidoscope</p>
        </div>
        <div className={styles['projects-list__item']}>
          <p>wordle like</p>
        </div>
        <div className={styles['projects-list__item']}>
          <p>handy tools</p>
          <p>px to rem</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHome;
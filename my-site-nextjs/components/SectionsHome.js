import styles from '../styles/Home.module.css'
import Hero from './Hero';
import AboutHome from './AboutHome';
import ProjectsHome from './ProjectsHome';

const SectionsHome = () => {
  return (
    <>
      <section className={styles.main__parallax}>
        <Hero />
      </section>
      <section className={styles.main__about}>
        <AboutHome />
      </section>
      <section className={styles.main__projects}>
        <ProjectsHome />
      </section>
      
    </>
  )
}

export default SectionsHome;
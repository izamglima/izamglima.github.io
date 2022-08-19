import styles from '../styles/Home.module.css'
import Hero from './Hero';

const SectionsHome = () => {
  return (
    <>
      <section className={styles.main__parallax}>
        <Hero />
      </section>
      <section className={styles.main__about}>
        <p className="text-center">2</p>
      </section>
      <section className={styles.main__projects}>
        <p className="text-center">3</p>
      </section>
      
    </>
  )
}

export default SectionsHome;
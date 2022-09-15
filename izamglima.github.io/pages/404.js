import Link from "next/link";
import styles from '../styles/404.module.css'

const NotFound = () => {
  return (
    <main className="main">
      <h1 className="text-center">Ooops...</h1>
      <div className={styles['not-found']}>
        <div className={styles['not-found__number']}>
          <div className={styles['not-found__number--column']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className={styles['not-found__number--row']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className={styles['not-found__number--column']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
        </div>
        
        <div className={styles['not-found__number']}>
          <div className={styles['not-found__number--column']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className={styles['not-found__0']}>
              <span className={styles['align-start']}>&#10006;</span>
              <span className={styles['align-start']}>&#10006;</span>
              <span className={styles['align-start']}>&#10006;</span>
              <span className={styles['align-start']}>&#10006;</span>
              <span className={styles['align-end']}>&#10006;</span>
              <span className={styles['align-end']}>&#10006;</span>
              <span className={styles['align-end']}>&#10006;</span>
              <span className={styles['align-end']}>&#10006;</span>
          </div>
          <div className={styles['not-found__number--column']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
        </div>

        <div className={styles['not-found__number']}>
          <div className={styles['not-found__number--column']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className={styles['not-found__number--row']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className={styles['not-found__number--column']}>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
        </div>
      </div>
      <h2 className="text-center">This page cannot be found.</h2>  
      <p className="text-center">Go back to the <Link href="/"><a className="link">Home</a></Link></p>
    </main>
  )
}

export default NotFound;
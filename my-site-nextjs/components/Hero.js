import styles from '../styles/Home.module.css'

const Hero = () => {
  return (
    <div className={styles['hero-background']}>
      <div className={styles.sun}></div>
      <div className={styles['inner-sun']}></div>
      <p className='text-center'>there goes my hero</p>
      <div className={`${styles.mountain} ${styles['mountain-1']}`}>
        <div className={styles.climber}></div>
      </div>
      <div className={`${styles.mountain} ${styles['mountain-2']}`}></div>
      <div className={`${styles.mountain} ${styles['mountain-3']}`}></div>
      <div className={`${styles.mountain} ${styles['mountain-4']}`}>
        <div className={`${styles['tree-left']} ${styles['tree-left-1']}`} ></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-2']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-3']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-4']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-5']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-6']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-7']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-8']}`}></div>
        <div className={`${styles['tree-left']} ${styles['tree-left-9']}`}></div>
      </div>
      <div className={`${styles.mountain} ${styles['mountain-5']}`}>
        <div className={`${styles['tree-right']} ${styles['tree-right-1']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-2']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-3']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-4']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-5']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-6']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-7']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-8']}`}></div>
        <div className={`${styles['tree-right']} ${styles['tree-right-9']}`}></div>
      </div>
      <div className={styles.clouds}>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
        {/* <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div> */}
      </div>
    </div>
  )
}

export default Hero;
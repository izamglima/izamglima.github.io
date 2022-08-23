import styles from '../styles/Wordle.module.css'

const WordleRow = ({guess}) => {
  if (guess) {
    return(
      <div className={`${styles.row} ${styles.past}`}>
        {guess.map((letter, i) => (
          <div key={i} className={styles[`${letter.color}`]}>{letter.key}</div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className={styles.row}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default WordleRow;
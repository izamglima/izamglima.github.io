import styles from '../styles/Wordle.module.css'

const WordleRow = ({guess, currentGuess}) => {

  if (guess) {
    return(
      <div className={`${styles.row} ${styles.past}`}>
        {guess.map((letter, i) => (
          <div key={i} className={styles[`${letter.color}`]}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')
    return (
      <div className={`${styles.row} ${styles.current}`}>
        {letters.map((letter, i) => (
          <div key={i} className={styles.filled}>{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((v, i) => (
          <div key={i}></div>
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
import styles from '../styles/Wordle.module.css'

const Modal = ({ isCorrect, turn, solution, handleClick }) => {

  return (
    <div className={styles.modal}> 
      {isCorrect && (
        <div>
          <span className={styles['icon-cross']} onClick={event => handleClick(false)}>&#10006;</span>
          <h1>You Win! 🎉</h1>
          {(turn === 1) ? <p>You found the solution in {turn} guess :)</p> : <p>You found the solution in {turn} guesses :)</p>}
        </div>
      )}
      {!isCorrect && (
        <div>
          <span className={styles['icon-cross']} onClick={event => handleClick(false)}>&#10006;</span>
          <h1>Ohh noo...</h1>
          <p className={styles.solution}>The solution was: {solution}</p>
          <p>Best luck next time ;)</p>
        </div>
      )}
    </div>
  )
}

export default Modal;
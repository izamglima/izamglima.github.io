import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Modal from "./Modal";
import WordleGrid from "./WordleGrid";
import WordleKeypad from "./WordleKeypad";
import styles from '../styles/Wordle.module.css'

const WordleComponent = ({solution}) => {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
  const [showModal, setShowModal] = useState(false)
  const [endGame, setEndGame] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (endGame) {
      window.removeEventListener('keyup', handleKeyup)
      return
    }
    
    if (isCorrect && !endGame) {
      setTimeout(() => setShowModal(true), 2000)
      setEndGame(true)
    }

    if (turn > 5 && !isCorrect && !endGame) {
      setTimeout(() => setShowModal(true), 2000)
      setEndGame(true)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  },[handleKeyup, isCorrect, turn, endGame])

  const handleClick = close => {
    setShowModal(close)
  };

  return (
    <>
      <div className={styles[`endGame-${endGame}`]}>
        <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <WordleKeypad usedKeys={usedKeys} />
      </div>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} handleClick={handleClick} />}
    </>
  )
}

export default WordleComponent;
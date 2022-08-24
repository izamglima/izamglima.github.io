import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import WordleGrid from "./WordleGrid";
import WordleKeypad from "./WordleKeypad";

const WordleComponent = ({solution}) => {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  },[handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <>
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <WordleKeypad usedKeys={usedKeys} />
    </>
  )
}

export default WordleComponent;
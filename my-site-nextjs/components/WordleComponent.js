import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import WordleGrid from "./WordleGrid";

const WordleComponent = ({solution}) => {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  },[handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <>
      <p>solution - {solution}</p>
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </>
  )
}

export default WordleComponent;
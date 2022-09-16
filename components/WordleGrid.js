import WordleRow from "./WordleRow";
const WordleGrid = ({currentGuess, guesses, turn}) => {
  
  return (
    <>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <WordleRow key={i} currentGuess={currentGuess} />
        }
        return <WordleRow key={i} guess={guess} />
      })}
    </>
  )
}

export default WordleGrid;
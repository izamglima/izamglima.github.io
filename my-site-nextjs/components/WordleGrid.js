import WordleRow from "./WordleRow";
const WordleGrid = ({currentGuess, guesses, turn}) => {
  
  return (
    <>
      {guesses.map((guess, i) => {
        return <WordleRow key={i} guess={guess} />
      })}
    </>
  )
}

export default WordleGrid;
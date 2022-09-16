import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})

  // format a guess into an array of letter objects
  // e.g. [{key: "a", color: "yellow"}]
  const formatGuess = () => {
    let solutionArray = [...solution]

    // default color is grey
    let formattedGuess = [...currentGuess].map((letter) => {
      return {key: letter, color: 'grey'}
    })

    // find any green
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })

    // find any yellow
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(letter.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    // add to array of obcjets
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    // take the previous values and add the currentGuess
    // as string format
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) => {
      return prevTurn + 1
    })
    setUsedKeys((prevUsedKeys) => {

      formattedGuess.forEach((letter) => {
        const currentColor = prevUsedKeys[letter.key]

        if (letter.color === 'green') {
          prevUsedKeys[letter.key] = 'green'
          return
        }
        if (letter.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[letter.key] = 'yellow'
          return
        }
        if (letter.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
          prevUsedKeys[letter.key] = 'grey'
          return
        }
      })
      
      return prevUsedKeys
    })
    setCurrentGuess('')
  }

  // handle keyup event & track current guess
  // if user press enter, add the new guess
  const handleKeyup = ({key}) => {

    if (key === 'Enter') {
      if (turn > 5) {
        console.log('end')
        return
      }
      if (history.includes(currentGuess)) {
        console.log('already tried this word')
        return
      }
      if (currentGuess.length !== 5) {
        console.log('word must be 5 chars long')
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }

    // only allows a to z letters
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}

}

export default useWordle
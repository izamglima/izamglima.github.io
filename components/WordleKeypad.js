import { useState, useEffect } from "react";
import styles from '../styles/Wordle.module.css'

const WordleKeypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/data/db.json')
    .then(res => res.json())
    .then(json => {
      setLetters(json.letters)
    })
  }, [])

  return (
    <div className={styles.keypad}>
      {letters && letters.map((letter) => {
        const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={styles[`${color}`]}>{letter.key}</div>
        )
      })}
    </div>
  )
}

export default WordleKeypad;
import { useState, useEffect } from "react";
import styles from '../styles/Wordle.module.css'
import useWordle from "../hooks/useWordle";

const WordleKeypad = ({ usedKeys }) => {
  const {click} = useWordle()
  const [clicked, setClicked] = useState(null)

  const [letters, setLetters] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/data/db.json')
    .then(res => res.json())
    .then(json => {
      setLetters(json.letters)
    })


  }, [])

  const insertLetter = (letter) => {
    console.log(letter.value)
    setClicked(letter)
  }

  return (
    <div className={styles.keypad}>
      
      {letters && letters.map((letter, i) => {
        let fix = undefined
        if (i === 18) {
          fix = 'margin'
        }
        if (i === 19 || i == 27) {
          fix = 'font'
        }
        const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={`${styles[`${color}`]} ${styles[`${fix}`]}`} onClick={insertLetter}>{letter.key}</div>
        )
      })}
    </div>
  )
}

export default WordleKeypad;
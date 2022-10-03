import { useState, useEffect } from "react";
import styles from '../styles/Wordle.module.css'

const WordleKeypad = ({ usedKeys, handleClickedDel, handleClickedEnter, handleClickedLetter }) => {
  //const [clicked, setClicked] = useState(null)

  const [letters, setLetters] = useState(null)

  useEffect(() => {
    
    fetch('/data/db.json')
    .then(res => res.json())
    .then(json => {
      setLetters(json.letters)
    })

  }, [])

  const insertLetter = (letter) => {
    handleClickedLetter(letter)
  }

  const insertDel = () => {
    handleClickedDel()
  }

  const insertEnter = () => {
    handleClickedEnter()
  }

  return (
    <>
    <div className={styles.keypad}>
      
      {letters && letters.map((letter, i) => {
        let fix = undefined
        if (i === 18) {
          fix = 'margin'
        }
        const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={`${styles[`${color}`]} ${styles[`${fix}`]}`} onClick={() => insertLetter(letter.key)}>{letter.key}</div>
        )
      })}
    </div>
    <div className={styles.keypad}>
      <div key={"del"} className={styles.control} onClick={insertDel} >❌</div>
      <div key={"enter"} className={styles.control} onClick={insertEnter} >✅</div>
    </div>
    </>
  )
}

export default WordleKeypad;
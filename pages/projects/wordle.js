import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import WordleComponent from '../../components/WordleComponent';
import styles from '../../styles/Wordle.module.css'

const Wordle = () => {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch('/data/db.json')
    .then(res => res.json())
    .then(json => {
      //console.log(json)
      // rand int 0 - 19
      const rand = json.solutions[Math.floor(Math.random()*json.solutions.length)]
      setSolution(rand.word)
    })
  }, [setSolution]);

  

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Wordle</title>
      </Head>
      <main className="main">
        <section className={styles.wordle}>
          <h1>Wordle clone</h1>
          <p>highly inspired by the original game</p>
          {solution && <WordleComponent solution={solution} />}
          <small className={styles.small}>made with help of the wonderful netninja / <Link href="https://www.youtube.com/c/TheNetNinja"><a>@iamshaunjp</a></Link></small>
        </section>
      </main>
    </>
  )
}

export default Wordle;
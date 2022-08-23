import Head from 'next/head';
import { useEffect, useState } from 'react';
import WordleComponent from '../../components/WordleComponent';

const Wordle = () => {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      //console.log(json)
      // rand int 0 - 19
      const rand = json[Math.floor(Math.random()*json.length)]
      setSolution(rand.word)
    })
  }, [setSolution]);

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Wordle</title>
      </Head>
      <main className="main">
        <h1>Wordle</h1>
        <p>because i like games!</p>
        {solution && <WordleComponent solution={solution} />}
      </main>
    </>
  )
}

export default Wordle;
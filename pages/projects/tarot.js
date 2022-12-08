import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Tarot.module.css'
import Card from '../../components/Card';
import ResultTarot from '../../components/ResultTarot';

const Tarot = () => {
  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [showResult, setShowResult] = useState();
  const [tarotCard, setTarotCard] = useState();
  const TOTAL = 36;

  useEffect(() => {
    fetch('/data/tarot.json')
    .then(res => res.json())
    .then(json => {
      const rand = Math.floor(Math.random()*TOTAL);
      const card = json.tarot.find(e => e.id == rand);
      setTarotCard(card);
    })
  }, []);

  const shuffleCards = () => {
    setAnimation(true);
    setAnimation2(true);

    setTimeout(() => setAnimation(false), 3600);
    setTimeout(() => setAnimation2(false), 3600);
    document.getElementById('ready').hidden = false;
  }

  const ready = () => {
    setShowResult(true);
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('ready').hidden = true; //hide buttons
    document.getElementById('shuffle').hidden = true; //hide buttons
    document.getElementById('container').classList.add('hidden'); 
  }

  const handleClick = close => {
    setShowResult(close);
    document.getElementById('container').classList.remove('hidden');    
    document.getElementById('shuffle').hidden = false;
    document.getElementById('result').classList.add('hidden');
  };

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Tarot</title>
      </Head>
      <main className="main">
        <section className={styles.tarot}>
          <h1>Tarot</h1>
          <p>Close your eyes and ask the oracle 🔮</p>
          <div className={styles.buttons}>
            <button className="btn btn-small" onClick={shuffleCards} hidden={false} id="shuffle">shuffle</button>
            <button className="btn btn-small" onClick={ready} id="ready" hidden={true}> i'm ready</button>
         
          </div>
        
          <div className={styles.container} id="container">

            <div className={animation ? `${styles['animate1']}` : null}>
              <Card></Card>
            </div>

            <div className={animation2 ? `${styles['animate2']}` : null}>
              <Card></Card>
            </div>

          </div>
          
          <div className='hidden' id="result">
            {tarotCard && showResult && <ResultTarot handleClick={handleClick} tarotCard={tarotCard} />}  
          </div>
           

          <small className={styles.small}>
            <p>We must always bear in mind that the Archetype, in itself,
            escapes representation, has no determined content – it is,
            only, a virtuality, a potential; archaic matrix where
            analogous or similar configurations take shape. The content
            archetypal is expressed first and foremost in the form of metaphor.</p>
            this tarot follows the Petit LeNormand deck
            
          <Link href="https://en.wikipedia.org/wiki/Marie_Anne_Lenormand" target="_blank">
            <a> [wiki] </a>
          </Link>

          </small>
        </section>
      </main>
    </>
  )
}

export default Tarot;
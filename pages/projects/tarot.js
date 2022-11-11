import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Tarot.module.css'
import Card from '../../components/Card';

const Tarot = () => {
  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);

  const shuffleCards = () => {
    setAnimation(true);
    setAnimation2(true);

    setTimeout(() => setAnimation(false), 3600);
    setTimeout(() => setAnimation2(false), 3600);

    document.getElementById('ready').hidden = false;
  }

  const ready = () => {
    document.getElementById('ready').hidden = true;
    document.getElementById('container').classList.add('hidden');
    document.getElementById('shuffle').hidden = true;
    document.getElementById('deck').classList.remove('hidden');
    document.getElementById('deck').classList.add('visible');
  }

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Tarot</title>
      </Head>
      <main className="main">
        <section className={styles.tarot}>
          <h1>Tarot</h1>
          <p>Close your eyes and ask the oracle 🔮</p>
          <button className="btn btn-small" onClick={shuffleCards} hidden={false} id="shuffle">shuffle</button>
          <div className={styles.container} id="container">

            <div className={animation ? `${styles['animate1']}` : null}>
              <Card></Card>
            </div>

            <div className={animation2 ? `${styles['animate2']}` : null}>
              <Card></Card>
            </div>

          </div>

          <div className={`${styles['deck']} ${['hidden']}`} id="deck" >
            <div className={styles.drag}>
              <Card></Card>
            </div>
            <div className={styles.drag}>
              <Card></Card>
            </div>
            <div className={styles.drag}>
              <Card></Card>
            </div>
            <div className={styles.drag}>
              <Card></Card>
            </div>
            <div className={styles.drag}>
              <Card></Card>
            </div>
            <div className={styles.drag}>
              <Card></Card>
            </div>
          </div>

          <button className="btn btn-small" onClick={ready} id="ready" hidden={true}> i'm ready</button>
          
          <small className={styles.small}>
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
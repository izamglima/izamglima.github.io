import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Kaleidoscope.module.css'

const Kaleidoscope = () => {
  //let photo = 1;
  const [photo, setPhoto] = useState(1)
  const [photosLength, setPhotosLength] = useState(0);
  const path = 'https://izamglima.github.io/mysite-photos/'

  useEffect(() => {
    fetch('/data/photos.json')
    .then(res => res.json())
    .then(json => {
      setPhotosLength((prev) => {
        return prev + json.photos.length
      })
      setPhoto(75)
    })
  }, []);

  const changeBg = () => {
    const rand = Math.floor(Math.random()*photosLength)
    setPhoto(rand)
  }

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Kaleidoscope</title>
      </Head>
      <main className="main">
        <section className={styles.kaleidoscope}>
          <h1>Kaleidoscope</h1>
          <p>because i like colors and shapes :)</p>
          <button className={`btn ${styles['btn-small']}`} onClick={changeBg}>Change image</button>
          <div className={styles.container}>
            <div className={styles.kaleido}>
                <div className={styles.tile} style={{
                  background: "center / cover repeat url('" + `${path}` + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat url('" + `${path}` + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat url('" + `${path}` + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat url('" + `${path}` + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat url('" + `${path}` + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat url('" + `${path}` + `${photo}` + ".jpg')"}}></div>
            </div>
            <svg>
              <clipPath id="polygon" clipPathUnits="objectBoundingBox">
                <polygon points=".5 0, 0 .86, 1 .86, .5 0" />
              </clipPath>
            </svg>
          </div>
          <small className={styles.small}>
            Coined by its Scottish inventor David Brewster, &quot;kaleidoscope&quot; is derived from the Ancient Greek word καλός <i>(kalos)</i>, &quot;beautiful, beauty&quot;, εἶδος <i>(eidos)</i>, &quot;that which is seen: form, shape&quot; and σκοπέω <i>(skopeō)</i>, &quot;to look to, to examine&quot;, hence &quot;observation of beautiful forms.&quot; 
          <Link href="https://en.wikipedia.org/wiki/Kaleidoscope" target="_blank">
            <a> [wiki] </a>
          </Link>
          </small>
        </section>
      </main>
    </>
  )
}

export default Kaleidoscope;
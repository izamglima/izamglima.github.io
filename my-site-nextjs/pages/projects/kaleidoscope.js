import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Kaleidoscope.module.css'

const Kaleidoscope = () => {
  //let photo = 1;
  const [photo, setPhoto] = useState(1)
  const [photosLength, setPhotosLength] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/data/photos.json')
    .then(res => res.json())
    .then(json => {
      setPhotosLength((prev) => {
        return prev + json.photos.length
      })
      const rand = json.photos[Math.floor(Math.random()*photosLength)]
      setPhoto(rand.id)
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
          <button className="btn btn-small" onClick={changeBg}>Change image</button>
          <div className={styles.container}>
            <div className={styles.kaleido}>
                <div className={styles.tile} style={{
                  background: "center / cover repeat-y url('http://localhost:3000/mysite-photos/" + `${photo}`  + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat-y url('http://localhost:3000/mysite-photos/" + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat-y url('http://localhost:3000/mysite-photos/" + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat-y url('http://localhost:3000/mysite-photos/" + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat-y url('http://localhost:3000/mysite-photos/" + `${photo}` + ".jpg')"}}></div>
                <div className={styles.tile} style={{
                  background: "center / cover repeat-y url('http://localhost:3000/mysite-photos/" + `${photo}` + ".jpg')"}}></div>
            </div>
            <svg>
              <clipPath id="polygon" clipPathUnits="objectBoundingBox">
                <polygon points=".5 0, 0 .86, 1 .86, .5 0" />
              </clipPath>
            </svg>
          </div>
          <small className={styles.small}>
            Coined by its Scottish inventor David Brewster, "kaleidoscope" is derived from the Ancient Greek word καλός <i>(kalos)</i>, "beautiful, beauty", εἶδος <i>(eidos)</i>, "that which is seen: form, shape" and σκοπέω <i>(skopeō)</i>, "to look to, to examine", hence "observation of beautiful forms." 
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
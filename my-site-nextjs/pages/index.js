import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import SectionsHome from "../components/SectionsHome";

export default function Home() {
  const ascii = `
  ♥♥♥♥♥♥  ♥♥   ♥♥     ♥♥   ♥♥ ♥♥♥♥♥♥♥ ♥♥      ♥♥       ♥♥♥♥♥♥      ♥♥♥♥♥♥♥♥ ♥♥   ♥♥ ♥♥♥♥♥♥♥ ♥♥♥♥♥♥  ♥♥♥♥♥♥♥             
 ♥♥    ♥♥ ♥♥   ♥♥     ♥♥   ♥♥ ♥♥      ♥♥      ♥♥      ♥♥    ♥♥        ♥♥    ♥♥   ♥♥ ♥♥      ♥♥   ♥♥ ♥♥                  
 ♥♥    ♥♥ ♥♥♥♥♥♥♥     ♥♥♥♥♥♥♥ ♥♥♥♥♥   ♥♥      ♥♥      ♥♥    ♥♥        ♥♥    ♥♥♥♥♥♥♥ ♥♥♥♥♥   ♥♥♥♥♥♥  ♥♥♥♥♥               
 ♥♥    ♥♥ ♥♥   ♥♥     ♥♥   ♥♥ ♥♥      ♥♥      ♥♥      ♥♥    ♥♥        ♥♥    ♥♥   ♥♥ ♥♥      ♥♥   ♥♥ ♥♥                  
  ♥♥♥♥♥♥  ♥♥   ♥♥     ♥♥   ♥♥ ♥♥♥♥♥♥♥ ♥♥♥♥♥♥♥ ♥♥♥♥♥♥♥  ♥♥♥♥♥♥         ♥♥    ♥♥   ♥♥ ♥♥♥♥♥♥♥ ♥♥   ♥♥ ♥♥♥♥♥♥♥
  `;
  console.log(ascii);

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Home</title>
        <meta name='keywords' content='Portifolio'/>
      </Head>
      <main className={styles.main} id="main">
        <SectionsHome/>
      </main>
    </>
  )
}

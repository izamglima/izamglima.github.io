import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import SectionsHome from "../components/SectionsHome";

export default function Home() {
  const log = "hoi! Looks like you are looking for something... 👀 ";
  console.log(log);

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

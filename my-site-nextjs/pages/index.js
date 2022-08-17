import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import SectionsHome from "../components/SectionsHome"

export default function Home() {
  return (
    <>
      <Head>
        <title>iza.m.g.lima | Home</title>
        <meta name='keywords' content='Portifolio'/>
      </Head>
      <main className={styles.main}>
        <SectionsHome/>
        {/* <Link href="/projects"><a>Little projects</a></Link> */}
      </main>
    </>
  )
}

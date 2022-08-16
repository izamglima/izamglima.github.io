import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import SectionsHome from "../components/SectionsHome"

export default function Home() {
  return (
    <>
      <Head>
        <title>izamglima | Home</title>
        <meta name='keywords' content='Portifolio'/>
      </Head>
      <main className='main'>
        <h1 className={styles.title}>homepage</h1>
        <SectionsHome/>
        {/* <Link href="/projects"><a>Little projects</a></Link> */}
      </main>
    </>
  )
}

import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>izamglima | Home</title>
      <meta name='keywords' content='Portifolio'/>
    </Head>
    <div>
      <h1 className={styles.title}>homepage</h1>
      <p>some text... </p>
      <Link href="/projects"><a>Little projects</a></Link>
    </div>
    </>
  )
}

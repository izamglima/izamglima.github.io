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

        <meta name='keywords' content='Portfolio, Personal Site'/>
        <meta name="description" content="Hi! My name is Izabela and this is my site / portfolio. Grab a tea and get confy you are welcome 😊"/>
        <meta name="language" content="EN" />
        <meta name="author" content="izabela, izamglima@gmail.com" />
        <meta name="url" content="https://izamglima.github.io" />
        <meta name="category" content="Portifolio" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        <meta name="og:title" content=""/>
        <meta name="og:type" content="portfolio"/>
        <meta name="og:url" content="https://izamglima.github.io"/>
        <meta name="og:image" content="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?cs=srgb&dl=pexels-danny-meneses-943096.jpg&fm=jpg"/>
        <meta name="og:site_name" content="izamglima.github.io"/>
        <meta name="og:description" content="Hi! My name is Izabela and this is my site / portfolio. Grab a tea and get confy you are welcome 😊"/>
      </Head>
      <main className={styles.main} id="main">
        <SectionsHome/>
      </main>
    </>
  )
}

import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return  (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&family=Sulphur+Point&display=swap" rel="stylesheet" />
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
  )
}

export default MyApp

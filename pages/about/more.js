import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/About.module.css'

const More = () => {
  
  return (
    <>
      <Head>
        <title>iza.m.g.lima | More about</title>
      </Head>
      <main className="main">
        <h1 className={styles.title}>A little bit more</h1>
        <div className={styles.more}>
          <div className={styles.box}>
            <p>Born and raised in <Link href="https://en.wikipedia.org/wiki/Campinas"><a>Campinas</a></Link>, Brazil. 
              It's a big city, close to the capital São Paulo. 
              When as a kid, the peak of hapiness was our anual trip to the beach, 
              usually on São Paulo's coast like Ubatuba, Guarujá or Santos.
            </p>

            <p>In 2011 I meet my husband because of a friend that I studied together with. 
              Since then we are living together.
            </p>

            <p>The first time I traveled abroad was in 2018. Before that I always traveled 
              inside Brazil and South America. Part of that was due it's very expensive but 
              also because in Brazil we have many different landscapes like mountains and beaches, 
              also, the countryside is beautiful.
            </p>
          
            <p>In 2019 we decided to move to the Netherlands, where my husband was already working 
              remotely as a software developer. The actual move happened during the lockdowns
              in 2020. Luckily we had a small support network of friends who helped during this 
              period.
            </p>

            <p>Besides work / tech stuffs I like to listen to music and podcasts, spend time outside walking, 
              biking or swimming. Cooking is also a thing that I like a lot, which I learned with 
              my grandmother. I appreciate art and try to do some drawings and paitings.
              Also, I like to read about psychology, human behavior, politics, literature and spirituality. 
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default More;
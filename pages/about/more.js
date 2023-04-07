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
            <p>So, let's try to put myself into words and only get a small fraction of the totality 🙃</p>
            <p>Born and raised in <Link href="https://en.wikipedia.org/wiki/Campinas"><a>Campinas</a></Link>, Brazil. 
              It's a big city, close to the capital São Paulo. 
              When as a kid, the peak of hapiness was our anual family  trip to the beach, 
              usually on São Paulo's coast like Ubatuba, Guarujá or Santos.
            </p>

            <p>When someone asked me what I wanted to be when I grew up 
              I would answer something different each time. 
              The answers ranged from being a cook to joining the merchant marine !?
              (I have no idea where it came from). The truth is, I never really knew what to do, 
              until I tried different courses like law, social sciences, and then I was sure 
              I didn't want to. When I started to get more interested and learn about how 
              computers work, how to write programs, then I decided to graduate in System Development.
              After some time working as frontend developer, I felt a desire to get more involved with the 
              creative and artistic side, so I started to study drawings and paintings and I intend to study 
              more and more. I still don't know where this is going to take me, but I have some 
              projects in mind that I would like to put into practice in the future.</p>
          
            <p>In 2019 me and my husband decided to move to the Netherlands, where he was already working 
              remotely as a software developer. The actual move happened during the lockdowns
              in 2020. Luckily we had a small support network of friends who have been helping during this intense,
              full of highs and downs period. 💛
            </p>

            <p>Besides work / tech stuffs I like to listen to music and podcasts, spend time outside walking, 
              biking or swimming. Cooking is also a thing that I like a lot, which I learned with 
              my grandmother. I appreciate art and try to do some drawings and paitings.
              Also, I like to read about psychology, human behavior, politics, science, literature and spirituality. 
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default More;
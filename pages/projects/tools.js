import Head from 'next/head';
import PxRemConverter from '../../components/PxRemConverter';
import JsonViewer from '../../components/JsonViewer';
import styles from '../../styles/Tools.module.css'
import Link from 'next/link';

const Tools = () => {

  return (
    <>
      <Head>
        <title>iza.m.g.lima | Handy Tools</title>
      </Head>
      <main className="main">
        <section className={styles.tools}>
          <h1>Handy Tools</h1>
          <div className={styles.container}>
            <div className={styles.tool}>
              <div className={`${styles.tool__block}`}>
                <PxRemConverter />
              </div>
              <div className={`${styles.tool__block}`}>
                <p className={`${styles.title}`}>explanation</p>
                <p>
                  The conversion is based on the default HTML root tag font-size of 16 pixels. 
                  All elements that has this type of unit declared will be scalabe.
                  The conversion works both directions, example: <br />
                  <code>1px = 0.0625rem</code> and in the other direction,  <br /> <code>1rem = 16px</code>. <br />
                  <u>EM vs. REM: The differences</u> <br/>
                  Sizes always depend on the font-size of the root element <code>(rem)</code> or the element 
                  itself <code>(em)</code> <Link href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" target="_blank"><a><u>learn more</u></a></Link>
                </p>
              </div>
            </div>
            <div className={styles.tool}>
              <JsonViewer />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Tools;
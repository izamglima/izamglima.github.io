import Head from 'next/head';
import PxRemConverter from '../../components/PxRemConverter';
import JsonViewer from '../../components/JsonViewer';
import styles from '../../styles/Tools.module.css'

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
              <PxRemConverter />
            </div>
            <div className={styles.tool}>
              <p className={`${["text-center"]} ${styles.title}`}>explanation</p>
              <p>Converting pixels to REM units <br /> 
                The conversion is based on the default HTML root tag font-size of 16 pixels <br /> 
                All elements that has this type of unid declared will be scalabe <br /> 
                The conversion works both directions, example:<br /> 
                1px = 0.0625rem and, in the other direction, 1rem = 16px. <br /> 
                EM vs. REM: The differences<br /> 
              </p>
            </div>
          </div> 
          <div>
              <JsonViewer />
            </div>
        </section>
      </main>
    </>
  )
}

export default Tools;
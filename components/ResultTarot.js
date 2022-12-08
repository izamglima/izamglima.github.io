import styles from '../styles/Tarot.module.css'
import Card from './Card';

const ResultTarot = ({handleClick, tarotCard}) => {
  const path = 'https://izamglima.github.io/tarot-cards/'
  return (
    <div className={styles.result}> 
        <div className={styles['result-container']}>
          <span className={styles['icon-cross']} onClick={event => handleClick(false)}>&#10006;</span>
          <h1>{tarotCard.title}</h1>
          <p className='text-center'>{tarotCard.path}</p>
          <div className={styles['tarot-card-container']}>
            <div className={styles['tarot-card-body']}>
              <div className={styles['tarot-card-front']}>
                <Card/>
              </div>
              <div className={styles['tarot-card-back']}>
                <div style={{ background: "center / contain url('" + `${path}` + `${tarotCard.id}` + ".png') no-repeat"}}></div>
              </div>
            </div>
          </div>

          <div className={styles['result-infos']}>
            <h3>Resume</h3>
            <p>{tarotCard.resume}</p>
            <h3>In depth</h3>
            <p>{tarotCard.content}</p>
            <details>
              <summary>Reflexion</summary>
              {tarotCard.reflexion}
            </details>
          </div>
        </div>
    </div>
  )
}

export default ResultTarot;
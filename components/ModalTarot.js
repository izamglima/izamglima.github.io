import styles from '../styles/Tarot.module.css'

const ModalTarot = ({handleClick, tarotCard}) => {

  return (
    <div className={styles.modal}> 
        <div>
          <span className={styles['icon-cross']} onClick={event => handleClick(false)}>&#10006;</span>
          <h1>Carta</h1>
          {tarotCard}
        </div>
    </div>
  )
}

export default ModalTarot;
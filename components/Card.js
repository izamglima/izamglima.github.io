import styles from './../styles/Tarot.module.css'

const Card = () => {
  return (
    <div className={`${styles['card-border']}`}>
      <div className={`${styles['card-body']}`}></div>
    </div>
  )
}

export default Card;
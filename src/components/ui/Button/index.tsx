import styles from './styles.module.scss';

export function Button(){
  return(
    <button className={styles.button}>
      <a className={styles.buttonText}>Nome do botao</a>
    </button>
  )
}
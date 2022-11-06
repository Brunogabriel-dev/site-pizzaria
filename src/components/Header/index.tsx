import styles from './styles.module.scss'
import Link from 'next/link'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
        <img src="/logo.svg" width={190} height={60} />
        </Link>

        <nav>
          <Link href="/category">
          <a>Categoria</a>
          </Link>
        </nav>



      </div>
    </header>
  )
}
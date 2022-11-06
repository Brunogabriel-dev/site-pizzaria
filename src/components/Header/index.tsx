import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
        <img src="/logo.svg" width={190} height={60} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
          <a>Categoria</a>
          </Link>

          <Link href="/product">
            <a>Cardapio</a>
          </Link>

          <button>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>

      </div>
    </header>
  )
}
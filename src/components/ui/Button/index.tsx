import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps){
  return(
    <button 
    className={styles.button}
    disabled={loading}
    {...rest}
    >
      <a className={styles.buttonText}>
        {children}
      </a>
    </button>
  )
}
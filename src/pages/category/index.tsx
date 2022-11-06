import Head from "next/head"
import { Header } from '../../components/Header'
import styles from './styles.module.scss'

export default function Category(){
  return(
    <>
    <Head>
    <title>Nova categoria - Sujeito Pizzaria</title>
    </Head>
    <div>
      <Header/>

      <main className={styles.container}>
        <h1>Cadastrar categorias</h1>

        <form>
          <input 
          type="text"
          placeholder="Digite o nome da categoria"
          className={styles.input}
           />
        </form>

      </main>
    </div>
    </>
  )
}
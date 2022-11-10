import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import styles from './styles.module.scss';

import { Header } from '../../components/Header'

export default function Dashbord(){
  return(
    <>
    <Head>
      <title>Painel - Sujeito Pizzaria</title>
    </Head>
    <div>
      <Header/>

      <main className={styles.container}>

      </main>
 
    </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})
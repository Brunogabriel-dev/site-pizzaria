import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'

export default function Dashbord(){
  return(
    <>
    <Head>
      <title>Painel - Sujeito Pizzaria</title>
    </Head>
    <div>

      <h1>Painel</h1>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})
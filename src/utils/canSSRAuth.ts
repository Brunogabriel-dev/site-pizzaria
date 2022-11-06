import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies, destroyCookie } from 'nookies'


// funcao para paginas que só users logados podem ter acesso.
export function canSSRAuth<p>(fn: GetServerSideProps<p>){
  
}
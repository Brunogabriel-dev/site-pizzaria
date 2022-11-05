import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies } from 'nookies'

//funcao para paginas que só pode ser acessadas por visitantes
export function canSSRGuest() {
  
}
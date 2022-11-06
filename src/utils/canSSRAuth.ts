import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies, destroyCookie } from 'nookies'


// funcao para paginas que só users logados podem ter acesso.
export function canSSRAuth<p>(fn: GetServerSideProps<p>){
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<p>> => {
    const cookies = parseCookies(ctx);

    const token = cookies['@nextauth.token'];

    if(!token){
      return{
        redirect:{
          destination: '/',
          permanent: false,
        }
      }
    }

    

  }
}
import { useState } from 'react'
import Head from "next/head";
import styles from './styles.module.scss';
import { Header } from '../../components/Header'

import { canSSRAuth } from '../../utils/canSSRAuth'

import { FiUpload } from 'react-icons/fi'


export default function Product(){


  const [avatarUrl, setAvatarUrl] = useState('');
  const [imageAvatar, setImageAvatar] = useState(null);


  return(
    <>
    <Head>
      <title> Novo produto - Sujeito Pizzaria</title>
    </Head>
    <div>
      <Header/>

      <main className={styles.container}>
        <h1>Novo produto</h1>

        <form className={styles.form}>

          <label className={styles.labelAvatar}>
            <span>
              <FiUpload size={25} color="#fff" />
            </span>

            <input type="file" accept="image/png, image/jpeg"/>

            <img
             src={avatarUrl} 
             alt="Foto do produto"
             width={250}
             height={250} 
            />


          </label>


          <select>
            <option>
              Bebida
            </option>
            <option>
              Pizzas
            </option>
          </select>

          <input 
          type="text"
          placeholder="Digite o nome do produto"
          className={styles.input}
           />

          <input 
          type="text"
          placeholder="Preço do produto"
          className={styles.input}
          />

          <textarea
            placeholder="Descreva seu produto..."
            className={styles.input}
          />

          <button className={styles.buttonAdd} type="submit">
            Cadastrar
          </button>

        </form>

      </main>
      
    </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return{
    props: {}
  }
})
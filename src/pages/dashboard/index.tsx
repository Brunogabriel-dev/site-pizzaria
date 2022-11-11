import { useState } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import styles from './styles.module.scss'

import { Header } from '../../components/Header'
import { FiRefreshCcw } from 'react-icons/fi'

import { setupAPIClient } from '../../services/api'
import Modal from 'react-modal';

type OrderProps = {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null;
}

interface HomeProps{
  orders: OrderProps[];
}

type OrderItemProps = {
  id: string;
  amount: number;
}

export default function Dashbord({ orders }: HomeProps){

  const [orderList, setOrderList] = useState(orders || [])

  const [modalItem, setModalItem] = useState()
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModalView(id: string){
    alert("ID CLICADO " + id)
  }

  Modal.setAppElement('#__next')

  return(
    <>
    <Head>
      <title>Painel - Sujeito Pizzaria</title>
    </Head>
    <div>
      <Header/>

      <main className={styles.container}>

        <div className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>
          <button>
            <FiRefreshCcw size={25} color="#3fffa3"/>
          </button>
        </div>

        <article className={styles.listOreders}>

          {orderList.map(item => (
            <section key={item.id} className={styles.orderItem}>
              <button onClick={ () => handleOpenModalView(item. id) }>
                <div className={styles.tag}></div>
                <span>Mesa {item.table}</span>
              </button>
           </section>

          ))}

        </article>

      </main>
 
    </div>
    </>
  )
}


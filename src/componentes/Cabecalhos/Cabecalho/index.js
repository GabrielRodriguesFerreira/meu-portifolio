import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho() {
  return (
    <header className='header'>
      <button className={styles.button}>
        <a className={styles.text} href='/'>
          Ínicio
        </a>
      </button>
      <button className={styles.button__projetos}>
        <a className={styles.text} href='/Projetos'>
          Projetos
        </a>
      </button>
      <button className={styles.button__certificados}>
        <a className={styles.text} href='/Certificados'>
          Certificados
        </a>
      </button>
      <button className={styles.button__sobremim}>
        <a className={styles.text} href='/SobreMim'>
          Sobre Mim
        </a>
      </button>
    </header>
  )
}

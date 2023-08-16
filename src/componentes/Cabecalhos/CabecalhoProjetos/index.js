import React from 'react'
import styles from './Cabecalho.module.css'
import { animate, inView, motion, transform } from 'framer-motion'

export default function CabecalhoProjeto() {
  const list = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerDirection: -1,
        duration: 2
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <>
      <motion.div variants={list} initial="hidden" animate="show">
        <header className={styles.header}>
          <button className={styles.button}>
            <a className={styles.text} href='/'>
              Início
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
        </header >
      </motion.div>
    </>
  )
}

import React from 'react'
import style from './minhaFoto.module.css'
import { motion } from 'framer-motion'
import minhaFoto from '../../../assets/Minha foto/minha_foto-1.png'

export default function MinhaFoto() {
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
        <div className={style.foto}>
            <motion.div variants={list} initial="hidden" animate="show">
                <img className={style.minhaFoto} src={minhaFoto} />
            </motion.div>
            <motion.div variants={list} initial="hidden" animate="show">
                <h1 className={style.textos}>Certificados</h1>
                <h2 className={style.textos__h2}>
                Bem-vindo à minha página de certificados! 
                Aqui você encontrará uma coleção dos certificados que obtive ao longo da minha jornada profissional. 
                Cada certificado representa habilidades e conhecimentos adquiridos em diferentes áreas. 
                Fique à vontade para explorar e conhecer mais sobre minha trajetória e qualificações. 
                Espero que essa visualização dos meus certificados demonstre minha dedicação e compromisso com o aprendizado contínuo.
                </h2>
            </motion.div>
        </div>
    )
}

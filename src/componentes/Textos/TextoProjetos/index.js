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
                <h1 className={style.textos}>Projetos</h1>
                <h2 className={style.textos__h2}>
                Bem Vindo a Página de Projetos,
                    aqui é onde você encontra uma coleção dos meus projetos em HTML, JavaScript, Java, React e CSS.
                    Aqui você poderá explorar exemplos práticos e aplicativos desenvolvidos nessas tecnologias.
                    Desde aplicações web em HTML, estilos estilizados em CSS até a lógica de programação implementada em JavaScript.
                    Além disso, também apresento projetos desenvolvidos em Java e React.
                    Sinta-se à vontade para navegar pelos projetos e explorar as diferentes áreas do desenvolvimento de software.
                </h2>
            </motion.div>
        </div>
    )
}

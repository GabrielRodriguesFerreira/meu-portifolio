import React, {useEffect, useRef} from 'react'
import style from './minhaFoto.module.css'
import { motion } from 'framer-motion'
import minhaFoto from '../../../assets/Minha foto/minha_foto-1.png'
import ScrollReveal from 'scrollreveal'

export default function MinhaFoto() {

    const elementoRef = useRef(null);

    useEffect(() => {
        const revelar = ScrollReveal()
        revelar.reveal(elementoRef.current,{})
    }, [])

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
            <motion.div animate={{x: 10}}>
                <h1 className={style.textos}>Meu portifólio</h1>
                <h2 className={style.textos__h2}>
                    Meu nome é Gabriel Rodrigues e é um prazer ter você aqui.
                    Neste espaço, compartilho minhas realizações, habilidades e experiências,
                    apresentando um pouco do meu trabalho e trajetória profissional.
                </h2>
            </motion.div>
        </div>
    )
}

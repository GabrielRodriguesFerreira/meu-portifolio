import React from 'react'
import style from './paginaProjetos.module.css'

export default function PaginaProjetos() {
    return (
        <div className={style.icons}>
            <a href='https://cursos.alura.com.br/user/gabriel-ferreira17' target='_blank'>
                <img src={imagem8} />
            </a>
            <a className={style.git} href='https://github.com/GabrielRodriguesFerreira' target='_blank'>
                <img src={imagem9} />
            </a>
            <a className={style.linkedin} href='https://www.linkedin.com/in/gabriel-r-88b786204' target='_blank'>
                <img src={imagem10} />
            </a>
        </div>
    )
}

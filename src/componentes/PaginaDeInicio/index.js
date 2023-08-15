import React from 'react'
import style from './paginaDeInicio.module.css'
import image1 from './FotosPaginaInicio/image-1.png'
import image2 from './FotosPaginaInicio/image-2.png'
import image3 from './FotosPaginaInicio/image-3.png'
import imagem8 from '../Certificados/image-8.png'
import imagem9 from '../Certificados/image-9.png'
import imagem10 from '../Certificados/image-10.png'
import { NavLink } from 'react-router-dom';

export default function PaginaDeInicio() {
    return (
        <>
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

            <div className={style.imagem_grid}>
                <div className={style.imagem_item}>
                    <img src={image1} className={style.img} />
                    <div className={style.image_content}>
                        <button className={style.button__proj}>
                            <a className={style.text} href='/Projetos'>
                                Projetos
                            </a>
                        </button>
                    </div>
                </div>
                <div className={style.imagem_item}>
                    <img src={image2} className={style.img} />
                    <div className={style.image_content}>
                        <button className={style.button}>
                            <a className={style.text} href='/Certificados'>
                                Certificados
                            </a>
                        </button>
                    </div>
                </div>
                <div className={style.imagem_item}>
                    <img src={image3} className={style.img} />
                    <div className={style.image_content}>
                        <button className={style.button}>
                            <a className={style.text} href='/SobreMim'>
                                Sobre Mim
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import style from './projetos.module.css'
import imagem1 from './image-1.png'
import imagem2 from './image-2.png'
import imagem9 from './image-3.png'
import imagem4 from './image-4.png'
import imagem5 from './image-5.png'
import imagem6 from './image-6.png'
import imagem11 from './image-11.png'

import imagem7 from './image-7.png'
import imagem10 from './image-10.png'
import imagem8 from './image-8.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ProjetosCarrossel() {
  const imagens = [
    { id: '1', image: imagem6, link: 'https://github.com/GabrielRodriguesFerreira/Chat-Bot-IR' },
    { id: '2', image: imagem1, link: 'https://github.com/GabrielRodriguesFerreira/Alura-Site' },
    { id: '3', image: imagem5, link: 'https://github.com/GabrielRodriguesFerreira/Site-Singapura' },
    { id: '4', image: imagem9, link: 'https://github.com/GabrielRodriguesFerreira/Advinhe-o-numero' },
    { id: '5', image: imagem11, link: 'https://github.com/GabrielRodriguesFerreira/Projetos-Trabalho-Java' },
    { id: '6', image: imagem2, link: 'https://github.com/GabrielRodriguesFerreira/Automatizador-de-Testes' },
    { id: '7', image: imagem4, link: 'https://github.com/GabrielRodriguesFerreira/React' },
      
  ]

  const handleButtonClick = (link) => {
    window.open(link);
  };

  return (
    <div className={style.container}>
      <h1 className={style.texto}>Projetos</h1>
      <div className={style.icons}>
        <a className={style.alura} href='https://cursos.alura.com.br/user/gabriel-ferreira17' target='_blank'>
          <img src={imagem10} />
        </a>
        <a className={style.git} href='https://github.com/GabrielRodriguesFerreira' target='_blank'>
          <img src={imagem8} />
        </a>
        <a className={style.linkedin} href='https://www.linkedin.com/in/gabriel-r-88b786204' target='_blank'>
          <img src={imagem7} />
        </a>
      </div>

      <Swiper
        spaceBetween={-600}
        slidesPerView={3}
        style={{
          "position": "absolute",
          "top": "60%",
          "width": "100%",
          "height": "40%",
          "justifyContent": "center",
        }}
      >

        {imagens.map((fotos) => (
          <SwiperSlide key={fotos.id}>
            <img
              src={fotos.image}
              className={style.slide_itens}
              style={{
                "width": "386px",
                "height": "300px",
              }} />
            {fotos.link && (
              <button className={style.buttonproj} onClick={() => handleButtonClick(fotos.link)}>
                Ver Mais
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

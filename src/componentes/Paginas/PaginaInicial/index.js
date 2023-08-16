import React from 'react'
import Linhas from '../../Svgs/Linhas'
import TextoPaginaInicial from '../../Textos/TextoPaginaInicial'
import BackgroundPaginaInicial from '../../Backgrounds/BackgroundPaginaInicial'
import PaginaDeInicio from '../../PaginaDeInicio'
import './PaginaInicial.module.css'
import PaginaScrollInicial from 'componentes/PaginaScroll'

export default function PaginaInicial() {
  return (
    < >
      <Linhas />
      <PaginaScrollInicial />
      <TextoPaginaInicial />
      <BackgroundPaginaInicial />
    </>
  )
}

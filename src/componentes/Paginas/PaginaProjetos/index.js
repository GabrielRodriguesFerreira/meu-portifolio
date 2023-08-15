import React from 'react'
import './paginaProjetos.css'
import Linhas from '../../Svgs/Linhas'
import TextoProjetos from '../../Textos/TextoProjetos'
import BackgroundPaginaProjetos from '../../Backgrounds/BackgroundPaginaProjetos'
import ProjetosCarrossel from '../../Projetos'
import CabecalhoProjeto from 'componentes/Cabecalhos/CabecalhoProjetos'

export default function Projetos() {
  return (
    <>
      <CabecalhoProjeto/>
      <Linhas />
      <TextoProjetos /> 
      <ProjetosCarrossel/>
      <BackgroundPaginaProjetos/>
    </>
  )
}

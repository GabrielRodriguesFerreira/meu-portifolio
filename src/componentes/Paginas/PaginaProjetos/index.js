import React from 'react'
import './paginaProjetos.css'
import Linhas from '../../Svgs/Linhas'
import TextoProjetos from '../../Textos/TextoProjetos'
import BackgroundPaginaProjetos from '../../Backgrounds/BackgroundPaginaProjetos'
import CabecalhoProjetos from '../../Cabecalhos/CabecalhoProjetos'
import ProjetosCarrossel from '../../Projetos'

export default function Projetos() {
  return (
    <>
      <CabecalhoProjetos/>
      <Linhas />
      <TextoProjetos /> 
      <ProjetosCarrossel/>
      <BackgroundPaginaProjetos/>
    </>
  )
}

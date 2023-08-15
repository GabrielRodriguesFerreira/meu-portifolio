import React from 'react'
import './paginaCertificados.css'
import Background from '../../Backgrounds/Backgound'
import Cabecalho from '../../Cabecalhos/Cabecalho'
import Linhas from '../../Svgs/Linhas'
import TextoCertificados from '../../Textos/TextoCertificados'
import Certificados from '../../Certificados'

export default function PaginaCertificados() {
  return (
    <> 
      <Cabecalho /> 
      <Linhas /> 
      <TextoCertificados /> 
      <Certificados /> 
      <Background /> 
      </>
    )
}
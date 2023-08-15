import React from 'react'
import './paginaCertificados.css'
import Cabecalho from '../../Cabecalhos/Cabecalho'
import Linhas from '../../Svgs/Linhas'
import TextoCertificados from '../../Textos/TextoCertificados'
import Certificados from '../../Certificados'
import BackgroundCert from '../../Backgrounds/Backgound'

export default function PaginaCertificados() {
  return (
    <> 
      <Cabecalho/>
      <Linhas /> 
      <TextoCertificados /> 
      <Certificados /> 
      <BackgroundCert/>
    </>
    )
}
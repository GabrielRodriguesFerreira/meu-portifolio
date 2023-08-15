import React from 'react'
import './paginaSobreMim.css'
import PaginaSobreMim from 'componentes/PaginaSobreMim'
import Cabecalho from 'componentes/Cabecalhos/Cabecalho'
import BackgroundPaginaInicial from 'componentes/Backgrounds/BackgroundPaginaInicial'
import BackgroundCert from 'componentes/Backgrounds/Backgound'

export default function SobreMim() {
  return (
    <>
      <Cabecalho />
      <PaginaSobreMim/>
      <BackgroundCert/>
    </>
  )
}

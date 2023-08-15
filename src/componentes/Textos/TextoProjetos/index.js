import React from 'react'
import './minhaFoto.css'
import minhaFoto from '../../../assets/Minha foto/minha_foto-1.png'

export default function MinhaFoto() {
    return (
        <div className='foto'>
            <img className='minhaFoto' src={minhaFoto} />
            <h1 className='textos'>Projetos</h1>
            <h2 className='texto__certificado'>
            Bem Vindo a Página de Projetos, 
            aqui é onde você encontra uma coleção dos meus projetos em HTML, JavaScript, Java, React e CSS. 
            Aqui você poderá explorar exemplos práticos e aplicativos desenvolvidos nessas tecnologias. 
            Desde aplicações web em HTML, estilos estilizados em CSS até a lógica de programação implementada em JavaScript. 
            Além disso, também apresento projetos desenvolvidos em Java e React. 
            Sinta-se à vontade para navegar pelos projetos e explorar as diferentes áreas do desenvolvimento de software.
            </h2>
        </div>
    )
}

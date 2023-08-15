import React from 'react'
import './minhaFoto.module.css'
import minhaFoto from '../../../assets/Minha foto/minha_foto-1.png'

export default function MinhaFoto() {
    return (
        <div className='foto'>
            <img className='minhaFoto' src={minhaFoto} />
            <h1 className='textos'>Certificados</h1>
            <h2 className='texto__certificado'>
                Bem-vindo à minha página de certificados! 
                Aqui você encontrará uma coleção dos certificados que obtive ao longo da minha jornada profissional. 
                Cada certificado representa habilidades e conhecimentos adquiridos em diferentes áreas. 
                Fique à vontade para explorar e conhecer mais sobre minha trajetória e qualificações. 
                Espero que essa visualização dos meus certificados demonstre minha dedicação e compromisso com o aprendizado contínuo.
            </h2>
        </div>
    )
}

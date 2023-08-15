import React from 'react'
import './minhaFoto.css'
import minhaFoto from '../../../assets/Minha foto/minha_foto-1.png'

export default function MinhaFoto() {
    return (
        <div className='foto'>
            <img className='minhaFoto' src={minhaFoto} />
            <h1 className='textos'>Meu portifólio</h1>
            <h2 className='textos__h2'>
                Meu nome é Gabriel Rodrigues e é um prazer ter você aqui.
                Neste espaço, compartilho minhas realizações, habilidades e experiências,
                apresentando um pouco do meu trabalho e trajetória profissional.</h2>
        </div>
    )
}

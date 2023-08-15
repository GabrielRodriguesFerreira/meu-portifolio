import React from 'react'
import style from './linhas.module.css'

export default function Linhas() {
    return (
        <div className={style.linha}>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                className={style.linhasvg}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M1919.96 1.5H-0.0351562V0.5H1919.96V1.5Z"
                    fill="black"
                />
            </svg>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                className={style.linhasvg2}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M1919.96 1.5H-0.0351562V0.5H1919.96V1.5Z"
                    fill="black"
                />
            </svg>
        </div>
    )
}
import React from 'react'

export default function Linhas() {
    return (
        <div className='linha'>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="1"
                style={{fill: '#000', position: 'absolute', top: '110px'}}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M1919.96 1.5H-0.0351562V0.5H1919.96V1.5Z"
                    fill="black"
                />
            </svg>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="1"
                style={{fill: '#000', position: 'absolute', top: '450px'}}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M1919.96 1.5H-0.0351562V0.5H1919.96V1.5Z"
                    fill="black"
                />
            </svg>
        </div>
    )
}
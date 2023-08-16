import React, { useEffect, useState } from 'react';
import PaginaDeInicio from 'componentes/PaginaDeInicio';

export default function PaginaScrollInicial() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div>{scrolled && <PaginaDeInicio />}</div>;
}

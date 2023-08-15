import PaginaInicial from "./componentes/Paginas/PaginaInicial";
import PaginaProjetos from "./componentes/Paginas/PaginaProjetos";
import PaginaCertificados from "./componentes/Paginas/PaginaCertificados";
import PaginaSobreMim from "./componentes/Paginas/PaginaSobreMim";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/Certificados" element={<PaginaCertificados />} />
                <Route path="/Projetos" element={<PaginaProjetos />} />
                <Route path="/SobreMim" element={<PaginaSobreMim />} />
            </Routes>
        </Router>
    )
}
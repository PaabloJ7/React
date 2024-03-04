import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';

const Default = () => {
    return (
        <div className="Default-container">
            <h1 className="Default-title">MobileTech Haven</h1>
            <h2 className="Default-subtitle">Descubre la Última Tecnología en Smartphones</h2>

            <div className="button-container">
                <Link to="/login" className="button">Iniciar Sesión</Link>
                <Link to="/register" className="button">Registrarse</Link>
            </div>
        </div>
    );
};

export default Default;
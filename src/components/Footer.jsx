
import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="/home"><img src="logopagina.png" alt="" className="img-fluid logo-footer" /></a>
                        </div>
                        <div className="col-md-3">
                            <div className="useful-link">
                                <h2>Link utiles</h2>
                                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                                <div className="use-links">
                                    <li><a href="/home"><i className="fa-solid fa-angles-right"></i> Home</a></li>
                                    <li><a href="/about"><i className="fa-solid fa-angles-right"></i> Sobre Nosotros</a></li>
                                    <li><a href="/about"><i className="fa-solid fa-angles-right"></i> Contacto</a></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-links">
                                <h2>Siguenos</h2>
                                
                                <div className="social-icons">
                                    <li><a href=""><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                                    <li><a href=""><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                                    <li><a href=""><i className="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="address">
                                <h2>Dirección</h2>
                                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                                <div className="address-links">
                                    <li className="address1"><i className="fa-solid fa-location-dot"></i> C. Moreno Mendoza, 4, 11408 Jerez de la Frontera, Cádiz</li>
                                    <li><a href=""><i className="fa-solid fa-phone"></i> +34 668559911</a></li>
                                    <li><a href=""><i className="fa-solid fa-envelope"></i> pablodelasierra7@gmail.com</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    );
};

export default Footer;

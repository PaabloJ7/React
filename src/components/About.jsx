import React from 'react';

import ImageCarousel from './ImageCarousel';

const About = () => {
    return (
        <div>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="display-4 text-center mb-4">Acerca de</h1>
                        <p className="lead text-center">
                        ¡Te damos la más cordial bienvenida a nuestra sección "Acerca de"! Aquí te brindamos información detallada acerca de quiénes somos y nuestra dedicación en el mundo de los smartphones.
                        </p>
                        <p>
                        En nuestra tienda, nos enorgullece ofrecerte una experiencia única en la adquisición de dispositivos móviles. Nos destacamos por nuestra pasión por la tecnología y nuestro compromiso inquebrantable de proporcionar productos de alta calidad que satisfacen tus necesidades y superan tus expectativas.
                        </p>
                        <p>
                        Nuestra misión va más allá de ser simplemente una tienda; aspiramos a ser tu aliado confiable en la búsqueda del dispositivo perfecto. Nos esforzamos por ofrecer un servicio al cliente excepcional, asesorándote para que tomes la mejor decisión según tus necesidades y preferencias.
                        </p>
                    </div>
                </div>
            </div>
            <ImageCarousel />
        </div>
    );
};

export default About;
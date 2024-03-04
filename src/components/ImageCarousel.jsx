import React, { useState, useEffect } from 'react';

// Componente funcional para el Carrusel de Imágenes
const ImageCarousel = () => {
  // Estado para gestionar la posición actual del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efecto para cambiar de diapositiva cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiando la diapositiva actual de manera cíclica
      setCurrentSlide(current => (current + 1) % 5);
    }, 5000);

    // Limpiando el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel-container">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 1s ease-in-out' }}>
        <div className="slide">
          <img src="images/24ultra-removebg-preview.png" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="images/iphone11-removebg-preview.png" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="images/pixel6a-removebg-preview.png" alt="Slide 3" />
        </div>
        <div className="slide">
          <img src="images/pixelxl-removebg-preview.png" alt="Slide 4" />
        </div>
        <div className="slide">
          <img src="images/s23-removebg-preview.png" alt="Slide 5" />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
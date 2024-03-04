
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './index.css'; 
import Footer from './Footer';

// Componente funcional para los detalles de un producto
const ProductDetails = ({ onAddToCart }) => {
  // Obteniendo el parámetro 'id' de la URL usando useParams
  const { id } = useParams();
  // Hook de navegación
  const navigate = useNavigate();
  // Estados para los detalles del producto, estado de carga y manejo de errores
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para cargar los detalles del producto al montar el componente
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Realizando una solicitud para obtener los detalles del producto por ID
        const response = await fetch(`http://localhost:3001/products/${id}`);
        
        // Verificando si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        // Parseando la respuesta como formato JSON
        const data = await response.json();
        console.log('Detalles del producto:', data); // Agregado para depuración
        setProductDetails(data);
      } catch (error) {
        // Manejo de errores en caso de problemas con la solicitud
        console.error('Error fetching product details:', error);
        setError('Error al cargar los detalles del producto. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        // Estableciendo el estado de carga en falso después de completar la solicitud
        setLoading(false);
      }
    };

    // Llamando a la función para cargar los detalles del producto
    fetchProductDetails();
  }, [id]);

  // Renderización condicional según el estado de carga, errores y detalles del producto
  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!productDetails) {
    return <p>No se encontraron detalles del producto.</p>;
  }

  return (
    <div>
      <div className="product-details-container">
        <div className="product-image-container">
          <img src={`/images/${productDetails.image}`} alt={productDetails.name} className="product-image" />
        </div>
        <div className="product-details-content">
          <h2>{productDetails.name}</h2>
          <p className="product-description">{productDetails.description}</p>
          <p className="product-price">Precio: €{productDetails.price}</p>
          {/* Modifica el enlace para añadir al carrito directamente */}
          <button onClick={() => { onAddToCart(productDetails); navigate('/cart'); }}>Añadir al carrito</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails
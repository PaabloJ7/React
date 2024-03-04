// Importando React y otros elementos según sea necesario
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importando el componente Link para la navegación
import './index.css'; // Importando el archivo CSS aquí

// Componente funcional para la lista de productos
const ProductList = () => {
    // Estados para almacenar la lista de productos
    const [products, setProducts] = useState([]);
    // Número de productos a mostrar y longitud máxima de descripción
    const productsToShow = 4;
    const maxDescriptionLength = 60;

    // Efecto para cargar los productos al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Realizando una solicitud para obtener la lista de productos
                const response = await fetch('http://localhost:3001/products');
                const data = await response.json();
                // Actualizando el estado con los productos obtenidos
                setProducts(data);
            } catch (error) {
                // Manejo de errores en caso de problemas con la solicitud
                console.error('Error fetching data:', error);
            }
        };

        // Llamando a la función para cargar los productos
        fetchData();
    }, []);

    // Función para agrupar los productos por categoría
    const groupByCategory = () => {
        const groupedProducts = {};
        products.forEach(product => {
            if (!groupedProducts[product.category]) {
                groupedProducts[product.category] = [];
            }
            groupedProducts[product.category].push(product);
        });
        return groupedProducts;
    };

    // Función para truncar la descripción de un producto
    const truncateDescription = (description) => {
        if (description.length > maxDescriptionLength) {
            return description.slice(0, maxDescriptionLength) + '...';
        }
        return description;
    };

    // Obteniendo productos agrupados por categoría
    const groupedProducts = groupByCategory();


    return (
        <div className='Carta'>
            {Object.keys(groupedProducts).map(category => (
                <div key={category}>
                    <h2>{category}:</h2>
                    <div className="d-flex flex-wrap justify-content-start card-container">
                        {groupedProducts[category].slice(0, productsToShow).map(product => (
                            <Card key={product.id} bg="white" text="dark" className="mb-3 card">
                                <Card.Img variant="top" src={`/images/${product.image}`} />
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Body style={{ backgroundColor: '#2e2e2e' }} className="text-white card-body">
                                    <Card.Title>Precio: €{product.price}</Card.Title>
                                    <Card.Text>{truncateDescription(product.description)}</Card.Text>
                                    <Link to={`/product/${product.id}`}>
                                        <Button variant="light">Ver Detalles</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        ))}
                        {groupedProducts[category].length > productsToShow && (
                            <p className="text-muted">Y más...</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

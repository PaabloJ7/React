
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Componente funcional para el Carrito
const Cart = ({ cartItems, setCartItems }) => {
  // Estado para gestionar el estado de carga
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para la navegación

  // Efecto para establecer el estado de carga en falso cuando cambian los cartItems
  useEffect(() => {
    setLoading(false);
  }, [cartItems]);

  // Función para eliminar un ítem del carrito
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Función para calcular el total de precios de los productos en el carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Función para navegar a la página de inicio
  const goToHome = () => {
    navigate('/home');
  };

  // Estructura JSX para el componente Carrito
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {loading ? (
        <p>Cargando producto...</p>
      ) : (
        <div>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <table className="table table-borderless table-dark text-light">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Quitar</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>€{item.price}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">Total:</td>
  
                  <td className="bg-dark text-white p-3 h4">€{calculateTotal()}</td>
                </tr>
              </tfoot>
            </table>
          )}
          <button className="btn btn-primary" onClick={goToHome}>
            Seguir Comprando
          </button>
        </div>
      )}
    </div>
  );
};


export default Cart;

import React, { useState } from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Default from './components/Default';
import Register from './components/Register';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Notfound from './components/NotFound';
import About from './components/About';
import Home from './components/Home';


// Función principal del componente App
function App() {
  // Función para obtener el carrito almacenado en el almacenamiento local
  const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  // Estado para almacenar la información del usuario y el carrito
  const [user, setUser] = useState(() => {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
      cart: getStoredCart()
    };
  });

  // Hook de navegación
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión del usuario
  const handleLogin = (loggedInUser) => {
    setUser((prevUser) => {
      localStorage.setItem('userInfo', JSON.stringify(loggedInUser));
      return {
        ...prevUser,
        userInfo: loggedInUser
      };
    });
  };

  // Función para manejar el cierre de sesión del usuario
  const handleLogout = () => {
    setUser({
      userInfo: null,
      cart: []
    });
    navigate('/', { replace: true });
  };

  // Función para añadir productos al carrito
  const handleAddToCart = (product) => {
    setUser((prevUser) => {
      const updatedCart = [...prevUser.cart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...prevUser,
        cart: updatedCart
      };
    });
  };

  return (
    <div>
      <NavigationBar user={user.userInfo} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart cartItems={user.cart} setCartItems={(cart) => setUser({ ...user, cart })} />} />
      </Routes>
    </div>
  );
}

export default App;

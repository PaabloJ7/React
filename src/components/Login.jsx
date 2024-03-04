// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./index.css"; 

// Componente funcional para el formulario de inicio de sesión
const Login = ({ onLogin }) => {
  // Hook de navegación
  const navigate = useNavigate();
  // Estados para el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      // Validando que se ingresen nombre de usuario y contraseña
      if (!username || !password) {
        alert("Por favor, introduzca su nombre de usuario y contraseña.");
        return;
      }

      // Realizando una solicitud a la API para verificar las credenciales
      const response = await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
      const user = response.data[0];

      // Verificando si las credenciales son válidas
      if (user) {
        // Llamando a la función proporcionada para manejar el inicio de sesión exitoso
        onLogin(user);
        // Navegando al inicio después de iniciar sesión
        navigate('/home');
      } else {
        // Mostrando un mensaje de credenciales inválidas
        alert("Credenciales inválidas");
      }
    } catch (error) {
      // Manejo de errores en caso de problemas con la solicitud
      console.error("Error logging in:", error);
      alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };


  return (
    <div className="container">
      <div className="card login-card"> 
        <h2>Inicio de Sesión</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario:</label>
            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>Iniciar Sesión</button>
        </form>
        <div className="mt-3">
          <p className="text-center">¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

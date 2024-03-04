import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

// Componente funcional para el formulario de registro
  const Register = () => {
  const navigate = useNavigate();   // Hook de navegación
  // Estados para el nombre de usuario, contraseña y correo electrónico
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Función para manejar el envío del formulario de registro
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realizando una solicitud para registrar un nuevo usuario
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Verificando si la solicitud fue exitosa
      if (response.ok) {
        console.log('User registered successfully');
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card register-card">
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario:</label>
            <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrar</button>
        </form>
        <div className="mt-3">
          <p className="text-center">¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

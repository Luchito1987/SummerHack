import React, { useState } from 'react';
import { Typed } from 'react-typed'; // Import for typing animation
import './App.css';

const usuarios = [
  {
    usuario: 'usuario1',
    contraseña: 'contraseña1',
  },
  {
    usuario: 'usuario2',
    contraseña: 'contraseña2',
  },
  // ... more users (optional)
];

function App() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);

  const validarLogin = () => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.usuario === usuario && usuario.contraseña === contraseña
    );

    if (!usuarioEncontrado) {
      setError('Usuario o contraseña incorrectos');
      return;
    }

    // Handle successful login (e.g., redirect to homepage, display success message)
    console.log('Login exitoso!');
  };

  return (
    <div className='container'>
      <div className='login-box'>
        <img src='logo-facebook.png' alt='Logo Facebook' />

        {/* Dynamic title with typing animation */}
        <h1 className='titulo-dinamico'>
          <Typed
            strings={[`Hola, ${usuario}`]}
            typeSpeed={40}
            backSpeed={0} // Prevent backspace animation
            cursorChar='|' // Customize cursor character
          />
        </h1>

        <form onSubmit={validarLogin}>
          <input
            type='text'
            placeholder='Correo electrónico o número de teléfono'
            value={usuario}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
            required
          />
          <input
            type='password'
            placeholder='Contraseña'
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type='submit' onClick={validarLogin}>
            Entrar
          </button>
          <a href='#'>¿Olvidaste la contraseña?</a>
          <hr />
          <a href='#'>Crear cuenta nueva</a>
        </form>
      </div>
    </div>
  );
}

export default App;

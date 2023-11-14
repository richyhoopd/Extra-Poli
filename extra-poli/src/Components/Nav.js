import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/nav.css';

export default function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Obtener el estado de la sesión desde el localStorage
  const isLoggedIn = !!localStorage.getItem('usuario');

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const menuHamburguesa = (
    <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
    </div>
  );

  return (
    <div className='nav'>
      {isLoggedIn && menuHamburguesa}

      <div className={`menu-desplegable ${menuAbierto && isLoggedIn ? 'visible' : ''}`}>
        {isLoggedIn && (
          <>
            <Link to='/home' onClick={toggleMenu}>
              Inicio
            </Link>
            <Link to='/extras' onClick={toggleMenu}>
              Cursos
            </Link>
            <Link to='/perfil' onClick={toggleMenu}>
              Perfil
            </Link>
            <Link to='/logout' onClick={toggleMenu}>
              Cerrar Sesión
            </Link>
          </>
        )}
      </div>

      <p className='text-logo'>
        <Link to={isLoggedIn ? '/home' : '/'}>Extra Poli</Link>
      </p>
    </div>
  );
}

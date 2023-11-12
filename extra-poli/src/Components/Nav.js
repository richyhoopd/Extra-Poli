import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/nav.css';

export default function Nav() {
  // Obtener el estado de la sesión desde el localStorage
  const isLoggedIn = !!localStorage.getItem('usuario');

  // Determinar el destino del enlace
  const destino = isLoggedIn ? '/home' : '/';

  return (
    <div className='nav'>
      <p className='text-logo'>
        <Link to={destino}>Extra Poli</Link>
      </p>
    </div>
  );
}

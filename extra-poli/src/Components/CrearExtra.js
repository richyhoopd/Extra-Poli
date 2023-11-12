import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de importar axios

import '../Styles/Components/admin/crear.css';

export default function CrearExtra() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const { data } = await axios.get('http://localhost:4001/api/usuario');
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
      }
    };

    getUsuarios();
  }, []);

  const usuario = JSON.parse(localStorage.getItem('usuario'));

  return (
    <>
      {usuario && usuario.isAdmin && (
        <Link to={'admin/crear'} className='button--crear'>
          <span className='plus--sign'>+ Crear nuevo curso</span>
        </Link>
      )}
    </>
  );
}

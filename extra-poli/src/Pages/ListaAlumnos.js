import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import axios from 'axios';

export default function ListaAlumnos() {
  const claseId = useParams().id;
  const [usrClases, setUsrClases] = useState([]);

  useEffect(() => {
    const getUsrClases = async () => {
      try {
        const { data: usuariosIds } = await axios.get(`http://localhost:4001/api/usuario/alumnos/inscritos/${claseId}`);
        
        // Obtener datos individuales de cada usuario basado en sus IDs
        const usuariosPromesas = usuariosIds.map(async (userId) => {
          const { data: userData } = await axios.get(`http://localhost:4001/api/usuario/${userId}`);
          return userData;
        });

        // Esperar a que se completen todas las solicitudes para obtener los datos de los usuarios
        const usuariosData = await Promise.all(usuariosPromesas);
        setUsrClases(usuariosData);
      } catch (error) {
        console.error('Error al obtener las clases', error);
      }
    };

    getUsrClases();
  }, [claseId]);

  return (
    <div>
      <Nav />
      <center>
      <h1>Lista de Alumnos Inscritos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>SIIAU</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {usrClases.map((alumno) => (
            <tr key={alumno._id}>
              <td>{alumno._id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.siiau}</td>
              <td>{alumno.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
      <br/>
      <br/>
      <br/>
<center>
    <Link className='cucaracha' to={`/detalle/${claseId}`}>Volver a pagina anterior</Link>
</center>
     
    </div>
  );
}

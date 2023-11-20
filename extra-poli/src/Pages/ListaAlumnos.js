import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import axios from 'axios';
import * as XLSX from 'xlsx';

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

  const handleDownloadExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'alumnos-inscritos';

    const formattedData = usrClases.map((alumno) => ({
      ID: alumno._id,
      Nombre: alumno.nombre,
      SIIAU: alumno.siiau,
      Correo: alumno.correo,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const blob = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileName}${fileExtension}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <button onClick={handleDownloadExcel}>Descargar Excel</button>
      </center>
      <br />
      <br />
      <br />
      <center>
        <Link className='cucaracha' to={`/detalle/${claseId}`}>Volver a página anterior</Link>
      </center>
    </div>
  );
}

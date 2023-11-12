import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../Styles/admin/admin-buttons.css';
import Swal from "sweetalert2";
import axios from 'axios';

export default function AdminManagementButtons() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const [clases, setClases] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); // Obtén el id de la clase desde los parámetros de la URL

  useEffect(() => {
    const getClases = async () => {
      try {
        const { data } = await axios.get('http://localhost:4001/api/clase');
        setClases(data);
      } catch (error) {
        console.error('Error al obtener las clases', error.message);
      }
    };

    getClases();
  }, []); // Obtén la lista completa de clases al cargar el componente

  const eliminar = async () => {
    Swal.fire({
      title: 'Eliminar curso?',
      showDenyButton: true,
      confirmButtonText: 'No Borrar',
      denyButtonText: `Borrar`,
    }).then(async (result) => {
      if (result.isDenied) {
        try {
          await axios.delete(`http://localhost:4001/api/clase/${id}`);
          Swal.fire('Eliminado', 'El curso ha sido eliminado correctamente', 'success');
          // Redirige a la página de inicio u otra página después de eliminar
          navigate("/home");
        } catch (error) {
          console.error('Error al eliminar la clase', error.message);
        }
      }
    });
  };

  const editar = () => {
    // Redirige a la pantalla de edición con el id de la clase
    navigate(`/editar/${id}`);
  };

  return (
    <div>
      {/* <Link className="button--green">Ver alumnos inscritos</Link> */}
      <center>
      <button className="button--yellow" onClick={editar}>Editar información</button>
        </center>
      <Link className="button--red" onClick={eliminar}>Eliminar curso</Link>
      <br />
    </div>
  );
}

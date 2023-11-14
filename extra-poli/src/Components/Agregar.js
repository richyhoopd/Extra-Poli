import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../Styles/detalle.css';

export default function Agregar() {
 const usuario = JSON.parse(localStorage.getItem("usuario"));
 const navigate = useNavigate();
 const { id } = useParams();
 const [clase, setClase] = useState({});

 const inscribirseAlCurso = async () => {
    try {
      await axios.post(`http://localhost:4001/api/usuario/inscribir/${usuario._id}`, {
        claseId: id
      });
      
      navigate("/success");
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El usuario ya está inscrito en este curso.',
        });
      } else {
        console.error('Error al inscribirse al curso', error.message);
      }
    }
 };

 return (
    <div>
      <button
        className="cucaracha"
        type="button"
        value=""
        onClick={inscribirseAlCurso}
      >
        Inscribirme al extra
      </button>
    </div>
 );
}
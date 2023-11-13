import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../Styles/detalle.css';

export default function Agregar() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const navigate = useNavigate();
  const { id } = useParams();
  const [clase, setClase] = useState({});

  const inscribirseAlCurso = async () => {
    try {
      // Cambié la forma en que se envían los datos a la API
      await axios.post(`http://localhost:4001/api/usuario/inscribir/${usuario._id}`, {
        claseId: id
      });
      
      navigate("/success");
    } catch (error) {
      console.error('Error al inscribirse al curso', error.message);
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

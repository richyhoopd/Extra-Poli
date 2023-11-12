import React, { useEffect, useState } from "react";
import '../Styles/Components/curso-no-inscrito.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function CursoNoInscrito() {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    const getClases = async () => {
      try {
        const { data } = await axios.get('http://localhost:4001/api/clase');
        setClases(data);
      } catch (error) {
        console.error('Error al obtener las clases', error);
      }
    };

    getClases();
  }, []);
  return (
    <div className="widther">
      {clases.map((s) => (
      <div className="curso--noinscrito--container" >
      <Link to={`/detalle/${s._id}`} className="decorator" key={s._id}>
        <div className="txt--noinscrito">
          <p className="titulo--card--noinscrito">{s.nombre}</p>
          <p>{s.profesor}</p>
          <span>Aula: {s.aula} - {s.dia} {s.horario}</span>
        </div>
      </Link>
  </div>
    ))}
    </div>
    
  )
}

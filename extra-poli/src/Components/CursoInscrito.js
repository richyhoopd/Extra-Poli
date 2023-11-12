import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Components/curso-inscrito.css";
import img99 from '../Assets/soccer.png'

export default function CursoInscrito() {
  const { id } = useParams();
  const [cursosInscritos, setCursosInscritos] = useState([]);

  useEffect(() => {
    const fetchCursosInscritos = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/usuarios/${id}`);
        const usuario = response.data;
        setCursosInscritos(usuario.cursosInscritos);
      } catch (error) {
        console.error('Error al obtener cursos inscritos', error.message);
      }
    };

    fetchCursosInscritos();
  }, [id]);

  return (
    <div>
      {cursosInscritos.length > 0 ? (
        cursosInscritos.map((curso) => (
          <Link key={curso._id} to={`/detalle/${curso._id}`} className="curso--inscrito">
            <div className="txt">
              <p className="titulo--card">{curso.nombre}</p>
              <p>{curso.desc}</p>
              <span>Aula: {curso.aula} - {curso.dia} {curso.horario}</span>
            </div>
          </Link>
        ))
      ) : (
        <center>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <center><img src={img99} alt="asdasd"/></center>
          <br/>
          <br/>

        <p className="no--hay--cursos">No tienes cursos inscritos por el momento.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       
        <br/>
        <br/>
        <br/>
     

        </center>
      )}
    </div>
  );
}